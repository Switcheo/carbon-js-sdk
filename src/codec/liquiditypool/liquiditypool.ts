/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface Pool {
  creator: string;
  id: Long;
  name: string;
  denom: string;
  denomA: string;
  amountA: string;
  weightA: string;
  denomB: string;
  amountB: string;
  weightB: string;
  swapFee: string;
  numQuotes: Long;
  sharesAmount: string;
  market: string;
}

export interface Pools {
  pools: Pool[];
}

export interface AddLiquidity {
  creator: string;
  id: Long;
  amountA: string;
  amountB: string;
  minShares: string;
}

export interface AddLiquidities {
  addLiquidities: AddLiquidity[];
}

export interface RemoveLiquidity {
  creator: string;
  id: Long;
  amount: string;
}

export interface RemoveLiquidities {
  removeLiquidities: RemoveLiquidity[];
}

const basePool: object = {
  creator: "",
  id: Long.UZERO,
  name: "",
  denom: "",
  denomA: "",
  amountA: "",
  weightA: "",
  denomB: "",
  amountB: "",
  weightB: "",
  swapFee: "",
  numQuotes: Long.ZERO,
  sharesAmount: "",
  market: "",
};

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.denomA !== "") {
      writer.uint32(42).string(message.denomA);
    }
    if (message.amountA !== "") {
      writer.uint32(50).string(message.amountA);
    }
    if (message.weightA !== "") {
      writer.uint32(58).string(message.weightA);
    }
    if (message.denomB !== "") {
      writer.uint32(66).string(message.denomB);
    }
    if (message.amountB !== "") {
      writer.uint32(74).string(message.amountB);
    }
    if (message.weightB !== "") {
      writer.uint32(82).string(message.weightB);
    }
    if (message.swapFee !== "") {
      writer.uint32(90).string(message.swapFee);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(96).int64(message.numQuotes);
    }
    if (message.sharesAmount !== "") {
      writer.uint32(106).string(message.sharesAmount);
    }
    if (message.market !== "") {
      writer.uint32(114).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.denomA = reader.string();
          break;
        case 6:
          message.amountA = reader.string();
          break;
        case 7:
          message.weightA = reader.string();
          break;
        case 8:
          message.denomB = reader.string();
          break;
        case 9:
          message.amountB = reader.string();
          break;
        case 10:
          message.weightB = reader.string();
          break;
        case 11:
          message.swapFee = reader.string();
          break;
        case 12:
          message.numQuotes = reader.int64() as Long;
          break;
        case 13:
          message.sharesAmount = reader.string();
          break;
        case 14:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.denomA =
      object.denomA !== undefined && object.denomA !== null
        ? String(object.denomA)
        : "";
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.weightA =
      object.weightA !== undefined && object.weightA !== null
        ? String(object.weightA)
        : "";
    message.denomB =
      object.denomB !== undefined && object.denomB !== null
        ? String(object.denomB)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.weightB =
      object.weightB !== undefined && object.weightB !== null
        ? String(object.weightB)
        : "";
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.ZERO;
    message.sharesAmount =
      object.sharesAmount !== undefined && object.sharesAmount !== null
        ? String(object.sharesAmount)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.weightA !== undefined && (obj.weightA = message.weightA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.weightB !== undefined && (obj.weightB = message.weightB);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.ZERO).toString());
    message.sharesAmount !== undefined &&
      (obj.sharesAmount = message.sharesAmount);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = { ...basePool } as Pool;
    message.creator = object.creator ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.denomA = object.denomA ?? "";
    message.amountA = object.amountA ?? "";
    message.weightA = object.weightA ?? "";
    message.denomB = object.denomB ?? "";
    message.amountB = object.amountB ?? "";
    message.weightB = object.weightB ?? "";
    message.swapFee = object.swapFee ?? "";
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.ZERO;
    message.sharesAmount = object.sharesAmount ?? "";
    message.market = object.market ?? "";
    return message;
  },
};

const basePools: object = {};

