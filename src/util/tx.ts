import { TxTypes } from "@carbon-sdk/codec";
import { DEFAULT_FEE } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { registry } from "@carbon-sdk/codec";
import * as CosmosModels from "@carbon-sdk/codec/cosmos-models";

export interface TxBody extends Omit<CosmosModels.Tx.TxBody, "messages"> {
  messages: unknown[]
}
export interface Tx extends Omit<CosmosModels.Tx.Tx, "body"> {
  body?: TxBody
}

export const decode = (bytes?: Uint8Array | Buffer): Tx | undefined => {
  if (!bytes) return bytes;

  const decodedTx = CosmosModels.Tx.Tx.decode(bytes);
  const carbonTx: Tx = { ...decodedTx, body: undefined };

  if (decodedTx.body) {
    carbonTx.body = {
      ...decodedTx.body,
      // override original UInt8Array messages with decoded messages
      messages: decodedTx.body.messages.map(message => ({
        typeUrl: message.typeUrl,
        value: registry.decode(message),
      })),
    };
  } else {
    delete carbonTx.body;
  }

  return carbonTx;
}

export enum BroadcastTxMode {
  BroadcastTxSync = 'sync',
  BroadcastTxBlock = 'block',
}

export interface SignTxOpts {
  fee?: StdFee;
  memo?: string;
  explicitSignerData?: SignerData;
}

export interface BroadcastTxOpts {
  timeoutMs?: number
  pollIntervalMs?: number
}

export type SignAndBroadcastOpts = Partial<SignTxOpts & BroadcastTxOpts>

export interface TxLog {
  msg_index: number;
  log: string;
  events: unknown[]
}

export interface TxResponse {
  height: string;
  txhash: string;
  raw_log: string;

  gas_wanted: string;
  gas_used: string;

  // only if tx succeeds
  logs: TxLog[];

  // only if tx fails
  code?: number;
  codespace?: string;
}

export const Types = TxTypes;

export const DEFAULT_SIGN_OPTS: SignTxOpts = {
  fee: DEFAULT_FEE,
  memo: "",
}

export const TxFeeTypeDefaultKey = "default_fee";
export const TxFeeTypeMap = {
  [TxTypes.MsgClaimPoolRewards]: "claim_pool_rewards",
  [TxTypes.MsgCreateVote]: "create_oracle_vote",
  [TxTypes.MsgCreateOrder]: "create_order",
  [TxTypes.MsgCreatePool]: "create_pool",
  [TxTypes.MsgCreatePoolWithLiquidity]: "create_pool",
  [TxTypes.MsgStakePoolToken]: "stake_pool_token",
  [TxTypes.MsgUnstakePoolToken]: "unstake_pool_token",
}
