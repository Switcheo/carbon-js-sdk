import { CarbonQueryClient } from "@carbon-sdk/clients";
import { MsgFee, registry } from "@carbon-sdk/codec";
import { DEFAULT_GAS, DEFAULT_NETWORK, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { ProviderAgent } from "@carbon-sdk/constant/walletProvider";
import { CosmosLedger } from "@carbon-sdk/provider";
import { AddressUtils, CarbonTx, GenericUtils } from "@carbon-sdk/util";
import { bnOrZero, BN_ZERO } from "@carbon-sdk/util/number";
import { TxFeeTypeDefaultKey, TxFeeTypeMap } from "@carbon-sdk/util/tx";
import { SimpleMap } from "@carbon-sdk/util/type";
import { StdSignature } from "@cosmjs/amino";
import { AccountData, DirectSignResponse, EncodeObject, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { BroadcastTxResponse as BroadcastTxBlockResponse, isBroadcastTxFailure, SigningStargateClient } from "@cosmjs/stargate";
import { SignDoc, TxRaw } from "@cosmjs/stargate/build/codec/cosmos/tx/v1beta1/tx";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc/build/tendermint34/responses";
import BigNumber from "bignumber.js";
import { CarbonLedgerSigner, CarbonNonSigner, CarbonPrivateKeySigner, CarbonSigner, CarbonSignerTypes } from "./CarbonSigner";


export interface CarbonWalletGenericOpts {
  network?: Network;
  config?: Partial<NetworkConfig>;
  providerAgent?: ProviderAgent | string;

  /**
   * Optional callback that will be called before signing is requested/executed.
   */
  onRequestSign?: CarbonWallet.OnRequestSignCallback;

  /**
   * Optional callback that will be called when signing is complete.
   */
  onSignComplete?: CarbonWallet.OnSignCompleteCallback;
}

export type CarbonWalletInitOpts = CarbonWalletGenericOpts & (
  | {
    // connect with mnemonic
    mnemonic: string;
    privateKey?: string | Buffer;
    signer?: CarbonSigner;
    publicKeyBase64?: string;
    bech32Address?: string;
  }
  | {
    // connect with private key
    mnemonic?: string;
    privateKey: string | Buffer;
    signer?: CarbonSigner;
    publicKeyBase64?: string;
    bech32Address?: string;
  }
  | {
    // connect with custom signer
    mnemonic?: string;
    privateKey?: string | Buffer;
    signer: CarbonSigner;
    publicKeyBase64: string;
    bech32Address?: string;
  }
  | {
    // connect with address (view only)
    mnemonic?: string;
    privateKey?: string | Buffer;
    signer?: CarbonSigner;
    publicKeyBase64?: string;
    bech32Address: string;
  }
);

export type BroadcastTxResponse = BroadcastTxSyncResponse | BroadcastTxBlockResponse

export class CarbonWallet implements OfflineDirectSigner {
  network: Network;

  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;

  onRequestSign?: CarbonWallet.OnRequestSignCallback
  onSignComplete?: CarbonWallet.OnSignCompleteCallback

  mnemonic?: string;
  privateKey?: Buffer;
  signer: CarbonSigner;
  bech32Address: string;
  publicKey: Buffer;
  query?: CarbonQueryClient;

  txFees?: SimpleMap<BigNumber>;
  initialized: boolean = false;

  // for analytics
  providerAgent?: ProviderAgent | string

  constructor(opts: CarbonWalletInitOpts) {
    const network = opts.network ?? DEFAULT_NETWORK;
    this.network = network
    this.networkConfig = NetworkConfigs[network];
    this.configOverride = opts.config ?? {};
    this.providerAgent = opts.providerAgent;
    this.updateNetwork(network);

    this.onRequestSign = opts.onRequestSign;
    this.onSignComplete = opts.onSignComplete;

    this.mnemonic = opts.mnemonic;
    if (this.mnemonic) {
      this.privateKey = AddressUtils.SWTHAddress.mnemonicToPrivateKey(this.mnemonic);
    } else if (opts.privateKey) {
      this.privateKey = AddressUtils.stringOrBufferToBuffer(opts.privateKey)!;
    }

    const addressOpts: AddressUtils.SWTHAddressOptions = {
      network,
      ...this.configOverride.Bech32Prefix && {
        bech32Prefix: this.configOverride.Bech32Prefix,
      },
    };

    if (opts.signer) {
      this.signer = opts.signer;
      this.publicKey = Buffer.from(opts.publicKeyBase64!, "base64");

      this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, addressOpts);
    } else if (this.privateKey) {
      this.signer = new CarbonPrivateKeySigner(this.privateKey);
      this.publicKey = AddressUtils.SWTHAddress.privateToPublicKey(this.privateKey);

      this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, addressOpts);
    } else if (opts.bech32Address) {
      // read-only wallet, without private/public keys
      this.signer = new CarbonNonSigner();
      this.publicKey = Buffer.from([]);
      this.bech32Address = opts.bech32Address;
    } else {
      throw new Error("cannot instantiate wallet signer");
    }
  }

  public static withPrivateKey(
    privateKey: string | Buffer,
    opts: Omit<CarbonWalletInitOpts, "privateKey"> = {},
  ) {
    return new CarbonWallet({
      ...opts,
      privateKey,
    });
  }

  public static withMnemonic(
    mnemonic: string,
    opts: Omit<CarbonWalletInitOpts, "mnemonic"> = {},
  ) {
    return new CarbonWallet({
      ...opts,
      mnemonic,
    });
  }

  public static withLedger(
    cosmosLedger: CosmosLedger,
    publicKeyBase64: string,
    opts: Omit<CarbonWalletInitOpts, "signer"> = {},
  ) {
    const signer = new CarbonLedgerSigner(cosmosLedger);
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, opts);
    return wallet;
  }

  public static withSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    opts: Omit<CarbonWalletInitOpts, "signer"> = {},
  ) {
    return new CarbonWallet({
      ...opts,
      signer,
      publicKeyBase64,
    });
  }

  public static withAddress(
    bech32Address: string,
    opts: Partial<CarbonWalletInitOpts> = {}
  ) {
    return new CarbonWallet({
      ...opts,
      bech32Address,
    })
  }

  public async initialize(queryClient: CarbonQueryClient): Promise<CarbonWallet> {
    this.query = queryClient;

    await this.reloadTxFees();

    this.initialized = true;
    return this;
  }

  public updateNetwork(network: Network): CarbonWallet {
    this.network = network;
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], this.configOverride);

    return this;
  }

  async broadcastTx(
    signingClient: SigningStargateClient,
    tx: Uint8Array,
    opts: CarbonTx.BroadcastTxOpts,
  ): Promise<BroadcastTxResponse> {
    const {
      mode = CarbonTx.BroadcastTxMode.BroadcastTxBlock,
      pollIntervalMs = 3_000,
      timeoutMs = 60_000,
    } = opts;

    switch (mode) {
      case CarbonTx.BroadcastTxMode.BroadcastTxSync:
        const tmClient = await Tendermint34Client.connect(this.networkConfig.rpcUrl);
        return tmClient.broadcastTxSync({ tx })
      case CarbonTx.BroadcastTxMode.BroadcastTxBlock:
        const response = await signingClient.broadcastTx(tx, timeoutMs, pollIntervalMs)
        if (isBroadcastTxFailure(response)) {
          // tx failed
          console.error(response);
          throw new Error(`[${response.code}] ${response.rawLog}`);
        }
        return response;
      default:
        throw new Error(`unsupported BroadcastTxMode: ${mode}`)
    }
  }

  async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    opts?: CarbonTx.SignAndBroadcastOpts,
  ): Promise<BroadcastTxResponse> {
    const {
      memo = "",
      explicitSignerData,
      ...broadcastOpts
    } = opts ?? {};

    let fee = opts?.fee;

    if (!fee) {
      // compute required fee
      const totalFeeCost = messages.reduce((totalFee, message) => {
        const msgFee = this.getFee(message.typeUrl);
        return msgFee.gt(0) ? totalFee.plus(msgFee) : totalFee;
      }, BN_ZERO);
      fee = {
        amount: [{
          amount: totalFeeCost.toString(10),
          denom: "swth",
        }],
        gas: DEFAULT_GAS.times(messages.length).toString(10),
      };
    }


    const endpoint = this.networkConfig.rpcUrl;
    const signingClient = await SigningStargateClient.connectWithSigner(endpoint, this, {
      registry,
    });
    const txRaw = await signingClient.sign(signerAddress, messages, fee, memo, explicitSignerData);
    const txBytes = TxRaw.encode(txRaw).finish();

    return this.broadcastTx(signingClient, txBytes, {
      mode: broadcastOpts.mode,
      pollIntervalMs: broadcastOpts.pollIntervalMs ?? signingClient.broadcastPollIntervalMs,
      timeoutMs: broadcastOpts.pollIntervalMs ?? signingClient.broadcastTimeoutMs,
    });
  }

  async sendTxs(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts): Promise<BroadcastTxResponse> {
    return this.signAndBroadcast(this.bech32Address, msgs, opts);
  }

  async sendTx(msg: EncodeObject, opts?: CarbonTx.SignTxOpts): Promise<BroadcastTxResponse> {
    return this.sendTxs([msg], opts);
  }

  async sign(data: SignDoc): Promise<StdSignature> {
    const signatureBuffer = await this.signer.sign(data);
    const signature: StdSignature = {
      pub_key: {
        type: "tendermint/PubKeySecp256k1",
        value: this.publicKey.toString("base64"),
      },
      signature: signatureBuffer.toString("base64"),
    };
    return signature;
  }

  async signDirect(_: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    try {
      await this.onRequestSign?.(signDoc)
    } catch (error) {
      console.error("sign request callback error")
      console.error(error)
    }

    let stdSignature: StdSignature | null = null
    try {
      stdSignature = await this.sign(signDoc);

      return {
        signature: stdSignature,
        signed: signDoc,
      };
    } finally {
      try {
        await this.onSignComplete?.(stdSignature)
      } catch (error) {
        console.error("sign complete callback error")
        console.error(error)
      }
    }
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

  isSigner(signerType: CarbonSignerTypes) {
    return this.signer.type === signerType;
  }

  isLedgerSigner() {
    return this.isSigner(CarbonSignerTypes.Ledger);
  }

  isPrivateKeySigner() {
    return this.isSigner(CarbonSignerTypes.PrivateKey);
  }

  isBrowserInjectedSigner() {
    return this.isSigner(CarbonSignerTypes.BrowserInjected);
  }

  public getFee(msgTypeUrl: string): BigNumber {
    if (!this.txFees) {
      console.warn("tx fees not initialized");
    }

    const feeKey = TxFeeTypeMap[msgTypeUrl];

    return this.txFees?.[feeKey] ?? this.txFees?.[TxFeeTypeDefaultKey] ?? BN_ZERO;
  }

  public updateTxFees(msgFees: MsgFee[]) {
    const feesMap: SimpleMap<BigNumber> = msgFees.reduce((accum, fee) => {
      accum[fee.msgType] = bnOrZero(fee.fee);
      return accum;
    }, {} as SimpleMap<BigNumber>);

    this.txFees = feesMap;
  }

  public async reloadTxFees() {
    const queryClient = this.getQueryClient();
    const response = await queryClient.fee.MsgFeeAll({});
    this.updateTxFees(response.msgFees);
  }

  private getQueryClient(): CarbonQueryClient {
    if (!this.query)
      throw new Error("wallet not initialized");
    return this.query
  }
}

export namespace CarbonWallet {
  export type OnRequestSignCallback = (doc: SignDoc) => void | Promise<void>
  export type OnSignCompleteCallback = (signature: StdSignature | null) => void | Promise<void>
}
