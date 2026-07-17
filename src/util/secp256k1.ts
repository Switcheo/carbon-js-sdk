import { secp256k1 } from "@noble/curves/secp256k1";

export const derSignatureToCompact = (signature: Uint8Array): Uint8Array => {
  return secp256k1.Signature.fromDER(signature).toCompactRawBytes();
};
