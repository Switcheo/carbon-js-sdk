import { CarbonSDK } from "@carbon-sdk/index";
import { ExternalUtils } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import neo3Dapi from "neo3-dapi";

export type AcceptedNets = "N3MainNet" | "MainNet";

// O3 Wallet Events Enum
export enum Events {
  Ready = neo3Dapi.Constants.EventName.READY,
  AccountChanged = neo3Dapi.Constants.EventName.ACCOUNT_CHANGED,
  Connected = neo3Dapi.Constants.EventName.CONNECTED,
  Disconnected = neo3Dapi.Constants.EventName.DISCONNECTED,
  NetworkChanged = neo3Dapi.Constants.EventName.NETWORK_CHANGED,
  BlockChanged = neo3Dapi.Constants.EventName.BLOCK_HEIGHT_CHANGED,
  TxConfirmed = neo3Dapi.Constants.EventName.TRANSACTION_CONFIRMED,
}

// O3 Wallet Error Map
export enum Errors {
  Denied = "CONNECTION_DENIED",
  NoProvider = "NO_PROVIDER",
  Rpc = "RPC_ERROR",
  MalformedInput = "MALFORMED_INPUT",
  Cancelled = "CANCELED",
  InsufficientFunds = "INSUFFICIENT_FUNDS",
  Unknown = "UNKNOWN_ERROR",
}

// Get Networks Query Types
export interface GetNetworksOutput {
  chainId?: number;
  networks: string[];
  defaultNetwork: string;
}

// Get Account Query Types
export interface Account {
  address: string;
  label: string;
}

// Get Public Key Query Types
export interface PublicKeyOutput {
  publicKey: string;
  address: string;
}

// Invoke Function Types
export enum ArgTypes {
  String = "String",
  Boolean = "Boolean",
  Hash160 = "Hash160",
  Hash256 = "Hash256",
  Integer = "Integer",
  ByteArray = "ByteArray",
  Array = "Array",
  Address = "Address",
}

export interface Argument {
  type: ArgTypes;
  value: any;
}

export interface Signers {
  account: string;
  scopes: number;
}

export interface InvokeOutput {
  txid: string;
  nodeUrl: string;
}

// Get Balance Query Types
export interface BalanceRequest {
  address: string; // Address to check balance(s)
  contracts?: string[]; // Asset symbol or script hash to check balance
}

export interface GetBalanceArgs {
  params: BalanceRequest | BalanceRequest[];
  network?: string;
}

export interface BalanceResults {
  [address: string]: Balance[];
}

export interface Balance {
  contract: string;
  symbol: string;
  amount: string;
  assetID?: string;
}

// Custom Contract Params
export interface LockDepositParams {
  token: ExternalUtils.TokensWithExternalBalance;
  amount: BigNumber;
  feeAmount: BigNumber;
  toAddress: string;
  fromAddress: string;
}

export interface O3WalletOpts {
  network: CarbonSDK.Network;
}
