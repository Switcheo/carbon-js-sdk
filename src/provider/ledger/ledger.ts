/* eslint-disable */
/* @ts-nocheck */

// this file was inserted to fix Chrome 91 killing web u2f
// original implementation: https://github.com/luniehq/cosmos-ledger

import { default as CosmosLedgerApp } from "ledger-cosmos-js";

import * as bech32 from "bech32";
import { ethers } from "ethers";
import { signatureImport } from "secp256k1";
import { signTransactionWrapper } from "@carbon-sdk/util/provider";
const semver = require("semver");

import { EthApp } from "./evm";

const INTERACTION_TIMEOUT = 120; // seconds to wait for user action on Ledger, currently is always limited to 60
const REQUIRED_COSMOS_APP_VERSION = "1.5.3";

/*
HD wallet derivation path (BIP44)
DerivationPath{44, 118, account, 0, index}
*/
const HDPATH = [44, 118, 0, 0, 0];
const BECH32PREFIX = `cosmos`;

class CosmosLedger {
  private readonly testModeAllowed: Boolean;
  private cosmosApp: any;
  private ethApp: EthApp | undefined = undefined
  private hdPath: Array<number>;
  private hrp: string;
  public platform: string;
  public userAgent: string;

  constructor(
    { testModeAllowed = false }: { testModeAllowed?: Boolean } = { testModeAllowed: false },
    hdPath: Array<number> = HDPATH,
    hrp: string = BECH32PREFIX
  ) {
    this.testModeAllowed = testModeAllowed;
    this.hdPath = hdPath;
    this.hrp = hrp;
    this.platform = navigator.platform; // set it here to overwrite in tests
    this.userAgent = navigator.userAgent; // set it here to overwrite in tests
  }

  public getHdPath() {
    return this.hdPath
  }

  // quickly test connection and compatibility with the Ledger device throwing away the connection
  async testDevice() {
    // poll device with low timeout to check if the device is connected
    const secondsTimeout = 3; // a lower value always timeouts
    await this.connect(secondsTimeout);
    this.cosmosApp = null;

    return this;
  }

  // check if the Ledger device is ready to receive signing requests
  private async isReady() {
    // check if the version is supported
    const version = await this.getCosmosAppVersion();

    if (!semver.gte(version, REQUIRED_COSMOS_APP_VERSION)) {
      const msg = `Outdated version: Please update Ledger Cosmos App to the latest version.`;
      throw new Error(msg);
    }

    // throws if not open
    await this.isCosmosAppOpen();
  }

  // connects to the device and checks for compatibility
  // the timeout is the time the user has to react to requests on the Ledger device
  // set a low timeout to only check the connection without preparing the connection for user input
  async connect(timeout = INTERACTION_TIMEOUT) {
    // assume well connection if connected once
    if (this.cosmosApp) return this;

    // check if browser is supported
    getBrowser(this.userAgent);

    const isChrome91 = parseInt(this.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)?.[2] ?? "0") >= 91;
    const isOpera95 = parseInt(this.userAgent.match(/OPR\/([0-9]+)\./)?.[1] ?? "0") >= 95;

