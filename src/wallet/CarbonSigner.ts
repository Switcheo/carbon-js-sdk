import { CosmosLedger } from '@carbon-sdk/provider';
import { sortObject } from '@carbon-sdk/util/generic';
import { AminoSignResponse, OfflineAminoSigner, StdSignDoc } from "@cosmjs/amino";
import { AccountData, DirectSecp256k1Wallet, DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SignDoc } from "@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx";

export enum CarbonSignerTypes {
  Ledger,
  PrivateKey,
  BrowserInjected,
  PublicKey,
}

export type CarbonSigner = DirectCarbonSigner | AminoCarbonSigner
export type DirectCarbonSigner = OfflineDirectSigner & { type: CarbonSignerTypes }
export type AminoCarbonSigner = OfflineAminoSigner & { type: CarbonSignerTypes }

export class CarbonPrivateKeySigner implements DirectCarbonSigner {
  type = CarbonSignerTypes.PrivateKey
  wallet?: DirectSecp256k1Wallet

  constructor(
    readonly privateKey: Buffer,
    readonly prefix: string
  ) { }

  async initWallet() {
    if (!this.wallet)
      this.wallet = await DirectSecp256k1Wallet.fromKey(this.privateKey, this.prefix)

    return this.wallet
  }

  async getAccounts() {
    const wallet = await this.initWallet()
    return wallet.getAccounts()
  }

  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const wallet = await this.initWallet()
    return await wallet.signDirect(signerAddress, signDoc);
  }
}

export class CarbonNonSigner implements DirectCarbonSigner {
  type = CarbonSignerTypes.PublicKey

  async getAccounts(): Promise<readonly AccountData[]> {
    throw new Error("signing not available");
  }

  async signDirect(): Promise<DirectSignResponse> {
    throw new Error("signing not available");
  }
}

// Uses amino because ledger does not work with protobuf yet
export class CarbonLedgerSigner implements AminoCarbonSigner {
  type = CarbonSignerTypes.Ledger

  async getAccounts(): Promise<readonly AccountData[]> {
    const address = await this.ledger.getCosmosAddress() // TODO: Test this!
    const pubkey = await this.ledger.getPubKey()
    return [{
      address,
      algo: "secp256k1",
      pubkey,
    }];
  }

  async signAmino(_: string, doc: StdSignDoc): Promise<AminoSignResponse> {
    const signBytes = await this.ledger.sign(JSON.stringify(sortObject(doc)));
    const pubKey = await this.ledger.getPubKey();
    return {
      signed: doc,
      signature: {
        pub_key: pubKey,
        signature: Buffer.from(signBytes.buffer).toString("base64")
      }
    };
  }

  constructor(
    readonly ledger: CosmosLedger
  ) { }
}
