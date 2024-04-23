/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConsensusParams } from "../types/params";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import {
  BlockIDFlag,
  blockIDFlagFromJSON,
  blockIDFlagToJSON,
} from "../types/validator";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "tendermint.abci";

export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}

export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}

export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    default:
      return "UNKNOWN";
  }
}

export enum MisbehaviorType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}

export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}

export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    default:
      return "UNKNOWN";
  }
}

export interface Request {
  echo?: RequestEcho | undefined;
  flush?: RequestFlush | undefined;
  info?: RequestInfo | undefined;
  initChain?: RequestInitChain | undefined;
  query?: RequestQuery | undefined;
  checkTx?: RequestCheckTx | undefined;
  commit?: RequestCommit | undefined;
  listSnapshots?: RequestListSnapshots | undefined;
  offerSnapshot?: RequestOfferSnapshot | undefined;
  loadSnapshotChunk?: RequestLoadSnapshotChunk | undefined;
  applySnapshotChunk?: RequestApplySnapshotChunk | undefined;
  prepareProposal?: RequestPrepareProposal | undefined;
  processProposal?: RequestProcessProposal | undefined;
  extendVote?: RequestExtendVote | undefined;
  verifyVoteExtension?: RequestVerifyVoteExtension | undefined;
  finalizeBlock?: RequestFinalizeBlock | undefined;
}

export interface RequestEcho {
  message: string;
}

export interface RequestFlush {}

export interface RequestInfo {
  version: string;
  blockVersion: Long;
  p2pVersion: Long;
  abciVersion: string;
}

export interface RequestInitChain {
  time?: Date;
  chainId: string;
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appStateBytes: Uint8Array;
  initialHeight: Long;
}

export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}

export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}

export interface RequestCommit {}

/** lists available snapshots */
export interface RequestListSnapshots {}

/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  appHash: Uint8Array;
}

/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: Long;
  format: number;
  chunk: number;
}

/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}

export interface RequestPrepareProposal {
  /** the modified transactions cannot exceed this size. */
  maxTxBytes: Long;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  localLastCommit?: ExtendedCommitInfo;
  misbehavior: Misbehavior[];
  height: Long;
  time?: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposerAddress: Uint8Array;
}

export interface RequestProcessProposal {
  txs: Uint8Array[];
  proposedLastCommit?: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: Long;
  time?: Date;
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}

/** Extends a vote with application-injected data */
export interface RequestExtendVote {
  /** the hash of the block that this vote may be referring to */
  hash: Uint8Array;
  /** the height of the extended vote */
  height: Long;
  /** info of the block that this vote may be referring to */
  time?: Date;
  txs: Uint8Array[];
  proposedLastCommit?: CommitInfo;
  misbehavior: Misbehavior[];
  nextValidatorsHash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}

/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
  /** the hash of the block that this received vote corresponds to */
  hash: Uint8Array;
  /** the validator that signed the vote extension */
  validatorAddress: Uint8Array;
  height: Long;
  voteExtension: Uint8Array;
}

export interface RequestFinalizeBlock {
  txs: Uint8Array[];
  decidedLastCommit?: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: Uint8Array;
  height: Long;
  time?: Date;
  nextValidatorsHash: Uint8Array;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposerAddress: Uint8Array;
}

export interface Response {
  exception?: ResponseException | undefined;
  echo?: ResponseEcho | undefined;
  flush?: ResponseFlush | undefined;
  info?: ResponseInfo | undefined;
  initChain?: ResponseInitChain | undefined;
  query?: ResponseQuery | undefined;
  checkTx?: ResponseCheckTx | undefined;
  commit?: ResponseCommit | undefined;
  listSnapshots?: ResponseListSnapshots | undefined;
  offerSnapshot?: ResponseOfferSnapshot | undefined;
  loadSnapshotChunk?: ResponseLoadSnapshotChunk | undefined;
  applySnapshotChunk?: ResponseApplySnapshotChunk | undefined;
  prepareProposal?: ResponsePrepareProposal | undefined;
  processProposal?: ResponseProcessProposal | undefined;
  extendVote?: ResponseExtendVote | undefined;
  verifyVoteExtension?: ResponseVerifyVoteExtension | undefined;
  finalizeBlock?: ResponseFinalizeBlock | undefined;
}

/** nondeterministic */
export interface ResponseException {
  error: string;
}

export interface ResponseEcho {
  message: string;
}

export interface ResponseFlush {}

export interface ResponseInfo {
  data: string;
  version: string;
  appVersion: Long;
  lastBlockHeight: Long;
  lastBlockAppHash: Uint8Array;
}

export interface ResponseInitChain {
  consensusParams?: ConsensusParams;
  validators: ValidatorUpdate[];
  appHash: Uint8Array;
}

export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: Long;
  codespace: string;
}

export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}

export interface ResponseCommit {
  retainHeight: Long;
}

export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}

export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}

export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}

export function responseOfferSnapshot_ResultFromJSON(
  object: any
): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}

export function responseOfferSnapshot_ResultToJSON(
  object: ResponseOfferSnapshot_Result
): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    default:
      return "UNKNOWN";
  }
}

export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}

export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetchChunks: number[];
  /** Chunk senders to reject and ban */
  rejectSenders: string[];
}

export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}

export function responseApplySnapshotChunk_ResultFromJSON(
  object: any
): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}

export function responseApplySnapshotChunk_ResultToJSON(
  object: ResponseApplySnapshotChunk_Result
): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    default:
      return "UNKNOWN";
  }
}

export interface ResponsePrepareProposal {
  txs: Uint8Array[];
}

export interface ResponseProcessProposal {
  status: ResponseProcessProposal_ProposalStatus;
}

export enum ResponseProcessProposal_ProposalStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  REJECT = 2,
  UNRECOGNIZED = -1,
}

export function responseProcessProposal_ProposalStatusFromJSON(
  object: any
): ResponseProcessProposal_ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}

export function responseProcessProposal_ProposalStatusToJSON(
  object: ResponseProcessProposal_ProposalStatus
): string {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    default:
      return "UNKNOWN";
  }
}

export interface ResponseExtendVote {
  voteExtension: Uint8Array;
}

export interface ResponseVerifyVoteExtension {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}

export enum ResponseVerifyVoteExtension_VerifyStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  /**
   * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
   * Incorrectly implementing this thus has liveness implications as it may affect
   * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
   * Honest nodes should never be rejected.
   */
  REJECT = 2,
  UNRECOGNIZED = -1,
}

export function responseVerifyVoteExtension_VerifyStatusFromJSON(
  object: any
): ResponseVerifyVoteExtension_VerifyStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
  }
}

export function responseVerifyVoteExtension_VerifyStatusToJSON(
  object: ResponseVerifyVoteExtension_VerifyStatus
): string {
  switch (object) {
    case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
      return "ACCEPT";
    case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
      return "REJECT";
    default:
      return "UNKNOWN";
  }
}

export interface ResponseFinalizeBlock {
  /** set of block events emmitted as part of executing the block */
  events: Event[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  txResults: ExecTxResult[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validatorUpdates: ValidatorUpdate[];
  /** updates to the consensus params, if any. */
  consensusParamUpdates?: ConsensusParams;
  /**
   * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
   * deterministic. It is up to the application to decide which algorithm to use.
   */
  appHash: Uint8Array;
}

export interface CommitInfo {
  round: number;
  votes: VoteInfo[];
}

/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfo {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfo[];
}

/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}

/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}

/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gasWanted: Long;
  gasUsed: Long;
  /** nondeterministic */
  events: Event[];
  codespace: string;
}

/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: Long;
  index: number;
  tx: Uint8Array;
  result?: ExecTxResult;
}

export interface Validator {
  /** The first 20 bytes of SHA256(public key) */
  address: Uint8Array;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: Long;
}

export interface ValidatorUpdate {
  pubKey?: PublicKey;
  power: Long;
}

export interface VoteInfo {
  validator?: Validator;
  blockIdFlag: BlockIDFlag;
}

export interface ExtendedVoteInfo {
  /** The validator that sent the vote. */
  validator?: Validator;
  /** Non-deterministic extension provided by the sending validator's application. */
  voteExtension: Uint8Array;
  /** Vote extension signature created by CometBFT */
  extensionSignature: Uint8Array;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  blockIdFlag: BlockIDFlag;
}

export interface Misbehavior {
  type: MisbehaviorType;
  /** The offending validator */
  validator?: Validator;
  /** The height when the offense occurred */
  height: Long;
  /** The corresponding time where the offense occurred */
  time?: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  totalVotingPower: Long;
}

export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}