    let transport;
    if (isWindows(this.platform) || (isChrome91 && !isOpera95)) {
      if (!navigator.hid) {
        throw new Error(
          `Your browser doesn't have HID enabled. Please enable this feature by visiting: chrome://flags/#enable-experimental-web-platform-features`
        );
      }

      const { default: TransportWebHID } = await import(/* webpackChunkName: "webhid" */ "@ledgerhq/hw-transport-webhid");
      transport = await TransportWebHID.create(timeout * 1000);
    }
    // OSX / Linux
    else {
      try {
        const { default: TransportWebUSB } = await import(/* webpackChunkName: "webusb" */ "@ledgerhq/hw-transport-webusb");
        transport = await TransportWebUSB.create(timeout * 1000);
      } catch (err) {
        if (err instanceof Error) {
          /* istanbul ignore next: specific error rewrite */
          if (err.message.trim().startsWith("No WebUSB interface found for your Ledger device")) {
            throw new Error(
              "Couldn't connect to a Ledger device. Please use Ledger Live to upgrade the Ledger firmware to version 1.5.5 or later."
            );
          }
          /* istanbul ignore next: specific error rewrite */
          if (err.message.trim().startsWith("Unable to claim interface")) {
            // apparently can't use it in several tabs in parallel
            throw new Error("Could not access Ledger device. Is it being used in another tab?");
          }
          /* istanbul ignore next: specific error rewrite */
          if (err.message.trim().startsWith("Not supported")) {
            // apparently can't use it in several tabs in parallel
            throw new Error("Your browser doesn't seem to support WebUSB yet. Try updating it to the latest version.");
          }
          /* istanbul ignore next: specific error rewrite */
          if (err.message.trim().startsWith("No device selected")) {
            // apparently can't use it in several tabs in parallel
            throw new Error(
              "You did not select a Ledger device. If you didn't see your Ledger, check if the Ledger is plugged in and unlocked."
            );
          }
        }

        // throw unknown error
        throw err;
      }
    }

    const cosmosLedgerApp = new CosmosLedgerApp(transport);
    this.cosmosApp = cosmosLedgerApp;

    // checks if the Ledger is connected and the app is open
    await this.isReady();

    return this;
  }

  async disconnect() {
    await this.cosmosApp.transport.close()
    await this.ethApp?.transport.close()
  }

  async getDeviceName() {
    const deviceName = await this.cosmosApp.transport?.deviceModel?.productName
    if (deviceName) {
      return deviceName
    }
    return undefined
  }

  // returns the cosmos app version as a string like "1.1.0"
  async getCosmosAppVersion() {
    await this.connect();

    const response = await this.cosmosApp.getVersion();
    await this.checkLedgerErrors(response);
    const { major, minor, patch, test_mode } = response;
    checkAppMode(this.testModeAllowed, test_mode);
    const version = versionString({ major, minor, patch });

    return version;
  }

  // checks if the cosmos app is open
  // to be used for a nicer UX
  async isCosmosAppOpen() {
    const appName = await this.getOpenApp();

    if (appName.toLowerCase() === `dashboard`) {
      throw new Error(`Please open the Cosmos Ledger app on your Ledger device.`);
    }
    if (appName.toLowerCase() !== `cosmos`) {
      throw new Error(`Please close ${appName} and open the Cosmos Ledger app on your Ledger device.`);
    }
  }

  async getOpenApp() {
    await this.connect();

    const response = await this.cosmosApp.appInfo();
    await this.checkLedgerErrors(response);
    const { appName } = response;

    return appName;
  }

  // returns the public key from the Ledger device as a Buffer
  async getPubKey() {
    await this.connect();

    const response = await this.cosmosApp.publicKey(this.hdPath);
    await this.checkLedgerErrors(response);
    return response.compressed_pk;
  }

  // returns the cosmos address from the Ledger as a string
  async getCosmosAddress() {
    await this.connect();

    const pubKey = await this.getPubKey();
    const res = await getBech32FromPK(this.hrp, pubKey);
    return res;
  }

  async generateCosmosAddress(hdPath: Array<number>) {
    await this.connect();
    const pubKey = await this.cosmosApp.publicKey(hdPath);
    await this.checkLedgerErrors(pubKey);
    const compressedPk = pubKey.compressed_pk;
    const response = await getBech32FromPK(this.hrp, compressedPk);

    return response;
  }

  async changeBIP44Path(hdPath: Array<number>, hrp: string) {
    try {
      this.hdPath = hdPath;
      this.hrp = hrp;
    } catch (error) {
      throw new Error(`error`);
    }
    return;
  }

  // triggers a confirmation request of the cosmos address on the Ledger device
  async confirmLedgerAddress() {
    await this.connect();
    const cosmosAppVersion = await this.getCosmosAppVersion();

    if (semver.lt(cosmosAppVersion, REQUIRED_COSMOS_APP_VERSION)) {
      // we can't check the address on an old cosmos app
      return;
    }

    const response = await this.cosmosApp.showAddressAndPubKey(this.hdPath, this.hrp);
    await this.checkLedgerErrors(response, {
      rejectionMessage: "Displayed address was rejected",
    });
  }

  // create a signature for any message
  // in Cosmos this should be a serialized StdSignMsg
  // this is ideally generated by the @lunie/cosmos-js library
  async sign(signMessage: string) {
    await this.connect();
    const response = await signTransactionWrapper(async () => {
      return await this.cosmosApp.sign(this.hdPath, signMessage);
    })
    await this.checkLedgerErrors(response);
    // we have to parse the signature from Ledger as it's in DER format
    const parsedSignature = signatureImport(response.signature);
    return parsedSignature;
  }

  // parse Ledger errors in a more user friendly format
  /* istanbul ignore next: maps a bunch of errors */
  private async checkLedgerErrors(
    { error_message, device_locked }: { error_message: string; device_locked: Boolean },
    { timeoutMessag = "Connection timed out. Please try again.", rejectionMessage = "User rejected the transaction" } = {}
  ) {
    if (device_locked) {
      throw new Error(`Ledger's screensaver mode is on`);
    }
    if (error_message !== 'No errors') {
      await this.disconnect()
    }
    switch (error_message) {
      case `U2F: Timeout`:
        throw new Error(timeoutMessag);
      case `App does not seem to be open`:
        throw new Error(`Please open the Cosmos App on your Ledger device`);
      case `Command not allowed`:
        throw new Error(`Transaction rejected`);
      case `Transaction rejected`:
        throw new Error(rejectionMessage);
      case `Unknown Status Code: 26628`:
        throw new Error(`Ledger's screensaver mode is on`);
      case `Unknown Status Code: 28161`:
        throw new Error(`Please open the Cosmos App on your Ledger device`);
      case `Instruction not supported`:
        throw new Error(`Your Cosmos Ledger App is not up to date. Please update to version ${REQUIRED_COSMOS_APP_VERSION}.`);
      case `No errors`:
        // do nothing
        break;
      default:
        throw new Error(`Ledger Native Error: ${error_message}`);
    }
  }

  public async initEthApp(app: EthApp) {
    this.ethApp = app
  }
}

