import { CarbonQueryClient } from "@carbon-sdk/clients";
import { MsgMergeAccount } from "@carbon-sdk/codec";
import { BaseAccount } from "@carbon-sdk/codec/cosmos/auth/v1beta1/auth";
import { MsgExec } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { ExtensionOptionsWeb3Tx } from "@carbon-sdk/codec/ethermint/types/v1/web3";
import { CarbonEvmChainIDs, DEFAULT_FEE_DENOM, DEFAULT_GAS, DEFAULT_NETWORK, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { ProviderAgent } from "@carbon-sdk/constant/walletProvider";
import { authorizedSignlessMsgs } from "@carbon-sdk/modules/signless";
import { ChainInfo, CosmosLedger, Keplr, KeplrAccount, LeapAccount, MetaMask } from "@carbon-sdk/provider";
import { AddressUtils, CarbonTx, GenericUtils } from "@carbon-sdk/util";
import { ETHAddress, NEOAddress, SWTHAddress, SWTHAddressOptions } from "@carbon-sdk/util/address";
import { SmartWalletBlockchain } from "@carbon-sdk/util/blockchain";
import { ETH_SECP256K1_TYPE } from "@carbon-sdk/util/ethermint";
import { fetch } from "@carbon-sdk/util/fetch";
import { QueueManager } from "@carbon-sdk/util/generic";
import { bnOrZero, BN_ZERO } from "@carbon-sdk/util/number";
import { BroadcastTxMode, CarbonCustomError, CarbonSignerData, ErrorType } from "@carbon-sdk/util/tx";
import { SimpleMap } from "@carbon-sdk/util/type";
import { encodeSecp256k1Signature, StdSignature } from "@cosmjs/amino";
import { EncodeObject, OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import { Account, DeliverTxResponse, isDeliverTxFailure, TimeoutError } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { BroadcastTxAsyncResponse, BroadcastTxSyncResponse, broadcastTxSyncSuccess, TxResponse } from "@cosmjs/tendermint-rpc/build/tendermint37/responses";
import { sleep } from "@cosmjs/utils";
import { Key as LeapKey } from "@cosmos-kit/core";
import { Leap } from "@cosmos-kit/leap";
import { Key } from "@keplr-wallet/types";
import BigNumber from "bignumber.js";
import { TxBody, TxRaw as StargateTxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import dayjs from "dayjs";
import { CarbonSDK } from "..";
import { CarbonEIP712Signer, CarbonLedgerSigner, CarbonNonSigner, CarbonPrivateKeySigner, CarbonSigner, CarbonSignerTypes, isCarbonEIP712Signer } from "./CarbonSigner";
import { CarbonSigningClient } from "./CarbonSigningClient";

export interface CarbonWalletGenericOpts {
  tmClient?: Tendermint37Client;
  txDefaultBroadcastMode?: BroadcastTxMode;
  network?: Network;
  config?: Partial<NetworkConfig>;
  providerAgent?: ProviderAgent | string;
  defaultTimeoutBlocks?: number; // tx mempool ttl (timeoutHeight)
  disableRetryOnSequenceError?: boolean; // disable auto retry on nonce error
  triggerMerge?: boolean

  /**
   * Optional callback that will be called before signing is requested/executed.
   */
  onRequestSign?: CarbonWallet.OnRequestSignCallback;

  /**
   * Optional callback that will be called when signing is complete.
   */
  onSignComplete?: CarbonWallet.OnSignCompleteCallback;

  /**
   * Optional callback that will be called after tx is broadcast successful.
   */
  onBroadcastTxSuccess?: CarbonWallet.OnBroadcastTxSuccessCallback;

  /**
   * Optional callback that will be called if tx broadcast fails.
   */
  onBroadcastTxFail?: CarbonWallet.OnBroadcastTxFailCallback;
}

export interface MetaMaskWalletOpts {
  publicKeyMessage?: string
  publicKeyBase64?: string;
}

export type CarbonWalletInitOpts = CarbonWalletGenericOpts &
  (
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

export interface GranteeDetails {
  enabled: boolean;
  expiry: Date;
  mnemonics: string;
  granteeAddress: string;
}

interface PromiseHandler<T> {
  requestId?: string;
  resolve: (result: T) => void;
  reject: (reason?: any) => void;
}

interface SignTxRequest {
  signerAddress: string;
  reattempts?: number;
  messages: readonly EncodeObject[];
  broadcastOpts?: CarbonTx.BroadcastTxOpts;
  signOpts?: CarbonTx.SignTxOpts;
  handler: PromiseHandler<DeliverTxResponse | BroadcastTxSyncResponse | BroadcastTxAsyncResponse>;
}

interface BroadcastTxRequest extends SignTxRequest {
  signedTx: CarbonWallet.TxRaw;
}

export class CarbonWallet {
  network: Network;

  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;

  onRequestSign?: CarbonWallet.OnRequestSignCallback;
  onSignComplete?: CarbonWallet.OnSignCompleteCallback;
  onBroadcastTxSuccess?: CarbonWallet.OnBroadcastTxSuccessCallback;
  onBroadcastTxFail?: CarbonWallet.OnBroadcastTxFailCallback;

  defaultTimeoutBlocks: number;

  mnemonic?: string;
  privateKey?: Buffer;
  signer: CarbonSigner;
  bech32Address: string;
  evmBech32Address: string;
  hexAddress: string;
  evmHexAddress: string;
  accountMerged?: boolean;
  triggerMerge?: boolean;
  publicKey: Buffer;
  query?: CarbonQueryClient;

  /**
   * @deprecated Carbon v2.9.0
   * use gasCosts and gasPrices instead.
   */
  txFees?: SimpleMap<BigNumber>;
  txGasCosts?: SimpleMap<BigNumber>;
  txGasPrices?: SimpleMap<BigNumber>;
  txDefaultBroadCastMode?: BroadcastTxMode;

  defaultFeeDenom: string = DEFAULT_FEE_DENOM;

  initialized: boolean = false;

  accountInfo?: AccountInfo;

  disableRetryOnSequenceError: boolean;

  // for analytics
  providerAgent?: ProviderAgent | string;

  private tmClient?: Tendermint37Client;
  private granteeDetails?: GranteeDetails;
  private signingClient?: CarbonSigningClient;
  private chainId?: string;
  private evmChainId?: string;

  private sequenceInvalidated: boolean = false;
  private txSignManager: QueueManager<SignTxRequest>;
  private txDispatchManager: QueueManager<BroadcastTxRequest>;

  constructor(opts: CarbonWalletInitOpts) {
    const network = opts.network ?? DEFAULT_NETWORK;
    this.network = network;
    this.txDefaultBroadCastMode = opts.txDefaultBroadcastMode;
    this.networkConfig = NetworkConfigs[network];
    this.configOverride = opts.config ?? {};
    this.providerAgent = opts.providerAgent;
    this.defaultTimeoutBlocks = opts.defaultTimeoutBlocks ?? 30; // default ~1 minute
    this.disableRetryOnSequenceError = opts.disableRetryOnSequenceError ?? false;
    this.triggerMerge = opts.triggerMerge ?? false
    this.updateNetwork(network);

    this.onRequestSign = opts.onRequestSign;
    this.onSignComplete = opts.onSignComplete;
    this.onBroadcastTxSuccess = opts.onBroadcastTxSuccess;
    this.onBroadcastTxFail = opts.onBroadcastTxFail;

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
      ...(this.configOverride.Bech32Prefix && {
        bech32Prefix: this.configOverride.Bech32Prefix,
      }),
    };

    if (opts.signer) {
      this.signer = opts.signer;
      this.publicKey = Buffer.from(opts.publicKeyBase64!, "base64");

      this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, addressOpts);
    } else if (this.privateKey) {
      this.publicKey = AddressUtils.SWTHAddress.privateToPublicKey(this.privateKey);

      this.bech32Address = AddressUtils.SWTHAddress.publicKeyToAddress(this.publicKey, addressOpts);

      let prefix = addressOpts.bech32Prefix;
      if (!addressOpts.bech32Prefix) prefix = SWTHAddress.getBech32Prefix(addressOpts?.network, addressOpts?.bech32Prefix);

      if (!prefix) throw new Error("cannot instantiate wallet signer, no prefix");

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
    this.evmHexAddress = opts.bech32Address ? '' : AddressUtils.ETHAddress.publicKeyToAddress(this.publicKey, addressOpts);
    this.evmBech32Address = opts.bech32Address ? '' : AddressUtils.ETHAddress.publicKeyToBech32Address(this.publicKey, addressOpts)

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

  public static withLedger(cosmosLedger: CosmosLedger, publicKeyBase64: string, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    const signer = new CarbonLedgerSigner(cosmosLedger);
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      providerAgent: ProviderAgent.Ledger,
      ...opts,
    });
    return wallet;
  }

  public static withSigner(signer: CarbonSigner, publicKeyBase64: string, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    return new CarbonWallet({
      ...opts,
      signer,
      publicKeyBase64,
    });
  }

  public static withKeplr(keplr: Keplr, chainInfo: ChainInfo, keplrKey: Key, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    const signer = keplrKey.isNanoLedger ? KeplrAccount.createKeplrSignerAmino(keplr, chainInfo, keplrKey) : KeplrAccount.createKeplrSigner(keplr, chainInfo, keplrKey);
    const publicKeyBase64 = Buffer.from(keplrKey.pubKey).toString("base64");

    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      providerAgent: ProviderAgent.KeplrExtension,
      ...opts,
    });
    return wallet;
  }

  public static withLeap(leap: Leap, chainId: string, leapKey: LeapKey, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    const signer = LeapAccount.createLeapSigner(leap, chainId);
    const publicKeyBase64 = Buffer.from(leapKey.pubKey).toString("base64");

    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      providerAgent: ProviderAgent.LeapExtension,
      ...opts,
    });
    return wallet;
  }

  public static withMetamask(metamask: MetaMask, evmChainId: string, compressedPubKeyBase64: string, addressOptions: SWTHAddressOptions, opts: Omit<CarbonWalletInitOpts, "signer"> = {}) {
    const signer = MetaMask.createMetamaskSigner(metamask, evmChainId, compressedPubKeyBase64, addressOptions);
    const wallet = CarbonWallet.withSigner(signer, compressedPubKeyBase64, {
      providerAgent: ProviderAgent.MetamaskExtension,
      ...opts,
    });
    return wallet;
  }

  public static withAddress(bech32Address: string, opts: Partial<CarbonWalletInitOpts> = {}) {
    return new CarbonWallet({
      ...opts,
      bech32Address,
    });
  }

  public async initialize(queryClient: CarbonQueryClient): Promise<CarbonWallet> {
    this.query = queryClient;

    await Promise.all([this.reconnectTmClient(), this.reloadTxFees(), this.reloadAccountSequence(), this.reloadMergeAccountStatus()]);

    this.initialized = true;
    return this;
  }

  public setGranteeDetails(details: GranteeDetails) {
    this.granteeDetails = details;
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
    opts: Omit<CarbonTx.SignTxOpts, "sequence">
  ): Promise<CarbonWallet.TxRaw> {
    const { memo = "", accountNumber, explicitSignerData, feeDenom } = opts;
    const signingClient = this.getSigningClient();
    const [account] = await this.signer.getAccounts();

    let signature: StdSignature | null = null;
    const evmChainId = this.evmChainId
    try {
      await GenericUtils.callIgnoreError(() => this.onRequestSign?.(messages));
      await this.checkWalletSignatureCompatibility()
      const signerData: CarbonSignerData = {
        accountNumber: accountNumber ?? this.accountInfo!.accountNumber,
        chainId: this.getChainId(),
        sequence,
        ...explicitSignerData,
        evmChainId,
      };

      const fee = opts?.fee ?? this.estimateTxFee(messages, feeDenom);
      const txRaw = await signingClient.sign(signerAddress, messages, fee, memo, signerData);
      let sig;
      if (isCarbonEIP712Signer(this.signer)) {
        if ((this.signer as CarbonEIP712Signer).legacyEip712SignMode) {
          const feePayerSigBz = ExtensionOptionsWeb3Tx.decode(TxBody.decode(txRaw.bodyBytes).extensionOptions[0].value).feePayerSig
          sig = Uint8Array.from(Buffer.from(feePayerSigBz.slice(0, -1)))
        }
        else {
          sig = txRaw.signatures[0]
        }
        signature = encodeSecp256k1Signature(account.pubkey, sig);
        signature = {
          ...signature,
          pub_key: { ...signature.pub_key, type: ETH_SECP256K1_TYPE },
        }
        return txRaw;
      }
      signature = encodeSecp256k1Signature(account.pubkey, txRaw.signatures[0]);
      return txRaw;
    } finally {
      await GenericUtils.callIgnoreError(() => this.onSignComplete?.(signature));
    }
  }

  /**
  * Non EVM wallets (Keplr, Leap, Ledger, Legacy Metamask, Encrypted Key) current mode of signing
  * does not support submiting transaction with only eth accounts.
  * This method assumes that if a transaction is carried out by a non evm wallet with only funds in eth address
  * as submitting the msg with an eth address as the signer because it is impossible to get the signer field at this stage.
  *
  * Keplr technically can support submiting transaction with only eth accounts via EIP-712 eth signature but is blocked by
  * keplr wallet extension due to incompability of carbon's chain-id. Keplr requires EIP-712 signing chains to have a chain id of {chainname_XXXX-X}
  */
  async checkWalletSignatureCompatibility() {
    const query = this.getQueryClient()
    const hasCarbonBalances = (await query.bank.AllBalances({ address: this.bech32Address })).balances.length > 0
    const hasEvmAddressBalances = (await query.bank.AllBalances({ address: this.evmBech32Address })).balances.length > 0
    const isEvmWallet = this.isEvmWallet()
    if (hasEvmAddressBalances && !hasCarbonBalances && !isEvmWallet) {
      this.sequenceInvalidated = true
      throw new Error('Transaction is not allowed from a non-evm wallet for an account with only funds in evm address')
    }
  }

  /**
   * broadcast TX and wait for block confirmation
   *
   */
  async broadcastTx(txRaw: CarbonWallet.TxRaw, opts: CarbonTx.BroadcastTxOpts = {}): Promise<CarbonWallet.SendTxResponse> {
    const { pollIntervalMs = 3_000, timeoutMs = 60_000 } = opts;

    const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
    const carbonClient = this.getSigningClient();
    const response = await carbonClient.broadcastTx(tx, timeoutMs, pollIntervalMs);
    if (isDeliverTxFailure(response)) {
      // tx failed
      throw new CarbonCustomError(`[${response.code}] ${response.rawLog}`, ErrorType.BLOCK_FAIL, response)
    }
    return response;
  }

  /**
   * broadcast TX to mempool but doesnt wait for block confirmation
   *
   */
  async broadcastTxToMempoolWithoutConfirm(txRaw: CarbonWallet.TxRaw): Promise<CarbonWallet.SendTxToMempoolWithoutConfirmResponse> {
    const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
    const tmClient = this.getTmClient();
    const response = await tmClient.broadcastTxSync({ tx });
    if (!broadcastTxSyncSuccess(response)) {
      // tx failed
      throw new CarbonCustomError(`[${response.code}] ${response.log}`, ErrorType.BROADCAST_FAIL, response);
    }
    return response
  }

  /**
   * broadcast TX but doesnt wait for block confirmation nor submission to mempool
   *
   */
  async broadcastTxWithoutConfirm(txRaw: CarbonWallet.TxRaw): Promise<CarbonWallet.SendTxWithoutConfirmResponse> {
    const tx = CarbonWallet.TxRaw.encode(txRaw).finish();
    const tmClient = this.getTmClient();
    return tmClient.broadcastTxAsync({ tx });
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    signOpts?: CarbonTx.SignTxOpts,
    broadcastOpts?: CarbonTx.BroadcastTxOpts
  ): Promise<DeliverTxResponse | BroadcastTxSyncResponse | BroadcastTxAsyncResponse> {
    const promise = new Promise<DeliverTxResponse | BroadcastTxSyncResponse | BroadcastTxAsyncResponse>((resolve, reject) => {
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
    const {
      reattempts,
      signerAddress,
      signOpts,
      messages,
      broadcastOpts,
      handler: { resolve, reject },
    } = txRequest;
    try {
      if (!this.accountInfo
        || this.accountInfo?.address === this.evmBech32Address // refresh to check if carbon acc is present
        || this.sequenceInvalidated)
        await this.reloadAccountSequence();

      const heightResponse = await fetch(`${this.networkConfig.tmRpcUrl}/blockchain?cache=${new Date().getTime()}`);
      const heightRes = await heightResponse.json();
      const height = bnOrZero(heightRes.result?.last_height);
      let timeoutHeight;
      // timeoutHeight is not supported for EIP-712
      if (!isCarbonEIP712Signer(this.signer)) {
        timeoutHeight = height.isZero() ? undefined : height.toNumber() + this.defaultTimeoutBlocks;
      }
      let sequence: number
      if (!this.accountInfo) {
        sequence = signOpts?.sequence ?? 0
      } else {
        sequence = this.accountInfo!.sequence;
        this.accountInfo = {
          ...this.accountInfo!,
          sequence: sequence + 1,
        };
      }


      let overrideSignerAddress = signerAddress
      let overrideMessages = messages
      let overrideSDK
      if (this.granteeDetails) {
        const { expiry, granteeAddress, mnemonics, enabled } = this.granteeDetails
        const isExpired = dayjs().subtract(1, 'minute').isAfter(expiry)
        const isAuthorized = messages.every((message) => authorizedSignlessMsgs.includes(message.typeUrl))
        if (!isExpired && enabled && isAuthorized) {
          const msgs = messages.map((message) => {
            return {
              typeUrl: message.typeUrl,
              value: message.value,
            }
          })
          overrideMessages = [{
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: MsgExec.encode(MsgExec.fromPartial({
              grantee: granteeAddress,
              msgs,
            })),
          }]
          overrideSignerAddress = granteeAddress
          overrideSDK = await CarbonSDK.instanceWithMnemonic(mnemonics, { network: this.network })
          timeoutHeight = height.isZero() ? undefined : height.toNumber() + overrideSDK.wallet.defaultTimeoutBlocks;
          if (!overrideSDK.wallet.accountInfo) {
            sequence = signOpts?.sequence ?? 0
          } else {
            sequence = overrideSDK.wallet.accountInfo!.sequence;
            overrideSDK.wallet.accountInfo = {
              ...overrideSDK.wallet.accountInfo!,
              sequence: sequence + 1,
            };
          }
        }
      }

      const _signOpts: CarbonTx.SignTxOpts = {
        ...signOpts,
        explicitSignerData: {
          timeoutHeight,
          ...signOpts?.explicitSignerData,
        },
      };
      const signedTx = (overrideSignerAddress !== signerAddress && overrideSDK)
        ? await overrideSDK.wallet.getSignedTx(overrideSignerAddress, overrideMessages, sequence, _signOpts)
        : await this.getSignedTx(signerAddress, messages, sequence, _signOpts)

      if (overrideSignerAddress !== signerAddress && overrideSDK) {
        overrideSDK.wallet.txDispatchManager.enqueue({
          reattempts,
          signerAddress: overrideSignerAddress,
          messages: overrideMessages,
          signedTx,
          broadcastOpts,
          signOpts: _signOpts,
          handler: { resolve, reject, requestId: `${sequence}` },
        })
      } else {
        this.txDispatchManager.enqueue({
          reattempts,
          signerAddress,
          messages,
          signedTx,
          broadcastOpts,
          signOpts: _signOpts,
          handler: { resolve, reject, requestId: `${sequence}` },
        });
      }
    } catch (error) {
      reject(error);
    }
  }

  private getBroadcastFunc(broadcastMode?: BroadcastTxMode) {
    switch (broadcastMode) {
      case BroadcastTxMode.BroadcastTxSync: return this.broadcastTxToMempoolWithoutConfirm.bind(this);
      case BroadcastTxMode.BroadcastTxAsync: return this.broadcastTxWithoutConfirm.bind(this);
    }
    return this.broadcastTx.bind(this)
  }

  private async dispatchTx(txRequest: BroadcastTxRequest) {
    const {
      broadcastOpts,
      signedTx,
      handler: { resolve, reject },
    } = txRequest;
    const broadcastMode = broadcastOpts?.mode ?? this.txDefaultBroadCastMode;
    const broadcastFunc = this.getBroadcastFunc(broadcastMode);
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
    if (this.triggerMerge || opts?.triggerMerge) {
      await this.sendInitialMergeAccountTx(msgs, opts)
    }
    try {
      const result = await this.signAndBroadcast(msgs, opts)
      if (msgs[0].typeUrl === CarbonTx.Types.MsgMergeAccount) {
        this.updateMergeAccountStatus()
      }
      await GenericUtils.callIgnoreError(() => this.onBroadcastTxSuccess?.(msgs));
      return result as DeliverTxResponse;
    }
    catch (error) {
      await GenericUtils.callIgnoreError(() => this.onBroadcastTxFail?.(msgs));
      throw error
    }
  }

  async sendInitialMergeAccountTx(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts) {
    let msg: EncodeObject
    await this.reloadMergeAccountStatus()
    if (!this.accountMerged && msgs[0].typeUrl !== CarbonTx.Types.MsgMergeAccount) {
      const accountInfo = await this.reloadAccountInfo()
      if (!accountInfo) {
        throw new Error('Account not found!')
      }
      const { address, sequence, accountNumber } = accountInfo
      try {
        msg = {
          typeUrl: CarbonTx.Types.MsgMergeAccount,
          value: MsgMergeAccount.fromPartial({
            creator: address,
            pubKey: this.publicKey.toString('hex'),
          }),
        }
        const modifiedOpts = {
          ...opts,
          sequence,
          accountNumber,
        }
        await this.signAndBroadcast([msg], modifiedOpts, { mode: BroadcastTxMode.BroadcastTxBlock })
        this.updateMergeAccountStatus()
        await GenericUtils.callIgnoreError(() => this.onBroadcastTxSuccess?.([msg]));
      }
      catch (error) {
        await GenericUtils.callIgnoreError(() => this.onBroadcastTxFail?.([msg]));
        throw error
      }
    }
  }

  async sendTxsWithoutConfirm(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts): Promise<CarbonWallet.SendTxToMempoolWithoutConfirmResponse> {
    await this.reloadMergeAccountStatus()
    if (this.triggerMerge || opts?.triggerMerge) {
      await this.sendInitialMergeAccountTx(msgs, opts)
    }
    const result = await this.signAndBroadcast(msgs, opts, { mode: BroadcastTxMode.BroadcastTxSync });
    return result as BroadcastTxSyncResponse;
  }

  async sendTx(msg: EncodeObject, opts?: CarbonTx.SignTxOpts): Promise<CarbonWallet.SendTxResponse> {
    return this.sendTxs([msg], opts);
  }

  async waitForTx(txHash: string, throwIfNotIncludedInBlock: boolean = false, timeoutMs: number = 60000, pollIntervalMs: number = 100): Promise<TxResponse> {
    const txId = txHash.toUpperCase()
    let timedOut = false
    const txPollTimeout = setTimeout(() => {
      timedOut = true
    }, timeoutMs)

    const pollForTx = async (txId: string): Promise<TxResponse> => {
      try {
        if (timedOut) {
          throw new TimeoutError(`Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${timeoutMs / 1000} seconds.`, txId)
        }
        const hash = Uint8Array.from(Buffer.from(txId, 'hex'));
        const response = await this.getTmClient().tx({ hash })
        const { result } = response
        const isDeliverTxFailure = result.code !== 0
        if (isDeliverTxFailure && throwIfNotIncludedInBlock) throw new CarbonCustomError(`[${result.code}] ${result.log}`, ErrorType.BLOCK_FAIL, response)
        return response
      } catch (err) {
        const error = err as Error
        if (this.isTxHashNotFound(error, txId)) {
          await sleep(pollIntervalMs)
          return pollForTx(txId)
        }
        throw err
      }
    }

    return new Promise((resolve, reject) => pollForTx(txId).then((value) => {
      clearTimeout(txPollTimeout)
      resolve(value)
    }, (error) => {
      clearTimeout(txPollTimeout)
      reject(error)
    }))
  }

  getSigningClient(): CarbonSigningClient {
    const tmClient = this.getTmClient();
    if (!this.signingClient) {
      this.signingClient = new CarbonSigningClient(tmClient, this.signer);
    }
    return this.signingClient;
  }

  getTmClient(): Tendermint37Client {
    if (!this.tmClient) throw new Error("CarbonWallet is not initialized");
    return this.tmClient;
  }

  getChainId(): string {
    if (!this.chainId) throw new Error("CarbonWallet is not initialized");
    return this.chainId;
  }

  getEvmChainId(): string {
    if (!this.evmChainId) throw new Error("CarbonWallet is not initialized");
    return this.evmChainId;
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

  isSmartWalletEnabled() {
    return !!(this.mnemonic || this.privateKey)
  }

  public getSmartWalletPrivateKey(blockchain: SmartWalletBlockchain = SmartWalletBlockchain.Ethereum) {
    if (this.mnemonic) {
      switch (blockchain) {
        case SmartWalletBlockchain.Ethereum:
        case SmartWalletBlockchain.Arbitrum:
        case SmartWalletBlockchain.BinanceSmartChain:
        case SmartWalletBlockchain.Polygon:
          return ETHAddress.mnemonicToPrivateKey(this.mnemonic);
        case SmartWalletBlockchain.Neo:
          return NEOAddress.mnemonicToPrivateKey(this.mnemonic);
        default:
          return null
      }
    }

    if (this.privateKey) return this.privateKey;
    return null;
  }

  public getGasCost(msgTypeUrl: string) {
    if (!this.txGasCosts) {
      console.warn("tx gas costs not initialized");
    }
    return this.txGasCosts?.[msgTypeUrl] ?? this.txGasCosts?.[CarbonTx.TxGasCostTypeDefaultKey] ?? BN_ZERO;
  }

  public getGasPrice(denom: string) {
    if (!this.txGasPrices) {
      console.warn("tx gas prices not initialized");
    }

    const gasPrice = this.txGasPrices?.[denom];
    if (!gasPrice) {
      console.warn("denom not supported for paying gas");
    }
    return gasPrice ?? BN_ZERO;
  }

  public getFee(msgTypeUrl: string, denom: string = this.defaultFeeDenom): BigNumber {
    const minGasPrice = this.getGasPrice(denom);
    const msgGasCost = this.getGasCost(msgTypeUrl);

    return msgGasCost.times(minGasPrice);
  }

  public async reconnectTmClient() {
    this.tmClient = await Tendermint37Client.connect(this.networkConfig.tmRpcUrl);
    const status = await this.tmClient.status();
    this.chainId = status.nodeInfo.network;
    this.evmChainId = CarbonEvmChainIDs[this.network]
  }

  public async reloadTxFees() {
    const queryClient = this.getQueryClient();
    const { msgGasCosts } = await queryClient.fee.MsgGasCostAll({});
    this.txGasCosts = msgGasCosts.reduce((result, item) => {
      result[item.msgType] = bnOrZero(item.gasCost);
      return result;
    }, {} as SimpleMap<BigNumber>);

    const { minGasPrices } = await queryClient.fee.MinGasPriceAll({});
    this.txGasPrices = minGasPrices.reduce((result, item) => {
      result[item.denom] = bnOrZero(item.gasPrice).shiftedBy(-18); // sdk.Dec shifting
      return result;
    }, {} as SimpleMap<BigNumber>);

    if (!this.txGasPrices[this.defaultFeeDenom]) {
      const newDefaultFeeDenom = minGasPrices[0]?.denom;
      if (newDefaultFeeDenom) {
        console.warn(`default fee denom ${this.defaultFeeDenom} not supported, using ${newDefaultFeeDenom} instead.`);
        this.defaultFeeDenom = newDefaultFeeDenom;
      }
    }
  }

  private async reloadAccountInfo() {
    // carbon account always takes priority
    const accountAny = await this.getAccount(this.bech32Address) ?? await this.getAccount(this.evmBech32Address)
    if (!accountAny) return undefined
    const { accountNumber, sequence, address } = BaseAccount.decode(accountAny.value)
    return {
      address,
      accountNumber: accountNumber.toNumber(),
      sequence: sequence.toNumber(),
    }
  }

  private async getAccount(address: string) {
    let account;
    try {
      account = (await this.getQueryClient().auth.Account({ address })).account
    } catch (error: any) {
      if (!this.isAccountNotFoundError(error, address))
        throw error
    }
    return account
  }

  public async reloadAccountSequence() {
    if (this.sequenceInvalidated) this.sequenceInvalidated = false;

    const info = await this.reloadAccountInfo()
    const pubkey = this.accountInfo?.pubkey ?? {
      type: "tendermint/PubKeySecp256k1",
      value: this.publicKey.toString("base64"),
    };
    const chainId = this.accountInfo?.chainId ?? this.chainId ?? (await this.getQueryClient().chain.getChainId());
    if (info) {
      this.accountInfo = {
        ...info,
        pubkey,
        chainId,
      };
    }
  }

  public async reloadMergeAccountStatus() {
    if (this.accountMerged) return
    const queryClient = this.getQueryClient()
    const response = await queryClient.evmmerge.MappedAddress({ address: this.bech32Address })
    if (response && response.mappedAddress) {
      this.accountMerged = true
    } else {
      this.accountMerged = false
    }
    this.sequenceInvalidated = true
  }

  public updateMergeAccountStatus() {
    this.accountMerged = true
    // invalidate sequence after merging
    this.sequenceInvalidated = true
  }

  public isEvmWallet() {
    return this.providerAgent === ProviderAgent.MetamaskExtension
  }

  private estimateTxFee(messages: readonly EncodeObject[], feeDenom: string = this.defaultFeeDenom) {
    const denomGasPrice = this.getGasPrice(feeDenom);
    let totalGasCost = messages.reduce((result, message) => {
      const gasCost = this.getGasCost(message.typeUrl);
      return result.plus(gasCost);
    }, BN_ZERO);
    let totalFees = totalGasCost.times(denomGasPrice);

    // override zero gas cost tx with some gas for tx execution
    // set overall fee to zero, implying 0 gas price.
    if (totalGasCost.isZero()) {
      totalGasCost = DEFAULT_GAS;
      totalFees = BN_ZERO;
    }

    return {
      amount: [
        {
          amount: totalFees.toString(10),
          denom: feeDenom,
        },
      ],
      gas: totalGasCost.toString(10),
    };
  }

  private isAccountNotFoundError = (error: Error, address: string) => {
    return error.message?.includes(`account ${address} not found`);
  };

  private isTxHashNotFound = (error: Error, hash: string) => {
    return error.message?.includes(`tx (${hash}) not found`);
  };


  private isNonceMismatchError = (error?: Error) => {
    const errorMessage = 'account sequence mismatch'
    const includes = error?.message.includes(errorMessage);
    if (includes) {
      return {
        message: error?.message,
      };
    }

    return false
  };

  private getQueryClient(): CarbonQueryClient {
    if (!this.query) throw new Error("wallet not initialized");
    return this.query;
  }
}

export namespace CarbonWallet {
  export type SendTxResponse = DeliverTxResponse | BroadcastTxSyncResponse | BroadcastTxAsyncResponse;
  export type SendTxToMempoolWithoutConfirmResponse = BroadcastTxSyncResponse;
  export type SendTxWithoutConfirmResponse = BroadcastTxAsyncResponse;
  export type OnRequestSignCallback = (msgs: readonly EncodeObject[]) => void | Promise<void>;
  export type OnSignCompleteCallback = (signature: StdSignature | null) => void | Promise<void>;
  export type OnBroadcastTxFailCallback = (msgs: readonly EncodeObject[]) => void | Promise<void>;
  export type OnBroadcastTxSuccessCallback = (msgs: readonly EncodeObject[]) => void | Promise<void>;

  // workaround to re-export interface mixed const type
  export interface TxRaw extends StargateTxRaw { }
  export const TxRaw: typeof StargateTxRaw = { ...StargateTxRaw };
}
