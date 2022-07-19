import { CarbonQueryClient } from "@carbon-sdk/clients";
import { MsgGasCost, MinGasPrice, registry } from "@carbon-sdk/codec";
import { DEFAULT_GAS, DEFAULT_NETWORK, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { ProviderAgent } from "@carbon-sdk/constant/walletProvider";
import { AminoTypesMap, CosmosLedger } from "@carbon-sdk/provider";
import { AddressUtils, CarbonTx, GenericUtils } from "@carbon-sdk/util";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { bnOrZero, BN_ZERO } from "@carbon-sdk/util/number";
import { BroadcastTxMode, TxGasCostTypeDefaultKey, TxMinGasPriceTypeDefaultKey } from "@carbon-sdk/util/tx";
import { SimpleMap } from "@carbon-sdk/util/type";
import { encodeSecp256k1Signature, StdSignature } from "@cosmjs/amino";
import { EncodeObject, OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import { Account, DeliverTxResponse, isDeliverTxFailure, SigningStargateClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc/build/tendermint34/responses";
import BigNumber from "bignumber.js";
import { TxRaw as StargateTxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
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

export class CarbonWallet {
  network: Network;

  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;

  onRequestSign?: CarbonWallet.OnRequestSignCallback
  onSignComplete?: CarbonWallet.OnSignCompleteCallback

  mnemonic?: string;
  privateKey?: Buffer;
  signer: CarbonSigner;
  bech32Address: string;
  hexAddress: string;
  publicKey: Buffer;
  query?: CarbonQueryClient;

  txGasCosts?: SimpleMap<BigNumber>;
  txMinGasPrices?: SimpleMap<BigNumber>;
  initialized: boolean = false;

  accountInfo?: AccountInfo;

  // for analytics
  providerAgent?: ProviderAgent | string

  private signingClient?: SigningStargateClient;

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
      this.reloadTxGasCosts(),
      this.reloadTxMinGasPrices(),
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
    const signingClient = await this.getSigningClient();
    const response = await signingClient.broadcastTx(tx, timeoutMs, pollIntervalMs);
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
    const tmClient = await Tendermint34Client.connect(this.networkConfig.tmRpcUrl);
    return tmClient.broadcastTxSync({ tx });
  };

  async getSignedTx(
    signerAddress: string,
    messages: readonly EncodeObject[],
    opts: CarbonTx.SignTxOpts = {},
  ): Promise<CarbonWallet.TxRaw> {
    const {
      memo = "",
      explicitSignerData,
    } = opts;

    let fee = opts?.fee;

    if (!fee) {
      // compute required fee
      const defaultDenom = TxMinGasPriceTypeDefaultKey;
      const totalFeeCost = messages.reduce((totalFee, message) => {
        const msgGasCost = this.getMsgGasCost(message.typeUrl);
        const minGasPrice = this.getMinGasPrice(defaultDenom);
        const msgFee = msgGasCost.multipliedBy(minGasPrice);
        return msgGasCost.gt(0) ? totalFee.plus(msgFee) : totalFee;
      }, BN_ZERO);
      fee = {
        amount: [{
          amount: totalFeeCost.toString(10),
          denom: defaultDenom,
        }],
        gas: DEFAULT_GAS.times(messages.length).toString(10),
      };
    }
    const signingClient = await this.getSigningClient();

    const [account] = await this.signer.getAccounts();
    let signature: StdSignature | null = null;
    try {
      if (!this.accountInfo)
        await this.reloadAccountSequence();

      await GenericUtils.callIgnoreError(() => this.onRequestSign?.(messages));
      const signerData = {
        accountNumber: this.accountInfo!.accountNumber,
        sequence: this.accountInfo!.sequence,
        chainId: this.accountInfo!.chainId,
        ...explicitSignerData,
      };
      const txRaw = await signingClient.sign(signerAddress, messages, fee, memo, signerData);
      signature = encodeSecp256k1Signature(account.pubkey, txRaw.signatures[0]);
      return txRaw;
    } finally {
      await GenericUtils.callIgnoreError(() => this.onSignComplete?.(signature));
    }
  }

  async signAndBroadcast(msgs: EncodeObject[], signOpts?: CarbonTx.SignTxOpts, broadcastOpts?: CarbonTx.BroadcastTxOpts): Promise<DeliverTxResponse | BroadcastTxSyncResponse> {
    const signedTx = await this.getSignedTx(this.bech32Address, msgs, signOpts);

    const broadcastFunc = broadcastOpts?.mode === BroadcastTxMode.BroadcastTxSync ? this.broadcastTxWithoutConfirm.bind(this) : this.broadcastTx.bind(this);

    try {
      return await broadcastFunc(signedTx, broadcastOpts);
    } catch (error: any) {
      const result = this.isNonceMismatchError(error);
      if (!result)
        throw error;

      console.log(`encountered account sequence error: provided ${result.provided}, retrying with ${result.expected}…`);
      // encountered account sequence error, retrying…
      this.accountInfo = {
        ...this.accountInfo!,
        sequence: parseInt(result.expected),
      };
      const signedTx = await this.getSignedTx(this.bech32Address, msgs, signOpts);
      return broadcastFunc(signedTx, broadcastOpts);
    } finally {
      this.accountInfo = {
        ...this.accountInfo!,
        sequence: this.accountInfo!.sequence + 1,
      };
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

  async getSigningClient(): Promise<SigningStargateClient> {
    if (!this.signingClient) {
      this.signingClient = await SigningStargateClient.connectWithSigner(
        this.networkConfig.tmRpcUrl,
        this.signer,
        {
          ...(this.signer.type === CarbonSignerTypes.Ledger && { aminoTypes: AminoTypesMap }),
          registry
        },
      );
    }
    return this.signingClient;
  };

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

  public getMsgGasCost(msgTypeUrl: string): BigNumber {
    if (!this.txGasCosts) {
      console.warn("tx gas costs not initialized");
    }
    return this.txGasCosts?.[msgTypeUrl] ?? this.txGasCosts?.[TxGasCostTypeDefaultKey] ?? BN_ZERO;
  }

  public updateTxGasCosts(msgGasCosts: MsgGasCost[]) {
    const msgGasCostsMap: SimpleMap<BigNumber> = msgGasCosts.reduce((accum, msgGasCost) => {
      accum[msgGasCost.msgType] = bnOrZero(msgGasCost.gasCost);
      return accum;
    }, {} as SimpleMap<BigNumber>);

    this.txGasCosts = msgGasCostsMap;
  }

  public getMinGasPrice(denom: string): BigNumber {
    if (!this.txMinGasPrices) {
      console.warn("tx min gas prices not initialized");
    }
    return this.txMinGasPrices?.[denom] ?? this.txMinGasPrices?.[TxMinGasPriceTypeDefaultKey] ?? BN_ZERO;
  }

  public updateTxMinGasPrices(minGasPrices: MinGasPrice[]) {
    const minGasPricesMap: SimpleMap<BigNumber> = minGasPrices.reduce((accum, minGasPrice) => {
      accum[minGasPrice.denom] = bnOrZero(minGasPrice.gasPrice);
      return accum;
    }, {} as SimpleMap<BigNumber>);

    this.txMinGasPrices = minGasPricesMap;
  }

  public async reloadTxGasCosts() {
    const queryClient = this.getQueryClient();
    const response = await queryClient.fee.MsgGasCostAll({});
    this.updateTxGasCosts(response.msgGasCosts);
  }

  public async reloadTxMinGasPrices() {
    const queryClient = this.getQueryClient();
    const response = await queryClient.fee.MinGasPriceAll({});
    this.updateTxMinGasPrices(response.minGasPrices);
  }

  public async reloadAccountSequence() {
    const info = await this.getQueryClient().chain.getSequence(this.bech32Address);

    const pubkey = this.accountInfo?.pubkey ?? {
      type: "tendermint/PubKeySecp256k1",
      value: this.publicKey.toString("base64"),
    };

    const chainId = this.accountInfo?.chainId ?? await this.getQueryClient().chain.getChainId();

    this.accountInfo = {
      ...info,
      address: this.bech32Address,
      pubkey,
      chainId,
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
