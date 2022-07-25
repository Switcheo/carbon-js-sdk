import { CarbonQueryClient } from "@carbon-sdk/clients";
import { MsgFee } from "@carbon-sdk/codec";
import { DEFAULT_GAS, DEFAULT_NETWORK, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { ProviderAgent } from "@carbon-sdk/constant/walletProvider";
import { CosmosLedger } from "@carbon-sdk/provider";
import { AddressUtils, CarbonTx, GenericUtils } from "@carbon-sdk/util";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { QueueManager } from "@carbon-sdk/util/generic";
import { bnOrZero, BN_ZERO } from "@carbon-sdk/util/number";
import { BroadcastTxMode, CarbonSignerData, TxFeeTypeDefaultKey } from "@carbon-sdk/util/tx";
import { SimpleMap } from "@carbon-sdk/util/type";
import { encodeSecp256k1Signature, StdSignature } from "@cosmjs/amino";
import { EncodeObject, OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import { Account, DeliverTxResponse, isDeliverTxFailure } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc/build/tendermint34/responses";
import BigNumber from "bignumber.js";
import { TxRaw as StargateTxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import fetch from "node-fetch";
import { CarbonLedgerSigner, CarbonNonSigner, CarbonPrivateKeySigner, CarbonSigner, CarbonSignerTypes } from "./CarbonSigner";
import { CarbonSigningClient } from "./CarbonSigningClient";

export interface CarbonWalletGenericOpts {
  tmClient?: Tendermint34Client;
  network?: Network;
  config?: Partial<NetworkConfig>;
  providerAgent?: ProviderAgent | string;
  defaultTimeoutBlocks?: number; // tx mempool ttl (timeoutHeight)
  disableRetryOnSequenceError?: boolean; // disable auto retry on nonce error

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
    customSigner?: OfflineSigner & OfflineDirectSigner;
  }
  | {
    // connect with private key
    mnemonic?: string;
    privateKey: string | Buffer;
    signer?: CarbonSigner;
    publicKeyBase64?: string;
    bech32Address?: string;
    customSigner?: OfflineSigner & OfflineDirectSigner;
  }
  | {
    // connect with custom signer
    mnemonic?: string;
    privateKey?: string | Buffer;
    signer: CarbonSigner;
    publicKeyBase64: string;
    bech32Address?: string;
    customSigner?: OfflineSigner & OfflineDirectSigner; // to allow adding of keplr offline signer
  }
  | {
    // connect with address (view only)
    mnemonic?: string;
    privateKey?: string | Buffer;
    signer?: CarbonSigner;
    publicKeyBase64?: string;
    bech32Address: string;
    customSigner?: OfflineSigner & OfflineDirectSigner;
  }
);

export interface AccountInfo extends Account {
  chainId: string;
}

interface PromiseHandler<T> {
  requestId?: string
  resolve: (result: T) => void
  reject: (reason?: any) => void
}

interface SignTxRequest {
  signerAddress: string;
  reattempts?: number;
  messages: readonly EncodeObject[];
  broadcastOpts?: CarbonTx.BroadcastTxOpts;
  signOpts?: CarbonTx.SignTxOpts;
  handler: PromiseHandler<DeliverTxResponse | BroadcastTxSyncResponse>;
}

interface BroadcastTxRequest extends SignTxRequest {
  signedTx: CarbonWallet.TxRaw;
}

export class CarbonWallet {
  network: Network;

  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;

  onRequestSign?: CarbonWallet.OnRequestSignCallback
  onSignComplete?: CarbonWallet.OnSignCompleteCallback

  defaultTimeoutBlocks: number;

  mnemonic?: string;
  privateKey?: Buffer;
  signer: CarbonSigner;
  bech32Address: string;
  hexAddress: string;
  publicKey: Buffer;
  query?: CarbonQueryClient;

  txFees?: SimpleMap<BigNumber>;
  initialized: boolean = false;

  accountInfo?: AccountInfo;
  
  disableRetryOnSequenceError: boolean;

  // for analytics
  providerAgent?: ProviderAgent | string

  private tmClient?: Tendermint34Client;
  private signingClient?: CarbonSigningClient;
  private chainId?: string;

  private sequenceInvalidated: boolean = false;
  private txSignManager: QueueManager<SignTxRequest>;
  private txDispatchManager: QueueManager<BroadcastTxRequest>;

  constructor(opts: CarbonWalletInitOpts) {
    const network = opts.network ?? DEFAULT_NETWORK;
    this.network = network
    this.networkConfig = NetworkConfigs[network];
    this.configOverride = opts.config ?? {};
    this.providerAgent = opts.providerAgent;
    this.defaultTimeoutBlocks = opts.defaultTimeoutBlocks ?? 30; // default ~1 minute
    this.disableRetryOnSequenceError = opts.disableRetryOnSequenceError ?? false;
    this.updateNetwork(network);

    this.onRequestSign = opts.onRequestSign;
    this.onSignComplete = opts.onSignComplete;

    this.txDispatchManager = new QueueManager(this.dispatchTx.bind(this));
    this.txSignManager = new QueueManager(this.signTx.bind(this));

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
      this.publicKey = AddressUtils.SWTHAddress.privateToPublicKey(this.privateKey);

      this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, addressOpts);

      let prefix = addressOpts.bech32Prefix
      if (!addressOpts.bech32Prefix)
        prefix = SWTHAddress.getBech32Prefix(addressOpts?.network, addressOpts?.bech32Prefix)

      if (!prefix)
        throw new Error("cannot instantiate wallet signer, no prefix")

      this.signer = new CarbonPrivateKeySigner(this.privateKey, prefix);

    } else if (opts.bech32Address) {
      // read-only wallet, without private/public keys
      this.signer = new CarbonNonSigner();
      this.publicKey = Buffer.from([]);
      this.bech32Address = opts.bech32Address;
    } else {
      throw new Error("cannot instantiate wallet signer");
    }

    const addressBytes = AddressUtils.SWTHAddress.getAddressBytes(this.bech32Address, this.network);
    this.hexAddress = `0x${Buffer.from(addressBytes).toString("hex")}`;
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
      customSigner: opts.customSigner,
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

    await Promise.all([
      this.reconnectTmClient(),
      this.reloadTxFees(),
      this.reloadAccountSequence(),
    ]);

    this.initialized = true;
    return this;
  }

  public updateNetwork(network: Network): CarbonWallet {
    this.network = network;
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], this.configOverride);
    delete this.signingClient;

    return this;
  }

  async getSignedTx(
    signerAddress: string,
    messages: readonly EncodeObject[],
    sequence: number,
    opts: Omit<CarbonTx.SignTxOpts, "sequence">,
  ): Promise<CarbonWallet.TxRaw> {
    const {
      memo = "",
      explicitSignerData,
    } = opts;

    const signingClient = this.getSigningClient();
    const [account] = await this.signer.getAccounts();

    let signature: StdSignature | null = null;
    try {
      await GenericUtils.callIgnoreError(() => this.onRequestSign?.(messages));
      const signerData: CarbonSignerData = {
        accountNumber: this.accountInfo!.accountNumber,
        chainId: this.getChainId(),
        sequence,
        ...explicitSignerData,
      };

      const fee = opts?.fee ?? this.estimateTxFee(messages);
      const txRaw = await signingClient.sign(signerAddress, messages, fee, memo, signerData);
      signature = encodeSecp256k1Signature(account.pubkey, txRaw.signatures[0]);
      return txRaw;
    } finally {
      await GenericUtils.callIgnoreError(() => this.onSignComplete?.(signature));
    }
  }

  /**
   * broadcast TX and wait for block confirmation
   * 
   */
  async broadcastTx(
    txRaw: CarbonWallet.TxRaw,
    opts: CarbonTx.BroadcastTxOpts = {},
  ): Promise<CarbonWallet.SendTxResponse> {
    const {
      pollIntervalMs = 3_000,
      timeoutMs = 60_000,
    } = opts;

    const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
    const carbonClient = this.getSigningClient();
    const response = await carbonClient.broadcastTx(tx, timeoutMs, pollIntervalMs);
    if (isDeliverTxFailure(response)) {
      // tx failed
      console.error(response);
      throw new Error(`[${response.code}] ${response.rawLog}`);
    }
    return response;
  }

  /**
   * broadcast TX to mempool but doesnt wait for block confirmation
   * 
   */
  async broadcastTxWithoutConfirm(txRaw: CarbonWallet.TxRaw): Promise<CarbonWallet.SendTxWithoutConfirmResponse> {
    const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
    const tmClient = this.getTmClient();
    return tmClient.broadcastTxSync({ tx });
  };

  async signAndBroadcast(messages: EncodeObject[], signOpts?: CarbonTx.SignTxOpts, broadcastOpts?: CarbonTx.BroadcastTxOpts): Promise<DeliverTxResponse | BroadcastTxSyncResponse> {
    const promise = new Promise<DeliverTxResponse | BroadcastTxSyncResponse>((resolve, reject) => {
      this.txSignManager.enqueue({
        signerAddress: this.bech32Address,
        messages,
        broadcastOpts,
        signOpts,
        handler: { resolve, reject },
      });
    });

    return promise;
  }

  private async signTx(txRequest: SignTxRequest) {
    const { reattempts, signerAddress, signOpts, messages, broadcastOpts, handler: { resolve, reject } } = txRequest;
    try {
      if (!this.accountInfo || this.sequenceInvalidated)
        await this.reloadAccountSequence();

      const heightResponse = await fetch(`${this.networkConfig.tmRpcUrl}/blockchain?cache=${new Date().getTime()}`)
      const heightRes = await heightResponse.json();
      const height = heightRes.result;
      const timeoutHeight = height + this.defaultTimeoutBlocks;

      const sequence = this.accountInfo!.sequence;
      this.accountInfo = {
        ...this.accountInfo!,
        sequence: sequence + 1,
      };

      const _signOpts: CarbonTx.SignTxOpts = {
        ...signOpts,
        explicitSignerData: {
          timeoutHeight,
          ...signOpts?.explicitSignerData,
        },
      };
      const signedTx = await this.getSignedTx(signerAddress, messages, sequence, _signOpts);

      this.txDispatchManager.enqueue({
        reattempts,
        signerAddress,
        messages,
        signedTx,
        broadcastOpts,
        signOpts: _signOpts,
        handler: { resolve, reject, requestId: `${sequence}` },
      });
    } catch (error) {
      reject(error);
    }
  }

  private async dispatchTx(txRequest: BroadcastTxRequest) {
    const { broadcastOpts, signedTx, handler: { resolve, reject } } = txRequest;
    const broadcastFunc = broadcastOpts?.mode === BroadcastTxMode.BroadcastTxSync ? this.broadcastTxWithoutConfirm.bind(this) : this.broadcastTx.bind(this);
    try {
      const result = await broadcastFunc(signedTx, broadcastOpts);
      resolve(result);
    } catch (error: any) {
      const reattempts = txRequest.reattempts ?? 0;
      // retry sendTx if nonce error once.
      if (!this.disableRetryOnSequenceError && reattempts < 1 && this.isNonceMismatchError(error)) {
        // invalidate account sequence for reload on next signTx call
        this.sequenceInvalidated = true;

        // requeue transaction for signTx
        this.txSignManager.enqueue({
          reattempts: (reattempts ?? 0) + 1,
          signerAddress: txRequest.signerAddress,
          messages: txRequest.messages,
          broadcastOpts,
          signOpts: txRequest.signOpts,
          handler: { resolve, reject },
        });
      } else {
        reject(error);
      }
    }
  }

  async sendTxs(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts): Promise<CarbonWallet.SendTxResponse> {
    const result = await this.signAndBroadcast(msgs, opts, { mode: BroadcastTxMode.BroadcastTxBlock });
    return result as DeliverTxResponse;
  }

  async sendTxsWithoutConfirm(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts): Promise<CarbonWallet.SendTxWithoutConfirmResponse> {
    const result = await this.signAndBroadcast(msgs, opts, { mode: BroadcastTxMode.BroadcastTxSync });
    return result as BroadcastTxSyncResponse;
  }

  async sendTx(msg: EncodeObject, opts?: CarbonTx.SignTxOpts): Promise<CarbonWallet.SendTxResponse> {
    return this.sendTxs([msg], opts);
  }

  getSigningClient(): CarbonSigningClient {
    const tmClient = this.getTmClient();
    if (!this.signingClient) {
      this.signingClient = new CarbonSigningClient(tmClient, this.signer);
    }
    return this.signingClient;
  }

  getTmClient(): Tendermint34Client {
    if (!this.tmClient)
      throw new Error("CarbonWallet is not initialized");
    return this.tmClient;
  }

  getChainId(): string {
    if (!this.chainId)
      throw new Error("CarbonWallet is not initialized");
    return this.chainId;
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
    return this.txFees?.[msgTypeUrl] ?? this.txFees?.[TxFeeTypeDefaultKey] ?? BN_ZERO;
  }

  public updateTxFees(msgFees: MsgFee[]) {
    const feesMap: SimpleMap<BigNumber> = msgFees.reduce((accum, fee) => {
      accum[fee.msgType] = bnOrZero(fee.fee);
      return accum;
    }, {} as SimpleMap<BigNumber>);

    this.txFees = feesMap;
  }

  public async reconnectTmClient() {
    this.tmClient = await Tendermint34Client.connect(this.networkConfig.tmRpcUrl);
    const status = await this.tmClient.status();
    this.chainId = status.nodeInfo.network;
  }

  public async reloadTxFees() {
    const queryClient = this.getQueryClient();
    const response = await queryClient.fee.MsgFeeAll({});
    this.updateTxFees(response.msgFees);
  }

  public async reloadAccountSequence() {
    if (this.sequenceInvalidated)
      this.sequenceInvalidated = false;

    const info = await this.getQueryClient().chain.getSequence(this.bech32Address);

    const pubkey = this.accountInfo?.pubkey ?? {
      type: "tendermint/PubKeySecp256k1",
      value: this.publicKey.toString("base64"),
    };

    const chainId = this.accountInfo?.chainId ?? this.chainId ?? await this.getQueryClient().chain.getChainId();

    this.accountInfo = {
      ...info,
      address: this.bech32Address,
      pubkey,
      chainId,
    };
  }

  private estimateTxFee(
    messages: readonly EncodeObject[],
  ) {
    const totalFeeCost = messages.reduce((totalFee, message) => {
      const msgFee = this.getFee(message.typeUrl);
      return msgFee.gt(0) ? totalFee.plus(msgFee) : totalFee;
    }, BN_ZERO);
    return {
      amount: [{
        amount: totalFeeCost.toString(10),
        denom: "swth",
      }],
      gas: DEFAULT_GAS.times(messages.length).toString(10),
    };
  }

  private isNonceMismatchError = (error?: Error) => {
    const regex = /^Broadcasting transaction failed with code 32 \(codespace: sdk\)\. Log: account sequence mismatch, expected (\d+), got (\d+): incorrect account sequence/;
    const match = error?.message.match(regex);
    if (match) {
      return {
        expected: match[1],
        provided: match[2],
      }
    }

    return false;
  }

  private getQueryClient(): CarbonQueryClient {
    if (!this.query)
      throw new Error("wallet not initialized");
    return this.query
  }
}

export namespace CarbonWallet {
  export type SendTxResponse = DeliverTxResponse;
  export type SendTxWithoutConfirmResponse = BroadcastTxSyncResponse;
  export type OnRequestSignCallback = (msgs: readonly EncodeObject[]) => void | Promise<void>;
  export type OnSignCompleteCallback = (signature: StdSignature | null) => void | Promise<void>;

  // workaround to re-export interface mixed const type
  export interface TxRaw extends StargateTxRaw { };
  export const TxRaw: typeof StargateTxRaw = { ...StargateTxRaw };
}
