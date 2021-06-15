/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateToken {
  creator: string;
  name: string;
  symbol: string;
  denom: string;
  decimals: Long;
  nativeDecimals: Long;
  blockchain: string;
  chainId: Long;
  assetId: string;
  isCollateral: boolean;
  lockProxyHash: string;
  delegatedSupply: string;
}

export interface MsgCreateTokenResponse {
  denom: string;
}

export interface MsgSyncToken {
  syncer: string;
  denom: string;
}

export interface MsgSyncTokenResponse {}

export interface MsgMintToken {
  creator: string;
  denom: string;
  amount: string;
  to: string;
}

export interface MsgMintTokenResponse {}

const baseMsgCreateToken: object = {
  creator: "",
  name: "",
  symbol: "",
  denom: "",
  decimals: Long.ZERO,
  nativeDecimals: Long.ZERO,
  blockchain: "",
  chainId: Long.UZERO,
  assetId: "",
  isCollateral: false,
  lockProxyHash: "",
  delegatedSupply: "",
};

export const MsgCreateToken = {
  encode(
    message: MsgCreateToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(40).int64(message.decimals);
    }
    if (!message.nativeDecimals.isZero()) {
      writer.uint32(48).int64(message.nativeDecimals);
    }
    if (message.blockchain !== "") {
      writer.uint32(58).string(message.blockchain);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(64).uint64(message.chainId);
    }
    if (message.assetId !== "") {
      writer.uint32(74).string(message.assetId);
    }
    if (message.isCollateral === true) {
      writer.uint32(80).bool(message.isCollateral);
    }
    if (message.lockProxyHash !== "") {
      writer.uint32(90).string(message.lockProxyHash);
    }
    if (message.delegatedSupply !== "") {
      writer.uint32(98).string(message.delegatedSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.decimals = reader.int64() as Long;
          break;
        case 6:
          message.nativeDecimals = reader.int64() as Long;
          break;
        case 7:
          message.blockchain = reader.string();
          break;
        case 8:
          message.chainId = reader.uint64() as Long;
          break;
        case 9:
          message.assetId = reader.string();
          break;
        case 10:
          message.isCollateral = reader.bool();
          break;
        case 11:
          message.lockProxyHash = reader.string();
          break;
        case 12:
          message.delegatedSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Long.fromString(object.decimals);
    } else {
      message.decimals = Long.ZERO;
    }
    if (object.nativeDecimals !== undefined && object.nativeDecimals !== null) {
      message.nativeDecimals = Long.fromString(object.nativeDecimals);
    } else {
      message.nativeDecimals = Long.ZERO;
    }
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = String(object.blockchain);
    } else {
      message.blockchain = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Long.fromString(object.chainId);
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = String(object.assetId);
    } else {
      message.assetId = "";
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = Boolean(object.isCollateral);
    } else {
      message.isCollateral = false;
    }
    if (object.lockProxyHash !== undefined && object.lockProxyHash !== null) {
      message.lockProxyHash = String(object.lockProxyHash);
    } else {
      message.lockProxyHash = "";
    }
    if (
      object.delegatedSupply !== undefined &&
      object.delegatedSupply !== null
    ) {
      message.delegatedSupply = String(object.delegatedSupply);
    } else {
      message.delegatedSupply = "";
    }
    return message;
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.nativeDecimals !== undefined &&
      (obj.nativeDecimals = (message.nativeDecimals || Long.ZERO).toString());
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.isCollateral !== undefined &&
      (obj.isCollateral = message.isCollateral);
    message.lockProxyHash !== undefined &&
      (obj.lockProxyHash = message.lockProxyHash);
    message.delegatedSupply !== undefined &&
      (obj.delegatedSupply = message.delegatedSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals as Long;
    } else {
      message.decimals = Long.ZERO;
    }
    if (object.nativeDecimals !== undefined && object.nativeDecimals !== null) {
      message.nativeDecimals = object.nativeDecimals as Long;
    } else {
      message.nativeDecimals = Long.ZERO;
    }
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = object.blockchain;
    } else {
      message.blockchain = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId as Long;
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = object.assetId;
    } else {
      message.assetId = "";
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = object.isCollateral;
    } else {
      message.isCollateral = false;
    }
    if (object.lockProxyHash !== undefined && object.lockProxyHash !== null) {
      message.lockProxyHash = object.lockProxyHash;
    } else {
      message.lockProxyHash = "";
    }
    if (
      object.delegatedSupply !== undefined &&
      object.delegatedSupply !== null
    ) {
      message.delegatedSupply = object.delegatedSupply;
    } else {
      message.delegatedSupply = "";
    }
    return message;
  },
};

const baseMsgCreateTokenResponse: object = { denom: "" };

export const MsgCreateTokenResponse = {
  encode(
    message: MsgCreateTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTokenResponse>
  ): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgSyncToken: object = { syncer: "", denom: "" };

export const MsgSyncToken = {
  encode(
    message: MsgSyncToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSyncToken {
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    if (object.syncer !== undefined && object.syncer !== null) {
      message.syncer = String(object.syncer);
    } else {
      message.syncer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgSyncToken): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSyncToken>): MsgSyncToken {
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    if (object.syncer !== undefined && object.syncer !== null) {
      message.syncer = object.syncer;
    } else {
      message.syncer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgSyncTokenResponse: object = {};

export const MsgSyncTokenResponse = {
  encode(
    _: MsgSyncTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSyncTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
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

  fromJSON(_: any): MsgSyncTokenResponse {
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
    return message;
  },

  toJSON(_: MsgSyncTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSyncTokenResponse>): MsgSyncTokenResponse {
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
    return message;
  },
};

const baseMsgMintToken: object = { creator: "", denom: "", amount: "", to: "" };

export const MsgMintToken = {
  encode(
    message: MsgMintToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintToken } as MsgMintToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    const message = { ...baseMsgMintToken } as MsgMintToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken {
    const message = { ...baseMsgMintToken } as MsgMintToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    return message;
  },
};

const baseMsgMintTokenResponse: object = {};

export const MsgMintTokenResponse = {
  encode(
    _: MsgMintTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
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

  fromJSON(_: any): MsgMintTokenResponse {
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse>;
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateToken = this.CreateToken.bind(this);
    this.SyncToken = this.SyncToken.bind(this);
    this.MintToken = this.MintToken.bind(this);
  }
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "CreateToken",
      data
    );
    return promise.then((data) =>
      MsgCreateTokenResponse.decode(new _m0.Reader(data))
    );
  }

  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse> {
    const data = MsgSyncToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "SyncToken",
      data
    );
    return promise.then((data) =>
      MsgSyncTokenResponse.decode(new _m0.Reader(data))
    );
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "MintToken",
      data
    );
    return promise.then((data) =>
      MsgMintTokenResponse.decode(new _m0.Reader(data))
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

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
