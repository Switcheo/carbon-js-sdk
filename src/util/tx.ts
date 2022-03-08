import { TxTypes } from "@carbon-sdk/codec";
import { DEFAULT_FEE } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { registry } from "@carbon-sdk/codec";
import * as CosmosModels from "@carbon-sdk/codec/cosmos-models";
import { SWTHAddress, SWTHAddressOptions } from "./address";
import { GenericUtils } from "@carbon-sdk/util";
import Long from "long";

export interface TxBody extends Omit<CosmosModels.Tx.TxBody, "messages"> {
  messages: unknown[]
}
export interface Tx extends Omit<CosmosModels.Tx.Tx, "body"> {
  body?: TxBody
}

const decodeNestedMsg = (obj: any) => {
  for (const key in obj) {

    if (typeof obj[key] === "object" && obj[key].low !== undefined && obj[key].high !== undefined && obj[key].unsigned !== undefined) {
      obj[key] = Long.fromValue(obj[key]).toString()
    } else if (obj[key] instanceof Uint8Array) {
      obj[key] = GenericUtils.toTxHash(obj[key])
    } else if (typeof obj[key] === "object" && obj[key].typeUrl !== undefined && obj[key].value !== undefined && Object.values(TxTypes).includes(obj[key].typeUrl)) {
      obj[key].value = registry.decode(obj[key])
      obj[key] = decodeNestedMsg(obj[key])
    } else if (obj[key] instanceof Object) {
      obj[key] = decodeNestedMsg(obj[key]);
    }

  }
  return obj;
};

export const decode = (bytes?: Uint8Array | Buffer): Tx | undefined => {
  if (!bytes) return bytes;

  const decodedTx = CosmosModels.Tx.Tx.decode(bytes);
  const carbonTx: Tx = { ...decodedTx, body: undefined };

  if (decodedTx.body) {
    const messages = decodedTx.body.messages.map((message) => ({  
        typeUrl: message.typeUrl,
        value: decodeNestedMsg(registry.decode(message)),
    }))
    carbonTx.body = {
      ...decodedTx.body,
      // override original UInt8Array messages with decoded messages
      messages: decodedTx.body.messages.map(message => ({
        typeUrl: message.typeUrl,
        value: decodeNestedMsg(registry.decode(message)),
    }))
    };
  } else {
    delete carbonTx.body;
  }

  return carbonTx;
}

export const getSender = (decodedTx: Tx, opts?: SWTHAddressOptions): string => {
  const publicKey = decodedTx.authInfo?.signerInfos?.[0].publicKey?.value
  if (!publicKey) {
    throw new Error(`could not get signer public key`)
  }
  const keyBuffer = Buffer.from(publicKey).slice(2)
  return SWTHAddress.publicKeyToAddress(keyBuffer, opts)
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
