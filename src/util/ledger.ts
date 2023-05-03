import Transport from "@ledgerhq/hw-transport";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";

export function isBrowserSupported(): boolean {
  if (!navigator) throw new Error("this function is only supported for use on browsers");

  const windowObject = window as any;
  const ua = navigator.userAgent.toLowerCase();
  const isChrome = /chrome|crios/.test(ua) && !/edge|opr\//.test(ua);
  const isBrave = isChrome && !windowObject.google;
  const isOpera = /opr/.test(ua);

  if (!isChrome && !isBrave && !isOpera) {
    throw new Error("Your browser doesn't support Ledger devices.");
  }

  return true;
}

async function getDevicePaths(ledgerLibrary: typeof TransportWebHID): Promise<ReadonlyArray<HIDDevice>> {
  const supported = await ledgerLibrary.isSupported();
  if (!supported) {
    throw new Error("Your computer does not support the ledger!");
  }
  return await ledgerLibrary.list();
}

async function getWebHIDTransport(): Promise<Transport> {
  try {
    return await TransportWebHID.create();
  } catch (error) {
    if ((error as Error).message !== "The device is already open.") throw error;

    const devices = await getDevicePaths(TransportWebHID);
    const transport = new TransportWebHID(devices[0]);
    return transport as Transport;
  }
}

export async function getLedgerTransport(): Promise<Transport> {
  return getWebHIDTransport();
}
