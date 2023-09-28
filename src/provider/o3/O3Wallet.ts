import { NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { AminoCarbonSigner, CarbonSDK, Models } from "@carbon-sdk/index";
import { AddressUtils, ExternalUtils, TypeUtils } from "@carbon-sdk/util";
import { sortObject } from "@carbon-sdk/util/generic";
import * as Neon from "@cityofzion/neon-core-next";
import { AminoSignResponse, encodeSecp256k1Signature, StdSignDoc } from "@cosmjs/amino";
import neoDapi from "neo-dapi";
import neo3Dapi from "neo3-dapi";

import { CarbonSignerTypes } from "@carbon-sdk/wallet";
import * as O3Types from "./O3Types";

export class O3Wallet {
  public neo3Dapi: any; // for Neo N3
  public neo2Dapi: any; // for Neo Legacy
  public neoNetwork: O3Types.AcceptedNets | undefined;

  public networkConfig: NetworkConfig;
  public address: string = "";
  private publicKey: string = "";

  private constructor(public readonly network: CarbonSDK.Network) {
    const networkConfig = NetworkConfigs[network];
    this.networkConfig = networkConfig;

    this.neo2Dapi = neoDapi;
    this.neo3Dapi = neo3Dapi;
  }

  public static instance(opts: O3Types.O3WalletOpts) {
    const { network } = opts;

    return new O3Wallet(network);
  }

  assembleSigner(bech32Address: string, pubKey: Uint8Array): AminoCarbonSigner {
    const dapi = this.getDAPI();
    return {
      type: CarbonSignerTypes.BrowserInjected,
      signAmino: async (_: string, doc: StdSignDoc): Promise<AminoSignResponse> => {
        const msg = JSON.stringify(sortObject(doc));
        const signBytes = await dapi.signMessage(msg);
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
      sendEvmTransaction: async () => {
        throw new Error("signing not available");
      }
    };
  }

  async connectWallet() {
    try {
      const publicKeyOutput = (await this.getPublicKeyOutput()) as O3Types.PublicKeyOutput;
      this.address = publicKeyOutput.address;
      this.publicKey = publicKeyOutput.publicKey;
      return publicKeyOutput;
    } catch (err) {
      const type = (err as any).type ?? "";
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  disconnectWallet() {
    this.address = "";
    this.publicKey = "";
    this.neoNetwork = undefined;
  }

  isConnected() {
    return this.address !== "";
  }

  async lockDeposit(lockParams: O3Types.LockDepositParams) {
    const { token, amount, feeAmount, toAddress, fromAddress } = lockParams;

    try {
      if (this.publicKey === "") {
        throw new Error("O3 wallet is not connected. Please reconnect and perform this transaction again.");
      }

      const scriptHash = Neon.u.reverseHex(token.bridgeAddress);
      const tokenScriptHash = Neon.u.reverseHex(token.tokenAddress);
      const nonce = Math.floor(Math.random() * 1000000);
      const scriptHashAccount =
        this.neoNetwork === "N3MainNet"
          ? AddressUtils.N3Address.publicKeyToScriptHash(this.publicKey)
          : AddressUtils.NEOAddress.publicKeyToScriptHash(this.publicKey);

      const args: O3Types.Argument[] = [
        { type: O3Types.ArgTypes.Hash160, value: tokenScriptHash },
        { type: O3Types.ArgTypes.Hash160, value: fromAddress },
        { type: O3Types.ArgTypes.ByteArray, value: toAddress },
        { type: O3Types.ArgTypes.Integer, value: amount.toString(10) },
        { type: O3Types.ArgTypes.Integer, value: feeAmount.toString(10) },
        { type: O3Types.ArgTypes.ByteArray, value: Neon.u.HexString.fromHex(this.networkConfig.feeAddress, true) },
        { type: O3Types.ArgTypes.Integer, value: nonce.toString() },
      ];

      const signers: O3Types.Signers[] = [
        {
          account: scriptHashAccount,
          scopes: 16,
        },
      ];
      const output = await this.assembleAndInvoke("lock", scriptHash, args, false, signers);
      return output;
    } catch (err) {
      const type = (err as any).type;
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  async assembleAndInvoke(
    operation: string,
    scriptHash: string,
    args: O3Types.Argument[],
    broadcastOverride: boolean = false,
    signers: O3Types.Signers[]
  ) {
    try {
      const dApi = this.getDAPI();
      const invokeMsg = {
        scriptHash,
        operation,
        args,
        network: this.neoNetwork,
        broadcastOverride: broadcastOverride,
        ...(this.neoNetwork === "N3MainNet" && { signers }),
      };
      return dApi.invoke(invokeMsg);
    } catch (err) {
      const type = (err as any).type;
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  async getWalletBalances(tokens: Models.Token[]) {
    try {
      if (!this.isConnected()) {
        throw new Error("O3 wallet is not connected. Please reconnect and perform this transaction again.");
      }

      const tokenMap = tokens.reduce((tokens: TypeUtils.SimpleMap<Models.Token>, indivToken: Models.Token) => {
        const newTokens = tokens;
        const tokenAddress = indivToken.tokenAddress;
        newTokens[tokenAddress] = indivToken;
        return newTokens;
      }, {});
      const argsBalance: O3Types.GetBalanceArgs = {
        params: [
          {
            address: this.address,
            contracts: Object.keys(tokenMap).map((token: string) => `0x${token}`),
          },
        ],
      };
      const dapi = this.getDAPI();
      const response = (await dapi.getBalance(argsBalance)) as O3Types.BalanceResults;

      const balanceMap: TypeUtils.SimpleMap<ExternalUtils.TokensWithExternalBalance> = {};
      const balances: O3Types.Balance[] = response[this.address];
      balances.forEach((balance: O3Types.Balance) => {
        const assetId = balance.assetID?.replace("0x", "") ?? balance.contract.replace("0x", "");
        const tokenContract = Neon.u.reverseHex(assetId);
        const tokenInfo = tokenMap[tokenContract];
        if (!tokenInfo) {
          return;
        }

        balanceMap[tokenInfo.denom] = {
          ...tokenInfo,
          externalBalance: balance.amount,
        };
      });

      return balanceMap;
    } catch (err) {
      const type = (err as any).type;
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  async getNetworks() {
    return this.neo3Dapi.getNetworks();
  }

  async getPublicKeyOutput() {
    const dapi = this.getDAPI();
    return dapi.getPublicKey();
  }

  async getAccount() {
    const dapi = this.getDAPI();
    return dapi.getAccount();
  }

  getDAPI() {
    return this.neoNetwork === "N3MainNet" ? this.neo3Dapi : this.neo2Dapi;
  }

  setNetwork(network: string) {
    if (network === "N3MainNet" || network === "MainNet") {
      this.neoNetwork = network;
    } else {
      this.neoNetwork = undefined;
    }
  }
}

export default O3Wallet;