const baseRequest: object = {};

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      RequestInitChain.encode(
        message.initChain,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      RequestListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      RequestOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      RequestLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      RequestApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      RequestPrepareProposal.encode(
        message.prepareProposal,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.processProposal !== undefined) {
      RequestProcessProposal.encode(
        message.processProposal,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.extendVote !== undefined) {
      RequestExtendVote.encode(
        message.extendVote,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      RequestVerifyVoteExtension.encode(
        message.verifyVoteExtension,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      RequestFinalizeBlock.encode(
        message.finalizeBlock,
        writer.uint32(162).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.listSnapshots = RequestListSnapshots.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.prepareProposal = RequestPrepareProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.processProposal = RequestProcessProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.extendVote = RequestExtendVote.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.verifyVoteExtension = RequestVerifyVoteExtension.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.finalizeBlock = RequestFinalizeBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? RequestEcho.fromJSON(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? RequestFlush.fromJSON(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? RequestInfo.fromJSON(object.info)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? RequestInitChain.fromJSON(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? RequestQuery.fromJSON(object.query)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? RequestCheckTx.fromJSON(object.checkTx)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? RequestCommit.fromJSON(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? RequestListSnapshots.fromJSON(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? RequestOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined;
    message.prepareProposal =
      object.prepareProposal !== undefined && object.prepareProposal !== null
        ? RequestPrepareProposal.fromJSON(object.prepareProposal)
        : undefined;
    message.processProposal =
      object.processProposal !== undefined && object.processProposal !== null
        ? RequestProcessProposal.fromJSON(object.processProposal)
        : undefined;
    message.extendVote =
      object.extendVote !== undefined && object.extendVote !== null
        ? RequestExtendVote.fromJSON(object.extendVote)
        : undefined;
    message.verifyVoteExtension =
      object.verifyVoteExtension !== undefined &&
      object.verifyVoteExtension !== null
        ? RequestVerifyVoteExtension.fromJSON(object.verifyVoteExtension)
        : undefined;
    message.finalizeBlock =
      object.finalizeBlock !== undefined && object.finalizeBlock !== null
        ? RequestFinalizeBlock.fromJSON(object.finalizeBlock)
        : undefined;
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.echo !== undefined &&
      (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? RequestFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? RequestInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? RequestQuery.toJSON(message.query)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? RequestCheckTx.toJSON(message.checkTx)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? RequestCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? RequestListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? RequestOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.prepareProposal !== undefined &&
      (obj.prepareProposal = message.prepareProposal
        ? RequestPrepareProposal.toJSON(message.prepareProposal)
        : undefined);
    message.processProposal !== undefined &&
      (obj.processProposal = message.processProposal
        ? RequestProcessProposal.toJSON(message.processProposal)
        : undefined);
    message.extendVote !== undefined &&
      (obj.extendVote = message.extendVote
        ? RequestExtendVote.toJSON(message.extendVote)
        : undefined);
    message.verifyVoteExtension !== undefined &&
      (obj.verifyVoteExtension = message.verifyVoteExtension
        ? RequestVerifyVoteExtension.toJSON(message.verifyVoteExtension)
        : undefined);
    message.finalizeBlock !== undefined &&
      (obj.finalizeBlock = message.finalizeBlock
        ? RequestFinalizeBlock.toJSON(message.finalizeBlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? RequestEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? RequestFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? RequestInfo.fromPartial(object.info)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? RequestInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? RequestQuery.fromPartial(object.query)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? RequestCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? RequestCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? RequestListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? RequestOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    message.prepareProposal =
      object.prepareProposal !== undefined && object.prepareProposal !== null
        ? RequestPrepareProposal.fromPartial(object.prepareProposal)
        : undefined;
    message.processProposal =
      object.processProposal !== undefined && object.processProposal !== null
        ? RequestProcessProposal.fromPartial(object.processProposal)
        : undefined;
    message.extendVote =
      object.extendVote !== undefined && object.extendVote !== null
        ? RequestExtendVote.fromPartial(object.extendVote)
        : undefined;
    message.verifyVoteExtension =
      object.verifyVoteExtension !== undefined &&
      object.verifyVoteExtension !== null
        ? RequestVerifyVoteExtension.fromPartial(object.verifyVoteExtension)
        : undefined;
    message.finalizeBlock =
      object.finalizeBlock !== undefined && object.finalizeBlock !== null
        ? RequestFinalizeBlock.fromPartial(object.finalizeBlock)
        : undefined;
    return message;
  },
};

const baseRequestEcho: object = { message: "" };

export const RequestEcho = {
  encode(
    message: RequestEcho,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestEcho } as RequestEcho;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestEcho {
    const message = { ...baseRequestEcho } as RequestEcho;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: RequestEcho): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestEcho>): RequestEcho {
    const message = { ...baseRequestEcho } as RequestEcho;
    message.message = object.message ?? "";
    return message;
  },
};

const baseRequestFlush: object = {};

export const RequestFlush = {
  encode(
    _: RequestFlush,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestFlush } as RequestFlush;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestFlush {
    const message = { ...baseRequestFlush } as RequestFlush;
    return message;
  },

  toJSON(_: RequestFlush): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RequestFlush>): RequestFlush {
    const message = { ...baseRequestFlush } as RequestFlush;
    return message;
  },
};

const baseRequestInfo: object = {
  version: "",
  blockVersion: Long.UZERO,
  p2pVersion: Long.UZERO,
  abciVersion: "",
};

export const RequestInfo = {
  encode(
    message: RequestInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (!message.blockVersion.isZero()) {
      writer.uint32(16).uint64(message.blockVersion);
    }
    if (!message.p2pVersion.isZero()) {
      writer.uint32(24).uint64(message.p2pVersion);
    }
    if (message.abciVersion !== "") {
      writer.uint32(34).string(message.abciVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestInfo } as RequestInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.blockVersion = reader.uint64() as Long;
          break;
        case 3:
          message.p2pVersion = reader.uint64() as Long;
          break;
        case 4:
          message.abciVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestInfo {
    const message = { ...baseRequestInfo } as RequestInfo;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.blockVersion =
      object.blockVersion !== undefined && object.blockVersion !== null
        ? Long.fromString(object.blockVersion)
        : Long.UZERO;
    message.p2pVersion =
      object.p2pVersion !== undefined && object.p2pVersion !== null
        ? Long.fromString(object.p2pVersion)
        : Long.UZERO;
    message.abciVersion =
      object.abciVersion !== undefined && object.abciVersion !== null
        ? String(object.abciVersion)
        : "";
    return message;
  },

  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.blockVersion !== undefined &&
      (obj.blockVersion = (message.blockVersion || Long.UZERO).toString());
    message.p2pVersion !== undefined &&
      (obj.p2pVersion = (message.p2pVersion || Long.UZERO).toString());
    message.abciVersion !== undefined &&
      (obj.abciVersion = message.abciVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = { ...baseRequestInfo } as RequestInfo;
    message.version = object.version ?? "";
    message.blockVersion =
      object.blockVersion !== undefined && object.blockVersion !== null
        ? Long.fromValue(object.blockVersion)
        : Long.UZERO;
    message.p2pVersion =
      object.p2pVersion !== undefined && object.p2pVersion !== null
        ? Long.fromValue(object.p2pVersion)
        : Long.UZERO;
    message.abciVersion = object.abciVersion ?? "";
    return message;
  },
};

const baseRequestInitChain: object = { chainId: "", initialHeight: Long.ZERO };

export const RequestInitChain = {
  encode(
    message: RequestInitChain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.appStateBytes.length !== 0) {
      writer.uint32(42).bytes(message.appStateBytes);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(48).int64(message.initialHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestInitChain } as RequestInitChain;
    message.validators = [];
    message.appStateBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.appStateBytes = reader.bytes();
          break;
        case 6:
          message.initialHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestInitChain {
    const message = { ...baseRequestInitChain } as RequestInitChain;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromJSON(object.consensusParams)
        : undefined;
    message.validators = (object.validators ?? []).map((e: any) =>
      ValidatorUpdate.fromJSON(e)
    );
    message.appStateBytes =
      object.appStateBytes !== undefined && object.appStateBytes !== null
        ? bytesFromBase64(object.appStateBytes)
        : new Uint8Array();
    message.initialHeight =
      object.initialHeight !== undefined && object.initialHeight !== null
        ? Long.fromString(object.initialHeight)
        : Long.ZERO;
    return message;
  },

  toJSON(message: RequestInitChain): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.appStateBytes !== undefined &&
      (obj.appStateBytes = base64FromBytes(
        message.appStateBytes !== undefined
          ? message.appStateBytes
          : new Uint8Array()
      ));
    message.initialHeight !== undefined &&
      (obj.initialHeight = (message.initialHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain {
    const message = { ...baseRequestInitChain } as RequestInitChain;
    message.time = object.time ?? undefined;
    message.chainId = object.chainId ?? "";
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromPartial(object.consensusParams)
        : undefined;
    message.validators = (object.validators ?? []).map((e) =>
      ValidatorUpdate.fromPartial(e)
    );
    message.appStateBytes = object.appStateBytes ?? new Uint8Array();
    message.initialHeight =
      object.initialHeight !== undefined && object.initialHeight !== null
        ? Long.fromValue(object.initialHeight)
        : Long.ZERO;
    return message;
  },
};

const baseRequestQuery: object = { path: "", height: Long.ZERO, prove: false };

export const RequestQuery = {
  encode(
    message: RequestQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestQuery } as RequestQuery;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQuery {
    const message = { ...baseRequestQuery } as RequestQuery;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.path =
      object.path !== undefined && object.path !== null
        ? String(object.path)
        : "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.prove =
      object.prove !== undefined && object.prove !== null
        ? Boolean(object.prove)
        : false;
    return message;
  },

  toJSON(message: RequestQuery): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestQuery>): RequestQuery {
    const message = { ...baseRequestQuery } as RequestQuery;
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  },
};

const baseRequestCheckTx: object = { type: 0 };

export const RequestCheckTx = {
  encode(
    message: RequestCheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestCheckTx } as RequestCheckTx;
    message.tx = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestCheckTx {
    const message = { ...baseRequestCheckTx } as RequestCheckTx;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? bytesFromBase64(object.tx)
        : new Uint8Array();
    message.type =
      object.type !== undefined && object.type !== null
        ? checkTxTypeFromJSON(object.type)
        : 0;
    return message;
  },

  toJSON(message: RequestCheckTx): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx {
    const message = { ...baseRequestCheckTx } as RequestCheckTx;
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
};

const baseRequestCommit: object = {};

export const RequestCommit = {
  encode(
    _: RequestCommit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestCommit } as RequestCommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestCommit {
    const message = { ...baseRequestCommit } as RequestCommit;
    return message;
  },

  toJSON(_: RequestCommit): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RequestCommit>): RequestCommit {
    const message = { ...baseRequestCommit } as RequestCommit;
    return message;
  },
};

const baseRequestListSnapshots: object = {};

export const RequestListSnapshots = {
  encode(
    _: RequestListSnapshots,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestListSnapshots } as RequestListSnapshots;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestListSnapshots {
    const message = { ...baseRequestListSnapshots } as RequestListSnapshots;
    return message;
  },

  toJSON(_: RequestListSnapshots): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots {
    const message = { ...baseRequestListSnapshots } as RequestListSnapshots;
    return message;
  },
};

const baseRequestOfferSnapshot: object = {};

export const RequestOfferSnapshot = {
  encode(
    message: RequestOfferSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(18).bytes(message.appHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestOfferSnapshot } as RequestOfferSnapshot;
    message.appHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestOfferSnapshot {
    const message = { ...baseRequestOfferSnapshot } as RequestOfferSnapshot;
    message.snapshot =
      object.snapshot !== undefined && object.snapshot !== null
        ? Snapshot.fromJSON(object.snapshot)
        : undefined;
    message.appHash =
      object.appHash !== undefined && object.appHash !== null
        ? bytesFromBase64(object.appHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestOfferSnapshot): unknown {
    const obj: any = {};
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot
        ? Snapshot.toJSON(message.snapshot)
        : undefined);
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = { ...baseRequestOfferSnapshot } as RequestOfferSnapshot;
    message.snapshot =
      object.snapshot !== undefined && object.snapshot !== null
        ? Snapshot.fromPartial(object.snapshot)
        : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
};

const baseRequestLoadSnapshotChunk: object = {
  height: Long.UZERO,
  format: 0,
  chunk: 0,
};

export const RequestLoadSnapshotChunk = {
  encode(
    message: RequestLoadSnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestLoadSnapshotChunk,
    } as RequestLoadSnapshotChunk;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestLoadSnapshotChunk {
    const message = {
      ...baseRequestLoadSnapshotChunk,
    } as RequestLoadSnapshotChunk;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.UZERO;
    message.format =
      object.format !== undefined && object.format !== null
        ? Number(object.format)
        : 0;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? Number(object.chunk)
        : 0;
    return message;
  },

  toJSON(message: RequestLoadSnapshotChunk): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = message.format);
    message.chunk !== undefined && (obj.chunk = message.chunk);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestLoadSnapshotChunk>
  ): RequestLoadSnapshotChunk {
    const message = {
      ...baseRequestLoadSnapshotChunk,
    } as RequestLoadSnapshotChunk;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
};

const baseRequestApplySnapshotChunk: object = { index: 0, sender: "" };

export const RequestApplySnapshotChunk = {
  encode(
    message: RequestApplySnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestApplySnapshotChunk,
    } as RequestApplySnapshotChunk;
    message.chunk = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestApplySnapshotChunk {
    const message = {
      ...baseRequestApplySnapshotChunk,
    } as RequestApplySnapshotChunk;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? bytesFromBase64(object.chunk)
        : new Uint8Array();
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    return message;
  },

  toJSON(message: RequestApplySnapshotChunk): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(
        message.chunk !== undefined ? message.chunk : new Uint8Array()
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestApplySnapshotChunk>
  ): RequestApplySnapshotChunk {
    const message = {
      ...baseRequestApplySnapshotChunk,
    } as RequestApplySnapshotChunk;
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

const baseRequestPrepareProposal: object = {
  maxTxBytes: Long.ZERO,
  height: Long.ZERO,
};

export const RequestPrepareProposal = {
  encode(
    message: RequestPrepareProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.maxTxBytes.isZero()) {
      writer.uint32(8).int64(message.maxTxBytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    if (message.localLastCommit !== undefined) {
      ExtendedCommitInfo.encode(
        message.localLastCommit,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestPrepareProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestPrepareProposal } as RequestPrepareProposal;
    message.txs = [];
    message.misbehavior = [];
    message.nextValidatorsHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxBytes = reader.int64() as Long;
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.localLastCommit = ExtendedCommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64() as Long;
          break;
        case 6:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestPrepareProposal {
    const message = { ...baseRequestPrepareProposal } as RequestPrepareProposal;
    message.maxTxBytes =
      object.maxTxBytes !== undefined && object.maxTxBytes !== null
        ? Long.fromString(object.maxTxBytes)
        : Long.ZERO;
    message.txs = (object.txs ?? []).map((e: any) => bytesFromBase64(e));
    message.localLastCommit =
      object.localLastCommit !== undefined && object.localLastCommit !== null
        ? ExtendedCommitInfo.fromJSON(object.localLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e: any) =>
      Misbehavior.fromJSON(e)
    );
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.nextValidatorsHash =
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array();
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestPrepareProposal): unknown {
    const obj: any = {};
    message.maxTxBytes !== undefined &&
      (obj.maxTxBytes = (message.maxTxBytes || Long.ZERO).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.txs = [];
    }
    message.localLastCommit !== undefined &&
      (obj.localLastCommit = message.localLastCommit
        ? ExtendedCommitInfo.toJSON(message.localLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) =>
        e ? Misbehavior.toJSON(e) : undefined
      );
    } else {
      obj.misbehavior = [];
    }
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestPrepareProposal>
  ): RequestPrepareProposal {
    const message = { ...baseRequestPrepareProposal } as RequestPrepareProposal;
    message.maxTxBytes =
      object.maxTxBytes !== undefined && object.maxTxBytes !== null
        ? Long.fromValue(object.maxTxBytes)
        : Long.ZERO;
    message.txs = (object.txs ?? []).map((e) => e);
    message.localLastCommit =
      object.localLastCommit !== undefined && object.localLastCommit !== null
        ? ExtendedCommitInfo.fromPartial(object.localLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e) =>
      Misbehavior.fromPartial(e)
    );
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

const baseRequestProcessProposal: object = { height: Long.ZERO };

export const RequestProcessProposal = {
  encode(
    message: RequestProcessProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(
        message.proposedLastCommit,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestProcessProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestProcessProposal } as RequestProcessProposal;
    message.txs = [];
    message.misbehavior = [];
    message.hash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposedLastCommit = CommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64() as Long;
          break;
        case 6:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestProcessProposal {
    const message = { ...baseRequestProcessProposal } as RequestProcessProposal;
    message.txs = (object.txs ?? []).map((e: any) => bytesFromBase64(e));
    message.proposedLastCommit =
      object.proposedLastCommit !== undefined &&
      object.proposedLastCommit !== null
        ? CommitInfo.fromJSON(object.proposedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e: any) =>
      Misbehavior.fromJSON(e)
    );
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.nextValidatorsHash =
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array();
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestProcessProposal): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.txs = [];
    }
    message.proposedLastCommit !== undefined &&
      (obj.proposedLastCommit = message.proposedLastCommit
        ? CommitInfo.toJSON(message.proposedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) =>
        e ? Misbehavior.toJSON(e) : undefined
      );
    } else {
      obj.misbehavior = [];
    }
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestProcessProposal>
  ): RequestProcessProposal {
    const message = { ...baseRequestProcessProposal } as RequestProcessProposal;
    message.txs = (object.txs ?? []).map((e) => e);
    message.proposedLastCommit =
      object.proposedLastCommit !== undefined &&
      object.proposedLastCommit !== null
        ? CommitInfo.fromPartial(object.proposedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e) =>
      Misbehavior.fromPartial(e)
    );
    message.hash = object.hash ?? new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

const baseRequestExtendVote: object = { height: Long.ZERO };

export const RequestExtendVote = {
  encode(
    message: RequestExtendVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.txs) {
      writer.uint32(34).bytes(v!);
    }
    if (message.proposedLastCommit !== undefined) {
      CommitInfo.encode(
        message.proposedLastCommit,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestExtendVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestExtendVote } as RequestExtendVote;
    message.txs = [];
    message.misbehavior = [];
    message.hash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.height = reader.int64() as Long;
          break;
        case 3:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.txs.push(reader.bytes());
          break;
        case 5:
          message.proposedLastCommit = CommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestExtendVote {
    const message = { ...baseRequestExtendVote } as RequestExtendVote;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.txs = (object.txs ?? []).map((e: any) => bytesFromBase64(e));
    message.proposedLastCommit =
      object.proposedLastCommit !== undefined &&
      object.proposedLastCommit !== null
        ? CommitInfo.fromJSON(object.proposedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e: any) =>
      Misbehavior.fromJSON(e)
    );
    message.nextValidatorsHash =
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array();
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestExtendVote): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.txs = [];
    }
    message.proposedLastCommit !== undefined &&
      (obj.proposedLastCommit = message.proposedLastCommit
        ? CommitInfo.toJSON(message.proposedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) =>
        e ? Misbehavior.toJSON(e) : undefined
      );
    } else {
      obj.misbehavior = [];
    }
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<RequestExtendVote>): RequestExtendVote {
    const message = { ...baseRequestExtendVote } as RequestExtendVote;
    message.hash = object.hash ?? new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.txs = (object.txs ?? []).map((e) => e);
    message.proposedLastCommit =
      object.proposedLastCommit !== undefined &&
      object.proposedLastCommit !== null
        ? CommitInfo.fromPartial(object.proposedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e) =>
      Misbehavior.fromPartial(e)
    );
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

const baseRequestVerifyVoteExtension: object = { height: Long.ZERO };

export const RequestVerifyVoteExtension = {
  encode(
    message: RequestVerifyVoteExtension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(34).bytes(message.voteExtension);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestVerifyVoteExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRequestVerifyVoteExtension,
    } as RequestVerifyVoteExtension;
    message.hash = new Uint8Array();
    message.validatorAddress = new Uint8Array();
    message.voteExtension = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.validatorAddress = reader.bytes();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestVerifyVoteExtension {
    const message = {
      ...baseRequestVerifyVoteExtension,
    } as RequestVerifyVoteExtension;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? bytesFromBase64(object.validatorAddress)
        : new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.voteExtension =
      object.voteExtension !== undefined && object.voteExtension !== null
        ? bytesFromBase64(object.voteExtension)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestVerifyVoteExtension): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined
          ? message.validatorAddress
          : new Uint8Array()
      ));
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined
          ? message.voteExtension
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<RequestVerifyVoteExtension>
  ): RequestVerifyVoteExtension {
    const message = {
      ...baseRequestVerifyVoteExtension,
    } as RequestVerifyVoteExtension;
    message.hash = object.hash ?? new Uint8Array();
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
};

const baseRequestFinalizeBlock: object = { height: Long.ZERO };

export const RequestFinalizeBlock = {
  encode(
    message: RequestFinalizeBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.decidedLastCommit !== undefined) {
      CommitInfo.encode(
        message.decidedLastCommit,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(58).bytes(message.nextValidatorsHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(66).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RequestFinalizeBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestFinalizeBlock } as RequestFinalizeBlock;
    message.txs = [];
    message.misbehavior = [];
    message.hash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.decidedLastCommit = CommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64() as Long;
          break;
        case 6:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 8:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestFinalizeBlock {
    const message = { ...baseRequestFinalizeBlock } as RequestFinalizeBlock;
    message.txs = (object.txs ?? []).map((e: any) => bytesFromBase64(e));
    message.decidedLastCommit =
      object.decidedLastCommit !== undefined &&
      object.decidedLastCommit !== null
        ? CommitInfo.fromJSON(object.decidedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e: any) =>
      Misbehavior.fromJSON(e)
    );
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.nextValidatorsHash =
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array();
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? bytesFromBase64(object.proposerAddress)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RequestFinalizeBlock): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.txs = [];
    }
    message.decidedLastCommit !== undefined &&
      (obj.decidedLastCommit = message.decidedLastCommit
        ? CommitInfo.toJSON(message.decidedLastCommit)
        : undefined);
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map((e) =>
        e ? Misbehavior.toJSON(e) : undefined
      );
    } else {
      obj.misbehavior = [];
    }
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<RequestFinalizeBlock>): RequestFinalizeBlock {
    const message = { ...baseRequestFinalizeBlock } as RequestFinalizeBlock;
    message.txs = (object.txs ?? []).map((e) => e);
    message.decidedLastCommit =
      object.decidedLastCommit !== undefined &&
      object.decidedLastCommit !== null
        ? CommitInfo.fromPartial(object.decidedLastCommit)
        : undefined;
    message.misbehavior = (object.misbehavior ?? []).map((e) =>
      Misbehavior.fromPartial(e)
    );
    message.hash = object.hash ?? new Uint8Array();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

const baseResponse: object = {};

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(
        message.exception,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.initChain !== undefined) {
      ResponseInitChain.encode(
        message.initChain,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(
        message.checkTx,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.listSnapshots !== undefined) {
      ResponseListSnapshots.encode(
        message.listSnapshots,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.offerSnapshot !== undefined) {
      ResponseOfferSnapshot.encode(
        message.offerSnapshot,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.loadSnapshotChunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(
        message.loadSnapshotChunk,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.applySnapshotChunk !== undefined) {
      ResponseApplySnapshotChunk.encode(
        message.applySnapshotChunk,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.prepareProposal !== undefined) {
      ResponsePrepareProposal.encode(
        message.prepareProposal,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.processProposal !== undefined) {
      ResponseProcessProposal.encode(
        message.processProposal,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.extendVote !== undefined) {
      ResponseExtendVote.encode(
        message.extendVote,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.verifyVoteExtension !== undefined) {
      ResponseVerifyVoteExtension.encode(
        message.verifyVoteExtension,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.finalizeBlock !== undefined) {
      ResponseFinalizeBlock.encode(
        message.finalizeBlock,
        writer.uint32(170).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.initChain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.listSnapshots = ResponseListSnapshots.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.offerSnapshot = ResponseOfferSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.loadSnapshotChunk = ResponseLoadSnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.applySnapshotChunk = ResponseApplySnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.prepareProposal = ResponsePrepareProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.processProposal = ResponseProcessProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.extendVote = ResponseExtendVote.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.verifyVoteExtension = ResponseVerifyVoteExtension.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.finalizeBlock = ResponseFinalizeBlock.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    const message = { ...baseResponse } as Response;
    message.exception =
      object.exception !== undefined && object.exception !== null
        ? ResponseException.fromJSON(object.exception)
        : undefined;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? ResponseEcho.fromJSON(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? ResponseFlush.fromJSON(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? ResponseInfo.fromJSON(object.info)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? ResponseInitChain.fromJSON(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ResponseQuery.fromJSON(object.query)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? ResponseCheckTx.fromJSON(object.checkTx)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? ResponseCommit.fromJSON(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? ResponseListSnapshots.fromJSON(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? ResponseOfferSnapshot.fromJSON(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
        : undefined;
    message.prepareProposal =
      object.prepareProposal !== undefined && object.prepareProposal !== null
        ? ResponsePrepareProposal.fromJSON(object.prepareProposal)
        : undefined;
    message.processProposal =
      object.processProposal !== undefined && object.processProposal !== null
        ? ResponseProcessProposal.fromJSON(object.processProposal)
        : undefined;
    message.extendVote =
      object.extendVote !== undefined && object.extendVote !== null
        ? ResponseExtendVote.fromJSON(object.extendVote)
        : undefined;
    message.verifyVoteExtension =
      object.verifyVoteExtension !== undefined &&
      object.verifyVoteExtension !== null
        ? ResponseVerifyVoteExtension.fromJSON(object.verifyVoteExtension)
        : undefined;
    message.finalizeBlock =
      object.finalizeBlock !== undefined && object.finalizeBlock !== null
        ? ResponseFinalizeBlock.fromJSON(object.finalizeBlock)
        : undefined;
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.exception !== undefined &&
      (obj.exception = message.exception
        ? ResponseException.toJSON(message.exception)
        : undefined);
    message.echo !== undefined &&
      (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
    message.flush !== undefined &&
      (obj.flush = message.flush
        ? ResponseFlush.toJSON(message.flush)
        : undefined);
    message.info !== undefined &&
      (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
    message.initChain !== undefined &&
      (obj.initChain = message.initChain
        ? ResponseInitChain.toJSON(message.initChain)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ResponseQuery.toJSON(message.query)
        : undefined);
    message.checkTx !== undefined &&
      (obj.checkTx = message.checkTx
        ? ResponseCheckTx.toJSON(message.checkTx)
        : undefined);
    message.commit !== undefined &&
      (obj.commit = message.commit
        ? ResponseCommit.toJSON(message.commit)
        : undefined);
    message.listSnapshots !== undefined &&
      (obj.listSnapshots = message.listSnapshots
        ? ResponseListSnapshots.toJSON(message.listSnapshots)
        : undefined);
    message.offerSnapshot !== undefined &&
      (obj.offerSnapshot = message.offerSnapshot
        ? ResponseOfferSnapshot.toJSON(message.offerSnapshot)
        : undefined);
    message.loadSnapshotChunk !== undefined &&
      (obj.loadSnapshotChunk = message.loadSnapshotChunk
        ? ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk)
        : undefined);
    message.applySnapshotChunk !== undefined &&
      (obj.applySnapshotChunk = message.applySnapshotChunk
        ? ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk)
        : undefined);
    message.prepareProposal !== undefined &&
      (obj.prepareProposal = message.prepareProposal
        ? ResponsePrepareProposal.toJSON(message.prepareProposal)
        : undefined);
    message.processProposal !== undefined &&
      (obj.processProposal = message.processProposal
        ? ResponseProcessProposal.toJSON(message.processProposal)
        : undefined);
    message.extendVote !== undefined &&
      (obj.extendVote = message.extendVote
        ? ResponseExtendVote.toJSON(message.extendVote)
        : undefined);
    message.verifyVoteExtension !== undefined &&
      (obj.verifyVoteExtension = message.verifyVoteExtension
        ? ResponseVerifyVoteExtension.toJSON(message.verifyVoteExtension)
        : undefined);
    message.finalizeBlock !== undefined &&
      (obj.finalizeBlock = message.finalizeBlock
        ? ResponseFinalizeBlock.toJSON(message.finalizeBlock)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = { ...baseResponse } as Response;
    message.exception =
      object.exception !== undefined && object.exception !== null
        ? ResponseException.fromPartial(object.exception)
        : undefined;
    message.echo =
      object.echo !== undefined && object.echo !== null
        ? ResponseEcho.fromPartial(object.echo)
        : undefined;
    message.flush =
      object.flush !== undefined && object.flush !== null
        ? ResponseFlush.fromPartial(object.flush)
        : undefined;
    message.info =
      object.info !== undefined && object.info !== null
        ? ResponseInfo.fromPartial(object.info)
        : undefined;
    message.initChain =
      object.initChain !== undefined && object.initChain !== null
        ? ResponseInitChain.fromPartial(object.initChain)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ResponseQuery.fromPartial(object.query)
        : undefined;
    message.checkTx =
      object.checkTx !== undefined && object.checkTx !== null
        ? ResponseCheckTx.fromPartial(object.checkTx)
        : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null
        ? ResponseCommit.fromPartial(object.commit)
        : undefined;
    message.listSnapshots =
      object.listSnapshots !== undefined && object.listSnapshots !== null
        ? ResponseListSnapshots.fromPartial(object.listSnapshots)
        : undefined;
    message.offerSnapshot =
      object.offerSnapshot !== undefined && object.offerSnapshot !== null
        ? ResponseOfferSnapshot.fromPartial(object.offerSnapshot)
        : undefined;
    message.loadSnapshotChunk =
      object.loadSnapshotChunk !== undefined &&
      object.loadSnapshotChunk !== null
        ? ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
        : undefined;
    message.applySnapshotChunk =
      object.applySnapshotChunk !== undefined &&
      object.applySnapshotChunk !== null
        ? ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
        : undefined;
    message.prepareProposal =
      object.prepareProposal !== undefined && object.prepareProposal !== null
        ? ResponsePrepareProposal.fromPartial(object.prepareProposal)
        : undefined;
    message.processProposal =
      object.processProposal !== undefined && object.processProposal !== null
        ? ResponseProcessProposal.fromPartial(object.processProposal)
        : undefined;
    message.extendVote =
      object.extendVote !== undefined && object.extendVote !== null
        ? ResponseExtendVote.fromPartial(object.extendVote)
        : undefined;
    message.verifyVoteExtension =
      object.verifyVoteExtension !== undefined &&
      object.verifyVoteExtension !== null
        ? ResponseVerifyVoteExtension.fromPartial(object.verifyVoteExtension)
        : undefined;
    message.finalizeBlock =
      object.finalizeBlock !== undefined && object.finalizeBlock !== null
        ? ResponseFinalizeBlock.fromPartial(object.finalizeBlock)
        : undefined;
    return message;
  },
};

const baseResponseException: object = { error: "" };

export const ResponseException = {
  encode(
    message: ResponseException,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseException } as ResponseException;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseException {
    const message = { ...baseResponseException } as ResponseException;
    message.error =
      object.error !== undefined && object.error !== null
        ? String(object.error)
        : "";
    return message;
  },

  toJSON(message: ResponseException): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseException>): ResponseException {
    const message = { ...baseResponseException } as ResponseException;
    message.error = object.error ?? "";
    return message;
  },
};

const baseResponseEcho: object = { message: "" };

export const ResponseEcho = {
  encode(
    message: ResponseEcho,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseEcho } as ResponseEcho;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseEcho {
    const message = { ...baseResponseEcho } as ResponseEcho;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: ResponseEcho): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho {
    const message = { ...baseResponseEcho } as ResponseEcho;
    message.message = object.message ?? "";
    return message;
  },
};

const baseResponseFlush: object = {};

export const ResponseFlush = {
  encode(
    _: ResponseFlush,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseFlush } as ResponseFlush;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseFlush {
    const message = { ...baseResponseFlush } as ResponseFlush;
    return message;
  },

  toJSON(_: ResponseFlush): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush {
    const message = { ...baseResponseFlush } as ResponseFlush;
    return message;
  },
};

const baseResponseInfo: object = {
  data: "",
  version: "",
  appVersion: Long.UZERO,
  lastBlockHeight: Long.ZERO,
};

export const ResponseInfo = {
  encode(
    message: ResponseInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (!message.appVersion.isZero()) {
      writer.uint32(24).uint64(message.appVersion);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }
    if (message.lastBlockAppHash.length !== 0) {
      writer.uint32(42).bytes(message.lastBlockAppHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseInfo } as ResponseInfo;
    message.lastBlockAppHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.appVersion = reader.uint64() as Long;
          break;
        case 4:
          message.lastBlockHeight = reader.int64() as Long;
          break;
        case 5:
          message.lastBlockAppHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseInfo {
    const message = { ...baseResponseInfo } as ResponseInfo;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.appVersion =
      object.appVersion !== undefined && object.appVersion !== null
        ? Long.fromString(object.appVersion)
        : Long.UZERO;
    message.lastBlockHeight =
      object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
        ? Long.fromString(object.lastBlockHeight)
        : Long.ZERO;
    message.lastBlockAppHash =
      object.lastBlockAppHash !== undefined && object.lastBlockAppHash !== null
        ? bytesFromBase64(object.lastBlockAppHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ResponseInfo): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = message.version);
    message.appVersion !== undefined &&
      (obj.appVersion = (message.appVersion || Long.UZERO).toString());
    message.lastBlockHeight !== undefined &&
      (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.lastBlockAppHash !== undefined &&
      (obj.lastBlockAppHash = base64FromBytes(
        message.lastBlockAppHash !== undefined
          ? message.lastBlockAppHash
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo {
    const message = { ...baseResponseInfo } as ResponseInfo;
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.appVersion =
      object.appVersion !== undefined && object.appVersion !== null
        ? Long.fromValue(object.appVersion)
        : Long.UZERO;
    message.lastBlockHeight =
      object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
        ? Long.fromValue(object.lastBlockHeight)
        : Long.ZERO;
    message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
    return message;
  },
};

const baseResponseInitChain: object = {};

export const ResponseInitChain = {
  encode(
    message: ResponseInitChain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(
        message.consensusParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseInitChain } as ResponseInitChain;
    message.validators = [];
    message.appHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseInitChain {
    const message = { ...baseResponseInitChain } as ResponseInitChain;
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromJSON(object.consensusParams)
        : undefined;
    message.validators = (object.validators ?? []).map((e: any) =>
      ValidatorUpdate.fromJSON(e)
    );
    message.appHash =
      object.appHash !== undefined && object.appHash !== null
        ? bytesFromBase64(object.appHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ResponseInitChain): unknown {
    const obj: any = {};
    message.consensusParams !== undefined &&
      (obj.consensusParams = message.consensusParams
        ? ConsensusParams.toJSON(message.consensusParams)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain {
    const message = { ...baseResponseInitChain } as ResponseInitChain;
    message.consensusParams =
      object.consensusParams !== undefined && object.consensusParams !== null
        ? ConsensusParams.fromPartial(object.consensusParams)
        : undefined;
    message.validators = (object.validators ?? []).map((e) =>
      ValidatorUpdate.fromPartial(e)
    );
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
};

const baseResponseQuery: object = {
  code: 0,
  log: "",
  info: "",
  index: Long.ZERO,
  height: Long.ZERO,
  codespace: "",
};

export const ResponseQuery = {
  encode(
    message: ResponseQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseQuery } as ResponseQuery;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64() as Long;
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64() as Long;
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQuery {
    const message = { ...baseResponseQuery } as ResponseQuery;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromString(object.index)
        : Long.ZERO;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    message.proofOps =
      object.proofOps !== undefined && object.proofOps !== null
        ? ProofOps.fromJSON(object.proofOps)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.codespace =
      object.codespace !== undefined && object.codespace !== null
        ? String(object.codespace)
        : "";
    return message;
  },

  toJSON(message: ResponseQuery): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined &&
      (obj.index = (message.index || Long.ZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    message.proofOps !== undefined &&
      (obj.proofOps = message.proofOps
        ? ProofOps.toJSON(message.proofOps)
        : undefined);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery {
    const message = { ...baseResponseQuery } as ResponseQuery;
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proofOps =
      object.proofOps !== undefined && object.proofOps !== null
        ? ProofOps.fromPartial(object.proofOps)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  },
};

const baseResponseCheckTx: object = {
  code: 0,
  log: "",
  info: "",
  gasWanted: Long.ZERO,
  gasUsed: Long.ZERO,
  codespace: "",
};

export const ResponseCheckTx = {
  encode(
    message: ResponseCheckTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseCheckTx } as ResponseCheckTx;
    message.events = [];
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64() as Long;
          break;
        case 6:
          message.gasUsed = reader.int64() as Long;
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCheckTx {
    const message = { ...baseResponseCheckTx } as ResponseCheckTx;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.gasWanted =
      object.gas_wanted !== undefined && object.gas_wanted !== null
        ? Long.fromString(object.gas_wanted)
        : Long.ZERO;
    message.gasUsed =
      object.gas_used !== undefined && object.gas_used !== null
        ? Long.fromString(object.gas_used)
        : Long.ZERO;
    message.events = (object.events ?? []).map((e: any) => Event.fromJSON(e));
    message.codespace =
      object.codespace !== undefined && object.codespace !== null
        ? String(object.codespace)
        : "";
    return message;
  },

  toJSON(message: ResponseCheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gas_used = (message.gasUsed || Long.ZERO).toString());
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx {
    const message = { ...baseResponseCheckTx } as ResponseCheckTx;
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.events = (object.events ?? []).map((e) => Event.fromPartial(e));
    message.codespace = object.codespace ?? "";
    return message;
  },
};

const baseResponseCommit: object = { retainHeight: Long.ZERO };

export const ResponseCommit = {
  encode(
    message: ResponseCommit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.retainHeight.isZero()) {
      writer.uint32(24).int64(message.retainHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseCommit } as ResponseCommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.retainHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCommit {
    const message = { ...baseResponseCommit } as ResponseCommit;
    message.retainHeight =
      object.retainHeight !== undefined && object.retainHeight !== null
        ? Long.fromString(object.retainHeight)
        : Long.ZERO;
    return message;
  },

  toJSON(message: ResponseCommit): unknown {
    const obj: any = {};
    message.retainHeight !== undefined &&
      (obj.retainHeight = (message.retainHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit {
    const message = { ...baseResponseCommit } as ResponseCommit;
    message.retainHeight =
      object.retainHeight !== undefined && object.retainHeight !== null
        ? Long.fromValue(object.retainHeight)
        : Long.ZERO;
    return message;
  },
};

const baseResponseListSnapshots: object = {};

export const ResponseListSnapshots = {
  encode(
    message: ResponseListSnapshots,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseListSnapshots } as ResponseListSnapshots;
    message.snapshots = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseListSnapshots {
    const message = { ...baseResponseListSnapshots } as ResponseListSnapshots;
    message.snapshots = (object.snapshots ?? []).map((e: any) =>
      Snapshot.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ResponseListSnapshots): unknown {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map((e) =>
        e ? Snapshot.toJSON(e) : undefined
      );
    } else {
      obj.snapshots = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseListSnapshots>
  ): ResponseListSnapshots {
    const message = { ...baseResponseListSnapshots } as ResponseListSnapshots;
    message.snapshots = (object.snapshots ?? []).map((e) =>
      Snapshot.fromPartial(e)
    );
    return message;
  },
};

const baseResponseOfferSnapshot: object = { result: 0 };

export const ResponseOfferSnapshot = {
  encode(
    message: ResponseOfferSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseOfferSnapshot } as ResponseOfferSnapshot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseOfferSnapshot {
    const message = { ...baseResponseOfferSnapshot } as ResponseOfferSnapshot;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseOfferSnapshot_ResultFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: ResponseOfferSnapshot): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseOfferSnapshot>
  ): ResponseOfferSnapshot {
    const message = { ...baseResponseOfferSnapshot } as ResponseOfferSnapshot;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseResponseLoadSnapshotChunk: object = {};

export const ResponseLoadSnapshotChunk = {
  encode(
    message: ResponseLoadSnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponseLoadSnapshotChunk,
    } as ResponseLoadSnapshotChunk;
    message.chunk = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseLoadSnapshotChunk {
    const message = {
      ...baseResponseLoadSnapshotChunk,
    } as ResponseLoadSnapshotChunk;
    message.chunk =
      object.chunk !== undefined && object.chunk !== null
        ? bytesFromBase64(object.chunk)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ResponseLoadSnapshotChunk): unknown {
    const obj: any = {};
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(
        message.chunk !== undefined ? message.chunk : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseLoadSnapshotChunk>
  ): ResponseLoadSnapshotChunk {
    const message = {
      ...baseResponseLoadSnapshotChunk,
    } as ResponseLoadSnapshotChunk;
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
};

const baseResponseApplySnapshotChunk: object = {
  result: 0,
  refetchChunks: 0,
  rejectSenders: "",
};

export const ResponseApplySnapshotChunk = {
  encode(
    message: ResponseApplySnapshotChunk,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetchChunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.rejectSenders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponseApplySnapshotChunk,
    } as ResponseApplySnapshotChunk;
    message.refetchChunks = [];
    message.rejectSenders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetchChunks.push(reader.uint32());
            }
          } else {
            message.refetchChunks.push(reader.uint32());
          }
          break;
        case 3:
          message.rejectSenders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseApplySnapshotChunk {
    const message = {
      ...baseResponseApplySnapshotChunk,
    } as ResponseApplySnapshotChunk;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseApplySnapshotChunk_ResultFromJSON(object.result)
        : 0;
    message.refetchChunks = (object.refetchChunks ?? []).map((e: any) =>
      Number(e)
    );
    message.rejectSenders = (object.rejectSenders ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: ResponseApplySnapshotChunk): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
    if (message.refetchChunks) {
      obj.refetchChunks = message.refetchChunks.map((e) => e);
    } else {
      obj.refetchChunks = [];
    }
    if (message.rejectSenders) {
      obj.rejectSenders = message.rejectSenders.map((e) => e);
    } else {
      obj.rejectSenders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseApplySnapshotChunk>
  ): ResponseApplySnapshotChunk {
    const message = {
      ...baseResponseApplySnapshotChunk,
    } as ResponseApplySnapshotChunk;
    message.result = object.result ?? 0;
    message.refetchChunks = (object.refetchChunks ?? []).map((e) => e);
    message.rejectSenders = (object.rejectSenders ?? []).map((e) => e);
    return message;
  },
};

const baseResponsePrepareProposal: object = {};

export const ResponsePrepareProposal = {
  encode(
    message: ResponsePrepareProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponsePrepareProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponsePrepareProposal,
    } as ResponsePrepareProposal;
    message.txs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponsePrepareProposal {
    const message = {
      ...baseResponsePrepareProposal,
    } as ResponsePrepareProposal;
    message.txs = (object.txs ?? []).map((e: any) => bytesFromBase64(e));
    return message;
  },

  toJSON(message: ResponsePrepareProposal): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.txs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponsePrepareProposal>
  ): ResponsePrepareProposal {
    const message = {
      ...baseResponsePrepareProposal,
    } as ResponsePrepareProposal;
    message.txs = (object.txs ?? []).map((e) => e);
    return message;
  },
};

const baseResponseProcessProposal: object = { status: 0 };

export const ResponseProcessProposal = {
  encode(
    message: ResponseProcessProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseProcessProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponseProcessProposal,
    } as ResponseProcessProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseProcessProposal {
    const message = {
      ...baseResponseProcessProposal,
    } as ResponseProcessProposal;
    message.status =
      object.status !== undefined && object.status !== null
        ? responseProcessProposal_ProposalStatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: ResponseProcessProposal): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = responseProcessProposal_ProposalStatusToJSON(
        message.status
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseProcessProposal>
  ): ResponseProcessProposal {
    const message = {
      ...baseResponseProcessProposal,
    } as ResponseProcessProposal;
    message.status = object.status ?? 0;
    return message;
  },
};

const baseResponseExtendVote: object = {};

export const ResponseExtendVote = {
  encode(
    message: ResponseExtendVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voteExtension.length !== 0) {
      writer.uint32(10).bytes(message.voteExtension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseExtendVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseExtendVote } as ResponseExtendVote;
    message.voteExtension = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteExtension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseExtendVote {
    const message = { ...baseResponseExtendVote } as ResponseExtendVote;
    message.voteExtension =
      object.voteExtension !== undefined && object.voteExtension !== null
        ? bytesFromBase64(object.voteExtension)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ResponseExtendVote): unknown {
    const obj: any = {};
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined
          ? message.voteExtension
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseExtendVote>): ResponseExtendVote {
    const message = { ...baseResponseExtendVote } as ResponseExtendVote;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    return message;
  },
};

const baseResponseVerifyVoteExtension: object = { status: 0 };

export const ResponseVerifyVoteExtension = {
  encode(
    message: ResponseVerifyVoteExtension,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseVerifyVoteExtension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponseVerifyVoteExtension,
    } as ResponseVerifyVoteExtension;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseVerifyVoteExtension {
    const message = {
      ...baseResponseVerifyVoteExtension,
    } as ResponseVerifyVoteExtension;
    message.status =
      object.status !== undefined && object.status !== null
        ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status)
        : 0;
    return message;
  },

  toJSON(message: ResponseVerifyVoteExtension): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = responseVerifyVoteExtension_VerifyStatusToJSON(
        message.status
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseVerifyVoteExtension>
  ): ResponseVerifyVoteExtension {
    const message = {
      ...baseResponseVerifyVoteExtension,
    } as ResponseVerifyVoteExtension;
    message.status = object.status ?? 0;
    return message;
  },
};

const baseResponseFinalizeBlock: object = {};

export const ResponseFinalizeBlock = {
  encode(
    message: ResponseFinalizeBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResults) {
      ExecTxResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.consensusParamUpdates !== undefined) {
      ConsensusParams.encode(
        message.consensusParamUpdates,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(42).bytes(message.appHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResponseFinalizeBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponseFinalizeBlock } as ResponseFinalizeBlock;
    message.events = [];
    message.txResults = [];
    message.validatorUpdates = [];
    message.appHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResults.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validatorUpdates.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.consensusParamUpdates = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseFinalizeBlock {
    const message = { ...baseResponseFinalizeBlock } as ResponseFinalizeBlock;
    message.events = (object.events ?? []).map((e: any) => Event.fromJSON(e));
    message.txResults = (object.txResults ?? []).map((e: any) =>
      ExecTxResult.fromJSON(e)
    );
    message.validatorUpdates = (object.validatorUpdates ?? []).map((e: any) =>
      ValidatorUpdate.fromJSON(e)
    );
    message.consensusParamUpdates =
      object.consensusParamUpdates !== undefined &&
      object.consensusParamUpdates !== null
        ? ConsensusParams.fromJSON(object.consensusParamUpdates)
        : undefined;
    message.appHash =
      object.appHash !== undefined && object.appHash !== null
        ? bytesFromBase64(object.appHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ResponseFinalizeBlock): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    if (message.txResults) {
      obj.txResults = message.txResults.map((e) =>
        e ? ExecTxResult.toJSON(e) : undefined
      );
    } else {
      obj.txResults = [];
    }
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validatorUpdates = [];
    }
    message.consensusParamUpdates !== undefined &&
      (obj.consensusParamUpdates = message.consensusParamUpdates
        ? ConsensusParams.toJSON(message.consensusParamUpdates)
        : undefined);
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ResponseFinalizeBlock>
  ): ResponseFinalizeBlock {
    const message = { ...baseResponseFinalizeBlock } as ResponseFinalizeBlock;
    message.events = (object.events ?? []).map((e) => Event.fromPartial(e));
    message.txResults = (object.txResults ?? []).map((e) =>
      ExecTxResult.fromPartial(e)
    );
    message.validatorUpdates = (object.validatorUpdates ?? []).map((e) =>
      ValidatorUpdate.fromPartial(e)
    );
    message.consensusParamUpdates =
      object.consensusParamUpdates !== undefined &&
      object.consensusParamUpdates !== null
        ? ConsensusParams.fromPartial(object.consensusParamUpdates)
        : undefined;
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
};

const baseCommitInfo: object = { round: 0 };

export const CommitInfo = {
  encode(
    message: CommitInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitInfo } as CommitInfo;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.round =
      object.round !== undefined && object.round !== null
        ? Number(object.round)
        : 0;
    message.votes = (object.votes ?? []).map((e: any) => VoteInfo.fromJSON(e));
    return message;
  },

  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.round !== undefined && (obj.round = message.round);
    if (message.votes) {
      obj.votes = message.votes.map((e) =>
        e ? VoteInfo.toJSON(e) : undefined
      );
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.round = object.round ?? 0;
    message.votes = (object.votes ?? []).map((e) => VoteInfo.fromPartial(e));
    return message;
  },
};

const baseExtendedCommitInfo: object = { round: 0 };

export const ExtendedCommitInfo = {
  encode(
    message: ExtendedCommitInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendedCommitInfo } as ExtendedCommitInfo;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedCommitInfo {
    const message = { ...baseExtendedCommitInfo } as ExtendedCommitInfo;
    message.round =
      object.round !== undefined && object.round !== null
        ? Number(object.round)
        : 0;
    message.votes = (object.votes ?? []).map((e: any) =>
      ExtendedVoteInfo.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ExtendedCommitInfo): unknown {
    const obj: any = {};
    message.round !== undefined && (obj.round = message.round);
    if (message.votes) {
      obj.votes = message.votes.map((e) =>
        e ? ExtendedVoteInfo.toJSON(e) : undefined
      );
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo {
    const message = { ...baseExtendedCommitInfo } as ExtendedCommitInfo;
    message.round = object.round ?? 0;
    message.votes = (object.votes ?? []).map((e) =>
      ExtendedVoteInfo.fromPartial(e)
    );
    return message;
  },
};

const baseEvent: object = { type: "" };

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvent } as Event;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(
            EventAttribute.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    const message = { ...baseEvent } as Event;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.attributes = (object.attributes ?? []).map((e: any) =>
      EventAttribute.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? EventAttribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = { ...baseEvent } as Event;
    message.type = object.type ?? "";
    message.attributes = (object.attributes ?? []).map((e) =>
      EventAttribute.fromPartial(e)
    );
    return message;
  },
};

const baseEventAttribute: object = { key: "", value: "", index: false };

export const EventAttribute = {
  encode(
    message: EventAttribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventAttribute } as EventAttribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAttribute {
    const message = { ...baseEventAttribute } as EventAttribute;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? Boolean(object.index)
        : false;
    return message;
  },

  toJSON(message: EventAttribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = { ...baseEventAttribute } as EventAttribute;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
};

const baseExecTxResult: object = {
  code: 0,
  log: "",
  info: "",
  gasWanted: Long.ZERO,
  gasUsed: Long.ZERO,
  codespace: "",
};

export const ExecTxResult = {
  encode(
    message: ExecTxResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecTxResult } as ExecTxResult;
    message.events = [];
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64() as Long;
          break;
        case 6:
          message.gasUsed = reader.int64() as Long;
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecTxResult {
    const message = { ...baseExecTxResult } as ExecTxResult;
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.gasWanted =
      object.gas_wanted !== undefined && object.gas_wanted !== null
        ? Long.fromString(object.gas_wanted)
        : Long.ZERO;
    message.gasUsed =
      object.gas_used !== undefined && object.gas_used !== null
        ? Long.fromString(object.gas_used)
        : Long.ZERO;
    message.events = (object.events ?? []).map((e: any) => Event.fromJSON(e));
    message.codespace =
      object.codespace !== undefined && object.codespace !== null
        ? String(object.codespace)
        : "";
    return message;
  },

  toJSON(message: ExecTxResult): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gas_used = (message.gasUsed || Long.ZERO).toString());
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult {
    const message = { ...baseExecTxResult } as ExecTxResult;
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.events = (object.events ?? []).map((e) => Event.fromPartial(e));
    message.codespace = object.codespace ?? "";
    return message;
  },
};

const baseTxResult: object = { height: Long.ZERO, index: 0 };

export const TxResult = {
  encode(
    message: TxResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxResult } as TxResult;
    message.tx = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ExecTxResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxResult {
    const message = { ...baseTxResult } as TxResult;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? bytesFromBase64(object.tx)
        : new Uint8Array();
    message.result =
      object.result !== undefined && object.result !== null
        ? ExecTxResult.fromJSON(object.result)
        : undefined;
    return message;
  },

  toJSON(message: TxResult): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.index !== undefined && (obj.index = message.index);
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    message.result !== undefined &&
      (obj.result = message.result
        ? ExecTxResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = { ...baseTxResult } as TxResult;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result =
      object.result !== undefined && object.result !== null
        ? ExecTxResult.fromPartial(object.result)
        : undefined;
    return message;
  },
};

const baseValidator: object = { power: Long.ZERO };

export const Validator = {
  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    message.address = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    message.address =
      object.address !== undefined && object.address !== null
        ? bytesFromBase64(object.address)
        : new Uint8Array();
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromString(object.power)
        : Long.ZERO;
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    message.power !== undefined &&
      (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    message.address = object.address ?? new Uint8Array();
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.ZERO;
    return message;
  },
};

const baseValidatorUpdate: object = { power: Long.ZERO };

export const ValidatorUpdate = {
  encode(
    message: ValidatorUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorUpdate } as ValidatorUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorUpdate {
    const message = { ...baseValidatorUpdate } as ValidatorUpdate;
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromJSON(object.pubKey)
        : undefined;
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromString(object.power)
        : Long.ZERO;
    return message;
  },

  toJSON(message: ValidatorUpdate): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.power !== undefined &&
      (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate {
    const message = { ...baseValidatorUpdate } as ValidatorUpdate;
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.ZERO;
    return message;
  },
};

const baseVoteInfo: object = { blockIdFlag: 0 };

export const VoteInfo = {
  encode(
    message: VoteInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(24).int32(message.blockIdFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteInfo } as VoteInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockIdFlag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteInfo {
    const message = { ...baseVoteInfo } as VoteInfo;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromJSON(object.validator)
        : undefined;
    message.blockIdFlag =
      object.blockIdFlag !== undefined && object.blockIdFlag !== null
        ? blockIDFlagFromJSON(object.blockIdFlag)
        : 0;
    return message;
  },

  toJSON(message: VoteInfo): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.blockIdFlag !== undefined &&
      (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    return obj;
  },

  fromPartial(object: DeepPartial<VoteInfo>): VoteInfo {
    const message = { ...baseVoteInfo } as VoteInfo;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
};

const baseExtendedVoteInfo: object = { blockIdFlag: 0 };

export const ExtendedVoteInfo = {
  encode(
    message: ExtendedVoteInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteExtension.length !== 0) {
      writer.uint32(26).bytes(message.voteExtension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(34).bytes(message.extensionSignature);
    }
    if (message.blockIdFlag !== 0) {
      writer.uint32(40).int32(message.blockIdFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedVoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendedVoteInfo } as ExtendedVoteInfo;
    message.voteExtension = new Uint8Array();
    message.extensionSignature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.voteExtension = reader.bytes();
          break;
        case 4:
          message.extensionSignature = reader.bytes();
          break;
        case 5:
          message.blockIdFlag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedVoteInfo {
    const message = { ...baseExtendedVoteInfo } as ExtendedVoteInfo;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromJSON(object.validator)
        : undefined;
    message.voteExtension =
      object.voteExtension !== undefined && object.voteExtension !== null
        ? bytesFromBase64(object.voteExtension)
        : new Uint8Array();
    message.extensionSignature =
      object.extensionSignature !== undefined &&
      object.extensionSignature !== null
        ? bytesFromBase64(object.extensionSignature)
        : new Uint8Array();
    message.blockIdFlag =
      object.blockIdFlag !== undefined && object.blockIdFlag !== null
        ? blockIDFlagFromJSON(object.blockIdFlag)
        : 0;
    return message;
  },

  toJSON(message: ExtendedVoteInfo): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.voteExtension !== undefined &&
      (obj.voteExtension = base64FromBytes(
        message.voteExtension !== undefined
          ? message.voteExtension
          : new Uint8Array()
      ));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined
          ? message.extensionSignature
          : new Uint8Array()
      ));
    message.blockIdFlag !== undefined &&
      (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    return obj;
  },

  fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo {
    const message = { ...baseExtendedVoteInfo } as ExtendedVoteInfo;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    message.voteExtension = object.voteExtension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    return message;
  },
};

const baseMisbehavior: object = {
  type: 0,
  height: Long.ZERO,
  totalVotingPower: Long.ZERO,
};

export const Misbehavior = {
  encode(
    message: Misbehavior,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(40).int64(message.totalVotingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehavior {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMisbehavior } as Misbehavior;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.totalVotingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Misbehavior {
    const message = { ...baseMisbehavior } as Misbehavior;
    message.type =
      object.type !== undefined && object.type !== null
        ? misbehaviorTypeFromJSON(object.type)
        : 0;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromJSON(object.validator)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromString(object.totalVotingPower)
        : Long.ZERO;
    return message;
  },

  toJSON(message: Misbehavior): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = misbehaviorTypeToJSON(message.type));
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (
        message.totalVotingPower || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Misbehavior>): Misbehavior {
    const message = { ...baseMisbehavior } as Misbehavior;
    message.type = object.type ?? 0;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? Validator.fromPartial(object.validator)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO;
    return message;
  },
};

const baseSnapshot: object = { height: Long.UZERO, format: 0, chunks: 0 };

export const Snapshot = {
  encode(
    message: Snapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSnapshot } as Snapshot;
    message.hash = new Uint8Array();
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    const message = { ...baseSnapshot } as Snapshot;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.UZERO;
    message.format =
      object.format !== undefined && object.format !== null
        ? Number(object.format)
        : 0;
    message.chunks =
      object.chunks !== undefined && object.chunks !== null
        ? Number(object.chunks)
        : 0;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? bytesFromBase64(object.metadata)
        : new Uint8Array();
    return message;
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = message.format);
    message.chunks !== undefined && (obj.chunks = message.chunks);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = { ...baseSnapshot } as Snapshot;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

export interface ABCI {
  Echo(request: RequestEcho): Promise<ResponseEcho>;
  Flush(request: RequestFlush): Promise<ResponseFlush>;
  Info(request: RequestInfo): Promise<ResponseInfo>;
  CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
  Query(request: RequestQuery): Promise<ResponseQuery>;
  Commit(request: RequestCommit): Promise<ResponseCommit>;
  InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
  ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
  OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
  LoadSnapshotChunk(
    request: RequestLoadSnapshotChunk
  ): Promise<ResponseLoadSnapshotChunk>;
  ApplySnapshotChunk(
    request: RequestApplySnapshotChunk
  ): Promise<ResponseApplySnapshotChunk>;
  PrepareProposal(
    request: RequestPrepareProposal
  ): Promise<ResponsePrepareProposal>;
  ProcessProposal(
    request: RequestProcessProposal
  ): Promise<ResponseProcessProposal>;
  ExtendVote(request: RequestExtendVote): Promise<ResponseExtendVote>;
  VerifyVoteExtension(
    request: RequestVerifyVoteExtension
  ): Promise<ResponseVerifyVoteExtension>;
  FinalizeBlock(request: RequestFinalizeBlock): Promise<ResponseFinalizeBlock>;
}

export class ABCIClientImpl implements ABCI {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Echo = this.Echo.bind(this);
    this.Flush = this.Flush.bind(this);
    this.Info = this.Info.bind(this);
    this.CheckTx = this.CheckTx.bind(this);
    this.Query = this.Query.bind(this);
    this.Commit = this.Commit.bind(this);
    this.InitChain = this.InitChain.bind(this);
    this.ListSnapshots = this.ListSnapshots.bind(this);
    this.OfferSnapshot = this.OfferSnapshot.bind(this);
    this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
    this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
    this.PrepareProposal = this.PrepareProposal.bind(this);
    this.ProcessProposal = this.ProcessProposal.bind(this);
    this.ExtendVote = this.ExtendVote.bind(this);
    this.VerifyVoteExtension = this.VerifyVoteExtension.bind(this);
    this.FinalizeBlock = this.FinalizeBlock.bind(this);
  }
  Echo(request: RequestEcho): Promise<ResponseEcho> {
    const data = RequestEcho.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "Echo", data);
    return promise.then((data) => ResponseEcho.decode(new _m0.Reader(data)));
  }

  Flush(request: RequestFlush): Promise<ResponseFlush> {
    const data = RequestFlush.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "Flush", data);
    return promise.then((data) => ResponseFlush.decode(new _m0.Reader(data)));
  }

  Info(request: RequestInfo): Promise<ResponseInfo> {
    const data = RequestInfo.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "Info", data);
    return promise.then((data) => ResponseInfo.decode(new _m0.Reader(data)));
  }

  CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx> {
    const data = RequestCheckTx.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "CheckTx", data);
    return promise.then((data) => ResponseCheckTx.decode(new _m0.Reader(data)));
  }

  Query(request: RequestQuery): Promise<ResponseQuery> {
    const data = RequestQuery.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "Query", data);
    return promise.then((data) => ResponseQuery.decode(new _m0.Reader(data)));
  }

  Commit(request: RequestCommit): Promise<ResponseCommit> {
    const data = RequestCommit.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "Commit", data);
    return promise.then((data) => ResponseCommit.decode(new _m0.Reader(data)));
  }

  InitChain(request: RequestInitChain): Promise<ResponseInitChain> {
    const data = RequestInitChain.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCI", "InitChain", data);
    return promise.then((data) =>
      ResponseInitChain.decode(new _m0.Reader(data))
    );
  }

  ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots> {
    const data = RequestListSnapshots.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "ListSnapshots",
      data
    );
    return promise.then((data) =>
      ResponseListSnapshots.decode(new _m0.Reader(data))
    );
  }

  OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot> {
    const data = RequestOfferSnapshot.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "OfferSnapshot",
      data
    );
    return promise.then((data) =>
      ResponseOfferSnapshot.decode(new _m0.Reader(data))
    );
  }

  LoadSnapshotChunk(
    request: RequestLoadSnapshotChunk
  ): Promise<ResponseLoadSnapshotChunk> {
    const data = RequestLoadSnapshotChunk.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "LoadSnapshotChunk",
      data
    );
    return promise.then((data) =>
      ResponseLoadSnapshotChunk.decode(new _m0.Reader(data))
    );
  }

  ApplySnapshotChunk(
    request: RequestApplySnapshotChunk
  ): Promise<ResponseApplySnapshotChunk> {
    const data = RequestApplySnapshotChunk.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "ApplySnapshotChunk",
      data
    );
    return promise.then((data) =>
      ResponseApplySnapshotChunk.decode(new _m0.Reader(data))
    );
  }

  PrepareProposal(
    request: RequestPrepareProposal
  ): Promise<ResponsePrepareProposal> {
    const data = RequestPrepareProposal.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "PrepareProposal",
      data
    );
    return promise.then((data) =>
      ResponsePrepareProposal.decode(new _m0.Reader(data))
    );
  }

  ProcessProposal(
    request: RequestProcessProposal
  ): Promise<ResponseProcessProposal> {
    const data = RequestProcessProposal.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "ProcessProposal",
      data
    );
    return promise.then((data) =>
      ResponseProcessProposal.decode(new _m0.Reader(data))
    );
  }

  ExtendVote(request: RequestExtendVote): Promise<ResponseExtendVote> {
    const data = RequestExtendVote.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "ExtendVote",
      data
    );
    return promise.then((data) =>
      ResponseExtendVote.decode(new _m0.Reader(data))
    );
  }

  VerifyVoteExtension(
    request: RequestVerifyVoteExtension
  ): Promise<ResponseVerifyVoteExtension> {
    const data = RequestVerifyVoteExtension.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "VerifyVoteExtension",
      data
    );
    return promise.then((data) =>
      ResponseVerifyVoteExtension.decode(new _m0.Reader(data))
    );
  }

  FinalizeBlock(request: RequestFinalizeBlock): Promise<ResponseFinalizeBlock> {
    const data = RequestFinalizeBlock.encode(request).finish();
    const promise = this.rpc.request(
      "tendermint.abci.ABCI",
      "FinalizeBlock",
      data
    );
    return promise.then((data) =>
      ResponseFinalizeBlock.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
