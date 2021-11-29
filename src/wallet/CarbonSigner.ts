import { CosmosLedger } from '@carbon-sdk/provider';
import { sortObject } from '@carbon-sdk/util/generic';
import { AminoSignResponse, encodeSecp256k1Signature, OfflineAminoSigner, StdSignDoc } from "@cosmjs/amino";
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
    const signBytes = await this.ledger.sign(JSON.stringify(sortObject(doc)));
    const signature = encodeSecp256k1Signature(pubkey, signBytes);
    return {
      signed: doc,
      signature,
    };
  }

  constructor(
    readonly ledger: CosmosLedger
  ) { }
}
