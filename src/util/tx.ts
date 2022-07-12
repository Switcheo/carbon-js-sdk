import { TxTypes } from "@carbon-sdk/codec";
import { DEFAULT_FEE } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { registry } from "@carbon-sdk/codec";
import * as CosmosModels from "@carbon-sdk/codec/cosmos-models";
import { SWTHAddress, SWTHAddressOptions } from "./address";
export interface TxBody extends Omit<CosmosModels.Tx.TxBody, "messages"> {
  messages: unknown[]
}
export interface Tx extends Omit<CosmosModels.Tx.Tx, "body"> {
  body?: TxBody
}

const msgUpdateClientInnerFields = [
  "lastCommitHash",
  "dataHash",
  "validatorsHash",
  "nextValidatorsHash",
  "consensusHash",
  "appHash",
  "lastResultsHash",
  "evidenceHash",
  "hash",
  "signature",
  "proposerAddress",
  "validatorAddress",
  "address",
  "ed25519",
  "data",
]

const msgRecvPacketInnerFields = [
  "proofCommitment",
  "data",
]

const decodeHexList = [...msgUpdateClientInnerFields, ...msgRecvPacketInnerFields];

const decodeNestedMsg = (obj: any) => {
  for (const key in obj) {

    let value = obj[key];
    if (decodeHexList.includes(key) && value instanceof Uint8Array) {
      obj[key] = Buffer.from(value).toString("hex");
    } else if (typeof value === "object" && value?.typeUrl !== undefined && value?.value !== undefined && Object.values(TxTypes).includes(value?.typeUrl)) {
      obj[key].value = registry.decode(value)
      obj[key] = decodeNestedMsg(value);
    } else if (value instanceof Object) {
      obj[key] = decodeNestedMsg(value);
    }

  }
  return obj;
};

export const decode = (bytes?: Uint8Array | Buffer): Tx | undefined => {
  if (!bytes) return bytes;

  const decodedTx = CosmosModels.Tx.Tx.decode(bytes);
  const carbonTx: Tx = { ...decodedTx, body: undefined };

  if (decodedTx.body) {
    carbonTx.body = { ...decodedTx.body, messages: [] };
    for (const message of decodedTx.body.messages) {
      try {
        carbonTx.body.messages.push({
          typeUrl: message.typeUrl,
          value: decodeNestedMsg(registry.decode(message)),
        })
      } catch (error) {
        console.error(`failed to decode tx message: ${message?.typeUrl}`);
        console.error(error);
        carbonTx.body.messages.push(message);
      }
    }
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
  explicitSignerData?: Partial<SignerData>;
}

export interface BroadcastTxOpts {
  mode?: BroadcastTxMode
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

export const TxGasCostTypeDefaultKey = "default_fee";
export const TxMinGasPriceTypeDefaultKey = "swth";
export const TxGasCostTypeMap = {
  [TxTypes.MsgClaimPoolRewards]: "claim_pool_rewards",
  [TxTypes.MsgCreateVote]: "create_oracle_vote",
  [TxTypes.MsgCreateOrder]: "create_order",
  [TxTypes.MsgCreatePool]: "create_pool",
  [TxTypes.MsgCreatePoolWithLiquidity]: "create_pool",
  [TxTypes.MsgStakePoolToken]: "stake_pool_token",
  [TxTypes.MsgUnstakePoolToken]: "unstake_pool_token",
}
