import type { AminoSignResponse, OfflineAminoSigner, StdSignature, StdSignDoc } from "@cosmjs/amino";
import type { DirectSignResponse, OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import type { ChainInfo } from "@keplr-wallet/types";
import type Long from "long";

export type BroadcastMode = "block" | "sync" | "async";

export interface Key {
  readonly name: string;
  readonly algo: string;
  readonly pubKey: Uint8Array;
  readonly address: Uint8Array;
  readonly bech32Address: string;
  readonly isNanoLedger: boolean;
  readonly isSmartContract?: boolean;
}

interface LeapSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
  readonly disableBalanceCheck?: boolean;
}

export interface Leap {
  disconnect(): Promise<void>;
  enable(chainIds: string | string[]): Promise<void>;
  suggestToken(chainId: string, contractAddress: string): Promise<void>;
  mode: "extension";
  getKey(chainId: string): Promise<Key>;
  getOfflineSigner(chainId: string): OfflineAminoSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino(chainId: string): OfflineAminoSigner;
  getOfflineSignerAuto(chainId: string): Promise<OfflineSigner>;
  signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: LeapSignOptions,
  ): Promise<AminoSignResponse>;
  signDirect(
    chainId: string,
    signer: string,
    signDoc: {
      bodyBytes?: Uint8Array | null;
      authInfoBytes?: Uint8Array | null;
      chainId?: string | null;
      accountNumber?: Long | null;
    },
    signOptions?: LeapSignOptions,
  ): Promise<DirectSignResponse>;
  signArbitrary(chainId: string, signer: string, data: string | Uint8Array): Promise<StdSignature>;
  getEnigmaPubKey(chainId: string): Promise<Uint8Array>;
  getEnigmaTxEncryptionKey(chainId: string, nonce: Uint8Array): Promise<Uint8Array>;
  enigmaEncrypt(chainId: string, contractCodeHash: string, msg: object): Promise<Uint8Array>;
  enigmaDecrypt(chainId: string, ciphertext: Uint8Array, nonce: Uint8Array): Promise<Uint8Array>;
  sendTx(chainId: string, tx: Uint8Array, mode: BroadcastMode): Promise<Uint8Array>;
  experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>;
}
