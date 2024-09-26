import { PageRequest } from "@carbon-sdk/codec/cosmos/base/query/v1beta1/pagination";
import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";
import Long from "long";
import { Blockchain, BlockchainV2, EVMChain as EVMChainV2 } from "@carbon-sdk/util/blockchain";

export const DEFAULT_FEE_DENOM = "swth";

// 0.0000001 SWTH
export const DEFAULT_GAS_PRICE = new BigNumber(10);

export const DEFAULT_GAS = new BigNumber(100_000_000);

export const PAGINATE_10K = PageRequest.fromPartial({ limit: new Long(10_000) })

export const DEFAULT_FEE: StdFee = {
  amount: coins(DEFAULT_GAS_PRICE.times(DEFAULT_GAS).dp(0).toString(), "swth"),
  gas: DEFAULT_GAS.toString(10),
};

export interface GasPriceStep {
  low: number;
  average: number;
  high: number;
}

export const CARBON_GAS_PRICE: GasPriceStep = {
  low: 1,
  average: 1.5,
  high: 2,
};

export interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export type EVMChain = EVMChainV2;

export interface SyncResult  {
  blockchain?: Blockchain | BlockchainV2;
  chainId?: number;
}
