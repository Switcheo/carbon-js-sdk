import { TxTypes } from "@carbon-sdk/codec";
import { DEFAULT_FEE, DEFAULT_GAS } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { registry } from "@carbon-sdk/codec";
import * as CosmosModels from "@carbon-sdk/codec/cosmos-models";
import { sortObject } from "@carbon-sdk/util/generic";
import { BN_ONE } from "@carbon-sdk/util/number";
import BigNumber from "bignumber.js";

export interface TxBody extends Omit<CosmosModels.Tx.TxBody, "messages"> {
  messages: unknown[]
}
export interface Tx extends Omit<CosmosModels.Tx.Tx, "body"> {
  body?: TxBody
}

export interface TxMsgValue { }
export interface TxMsg<T extends TxMsgValue = TxMsgValue> {
  type: string
  value: T
}

export class DenomAmount {
  constructor(
    public readonly amount: BigNumber,
    public readonly denom: string = "swth",
  ) { }

  toJSON() {
    return {
      denom: this.denom,
      amount: this.amount.toString(10),
    }
  }
}

export class TxFee {
  constructor(
    public readonly amount: [DenomAmount],
    public readonly gas: BigNumber,
  ) { }

  toJSON() {
    return {
      amount: this.amount,
      gas: this.gas.toString(10),
    }
  }
}

export const DEFAULT_FEE_AMT = new TxFee(
  [new DenomAmount(BN_ONE)],
  DEFAULT_GAS,
);

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

export class StdSignDoc {
  constructor(
    public readonly account_number: number,
    public readonly sequence: number,
    public readonly chain_id: string,
    public readonly msgs: TxMsg[],
    public readonly fee: TxFee = DEFAULT_FEE_AMT,
    public readonly memo: string = "",
  ) { }

  public sortedJson(): string {
    const json = JSON.parse(JSON.stringify({
      chain_id: this.chain_id,
      account_number: this.account_number.toString(),
      sequence: this.sequence.toString(),
      fee: this.fee,
      msgs: this.msgs,
      memo: this.memo,
    }))
    const sortedDoc = sortObject(json);
    return JSON.stringify(sortedDoc);
  }
}
