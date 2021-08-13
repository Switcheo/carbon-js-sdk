import { registry } from "@carbon-sdk/codec";
import { DEFAULT_FEE, DEFAULT_NETWORK, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { AddressUtils, CarbonTx, GenericUtils } from "@carbon-sdk/util";
import { StdSignature } from "@cosmjs/amino";
import { AccountData, DirectSignResponse, EncodeObject, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { BroadcastTxResponse, isBroadcastTxFailure, SignerData, SigningStargateClient, StdFee } from "@cosmjs/stargate";
import { SignDoc, TxRaw } from "@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx";
import { CarbonPrivateKeySigner, CarbonSigner } from "./CarbonSigner";

export type CarbonWalletInitOpts = {
  network?: Network;
  config?: Partial<NetworkConfig>;
} & (
    | {
      // connect with mnemonic
      mnemonic: string;
      privateKey?: string | Buffer;
      signer?: CarbonSigner;
      publicKeyBase64?: string;
    }
    | {
      // connect with private key
      mnemonic?: string;
      privateKey: string | Buffer;
      signer?: CarbonSigner;
      publicKeyBase64?: string;
    }
    | {
      // connect with custom signer
      mnemonic?: string;
      privateKey?: string | Buffer;
      signer: CarbonSigner;
      publicKeyBase64: string;
    }
  );

export class CarbonWallet implements OfflineDirectSigner {
  network: Network;

  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;

  mnemonic?: string;
  privateKey?: Buffer;
  signer: CarbonSigner;
  bech32Address: string;
  publicKey: Buffer;

  constructor(opts: CarbonWalletInitOpts) {
    this.network = opts.network ?? DEFAULT_NETWORK;
    this.networkConfig = NetworkConfigs[this.network];
    this.configOverride = opts.config ?? {};
    this.updateNetwork(this.network);

    this.mnemonic = opts.mnemonic;
    if (this.mnemonic) {
      this.privateKey = AddressUtils.SWTHAddress.mnemonicToPrivateKey(this.mnemonic);
    } else if (opts.privateKey) {
      this.privateKey = AddressUtils.stringOrBufferToBuffer(opts.privateKey)!;
    }

    if (opts.signer) {
      this.signer = opts.signer;
      this.publicKey = Buffer.from(opts.publicKeyBase64!, "base64");
    } else if (this.privateKey) {
      this.signer = new CarbonPrivateKeySigner(this.privateKey);
      this.publicKey = AddressUtils.SWTHAddress.privateToPublicKey(this.privateKey);
    } else {
      throw new Error("cannot instantiate wallet signer");
    }

    this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, {
      network: this.network,
    });
  }

  public static withPrivateKey(privateKey: string | Buffer, opts: Omit<CarbonWalletInitOpts, "privateKey"> = {}) {
    return new CarbonWallet({
      ...opts,
      privateKey,
    });
  }

  public static withMnemonic(mnemonic: string, opts: Omit<CarbonWalletInitOpts, "mnemonic"> = {}) {
    return new CarbonWallet({
      ...opts,
      mnemonic,
    });
  }

  public static withSigner(signer: CarbonSigner, publicKeyBase64: string, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    return new CarbonWallet({
      ...opts,
      signer,
      publicKeyBase64,
    });
  }

  public updateNetwork(network: Network): CarbonWallet {
    this.network = network;
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], this.configOverride);

    return this;
  }

  async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo = "",
    explicitSignerData?: SignerData,
  ): Promise<BroadcastTxResponse> {
    const endpoint = this.networkConfig.rpcURL;
    const signingClient = await SigningStargateClient.connectWithSigner(endpoint, this, {
      registry,
    });
    const txRaw = await signingClient.sign(signerAddress, messages, fee, memo, explicitSignerData);
    const txBytes = TxRaw.encode(txRaw).finish();
    return signingClient.broadcastTx(txBytes, signingClient.broadcastTimeoutMs, signingClient.broadcastPollIntervalMs);
  }

  async sendTxs(msgs: EncodeObject[], opts: CarbonTx.SignTxOpts): Promise<BroadcastTxResponse> {
    const response = await this.signAndBroadcast(
      this.bech32Address,
      msgs,
      opts.fee ?? DEFAULT_FEE,
      opts.memo ?? "",
      opts.explicitSignerData,
    );

    if (isBroadcastTxFailure(response)) {
      // tx failed
      console.error(response);
      throw new Error(`[${response.code}] ${response.rawLog}`);
    }

    return response;
  }

  async sendTx(msg: EncodeObject, opts: CarbonTx.SignTxOpts = CarbonTx.DEFAULT_SIGN_OPTS): Promise<BroadcastTxResponse> {
    return this.sendTxs([msg], opts);
  }

  sign(data: Buffer): StdSignature {
    const signatureBuffer = this.signer.sign(data);
    const signature: StdSignature = {
      pub_key: {
        type: "tendermint/PubKeySecp256k1",
        value: this.publicKey.toString("base64"),
      },
      signature: signatureBuffer.toString("base64"),
    };
    return signature;
  }

  getAccounts(): Promise<AccountData[]> {
    return Promise.resolve([
      {
        address: this.bech32Address,
        algo: "secp256k1",
        pubkey: this.publicKey,
      },
    ]);
  }

  signDirect(_: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    const signBytes = SignDoc.encode(signDoc).finish();
    const stdSignature = this.sign(Buffer.from(signBytes));
    return Promise.resolve({
      signature: stdSignature,
      signed: signDoc,
    });
  }
}
