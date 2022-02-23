import { AminoSignResponse, encodeSecp256k1Signature, StdSignDoc } from "@cosmjs/amino";
import { AminoCarbonSigner, CarbonSDK, CarbonSignerTypes } from "@carbon-sdk/index";
import { sortObject } from "@carbon-sdk/util/generic";
import neo3Dapi from "neo3-dapi";

export enum Events {
  Ready = neo3Dapi.Constants.EventName.READY,
  AccountChanged = neo3Dapi.Constants.EventName.ACCOUNT_CHANGED,
  Connected = neo3Dapi.Constants.EventName.CONNECTED,
  Disconnected = neo3Dapi.Constants.EventName.DISCONNECTED,
  NetworkChanged = neo3Dapi.Constants.EventName.NETWORK_CHANGED,
  BlockChanged = neo3Dapi.Constants.EventName.BLOCK_HEIGHT_CHANGED,
  TxConfirmed = neo3Dapi.Constants.EventName.TRANSACTION_CONFIRMED
}

export enum Errors {
  Denied = "CONNECTION_DENIED",
  NoProvider = "NO_PROVIDER",
  Rpc = "RPC_ERROR",
  MalformedInput = "MALFORMED_INPUT",
  Cancelled = "CANCELED",
  InsufficientFunds = "INSUFFICIENT_FUNDS",
}

export interface GetNetworksOutput {
  chainId?: number
  networks: string[];
  defaultNetwork: string;
}

export interface Account {
  address: string;
  label: string;
}

export interface PublicKeyOutput {
  publicKey: string;
  address: string;
}

export interface O3WalletOpts {
  network: CarbonSDK.Network;
}

export class O3Wallet {
  public neo3Dapi: any;
  public address: string = "";

  private constructor(
    public readonly network: CarbonSDK.Network,
  ) {
    this.neo3Dapi = neo3Dapi;
  }

  public static instance(opts: O3WalletOpts) {
    const { network } = opts;

    return new O3Wallet(network);
  }

  assembleSigner(bech32Address: string, pubKey: Uint8Array): AminoCarbonSigner {
    return {
      type: CarbonSignerTypes.BrowserInjected,
      signAmino: async (_: string, doc: StdSignDoc): Promise<AminoSignResponse> => {
        const msg = JSON.stringify(sortObject(doc));
        const signBytes = await this.neo3Dapi.signMessage(msg);
        const signature = encodeSecp256k1Signature(pubKey, signBytes);
        return {
          signed: doc,
          signature,
        };
      },
      getAccounts: async () => {
        return [
          {
            algo: "secp256k1",
            address: bech32Address,
            pubkey: pubKey,
          },
        ];
      },
    };
  }

  async connectWallet() {
    try {
      const publicKeyOutput = await this.getPublicKeyOutput() as PublicKeyOutput;
      this.address = publicKeyOutput.address;
      return publicKeyOutput;
    } catch (err) {
      const type = (err as any).type ?? "";
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  disconnectWallet() {
    this.address = "";
  }

  isConnected() {
    return this.address !== "";
  }

  async getNetworks() {
    return this.neo3Dapi.getNetworks();
  }

  async getPublicKeyOutput() {
    return this.neo3Dapi.getPublicKey();
  }

  async getAccount() {
    return this.neo3Dapi.getAccount();
  }

  getDAPI()   {
    return this.neo3Dapi;
  }
}

export default O3Wallet;
