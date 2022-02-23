import { AminoSignResponse, encodeSecp256k1Signature, StdSignDoc } from "@cosmjs/amino";
import { AminoCarbonSigner, CarbonSDK, CarbonSignerTypes, Models } from "@carbon-sdk/index";
import { sortObject } from "@carbon-sdk/util/generic";
import { u } from "@cityofzion/neon-js-3";
import neo3Dapi from "neo3-dapi";
import { AddressUtils, ExternalUtils, TypeUtils } from "@carbon-sdk/util";

import * as O3Types from "./O3Types";

export class O3Wallet {
  public neo3Dapi: any;
  public address: string = "";
  private publicKey: string = "";

  private constructor(
    public readonly network: CarbonSDK.Network,
  ) {
    this.neo3Dapi = neo3Dapi;
  }

  public static instance(opts: O3Types.O3WalletOpts) {
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
      const publicKeyOutput = await this.getPublicKeyOutput() as O3Types.PublicKeyOutput;
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

      const scriptHash = u.reverseHex(token.bridgeAddress);
      const tokenScriptHash = u.reverseHex(token.tokenAddress);
      const nonce = Math.floor(Math.random() * 1000000);
      const scriptHashAccount = AddressUtils.N3Address.publicKeyToScriptHash(this.publicKey);

      const args: O3Types.Argument[] = [
        { type: O3Types.ArgTypes.Hash160, value: tokenScriptHash },
        { type: O3Types.ArgTypes.Hash160, value: fromAddress },
        { type: O3Types.ArgTypes.ByteArray, value: toAddress },
        { type: O3Types.ArgTypes.Integer, value: amount.toString(10) },
        { type: O3Types.ArgTypes.Integer, value: feeAmount.toString(10) },
        { type: O3Types.ArgTypes.ByteArray, value: "" },
        { type: O3Types.ArgTypes.Integer, value: nonce.toString() },
      ];

      const signers: O3Types.Signers[] = [{
        account: scriptHashAccount,
        scopes: 16,
      }]
      const output = await this.assembleAndInvoke("lock", scriptHash, args, false, signers);
      return output;
    } catch (err) {
      const type = (err as any).type;
      throw new Error(type ?? (err as Error)?.message ?? "");
    }
  }

  async assembleAndInvoke(operation: string, scriptHash: string, args: O3Types.Argument[], broadcastOverride: boolean = false, signers: O3Types.Signers[]) {
    try {
      const network = await this.getNetworks() as O3Types.GetNetworksOutput;
      const invokeMsg = {
        scriptHash,
        operation,
        args,
        network: network.defaultNetwork,
        broadcastOverride: broadcastOverride,
        signers,
      };
      return neo3Dapi.invoke(invokeMsg);
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
        newTokens[u.reverseHex(tokenAddress)] = indivToken;
        return newTokens;
      }, {});
      const argsBalance: O3Types.GetBalanceArgs = {
        params: [{
          address: this.address,
          contracts: Object.keys(tokenMap),
        }],
      };
      const response = await this.neo3Dapi.getBalance(argsBalance) as O3Types.BalanceResults;

      const balanceMap: TypeUtils.SimpleMap<ExternalUtils.TokensWithExternalBalance> = {};
      const balances: O3Types.Balance[] = response[this.address];
      balances.forEach((balance: O3Types.Balance) => {
        const tokenInfo = tokenMap[balance.contract];
        if (!tokenInfo) {
          return
        }

        balanceMap[tokenInfo.denom] = {
          ...tokenInfo,
          externalBalance: balance.amount,
        };
      })

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
