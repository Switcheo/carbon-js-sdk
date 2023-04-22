import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { SignDoc } from "@carbon-sdk/codec/cosmos/tx/v1beta1/tx";
import { CosmosLedger } from "@carbon-sdk/provider";
import { sortObject } from "@carbon-sdk/util/generic";
import { AminoSignResponse, encodeSecp256k1Signature, OfflineAminoSigner, Secp256k1Wallet, StdSignDoc } from "@cosmjs/amino";
import { AccountData, DirectSecp256k1Wallet, DirectSignResponse, OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import { ethers } from "ethers";

export enum CarbonSignerTypes {
  Ledger,
  PrivateKey,
  BrowserInjected,
  PublicKey,
}


export interface EvmSigner {
  readonly sendEvmTransaction: (api: CarbonSDK, req: ethers.providers.TransactionRequest) => void
}

export interface EIP712Signer extends EvmSigner {
  legacyEip712SignMode: boolean
  readonly signLegacyEip712: (signerAddress: string, signDoc: StdSignDoc) => Promise<LegacyEIP712AminoSignResponse>;
}
export type CarbonSigner = DirectCarbonSigner | AminoCarbonSigner | CarbonEIP712Signer;
export type CarbonEIP712Signer = (DirectCarbonSigner | AminoCarbonSigner) & EIP712Signer
export type DirectCarbonSigner = OfflineDirectSigner & EvmSigner & { type: CarbonSignerTypes };
export type AminoCarbonSigner = OfflineAminoSigner & EvmSigner & { type: CarbonSignerTypes }


export type LegacyEIP712AminoSignResponse = AminoSignResponse & { feePayer: string }


export function isCarbonEIP712Signer(signer: OfflineSigner): boolean {
  return (signer as CarbonEIP712Signer).signLegacyEip712 !== undefined
}
export class CarbonPrivateKeySigner implements DirectCarbonSigner, AminoCarbonSigner {
  type = CarbonSignerTypes.PrivateKey;
  wallet?: DirectSecp256k1Wallet;
  aminoWallet?: Secp256k1Wallet;

  constructor(readonly privateKey: Buffer, readonly prefix: string) { }

  async initWallet() {
    if (!this.wallet) this.wallet = await DirectSecp256k1Wallet.fromKey(this.privateKey, this.prefix);

    return this.wallet;
  }

  async initAminoWallet() {
    if (!this.aminoWallet) this.aminoWallet = await Secp256k1Wallet.fromKey(this.privateKey, this.prefix);
    return this.aminoWallet;
  }

  async getAccounts() {
    const wallet = await this.initWallet();
    return wallet.getAccounts();
  }

  async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    const aminoWallet = await this.initAminoWallet();
    return await aminoWallet.signAmino(signerAddress, signDoc);
  }

  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const wallet = await this.initWallet();
    return await wallet.signDirect(signerAddress, signDoc);
  }

  async sendEvmTransaction(api: CarbonSDK, req: ethers.providers.TransactionRequest) {
    throw new Error("signing not available");
  }
}

export class CarbonNonSigner implements DirectCarbonSigner {
  type = CarbonSignerTypes.PublicKey;

  async getAccounts(): Promise<readonly AccountData[]> {
    throw new Error("signing not available");
  }

  async signDirect(): Promise<DirectSignResponse> {
    throw new Error("signing not available");
  }
  async sendEvmTransaction(api: CarbonSDK, req: ethers.providers.TransactionRequest) {
    throw new Error("signing not available");
  }
}

// Uses amino because ledger does not work with protobuf yet
export class CarbonLedgerSigner implements AminoCarbonSigner {
  type = CarbonSignerTypes.Ledger;

  account?: AccountData;

  async retrieveAccount() {
    if (!this.account) {
      const address = await this.ledger.getCosmosAddress();
      const pubkey = await this.ledger.getPubKey();

      this.account = {
        address,
        algo: "secp256k1",
        pubkey,
      };
    }

    return this.account;
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    const account = await this.retrieveAccount();
    return [account];
  }

  async signAmino(_: string, doc: StdSignDoc): Promise<AminoSignResponse> {
    const account = await this.retrieveAccount();
    const { pubkey } = account;
    const msg = JSON.stringify(sortObject(doc));
    const signBytes = await this.ledger.sign(msg);
    const signature = encodeSecp256k1Signature(pubkey, signBytes);
    return {
      signed: doc,
      signature,
    };
  }
  async sendEvmTransaction(api: CarbonSDK, req: ethers.providers.TransactionRequest) {
    throw new Error("signing not available");
  }

  constructor(readonly ledger: CosmosLedger) {}
}