export const Pools = {
  encode(message: Pools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePools } as Pools;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pools {
    const message = { ...basePools } as Pools;
    message.pools = (object.pools ?? []).map((e: any) => Pool.fromJSON(e));
    return message;
  },

  toJSON(message: Pools): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pools>, I>>(object: I): Pools {
    const message = { ...basePools } as Pools;
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    return message;
  },
};

const baseAddLiquidity: object = {
  creator: "",
  id: Long.UZERO,
  amountA: "",
  amountB: "",
  minShares: "",
};

export const AddLiquidity = {
  encode(
    message: AddLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amountA !== "") {
      writer.uint32(26).string(message.amountA);
    }
    if (message.amountB !== "") {
      writer.uint32(34).string(message.amountB);
    }
    if (message.minShares !== "") {
      writer.uint32(42).string(message.minShares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddLiquidity } as AddLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.amountA = reader.string();
          break;
        case 4:
          message.amountB = reader.string();
          break;
        case 5:
          message.minShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddLiquidity {
    const message = { ...baseAddLiquidity } as AddLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.minShares =
      object.minShares !== undefined && object.minShares !== null
        ? String(object.minShares)
        : "";
    return message;
  },

  toJSON(message: AddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.minShares !== undefined && (obj.minShares = message.minShares);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddLiquidity>, I>>(
    object: I
  ): AddLiquidity {
    const message = { ...baseAddLiquidity } as AddLiquidity;
    message.creator = object.creator ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.minShares = object.minShares ?? "";
    return message;
  },
};

const baseAddLiquidities: object = {};

export const AddLiquidities = {
  encode(
    message: AddLiquidities,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addLiquidities) {
      AddLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddLiquidities } as AddLiquidities;
    message.addLiquidities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addLiquidities.push(
            AddLiquidity.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddLiquidities {
    const message = { ...baseAddLiquidities } as AddLiquidities;
    message.addLiquidities = (object.addLiquidities ?? []).map((e: any) =>
      AddLiquidity.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AddLiquidities): unknown {
    const obj: any = {};
    if (message.addLiquidities) {
      obj.addLiquidities = message.addLiquidities.map((e) =>
        e ? AddLiquidity.toJSON(e) : undefined
      );
    } else {
      obj.addLiquidities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddLiquidities>, I>>(
    object: I
  ): AddLiquidities {
    const message = { ...baseAddLiquidities } as AddLiquidities;
    message.addLiquidities =
      object.addLiquidities?.map((e) => AddLiquidity.fromPartial(e)) || [];
    return message;
  },
};

const baseRemoveLiquidity: object = { creator: "", id: Long.UZERO, amount: "" };

export const RemoveLiquidity = {
  encode(
    message: RemoveLiquidity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveLiquidity } as RemoveLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveLiquidity {
    const message = { ...baseRemoveLiquidity } as RemoveLiquidity;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: RemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveLiquidity>, I>>(
    object: I
  ): RemoveLiquidity {
    const message = { ...baseRemoveLiquidity } as RemoveLiquidity;
    message.creator = object.creator ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseRemoveLiquidities: object = {};

export const RemoveLiquidities = {
  encode(
    message: RemoveLiquidities,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.removeLiquidities) {
      RemoveLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLiquidities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveLiquidities } as RemoveLiquidities;
    message.removeLiquidities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removeLiquidities.push(
            RemoveLiquidity.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveLiquidities {
    const message = { ...baseRemoveLiquidities } as RemoveLiquidities;
    message.removeLiquidities = (object.removeLiquidities ?? []).map((e: any) =>
      RemoveLiquidity.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RemoveLiquidities): unknown {
    const obj: any = {};
    if (message.removeLiquidities) {
      obj.removeLiquidities = message.removeLiquidities.map((e) =>
        e ? RemoveLiquidity.toJSON(e) : undefined
      );
    } else {
      obj.removeLiquidities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveLiquidities>, I>>(
    object: I
  ): RemoveLiquidities {
    const message = { ...baseRemoveLiquidities } as RemoveLiquidities;
    message.removeLiquidities =
      object.removeLiquidities?.map((e) => RemoveLiquidity.fromPartial(e)) ||
      [];
    return message;
  },
};

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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
