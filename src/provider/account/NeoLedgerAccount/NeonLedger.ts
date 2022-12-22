import Transport, { getAltStatusMessage } from "@ledgerhq/hw-transport";
import { u } from "@cityofzion/neon-core";

/**
 * Duplicated from @cityofzion/neon-ledger due to package incompatibility:
 * transpiled JS version throws "Cannot find module './plugin'"
 */

export enum ErrorCode {
  VALID_STATUS = 0x9000,
  MSG_TOO_BIG = 0x6d08,
  APP_CLOSED = 0x6e00,
  TX_DENIED = 0x6985,
}

export interface TransportStatusError extends Error {
  name: "TransportStatusError";
  message: string;
  stack: Error["stack"];
  statusCode: number;
  statusText: string;
}

/**
 * Evaluates Transport Error thrown and rewrite the error message to be more user friendly.
 * @return error with modified message if found.
 */
export function evalTransportError(err: Error): Error {
  const transportErr = err as TransportStatusError;
  switch (transportErr.statusCode) {
    case ErrorCode.APP_CLOSED:
      transportErr.message = "Your NEO app is closed! Please login.";
      break;
    case ErrorCode.MSG_TOO_BIG:
      transportErr.message = "Your transaction is too big for the ledger to sign!";
      break;
    case ErrorCode.TX_DENIED:
      transportErr.message = "Transaction signing denied";
      break;
    default:
      transportErr.message = getAltStatusMessage(transportErr.statusCode)!;
  }
  return err;
}

const DEFAULT_STATUSLIST = [ErrorCode.VALID_STATUS];

/**
 * Appends data to the Ledger for signature.
 * @param msg A string up to 510 characters (256 bytes)
 */
async function appendDataForSignature(ledger: Transport, msg: string): Promise<Buffer> {
  return await ledger.send(0x80, 0x02, 0x00, 0x00, Buffer.from(msg, "hex"), DEFAULT_STATUSLIST);
}

/**
 * Appends data to the Ledger and returns the signature of the entire message that has been appended so far.
 * @param ledger
 * @param msg A string up to 510 characters (256 bytes)
 */
async function finalizeDataForSignature(ledger: Transport, msg: string): Promise<Buffer> {
  return await ledger.send(0x80, 0x02, 0x80, 0x00, Buffer.from(msg, "hex"), DEFAULT_STATUSLIST);
}

/**
 * Returns a BIP44 string specific to NEO.
 */
export function getNEOBIP44String(address = 0, change = 0, account = 0): string {
  const accountHex = to8BitHex(account + 0x80000000);
  const changeHex = to8BitHex(change);
  const addressHex = to8BitHex(address);
  return "8000002C" + "80000378" + accountHex + changeHex + addressHex;
}

/**
 * Returns the list of connected Ledger devices. Throw if Ledger is not supported by the computer.
 * @param ledgerLibrary
 */
export async function getDevicePaths(ledgerLibrary: typeof Transport): Promise<ReadonlyArray<string>> {
  const supported = await ledgerLibrary.isSupported();
  if (!supported) {
    throw new Error(`Your computer does not support the ledger!`);
  }
  return await ledgerLibrary.list();
}

/**
 * Requests the public key of a requested address from the Ledger.
 * @param ledger The Ledger Transport.
 * @param bip44String The BIP44 string (40 bytes)
 * @returns An unencoded public key (65 bytes)
 */
export async function getPublicKey(ledger: Transport, bip44String: string): Promise<string> {
  try {
    const response = await ledger.send(0x80, 0x04, 0x00, 0x00, Buffer.from(bip44String, "hex"), DEFAULT_STATUSLIST);
    return response.toString("hex").substring(0, 130);
  } catch (e) {
    if ((e as TransportStatusError).statusCode) {
      throw evalTransportError(e as TransportStatusError);
    }
    throw e;
  }
}

/**
 * Requests the device to sign a message using the NEO application.
 * @param ledger The Ledger Transport.
 * @param hex The message to sign as a hexstring.
 * @param bip44String The BIP44 string (40 bytes)
 * @returns Signature as a hexstring (64 bytes)
 */
export async function getSignature(ledger: Transport, hex: string, bip44String: string): Promise<string> {
  const payload = hex + bip44String;
  const chunks = payload.match(/.{1,510}/g) || [];
  try {
    for (let i = 0; i < chunks.length - 1; i++) {
      await appendDataForSignature(ledger, chunks[i]);
    }
    const response = await finalizeDataForSignature(ledger, chunks[chunks.length - 1]);
    if (response.readUIntBE(0, 2) === ErrorCode.VALID_STATUS) {
      throw new Error(`No more data but Ledger did not return signature!`);
    }
    return DerToHexSignature(response.toString("hex"));
  } catch (e) {
    if ((e as TransportStatusError).statusCode) {
      throw evalTransportError(e as TransportStatusError);
    }
    throw e;
  }
}

/**
 * Converts a signature in DER format to HEX format.
 * @param response Signature in DER format
 * @returns Signature in HEX format (64 bytes)
 */
export function DerToHexSignature(response: string): string {
  const ss = new u.StringStream(response);
  // The first byte is format. It is usually 0x30 (SEQ) or 0x31 (SET)
  // The second byte represents the total length of the DER module.
  ss.read(2);
  // Now we read each field off
  // Each field is encoded with a type byte, length byte followed by the data itself
  ss.read(1); // Read and drop the type
  const r = ss.readVarBytes();
  ss.read(1);
  const s = ss.readVarBytes();

  // We will need to ensure both integers are 32 bytes long
  const integers = [r, s].map((i) => {
    if (i.length < 64) {
      i = "0".repeat(i.length - 64) + i;
    }
    if (i.length > 64) {
      i = i.substr(-64);
    }
    return i;
  });

  return integers.join("");
}

function to8BitHex(num: number): string {
  const hex = num.toString(16);
  return "0".repeat(8 - hex.length) + hex;
}

export default {
  getDevicePaths,
  getPublicKey,
  getSignature,
};
