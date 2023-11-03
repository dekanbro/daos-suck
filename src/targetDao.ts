import { ValidNetwork, VIEM_CHAINS } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  CHAIN_ID: ValidNetwork;
  NFT_ADDRESS: EthAddress;
  GRAFF_LENGTH: number;
  PRICE_PER_GRAFF: number;
} = {
  CHAIN_ID: "0xa", // 0xa
  NFT_ADDRESS: "0x3fd8F934Cb9dc40465bc3B45a65D2d3307411225",
  GRAFF_LENGTH: 42,
  PRICE_PER_GRAFF: 420000000000000
};
