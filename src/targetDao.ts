import { ValidNetwork, VIEM_CHAINS } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  CHAIN_ID: ValidNetwork;
  NFT_ADDRESS: EthAddress;
} = {
  CHAIN_ID: "0x5", // 0xa
  NFT_ADDRESS: "0x5b8a63853086Ce46C28Dd8547b3edeC19CD3C635",
};
