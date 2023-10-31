import { AddressOptions, N3Address, NEOAddress } from "@carbon-sdk/util/address";
import { getLedgerTransport } from "@carbon-sdk/util/ledger";
import { CONST } from "@cityofzion/neon-core-next";
import * as NeonN3Ledger from "./N3Ledger";
import Transport from "@ledgerhq/hw-transport";
import NeonLedger, { getNEOBIP44String } from "./NeonLedger";

const CONNECT_POLL_INTERVAL = 3000; // ms
const CONNECT_POLL_ATTEMPTS = 10; // attempts

type NeoVersion = "neo" | "n3";

interface NeoLedgerAdapter {
  getPublicKey(ledger: Transport, bipString: string): Promise<string>;
  getSignature(ledger: Transport, msg: string, bipString: string, magic?: number): Promise<string>;
}

const addressUtilForVersion = (version: NeoVersion) => {
  if (version === "n3") return N3Address;
  return NEOAddress;
};
const adapterForVersion = (version: NeoVersion): NeoLedgerAdapter => {
  if (version === "n3") return NeonN3Ledger;
  return NeonLedger;
};

export class NeoLedgerAccount {
  public options: AddressOptions = {};
  public readonly ledger: Transport;
  public readonly publicKey: string;
  public readonly scriptHash: string;
  public readonly displayAddress: string;
  public readonly version: NeoVersion;

  private static _connectPolling = false;

  private constructor(ledger: Transport, publicKey: string, version: "neo" | "n3" = "neo") {
    this.ledger = ledger;
    this.publicKey = publicKey;
    this.version = version;

    const neoAddressUtil = addressUtilForVersion(version);

    this.scriptHash = neoAddressUtil.publicKeyToScriptHash(publicKey);
    this.displayAddress = neoAddressUtil.publicKeyToAddress(publicKey);
  }

  static async connect(version: "neo" | "n3" = "neo") {
    let connectResult: [Transport, string] | null = null;
    let connectionAttempts = 0;

    NeoLedgerAccount._connectPolling = true;

    while (connectionAttempts < CONNECT_POLL_ATTEMPTS) {
      connectionAttempts++;

      // external signal to stop polling (e.g. timeout)
      // exit loop
      if (!NeoLedgerAccount._connectPolling) {
        break;
      }

      // attempt ccnnect
      connectResult = await new Promise((resolve, reject) => {
        let timedOut = false;

        // start timeout to kill connection when interval duration
        // is reached. Kills connection by resolving
        const timeoutId = setTimeout(() => {
          // set timeout to true so that if connection is successful
          // after timeout, it can be ignored.
          timedOut = true;

          // returns null result to indicate connection failure
          resolve(null);
        }, CONNECT_POLL_INTERVAL);

        NeoLedgerAccount.tryConnect()
          .then((result) => {
            // check for timeout signal, abandon result if timed out
            if (timedOut) return;

            // clear timeout timer, so it doesn't trigger timeout action
            clearTimeout(timeoutId);

            // return positive connection result
            resolve(result);
          })
          .catch(reject);
      });

      // connection successful, exit loop
      if (connectResult) {
        break;
      }
    }

    // failed to connect after specified timeout
    if (!connectResult) {
      throw new Error("Failed to connect with USB device, please try again.");
    }

    const [ledger, publicKey] = connectResult;
    return new NeoLedgerAccount(ledger, publicKey, version);
  }

  /**
   * Used to try connecting with ledger, executes a public key request
   * on USB device to detect NEO app connection
   */
  private static async tryConnect(version: NeoVersion = "neo"): Promise<[Transport, string]> {
    const bipString = getNEOBIP44String();
    const ledger = await getLedgerTransport();

    // get public key to assert that NEO app is open
    const ledgerAdapter = adapterForVersion(version);
    const publicKey = await ledgerAdapter.getPublicKey(ledger, bipString);

    return [ledger, publicKey];
  }

  configureAddress(options: AddressOptions) {
    this.options = options;
  }

  async privateKey(): Promise<string> {
    throw new Error("Cannot retrieve private key from Ledger");
  }

  async sign(msg: string, magic: number = CONST.MAGIC_NUMBER.MainNet) {
    const bipString = getNEOBIP44String();
    const ledger = this.useLedger();
    const ledgerAdapter = adapterForVersion(this.version);
    return await ledgerAdapter.getSignature(ledger, msg, bipString, magic);
  }

  private useLedger() {
    if (!this.ledger) {
      throw new Error("Ledger is not initialized");
    }

    return this.ledger;
  }
}
