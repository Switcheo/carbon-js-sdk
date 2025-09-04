import { registry, TxTypes } from "@carbon-sdk/codec";
import * as CosmosModels from "@carbon-sdk/codec/cosmos-models";
import { DEFAULT_FEE } from "@carbon-sdk/constant";
import { StdFee } from "@cosmjs/amino";
import { SignerData } from "@cosmjs/stargate";
import { SWTHAddress, SWTHAddressOptions } from "./address";
import { EncodeObject } from "@cosmjs/proto-signing";
import { toUint8Array } from '@carbon-sdk/util/bytes'
export { StdSignDoc } from "@cosmjs/amino";

export interface TxBody extends Omit<CosmosModels.Tx.TxBody, "messages"> {
  messages: unknown[];
}
export interface Tx extends Omit<CosmosModels.Tx.Tx, "body"> {
  body?: TxBody;
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
];

const msgRecvPacketInnerFields = ["proofCommitment", "data"];

const decodeHexList = [...msgUpdateClientInnerFields, ...msgRecvPacketInnerFields];

const decodeNestedMsg = (obj: any) => {
  for (const key in obj) {
    const value = obj[key];
    if (decodeHexList.includes(key) && value instanceof Uint8Array) {
      obj[key] = Buffer.from(value).toString("hex");
    } else if (
      typeof value === "object" &&
      value?.typeUrl !== undefined &&
      value?.value !== undefined &&
      Object.values(TxTypes).includes(value?.typeUrl)
    ) {
      obj[key].value = registry.decode(value);
      obj[key] = decodeNestedMsg(value);
    } else if (value instanceof Object) {
      obj[key] = decodeNestedMsg(value);
    }
  }
  return obj;
};

export const decode = (bytes?: Uint8Array | Buffer): Tx | undefined => {
  if (!bytes) return bytes;

  const decodedTx = CosmosModels.Tx.Tx.decode(toUint8Array(bytes));
  const carbonTx: Tx = { ...decodedTx, body: undefined };

  if (decodedTx.body) {
    carbonTx.body = { ...decodedTx.body, messages: [] };
    for (const message of decodedTx.body.messages) {
      try {
        carbonTx.body.messages.push({
          typeUrl: message.typeUrl,
          value: decodeNestedMsg(registry.decode(message)),
        });
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
};

export const getSender = (decodedTx: Tx, opts?: SWTHAddressOptions): string => {
  const publicKey = decodedTx.authInfo?.signerInfos?.[0].publicKey?.value;
  if (!publicKey) {
    throw new Error(`could not get signer public key`);
  }
  const keyBuffer = Buffer.from(publicKey).slice(2);
  return SWTHAddress.publicKeyToAddress(keyBuffer, opts);
};

export enum BroadcastTxMode {
  BroadcastTxSync = "sync",
  BroadcastTxAsync = "async",
  BroadcastTxBlock = "block",
}

export interface CarbonSignerData extends SignerData {
  timeoutHeight?: number;
  evmChainId?: string;
}

export type ProcessMsgsCallback = (messages: readonly EncodeObject[]) => readonly EncodeObject[];

export interface SignTxOpts {
  fee?: StdFee;
  feeDenom?: string;
  memo?: string;
  sequence?: number;
  accountNumber?: number;
  explicitSignerData?: Partial<CarbonSignerData>;
  processMsgs?: ProcessMsgsCallback;
  triggerMerge?: boolean; // stack merge account tx if user account is unmerged
}

export interface BroadcastTxOpts {
  mode?: BroadcastTxMode;
  timeoutMs?: number;
  pollIntervalMs?: number;
}

export type SignAndBroadcastOpts = Partial<SignTxOpts & BroadcastTxOpts>;

export interface TxLog {
  msg_index: number;
  log: string;
  events: unknown[];
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

export enum ErrorType {
  SIGNATURE_REJECTION = "signature_rejection",
  BROADCAST_FAIL = "broadcast_fail",
  BLOCK_FAIL = "block_fail",
}

export class CarbonCustomError extends Error {
  readonly type?: ErrorType
  readonly data?: any
  constructor(msg: string, type?: ErrorType, data?: any) {
    super(msg);
    this.type = type
    this.data = data
  }
}

export const Types = TxTypes;

export const DEFAULT_SIGN_OPTS: SignTxOpts = {
  fee: DEFAULT_FEE,
  memo: "",
};

export const TxGasCostTypeDefaultKey = "default_fee";
export const TxMinGasPriceTypeDefaultKey = "swth";
export const TxGasCostTypeMap = {
  [TxTypes.MsgClaimPoolRewards]: "claim_pool_rewards",
  [TxTypes.MsgCreateOrder]: "create_order",
  [TxTypes.MsgCreatePool]: "create_pool",
  [TxTypes.MsgCreatePoolWithLiquidity]: "create_pool",
  [TxTypes.MsgStakePoolToken]: "stake_pool_token",
  [TxTypes.MsgUnstakePoolToken]: "unstake_pool_token",
};

const LibPackages: string[] = ['ibc', 'cosmos', 'alliance']

const BacklistedMessages: string[] = [
  '/cosmos.authz.v1beta1.MsgExec',
  '/cosmos.authz.v1beta1.MsgGrant',
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
]


// to use signDirect for metamask signing if messages are from libraries (cosmos-sdk, ibc, alliance).
// Reasons:
// 1. There is decoding issue with MsgGrantAllowance in amino
// 2. For Ibc MsgTransfer, there is an overflow issue with timeouttimestamp overflow (from uint32) during unmarshalJSON, even though it is defined as uint64
// (This can be resolved from the client side by use sendIBCTransfer instead of sendIBCTransferV2) but using signDirect here fixes it too.
// 3. Ethermint is still using legacyMsg.getSigners() to verify many amino signed eip712 txs. However, getSigners() is deprecated and not implmented in messages from cosmos-sdk anymore.
// 4. as of comsos-sdk v0.50 --> very few messages are using legacyDec so we can safely use signDirect
export const useSignDirectForMetamask = (messages: readonly EncodeObject[]): boolean => {
  const typeUrls = messages.map(m => m.typeUrl)
  return !!Object.values(TxTypes).find(typeUrl => isLibMsg(typeUrl) && typeUrls.includes(typeUrl))
}

export const isLibMsg = (typeUrl: string): boolean => {
  // /ibc.core.client.v1.UpgradeProposal --> ibc
  const pkg = typeUrl.split('.')[0].substring(1)
  return LibPackages.includes(pkg) && !BacklistedMessages.includes(typeUrl)
}
