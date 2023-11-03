import { ValidNetwork, VIEM_CHAINS } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  CHAIN_ID: ValidNetwork;
  NFT_ADDRESS: EthAddress;
} = {
  CHAIN_ID: "0x5", // 0xa
  NFT_ADDRESS: "0x0bdD0d46AbE23951134dFF4153967d975fCBFf9b",
};
