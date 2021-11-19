import { CosmosLedger } from '@carbon-sdk/provider';
import { stripHexPrefix } from '@carbon-sdk/util/generic';
import { BlockchainUtils, GenericUtils, NumberUtils, CarbonTx, AddressUtils } from "@carbon-sdk/util";
import { SignDoc } from "@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx";
import { ethers } from 'ethers';
import secp256k1 from 'secp256k1';
import { AccountData, DirectSecp256k1Wallet, DirectSignResponse, OfflineDirectSigner, OfflineSigner } from '@cosmjs/proto-signing';

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Network } from '@carbon-sdk/constant';
import { SWTHAddress } from '@carbon-sdk/util/address';
import { Algo, AminoSignResponse, OfflineAminoSigner, StdSignDoc } from "@cosmjs/amino";

export enum CarbonSignerTypes {
  Ledger,
  PrivateKey,
  BrowserInjected,
  PublicKey,
}

// export interface CarbonSigner {
//   type: CarbonSignerTypes;
//   sign: (doc: SignDoc) => Promise<Buffer>;
// }

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

  async getAccounts(): Promise<readonly AccountData[]>{
    const address = await this.ledger.getCosmosAddress() // TODO: Test this!
    const pubkey = await this.ledger.getPubKey()
    return Promise.resolve([
      {
        address,
        algo: "secp256k1" as Algo,
        pubkey,
      },
    ]);
  }

  async signAmino(signerAddress: string, doc: StdSignDoc): Promise<AminoSignResponse> {
    // const jsonDoc: CarbonTx.StdSignDoc = new CarbonTx.StdSignDoc(
    //   doc.accountNumber.toNumber(), // account_number
    //   0, // sequence
    //   doc.chainId, // chain_id
    //   [{
    //     type: "nonce",
    //     value: NumberUtils.generateNonce(),
    //   }], // msgs
    // );
    // const signBytes = await this.ledger.sign(jsonDoc.sortedJson());
    // return Buffer.from(signBytes.buffer);

    const signBytes = await this.ledger.sign(JSON.stringify(doc));
    const pubKey = await this.ledger.getPubKey()
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
