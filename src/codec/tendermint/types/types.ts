/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { BlockIDFlag, blockIDFlagFromJSON, blockIDFlagToJSON, ValidatorSet } from "./validator";

export const protobufPackage = "tendermint.types";

/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}

export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}

export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** PartsetHeader */
export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}

export interface Part {
  index: number;
  bytes: Uint8Array;
  proof?: Proof;
}

/** BlockID */
export interface BlockID {
  hash: Uint8Array;
  partSetHeader?: PartSetHeader;
}

/** Header defines the structure of a block header. */
export interface Header {
  /** basic block info */
  version?: Consensus;
  chainId: string;
  height: Long;
  time?: Date;
  /** prev block info */
  lastBlockId?: BlockID;
  /** hashes of block data */
  lastCommitHash: Uint8Array;
  /** transactions */
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;
  /** validators for the next block */
  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */
  consensusHash: Uint8Array;
  /** state after txs from the previous block */
  appHash: Uint8Array;
  /** root hash of all results from the txs from the previous block */
  lastResultsHash: Uint8Array;
  /** consensus info */
  evidenceHash: Uint8Array;
  /** original proposer of the block */
  proposerAddress: Uint8Array;
}

/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}

/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
  type: SignedMsgType;
  height: Long;
  round: number;
  /** zero if vote is nil. */
  blockId?: BlockID;
  timestamp?: Date;
  validatorAddress: Uint8Array;
  validatorIndex: number;
  /**
   * Vote signature by the validator if they participated in consensus for the
   * associated block.
   */
  signature: Uint8Array;
  /**
   * Vote extension provided by the application. Only valid for precommit
   * messages.
   */
  extension: Uint8Array;
  /**
   * Vote extension signature by the validator if they participated in
   * consensus for the associated block.
   * Only valid for precommit messages.
   */
  extensionSignature: Uint8Array;
}

/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height: Long;
  round: number;
  blockId?: BlockID;
  signatures: CommitSig[];
}

/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp?: Date;
  signature: Uint8Array;
}

export interface ExtendedCommit {
  height: Long;
  round: number;
  blockId?: BlockID;
  extendedSignatures: ExtendedCommitSig[];
}

/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
  blockIdFlag: BlockIDFlag;
  validatorAddress: Uint8Array;
  timestamp?: Date;
  signature: Uint8Array;
  /** Vote extension data */
  extension: Uint8Array;
  /** Vote extension signature */
  extensionSignature: Uint8Array;
}

export interface Proposal {
  type: SignedMsgType;
  height: Long;
  round: number;
  polRound: number;
  blockId?: BlockID;
  timestamp?: Date;
  signature: Uint8Array;
}

export interface SignedHeader {
  header?: Header;
  commit?: Commit;
}

export interface LightBlock {
  signedHeader?: SignedHeader;
  validatorSet?: ValidatorSet;
}

export interface BlockMeta {
  blockId?: BlockID;
  blockSize: Long;
  header?: Header;
  numTxs: Long;
}

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  rootHash: Uint8Array;
  data: Uint8Array;
  proof?: Proof;
}

function createBasePartSetHeader(): PartSetHeader {
  return { total: 0, hash: new Uint8Array() };
}

