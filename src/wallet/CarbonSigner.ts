import secp256k1 from 'secp256k1';
import { ethers } from 'ethers';
import { stripHexPrefix } from '@carbon-sdk/util/generic';

export enum CarbonSignerTypes {
  Ledger,
  PrivateKey,
  BrowserInjected,
  PublicKey,
}

export interface CarbonSigner {
  type: CarbonSignerTypes;

  // signs the cosmos StdSignDoc.toJSON, returns signature buffer
  sign: (doc: Buffer) => Buffer;
}

export class CarbonPrivateKeySigner implements CarbonSigner {
  type = CarbonSignerTypes.PrivateKey

  sign(data: Buffer): Buffer {
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

  sign(): Buffer {
    throw new Error("signing not available");
  }
}
