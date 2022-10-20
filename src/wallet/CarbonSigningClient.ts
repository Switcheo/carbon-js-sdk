import { registry as TypesRegistry } from "@carbon-sdk/codec";
import { TxRaw } from "@carbon-sdk/codec/cosmos/tx/v1beta1/tx";
import { CarbonSignerData } from "@carbon-sdk/util/tx";
import { AminoMsg, encodeSecp256k1Pubkey, OfflineAminoSigner } from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import { Int53, Uint53 } from "@cosmjs/math";
import { EncodeObject, encodePubkey, isOfflineDirectSigner, makeAuthInfoBytes, makeSignDoc, OfflineDirectSigner, OfflineSigner, Registry, TxBodyEncodeObject } from "@cosmjs/proto-signing";
import { AminoTypes, GasPrice, SigningStargateClientOptions, StargateClient, StdFee } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import Long from "long";
import { AminoTypesMap } from "../provider";

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
  UNRECOGNIZED = -1
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
  timeoutHeight: number | string = 0,
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
    tmClient: Tendermint34Client,
    public readonly signer: OfflineSigner,
    public readonly options: SigningStargateClientOptions = {},
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
  ): Promise<TxRaw> {
    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId, timeoutHeight }: CarbonSignerData,
  ): Promise<TxRaw> {
    const signer = this.signer as OfflineDirectSigner;

    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
        ...timeoutHeight && {
          timeoutHeight: Long.fromNumber(timeoutHeight),
        }
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, gasLimit);
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
  ): Promise<TxRaw> {
    const signer = this.signer as OfflineAminoSigner;

    const accountFromSigner = (await this.signer.getAccounts()).find(
      (account) => account.address === signerAddress,
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode: SignMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence, timeoutHeight ?? 0);
    const { signature, signed } = await signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
      ...timeoutHeight && {
        timeoutHeight: Long.fromNumber(timeoutHeight),
      }
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signMode,
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }
};
