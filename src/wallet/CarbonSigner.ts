import { CosmosLedger } from '@carbon-sdk/provider';
import { stripHexPrefix } from '@carbon-sdk/util/generic';
import { SignDoc } from '@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx';
import { ethers } from 'ethers';
import secp256k1 from 'secp256k1';

export enum CarbonSignerTypes {
  Ledger,
  PrivateKey,
  BrowserInjected,
  PublicKey,
}

export interface CarbonSigner {
  type: CarbonSignerTypes;

  // signs the cosmos StdSignDoc.toJSON, returns signature buffer
  sign: (doc: SignDoc) => Promise<Buffer>;
}

export class CarbonPrivateKeySigner implements CarbonSigner {
  type = CarbonSignerTypes.PrivateKey

  async sign(doc: SignDoc): Promise<Buffer> {
    const data = SignDoc.encode(doc).finish();
    const result = secp256k1.ecdsaSign(
      Buffer.from(stripHexPrefix(ethers.utils.sha256(data)), "hex"),
      Buffer.from(this.privateKey),
    )
    return Buffer.from(result.signature)
  }

  constructor(
    readonly privateKey: Buffer
  ) { }
}

export class CarbonNonSigner implements CarbonSigner {
  type = CarbonSignerTypes.PublicKey

  async sign(): Promise<Buffer> {
    throw new Error("signing not available");
  }
}

export class CarbonLedgerSigner implements CarbonSigner {
  type = CarbonSignerTypes.Ledger

  async sign(doc: SignDoc): Promise<Buffer> {
    const json = JSON.stringify(SignDoc.toJSON(doc));
    const signBytes = await this.ledger.sign(json);
    return Buffer.from(signBytes.buffer);
  }

  constructor(
    readonly ledger: CosmosLedger
  ) { }
}