export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
    };
  },

  toJSON(message: PartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<PartSetHeader>): PartSetHeader {
    return PartSetHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBasePart(): Part {
  return { index: 0, bytes: new Uint8Array(), proof: undefined };
}

export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bytes = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = Proof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Part {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.bytes !== undefined &&
      (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Part>): Part {
    return Part.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

function createBaseBlockID(): BlockID {
  return { hash: new Uint8Array(), partSetHeader: undefined };
}

export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? PartSetHeader.fromJSON(object.partSetHeader) : undefined,
    };
  },

  toJSON(message: BlockID): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined &&
      (obj.partSetHeader = message.partSetHeader ? PartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },

  create(base?: DeepPartial<BlockID>): BlockID {
    return BlockID.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = (object.partSetHeader !== undefined && object.partSetHeader !== null)
      ? PartSetHeader.fromPartial(object.partSetHeader)
      : undefined;
    return message;
  },
};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chainId: "",
    height: Long.ZERO,
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = Consensus.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lastCommitHash = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dataHash = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.validatorsHash = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.nextValidatorsHash = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.consensusHash = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.appHash = reader.bytes();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastResultsHash = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.evidenceHash = reader.bytes();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.proposerAddress = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash)
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array(),
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array(),
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined ? message.consensusHash : new Uint8Array(),
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array(),
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.version = (object.version !== undefined && object.version !== null)
      ? Consensus.fromPartial(object.version)
      : undefined;
    message.chainId = object.chainId ?? "";
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.time = object.time ?? undefined;
    message.lastBlockId = (object.lastBlockId !== undefined && object.lastBlockId !== null)
      ? BlockID.fromPartial(object.lastBlockId)
      : undefined;
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseData(): Data {
  return { txs: [] };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txs.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Data {
    return { txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Data>): Data {
    return Data.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
};

function createBaseVote(): Vote {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: new Uint8Array(),
    validatorIndex: 0,
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(50).bytes(message.validatorAddress);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(56).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(74).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(82).bytes(message.extensionSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.round = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.blockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.validatorAddress = reader.bytes();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.validatorIndex = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.extension = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.extensionSignature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(),
      extensionSignature: isSet(object.extensionSignature)
        ? bytesFromBase64(object.extensionSignature)
        : new Uint8Array(),
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.extension !== undefined &&
      (obj.extension = base64FromBytes(message.extension !== undefined ? message.extension : new Uint8Array()));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined ? message.extensionSignature : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<Vote>): Vote {
    return Vote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
};

function createBaseCommit(): Commit {
  return { height: Long.ZERO, round: 0, blockId: undefined, signatures: [] };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.round = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Commit {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => CommitSig.fromJSON(e)) : [],
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? CommitSig.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Commit>): Commit {
    return Commit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Commit>): Commit {
    const message = createBaseCommit();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.signatures = object.signatures?.map((e) => CommitSig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommitSig(): CommitSig {
  return { blockIdFlag: 0, validatorAddress: new Uint8Array(), timestamp: undefined, signature: new Uint8Array() };
}

export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockIdFlag = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitSig {
    return {
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: CommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<CommitSig>): CommitSig {
    return CommitSig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseExtendedCommit(): ExtendedCommit {
  return { height: Long.ZERO, round: 0, blockId: undefined, extendedSignatures: [] };
}

export const ExtendedCommit = {
  encode(message: ExtendedCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extendedSignatures) {
      ExtendedCommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.round = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.extendedSignatures.push(ExtendedCommitSig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtendedCommit {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      extendedSignatures: Array.isArray(object?.extendedSignatures)
        ? object.extendedSignatures.map((e: any) => ExtendedCommitSig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExtendedCommit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    if (message.extendedSignatures) {
      obj.extendedSignatures = message.extendedSignatures.map((e) => e ? ExtendedCommitSig.toJSON(e) : undefined);
    } else {
      obj.extendedSignatures = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ExtendedCommit>): ExtendedCommit {
    return ExtendedCommit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtendedCommit>): ExtendedCommit {
    const message = createBaseExtendedCommit();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.round = object.round ?? 0;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.extendedSignatures = object.extendedSignatures?.map((e) => ExtendedCommitSig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExtendedCommitSig(): ExtendedCommitSig {
  return {
    blockIdFlag: 0,
    validatorAddress: new Uint8Array(),
    timestamp: undefined,
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extensionSignature: new Uint8Array(),
  };
}

export const ExtendedCommitSig = {
  encode(message: ExtendedCommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== 0) {
      writer.uint32(8).int32(message.blockIdFlag);
    }
    if (message.validatorAddress.length !== 0) {
      writer.uint32(18).bytes(message.validatorAddress);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(42).bytes(message.extension);
    }
    if (message.extensionSignature.length !== 0) {
      writer.uint32(50).bytes(message.extensionSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedCommitSig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockIdFlag = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extension = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extensionSignature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtendedCommitSig {
    return {
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : 0,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(),
      extensionSignature: isSet(object.extensionSignature)
        ? bytesFromBase64(object.extensionSignature)
        : new Uint8Array(),
    };
  },

  toJSON(message: ExtendedCommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = base64FromBytes(
        message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array(),
      ));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.extension !== undefined &&
      (obj.extension = base64FromBytes(message.extension !== undefined ? message.extension : new Uint8Array()));
    message.extensionSignature !== undefined &&
      (obj.extensionSignature = base64FromBytes(
        message.extensionSignature !== undefined ? message.extensionSignature : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<ExtendedCommitSig>): ExtendedCommitSig {
    return ExtendedCommitSig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtendedCommitSig>): ExtendedCommitSig {
    const message = createBaseExtendedCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? 0;
    message.validatorAddress = object.validatorAddress ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extensionSignature = object.extensionSignature ?? new Uint8Array();
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: Long.ZERO,
    round: 0,
    polRound: 0,
    blockId: undefined,
    timestamp: undefined,
    signature: new Uint8Array(),
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.polRound !== 0) {
      writer.uint32(32).int32(message.polRound);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.round = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.polRound = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.blockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<Proposal>): Proposal {
    return Proposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.round = object.round ?? 0;
    message.polRound = object.polRound ?? 0;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseSignedHeader(): SignedHeader {
  return { header: undefined, commit: undefined };
}

export const SignedHeader = {
  encode(message: SignedHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = Commit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignedHeader {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined,
    };
  },

  toJSON(message: SignedHeader): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SignedHeader>): SignedHeader {
    return SignedHeader.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.commit = (object.commit !== undefined && object.commit !== null)
      ? Commit.fromPartial(object.commit)
      : undefined;
    return message;
  },
};

function createBaseLightBlock(): LightBlock {
  return { signedHeader: undefined, validatorSet: undefined };
}

export const LightBlock = {
  encode(message: LightBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LightBlock {
    return {
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
    };
  },

  toJSON(message: LightBlock): unknown {
    const obj: any = {};
    message.signedHeader !== undefined &&
      (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined &&
      (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LightBlock>): LightBlock {
    return LightBlock.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    message.signedHeader = (object.signedHeader !== undefined && object.signedHeader !== null)
      ? SignedHeader.fromPartial(object.signedHeader)
      : undefined;
    message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
      ? ValidatorSet.fromPartial(object.validatorSet)
      : undefined;
    return message;
  },
};

function createBaseBlockMeta(): BlockMeta {
  return { blockId: undefined, blockSize: Long.ZERO, header: undefined, numTxs: Long.ZERO };
}

export const BlockMeta = {
  encode(message: BlockMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockSize.isZero()) {
      writer.uint32(16).int64(message.blockSize);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (!message.numTxs.isZero()) {
      writer.uint32(32).int64(message.numTxs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockSize = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.header = Header.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numTxs = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockMeta {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      blockSize: isSet(object.blockSize) ? Long.fromValue(object.blockSize) : Long.ZERO,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      numTxs: isSet(object.numTxs) ? Long.fromValue(object.numTxs) : Long.ZERO,
    };
  },

  toJSON(message: BlockMeta): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || Long.ZERO).toString());
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BlockMeta>): BlockMeta {
    return BlockMeta.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockID.fromPartial(object.blockId)
      : undefined;
    message.blockSize = (object.blockSize !== undefined && object.blockSize !== null)
      ? Long.fromValue(object.blockSize)
      : Long.ZERO;
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header)
      : undefined;
    message.numTxs = (object.numTxs !== undefined && object.numTxs !== null)
      ? Long.fromValue(object.numTxs)
      : Long.ZERO;
    return message;
  },
};

function createBaseTxProof(): TxProof {
  return { rootHash: new Uint8Array(), data: new Uint8Array(), proof: undefined };
}

export const TxProof = {
  encode(message: TxProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rootHash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.proof = Proof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxProof {
    return {
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: TxProof): unknown {
    const obj: any = {};
    message.rootHash !== undefined &&
      (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TxProof>): TxProof {
    return TxProof.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
