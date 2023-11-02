import { useQuery } from "react-query";

import { Keychain, ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress, createViemClient, truncateAddress } from "@daohaus/utils";
import DAOsSuckAbi from "../abis/DAOsSuck.json";
import { parseAbiItem } from "viem";
import { TARGET_DAO } from "../targetDao";

type Reason = {
    tokenId: number | null | undefined;
    sender: `0x${string}` | undefined;
    content: string | null | undefined;
    };

const fetchReasons = async ({
  chainId,
  rpcs,
}: {
  chainId?: ValidNetwork;
  rpcs?: Keychain;
}) => {
  if (!chainId) {
    throw new Error("Missing Args");
  }
  const client = createViemClient({
    chainId,
    rpcs,
  });
  
  const logs = await client.getLogs({
    address: TARGET_DAO.NFT_ADDRESS,
    event: parseAbiItem(
      "event Graff(address indexed sender, uint256 tokenId, string content)"
    ),
    fromBlock: 0n,
    toBlock: "latest",
  });

  const reasons = logs.map((log) => {
    const { sender , tokenId, content  } = log?.args;
    // return `${tokenId}:${content} - ${truncateAddress(sender as `0x${string}`)}`;
    return ` ${content} `;
  });

  return {
    reasons,
  };
};

export const useReasons = ({ chainId }: { chainId?: ValidNetwork }) => {
  if (!chainId) {
    throw new Error("Missing Args");
  }
  const { data, error, ...rest } = useQuery(
    [`reasons`],
    () => fetchReasons({ chainId }),
    { enabled: !!chainId }
  );
  return { ...data, error, ...rest };
};
