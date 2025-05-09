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
  sharesAmount: string;
  ampBps: Long;
  vAmountA: string;
  vAmountB: string;
}

export interface Pools {
  pools: Pool[];
}

export interface PoolRoute {
  marketId: string;
  poolIds: Long[];
  legacyNumQuotes: Long;
  numQuotes: Long;
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

export interface RemovePoolRoutes {
  removePoolRoutes: Uint8Array[];
}

export interface PoolReserve {
  id: Long;
  amountA: string;
  weightA: string;
  amountB: string;
  weightB: string;
  vAmountA: string;
  vAmountB: string;
}

export interface ReserveData {
  poolId: Long;
  baseDenom: string;
  quoteDenom: string;
  baseBalance: string;
  quoteBalance: string;
  baseWeight: string;
  quoteWeight: string;
  swapFee: string;
  ampBps: Long;
  vBaseBalance: string;
  vQuoteBalance: string;
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
  sharesAmount: "",
  ampBps: Long.UZERO,
  vAmountA: "",
  vAmountB: "",
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
    if (message.sharesAmount !== "") {
      writer.uint32(106).string(message.sharesAmount);
    }
    if (!message.ampBps.isZero()) {
      writer.uint32(120).uint64(message.ampBps);
    }
    if (message.vAmountA !== "") {
      writer.uint32(130).string(message.vAmountA);
    }
    if (message.vAmountB !== "") {
      writer.uint32(138).string(message.vAmountB);
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
        case 13:
          message.sharesAmount = reader.string();
          break;
        case 15:
          message.ampBps = reader.uint64() as Long;
          break;
        case 16:
          message.vAmountA = reader.string();
          break;
        case 17:
          message.vAmountB = reader.string();
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
    message.sharesAmount =
      object.sharesAmount !== undefined && object.sharesAmount !== null
        ? String(object.sharesAmount)
        : "";
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromString(object.ampBps)
        : Long.UZERO;
    message.vAmountA =
      object.vAmountA !== undefined && object.vAmountA !== null
        ? String(object.vAmountA)
        : "";
    message.vAmountB =
      object.vAmountB !== undefined && object.vAmountB !== null
        ? String(object.vAmountB)
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
    message.sharesAmount !== undefined &&
      (obj.sharesAmount = message.sharesAmount);
    message.ampBps !== undefined &&
      (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    message.vAmountA !== undefined && (obj.vAmountA = message.vAmountA);
    message.vAmountB !== undefined && (obj.vAmountB = message.vAmountB);
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
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
    message.sharesAmount = object.sharesAmount ?? "";
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromValue(object.ampBps)
        : Long.UZERO;
    message.vAmountA = object.vAmountA ?? "";
    message.vAmountB = object.vAmountB ?? "";
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

  fromPartial(object: DeepPartial<Pools>): Pools {
    const message = { ...basePools } as Pools;
    message.pools = (object.pools ?? []).map((e) => Pool.fromPartial(e));
    return message;
  },
};

const basePoolRoute: object = {
  marketId: "",
  poolIds: Long.UZERO,
  legacyNumQuotes: Long.ZERO,
  numQuotes: Long.UZERO,
};

export const PoolRoute = {
  encode(
    message: PoolRoute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.legacyNumQuotes.isZero()) {
      writer.uint32(24).int64(message.legacyNumQuotes);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(32).uint64(message.numQuotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolRoute } as PoolRoute;
    message.poolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }
          } else {
            message.poolIds.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.legacyNumQuotes = reader.int64() as Long;
          break;
        case 4:
          message.numQuotes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolRoute {
    const message = { ...basePoolRoute } as PoolRoute;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.poolIds = (object.poolIds ?? []).map((e: any) =>
      Long.fromString(e)
    );
    message.legacyNumQuotes =
      object.legacyNumQuotes !== undefined && object.legacyNumQuotes !== null
        ? Long.fromString(object.legacyNumQuotes)
        : Long.ZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.UZERO;
    return message;
  },

  toJSON(message: PoolRoute): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.legacyNumQuotes !== undefined &&
      (obj.legacyNumQuotes = (message.legacyNumQuotes || Long.ZERO).toString());
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PoolRoute>): PoolRoute {
    const message = { ...basePoolRoute } as PoolRoute;
    message.marketId = object.marketId ?? "";
    message.poolIds = (object.poolIds ?? []).map((e) => Long.fromValue(e));
    message.legacyNumQuotes =
      object.legacyNumQuotes !== undefined && object.legacyNumQuotes !== null
        ? Long.fromValue(object.legacyNumQuotes)
        : Long.ZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.UZERO;
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

  fromPartial(object: DeepPartial<AddLiquidity>): AddLiquidity {
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

  fromPartial(object: DeepPartial<AddLiquidities>): AddLiquidities {
    const message = { ...baseAddLiquidities } as AddLiquidities;
    message.addLiquidities = (object.addLiquidities ?? []).map((e) =>
      AddLiquidity.fromPartial(e)
    );
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

  fromPartial(object: DeepPartial<RemoveLiquidity>): RemoveLiquidity {
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

  fromPartial(object: DeepPartial<RemoveLiquidities>): RemoveLiquidities {
    const message = { ...baseRemoveLiquidities } as RemoveLiquidities;
    message.removeLiquidities = (object.removeLiquidities ?? []).map((e) =>
      RemoveLiquidity.fromPartial(e)
    );
    return message;
  },
};

const baseRemovePoolRoutes: object = {};

export const RemovePoolRoutes = {
  encode(
    message: RemovePoolRoutes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.removePoolRoutes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePoolRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemovePoolRoutes } as RemovePoolRoutes;
    message.removePoolRoutes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removePoolRoutes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRoutes {
    const message = { ...baseRemovePoolRoutes } as RemovePoolRoutes;
    message.removePoolRoutes = (object.removePoolRoutes ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    return message;
  },

  toJSON(message: RemovePoolRoutes): unknown {
    const obj: any = {};
    if (message.removePoolRoutes) {
      obj.removePoolRoutes = message.removePoolRoutes.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.removePoolRoutes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RemovePoolRoutes>): RemovePoolRoutes {
    const message = { ...baseRemovePoolRoutes } as RemovePoolRoutes;
    message.removePoolRoutes = (object.removePoolRoutes ?? []).map((e) => e);
    return message;
  },
};

const basePoolReserve: object = {
  id: Long.UZERO,
  amountA: "",
  weightA: "",
  amountB: "",
  weightB: "",
  vAmountA: "",
  vAmountB: "",
};

export const PoolReserve = {
  encode(
    message: PoolReserve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amountA !== "") {
      writer.uint32(18).string(message.amountA);
    }
    if (message.weightA !== "") {
      writer.uint32(26).string(message.weightA);
    }
    if (message.amountB !== "") {
      writer.uint32(34).string(message.amountB);
    }
    if (message.weightB !== "") {
      writer.uint32(42).string(message.weightB);
    }
    if (message.vAmountA !== "") {
      writer.uint32(50).string(message.vAmountA);
    }
    if (message.vAmountB !== "") {
      writer.uint32(58).string(message.vAmountB);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolReserve } as PoolReserve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.amountA = reader.string();
          break;
        case 3:
          message.weightA = reader.string();
          break;
        case 4:
          message.amountB = reader.string();
          break;
        case 5:
          message.weightB = reader.string();
          break;
        case 6:
          message.vAmountA = reader.string();
          break;
        case 7:
          message.vAmountB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolReserve {
    const message = { ...basePoolReserve } as PoolReserve;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.weightA =
      object.weightA !== undefined && object.weightA !== null
        ? String(object.weightA)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.weightB =
      object.weightB !== undefined && object.weightB !== null
        ? String(object.weightB)
        : "";
    message.vAmountA =
      object.vAmountA !== undefined && object.vAmountA !== null
        ? String(object.vAmountA)
        : "";
    message.vAmountB =
      object.vAmountB !== undefined && object.vAmountB !== null
        ? String(object.vAmountB)
        : "";
    return message;
  },

  toJSON(message: PoolReserve): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.weightA !== undefined && (obj.weightA = message.weightA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.weightB !== undefined && (obj.weightB = message.weightB);
    message.vAmountA !== undefined && (obj.vAmountA = message.vAmountA);
    message.vAmountB !== undefined && (obj.vAmountB = message.vAmountB);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolReserve>): PoolReserve {
    const message = { ...basePoolReserve } as PoolReserve;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.weightA = object.weightA ?? "";
    message.amountB = object.amountB ?? "";
    message.weightB = object.weightB ?? "";
    message.vAmountA = object.vAmountA ?? "";
    message.vAmountB = object.vAmountB ?? "";
    return message;
  },
};

const baseReserveData: object = {
  poolId: Long.UZERO,
  baseDenom: "",
  quoteDenom: "",
  baseBalance: "",
  quoteBalance: "",
  baseWeight: "",
  quoteWeight: "",
  swapFee: "",
  ampBps: Long.UZERO,
  vBaseBalance: "",
  vQuoteBalance: "",
};

export const ReserveData = {
  encode(
    message: ReserveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.baseBalance !== "") {
      writer.uint32(34).string(message.baseBalance);
    }
    if (message.quoteBalance !== "") {
      writer.uint32(42).string(message.quoteBalance);
    }
    if (message.baseWeight !== "") {
      writer.uint32(50).string(message.baseWeight);
    }
    if (message.quoteWeight !== "") {
      writer.uint32(58).string(message.quoteWeight);
    }
    if (message.swapFee !== "") {
      writer.uint32(66).string(message.swapFee);
    }
    if (!message.ampBps.isZero()) {
      writer.uint32(72).uint64(message.ampBps);
    }
    if (message.vBaseBalance !== "") {
      writer.uint32(82).string(message.vBaseBalance);
    }
    if (message.vQuoteBalance !== "") {
      writer.uint32(90).string(message.vQuoteBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReserveData } as ReserveData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.baseBalance = reader.string();
          break;
        case 5:
          message.quoteBalance = reader.string();
          break;
        case 6:
          message.baseWeight = reader.string();
          break;
        case 7:
          message.quoteWeight = reader.string();
          break;
        case 8:
          message.swapFee = reader.string();
          break;
        case 9:
          message.ampBps = reader.uint64() as Long;
          break;
        case 10:
          message.vBaseBalance = reader.string();
          break;
        case 11:
          message.vQuoteBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReserveData {
    const message = { ...baseReserveData } as ReserveData;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.baseDenom =
      object.baseDenom !== undefined && object.baseDenom !== null
        ? String(object.baseDenom)
        : "";
    message.quoteDenom =
      object.quoteDenom !== undefined && object.quoteDenom !== null
        ? String(object.quoteDenom)
        : "";
    message.baseBalance =
      object.baseBalance !== undefined && object.baseBalance !== null
        ? String(object.baseBalance)
        : "";
    message.quoteBalance =
      object.quoteBalance !== undefined && object.quoteBalance !== null
        ? String(object.quoteBalance)
        : "";
    message.baseWeight =
      object.baseWeight !== undefined && object.baseWeight !== null
        ? String(object.baseWeight)
        : "";
    message.quoteWeight =
      object.quoteWeight !== undefined && object.quoteWeight !== null
        ? String(object.quoteWeight)
        : "";
    message.swapFee =
      object.swapFee !== undefined && object.swapFee !== null
        ? String(object.swapFee)
        : "";
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromString(object.ampBps)
        : Long.UZERO;
    message.vBaseBalance =
      object.vBaseBalance !== undefined && object.vBaseBalance !== null
        ? String(object.vBaseBalance)
        : "";
    message.vQuoteBalance =
      object.vQuoteBalance !== undefined && object.vQuoteBalance !== null
        ? String(object.vQuoteBalance)
        : "";
    return message;
  },

  toJSON(message: ReserveData): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
    message.baseBalance !== undefined &&
      (obj.baseBalance = message.baseBalance);
    message.quoteBalance !== undefined &&
      (obj.quoteBalance = message.quoteBalance);
    message.baseWeight !== undefined && (obj.baseWeight = message.baseWeight);
    message.quoteWeight !== undefined &&
      (obj.quoteWeight = message.quoteWeight);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.ampBps !== undefined &&
      (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    message.vBaseBalance !== undefined &&
      (obj.vBaseBalance = message.vBaseBalance);
    message.vQuoteBalance !== undefined &&
      (obj.vQuoteBalance = message.vQuoteBalance);
    return obj;
  },

  fromPartial(object: DeepPartial<ReserveData>): ReserveData {
    const message = { ...baseReserveData } as ReserveData;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.baseBalance = object.baseBalance ?? "";
    message.quoteBalance = object.quoteBalance ?? "";
    message.baseWeight = object.baseWeight ?? "";
    message.quoteWeight = object.quoteWeight ?? "";
    message.swapFee = object.swapFee ?? "";
    message.ampBps =
      object.ampBps !== undefined && object.ampBps !== null
        ? Long.fromValue(object.ampBps)
        : Long.UZERO;
    message.vBaseBalance = object.vBaseBalance ?? "";
    message.vQuoteBalance = object.vQuoteBalance ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
