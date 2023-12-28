import { registry as TypesRegistry } from "@carbon-sdk/codec";
import { TxRaw } from "@carbon-sdk/codec/cosmos/tx/v1beta1/tx";
import { ExtensionOptionsWeb3Tx } from "@carbon-sdk/codec/ethermint/types/v1/web3";
import { encodeAnyEthSecp256k1PubKey, parseChainId } from "@carbon-sdk/util/ethermint";
import { CarbonSignerData } from "@carbon-sdk/util/tx";
import { AminoMsg, encodeSecp256k1Pubkey, OfflineAminoSigner } from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import { Int53, Uint53 } from "@cosmjs/math";
import {
  EncodeObject,
  encodePubkey,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineDirectSigner,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { AminoTypes, GasPrice, SigningStargateClientOptions, StargateClient, StdFee } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import Long from "long";
import { AminoTypesMap } from "../provider";
import { CarbonEIP712Signer, isCarbonEIP712Signer } from "./CarbonSigner";

// Added SignMode enum from cosmjs-types to resolve build error
enum SignMode {
  /**
   * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected
   */
  SIGN_MODE_UNSPECIFIED = 0,
  /**
   * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx
   */
  SIGN_MODE_DIRECT = 1,
  /**
   * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT
   */
  SIGN_MODE_TEXTUAL = 2,
  /**
   * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future
   */
  SIGN_MODE_LEGACY_AMINO_JSON = 127,
  UNRECOGNIZED = -1,
}

export interface StdSignDoc {
  readonly chain_id: string;
  readonly account_number: string;
  readonly sequence: string;
  readonly fee: StdFee;
  readonly msgs: readonly AminoMsg[];
  readonly memo: string;
  readonly timeout_height: string;
}

export function makeSignDocAmino(
  msgs: readonly AminoMsg[],
  fee: StdFee,
  chainId: string,
  memo: string | undefined,
  accountNumber: number | string,
  sequence: number | string,
  timeoutHeight: number | string = 0
): StdSignDoc {
  const timeoutHeightStr = typeof timeoutHeight === "number" ? timeoutHeight.toString(10) : timeoutHeight;
  return {
    chain_id: chainId,
    account_number: Uint53.fromString(accountNumber.toString()).toString(),
    sequence: Uint53.fromString(sequence.toString()).toString(),
    fee: fee,
    msgs: msgs,
    memo: memo || "",
    timeout_height: timeoutHeightStr,
  };
}

export class CarbonSigningClient extends StargateClient {
  public readonly registry: Registry;
  public readonly aminoTypes: AminoTypes;
  public readonly broadcastTimeoutMs?: number;
  public readonly broadcastPollIntervalMs?: number;
  public readonly gasPrice?: GasPrice;

  constructor(
    tmClient: Tendermint37Client,
    public readonly signer: OfflineSigner,
    public readonly options: SigningStargateClientOptions = {}
  ) {
    super(tmClient, options);
    const { registry = TypesRegistry, aminoTypes = AminoTypesMap } = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.gasPrice = options.gasPrice;
  }

  /**
   * @see SigningStargateClient
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    signerData: CarbonSignerData,
    granterAddress?: string
  ): Promise<TxRaw> {
    if (isCarbonEIP712Signer(this.signer) && (this.signer as CarbonEIP712Signer).legacyEip712SignMode) {
      return this.signLegacyEip712(signerAddress, messages, fee, memo, signerData)
    }
    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData, granterAddress)
      : this.signAmino(signerAddress, messages, fee, memo, signerData, granterAddress);
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, timeoutHeight }: CarbonSignerData,
    granterAddress?: string,
  ): Promise<TxRaw> {
    const signer = this.signer as OfflineDirectSigner;
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!isCarbonEIP712Signer(this.signer) && !accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubKeyBz = accountFromSigner ? accountFromSigner.pubkey : (await this.signer.getAccounts())[0].pubkey
    const pubkey = isCarbonEIP712Signer(this.signer) ? encodeAnyEthSecp256k1PubKey(pubKeyBz) : encodePubkey(encodeSecp256k1Pubkey(pubKeyBz));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
        ...(timeoutHeight && {
          timeoutHeight: Long.fromNumber(timeoutHeight),
        }),
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, gasLimit, granterAddress, (granterAddress ? signerAddress : undefined));
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const { signature, signed } = await signer.signDirect(signerAddress, signDoc);
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, timeoutHeight }: CarbonSignerData,
    granterAddress?: string
  ): Promise<TxRaw> {
    const signer = this.signer as OfflineAminoSigner;

    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!isCarbonEIP712Signer(this.signer) && !accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubKeyBz = accountFromSigner ? accountFromSigner.pubkey : (await this.signer.getAccounts())[0].pubkey
    const pubkey = isCarbonEIP712Signer(this.signer) ? encodeAnyEthSecp256k1PubKey(pubKeyBz) : encodePubkey(encodeSecp256k1Pubkey(pubKeyBz));
    const signMode: SignMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence, timeoutHeight ?? 0);
    const { signature, signed } = await signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
      ...(timeoutHeight && {
        timeoutHeight: Long.fromNumber(timeoutHeight),
      }),
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, granterAddress, (granterAddress ? signerAddress : undefined), signMode);
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signLegacyEip712(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, evmChainId }: CarbonSignerData,
    granterAddress?: string,
  ): Promise<TxRaw> {
    if (!evmChainId) {
      throw new Error("evmChainId required for legacyEip712 tx");
    }
    const signer = this.signer as CarbonEIP712Signer;
    const pubKeyBz = (await this.signer.getAccounts())[0].pubkey
    const pubkey = encodeAnyEthSecp256k1PubKey(pubKeyBz);
    const signMode: SignMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, evmChainId!, memo, accountNumber, sequence);
    const { signature, signed, feePayer } = await signer.signLegacyEip712(signerAddress, signDoc);

    const eip712ExtensionOptions: EncodeObject = {
      typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
      value: ExtensionOptionsWeb3Tx.encode(ExtensionOptionsWeb3Tx.fromPartial({
        typedDataChainId: parseChainId(evmChainId),
        feePayer,
        feePayerSig: fromBase64(signature.signature),
      })).finish(),
    }
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, granterAddress, (granterAddress ? signerAddress : undefined), signMode);

    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
      extensionOptions: [eip712ExtensionOptions],
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);

    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [new Uint8Array()],
    });
  }
}