// stiched version string from Ledger app version object
function versionString({ major, minor, patch }: { major: Number; minor: Number; patch: Number }) {
  return `${major}.${minor}.${patch}`;
}

// wrapper to throw if app is in testmode but it is not allowed to be in testmode
export const checkAppMode = (testModeAllowed: Boolean, testMode: Boolean) => {
  if (testMode && !testModeAllowed) {
    throw new Error(`DANGER: The Cosmos Ledger app is in test mode and shouldn't be used on mainnet!`);
  }
};

// doesn't properly work in ledger-cosmos-js
function getBech32FromPK(hrp: any, pk: any) {
  if (pk.length !== 33) {
    throw new Error("expected compressed public key [31 bytes]");
  }
  const hashSha256 = ethers.utils.sha256(pk);
  const hashRip = ethers.utils.ripemd160(hashSha256);
  return bech32.encode(hrp, bech32.toWords(Buffer.from(hashRip.replace(/^0x/, ""), "hex")));
}

function isWindows(platform: string) {
  return platform.indexOf("Win") > -1;
}

function getBrowser(userAgent: string) {
  const ua = userAgent.toLowerCase();
  const isChrome = /chrome|crios/.test(ua) && !/edge\//.test(ua);
  const isBrave = isChrome && !(window as any)?.google;
  const isOpera = /opr/.test(ua);

  if (!isChrome && !isBrave && !isOpera) {
    throw new Error("Your browser doesn't support Ledger devices.");
  }

  if (isBrave) return "brave";
  else if (isOpera) return "opera";
  else return "chrome";
}


export default CosmosLedger;
