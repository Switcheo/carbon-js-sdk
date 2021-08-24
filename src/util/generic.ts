import { sha256 } from "@cosmjs/crypto";

export const overrideConfig = <T = unknown>(defaults: T, override?: Partial<T>) => {
  const result: T = { ...defaults };

  if (!override) return result;

  for (const key of Object.keys(override)) {
    // @ts-ignore
    const member = override[key];
    if (typeof member === "undefined") continue;

    if (typeof member === "object") {
      // @ts-ignore
      result[key] = overrideConfig(result[key], member);
    } else {
      // @ts-ignore
      result[key] = member;
    }
  }

  return result;
};

export const sortObject = (input: any): unknown => {
  if (typeof input !== "object") return input;
  if (Array.isArray(input)) return input.map(sortObject);

  const output = {};
  Object.keys(input)
    .sort()

    // @ts-ignore noImplicitAny
    .forEach((key) => (output[key] = sortObject(input[key])));

  return output;
};

export const stripHexPrefix = (input: string) => {
  return input?.slice(0, 2) === "0x" ? input.slice(2) : input;
};

export const appendHexPrefix = (input: string) => {
  return input?.slice(0, 2) === "0x" ? input : `0x${input}`;
};

export const computeTxHash = (bytes?: Uint8Array | Buffer): string | undefined => {
  if (!bytes) return bytes;

  return toTxHash(sha256(bytes));
}
export const toTxHash = (bytes?: Uint8Array | Buffer): string | undefined => {
  if (!bytes) return bytes;

  return Buffer.from(bytes).toString("hex").toUpperCase();
}
