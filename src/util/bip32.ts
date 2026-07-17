import { secp256k1 } from "@noble/curves/secp256k1";
import BIP32Factory, { TinySecp256k1Interface } from "bip32";

const CURVE_ORDER = secp256k1.CURVE.n;

const bytesToBigInt = (bytes: Uint8Array): bigint => {
  let value = BigInt(0);
  for (let index = 0; index < bytes.length; index += 1) {
    value = (value << BigInt(8)) | BigInt(bytes[index]);
  }
  return value;
};

const bigIntToBytes = (value: bigint): Uint8Array => {
  const bytes = new Uint8Array(32);
  let remaining = value;
  for (let index = bytes.length - 1; index >= 0; index -= 1) {
    bytes[index] = Number(remaining & BigInt(0xff));
    remaining >>= BigInt(8);
  }
  return bytes;
};

export const nobleBip32Ecc: TinySecp256k1Interface = {
  isPoint(point) {
    try {
      secp256k1.Point.fromHex(point).assertValidity();
      return true;
    } catch {
      return false;
    }
  },
  isPrivate(privateKey) {
    if (privateKey.length !== 32) return false;
    const scalar = bytesToBigInt(privateKey);
    return scalar > BigInt(0) && scalar < CURVE_ORDER;
  },
  pointFromScalar(privateKey, compressed = true) {
    if (!this.isPrivate(privateKey)) return null;
    return secp256k1.getPublicKey(privateKey, compressed);
  },
  pointAddScalar(publicKey, tweak, compressed = true) {
    if (!this.isPrivate(tweak)) return null;
    try {
      const point = secp256k1.Point.fromHex(publicKey).add(secp256k1.Point.BASE.multiply(bytesToBigInt(tweak)));
      return point.equals(secp256k1.Point.ZERO) ? null : point.toRawBytes(compressed);
    } catch {
      return null;
    }
  },
  privateAdd(privateKey, tweak) {
    if (!this.isPrivate(privateKey) || !this.isPrivate(tweak)) return null;
    const scalar = (bytesToBigInt(privateKey) + bytesToBigInt(tweak)) % CURVE_ORDER;
    return scalar === BigInt(0) ? null : bigIntToBytes(scalar);
  },
  sign(hash, privateKey, extraEntropy) {
    return secp256k1
      .sign(hash, privateKey, { extraEntropy, lowS: true, prehash: false })
      .toCompactRawBytes();
  },
  verify(hash, publicKey, signature, strict = true) {
    return secp256k1.verify(signature, hash, publicKey, { lowS: strict, prehash: false });
  },
};

export const BIP32 = BIP32Factory(nobleBip32Ecc);
