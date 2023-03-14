/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.base.tendermint.v1beta1";

/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
  header?: Header;
  data?: Data;
  evidence?: EvidenceList;
  lastCommit?: Commit;
}

/** Header defines the structure of a Tendermint block header. */
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
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposerAddress: string;
}

const baseBlock: object = {};

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlock } as Block;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    const message = { ...baseBlock } as Block;
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromJSON(object.header)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? Data.fromJSON(object.data)
        : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceList.fromJSON(object.evidence)
        : undefined;
    message.lastCommit =
      object.lastCommit !== undefined && object.lastCommit !== null
        ? Commit.fromJSON(object.lastCommit)
        : undefined;
    return message;
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.data !== undefined &&
      (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence
        ? EvidenceList.toJSON(message.evidence)
        : undefined);
    message.lastCommit !== undefined &&
      (obj.lastCommit = message.lastCommit
        ? Commit.toJSON(message.lastCommit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = { ...baseBlock } as Block;
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? Data.fromPartial(object.data)
        : undefined;
    message.evidence =
      object.evidence !== undefined && object.evidence !== null
        ? EvidenceList.fromPartial(object.evidence)
        : undefined;
    message.lastCommit =
      object.lastCommit !== undefined && object.lastCommit !== null
        ? Commit.fromPartial(object.lastCommit)
        : undefined;
    return message;
  },
};

const baseHeader: object = {
  chainId: "",
  height: Long.ZERO,
  proposerAddress: "",
};

export const Header = {
  encode(
    message: Header,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(34).fork()
      ).ldelim();
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
    if (message.proposerAddress !== "") {
      writer.uint32(114).string(message.proposerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeader } as Header;
    message.lastCommitHash = new Uint8Array();
    message.dataHash = new Uint8Array();
    message.validatorsHash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.consensusHash = new Uint8Array();
    message.appHash = new Uint8Array();
    message.lastResultsHash = new Uint8Array();
    message.evidenceHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
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
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Header {
    const message = { ...baseHeader } as Header;
    message.version =
      object.version !== undefined && object.version !== null
        ? Consensus.fromJSON(object.version)
        : undefined;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.time =
      object.time !== undefined && object.time !== null
        ? fromJsonTimestamp(object.time)
        : undefined;
    message.lastBlockId =
      object.lastBlockId !== undefined && object.lastBlockId !== null
        ? BlockID.fromJSON(object.lastBlockId)
        : undefined;
    message.lastCommitHash =
      object.lastCommitHash !== undefined && object.lastCommitHash !== null
        ? bytesFromBase64(object.lastCommitHash)
        : new Uint8Array();
    message.dataHash =
      object.dataHash !== undefined && object.dataHash !== null
        ? bytesFromBase64(object.dataHash)
        : new Uint8Array();
    message.validatorsHash =
      object.validatorsHash !== undefined && object.validatorsHash !== null
        ? bytesFromBase64(object.validatorsHash)
        : new Uint8Array();
    message.nextValidatorsHash =
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array();
    message.consensusHash =
      object.consensusHash !== undefined && object.consensusHash !== null
        ? bytesFromBase64(object.consensusHash)
        : new Uint8Array();
    message.appHash =
      object.appHash !== undefined && object.appHash !== null
        ? bytesFromBase64(object.appHash)
        : new Uint8Array();
    message.lastResultsHash =
      object.lastResultsHash !== undefined && object.lastResultsHash !== null
        ? bytesFromBase64(object.lastResultsHash)
        : new Uint8Array();
    message.evidenceHash =
      object.evidenceHash !== undefined && object.evidenceHash !== null
        ? bytesFromBase64(object.evidenceHash)
        : new Uint8Array();
    message.proposerAddress =
      object.proposerAddress !== undefined && object.proposerAddress !== null
        ? String(object.proposerAddress)
        : "";
    return message;
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version
        ? Consensus.toJSON(message.version)
        : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId
        ? BlockID.toJSON(message.lastBlockId)
        : undefined);
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined
          ? message.lastCommitHash
          : new Uint8Array()
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(
        message.dataHash !== undefined ? message.dataHash : new Uint8Array()
      ));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined
          ? message.validatorsHash
          : new Uint8Array()
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined
          ? message.consensusHash
          : new Uint8Array()
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined
          ? message.lastResultsHash
          : new Uint8Array()
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined
          ? message.evidenceHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = message.proposerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = { ...baseHeader } as Header;
    message.version =
      object.version !== undefined && object.version !== null
        ? Consensus.fromPartial(object.version)
        : undefined;
    message.chainId = object.chainId ?? "";
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.time = object.time ?? undefined;
    message.lastBlockId =
      object.lastBlockId !== undefined && object.lastBlockId !== null
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
    message.proposerAddress = object.proposerAddress ?? "";
    return message;
  },
};

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
