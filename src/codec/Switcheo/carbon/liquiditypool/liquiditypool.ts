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
  isDeprecated: boolean;
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

function createBasePool(): Pool {
  return {
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
    isDeprecated: false,
  };
}

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
    if (message.isDeprecated === true) {
      writer.uint32(144).bool(message.isDeprecated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.denomA = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.weightA = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.denomB = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.weightB = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.swapFee = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sharesAmount = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.ampBps = reader.uint64() as Long;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.vAmountA = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.vAmountB = reader.string();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.isDeprecated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      denomA: isSet(object.denomA) ? String(object.denomA) : "",
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      weightA: isSet(object.weightA) ? String(object.weightA) : "",
      denomB: isSet(object.denomB) ? String(object.denomB) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      weightB: isSet(object.weightB) ? String(object.weightB) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      sharesAmount: isSet(object.sharesAmount) ? String(object.sharesAmount) : "",
      ampBps: isSet(object.ampBps) ? Long.fromValue(object.ampBps) : Long.UZERO,
      vAmountA: isSet(object.vAmountA) ? String(object.vAmountA) : "",
      vAmountB: isSet(object.vAmountB) ? String(object.vAmountB) : "",
      isDeprecated: isSet(object.isDeprecated) ? Boolean(object.isDeprecated) : false,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.weightA !== undefined && (obj.weightA = message.weightA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.weightB !== undefined && (obj.weightB = message.weightB);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.sharesAmount !== undefined && (obj.sharesAmount = message.sharesAmount);
    message.ampBps !== undefined && (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    message.vAmountA !== undefined && (obj.vAmountA = message.vAmountA);
    message.vAmountB !== undefined && (obj.vAmountB = message.vAmountB);
    message.isDeprecated !== undefined && (obj.isDeprecated = message.isDeprecated);
    return obj;
  },

  create(base?: DeepPartial<Pool>): Pool {
    return Pool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
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
    message.ampBps = (object.ampBps !== undefined && object.ampBps !== null)
      ? Long.fromValue(object.ampBps)
      : Long.UZERO;
    message.vAmountA = object.vAmountA ?? "";
    message.vAmountB = object.vAmountB ?? "";
    message.isDeprecated = object.isDeprecated ?? false;
    return message;
  },
};

function createBasePools(): Pools {
  return { pools: [] };
}

export const Pools = {
  encode(message: Pools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pools {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pools.push(Pool.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pools {
    return { pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [] };
  },

  toJSON(message: Pools): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Pools>): Pools {
    return Pools.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Pools>): Pools {
    const message = createBasePools();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoolRoute(): PoolRoute {
  return { marketId: "", poolIds: [], legacyNumQuotes: Long.ZERO, numQuotes: Long.UZERO };
}

export const PoolRoute = {
  encode(message: PoolRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.poolIds.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.legacyNumQuotes = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numQuotes = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PoolRoute {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : [],
      legacyNumQuotes: isSet(object.legacyNumQuotes) ? Long.fromValue(object.legacyNumQuotes) : Long.ZERO,
      numQuotes: isSet(object.numQuotes) ? Long.fromValue(object.numQuotes) : Long.UZERO,
    };
  },

  toJSON(message: PoolRoute): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }
    message.legacyNumQuotes !== undefined && (obj.legacyNumQuotes = (message.legacyNumQuotes || Long.ZERO).toString());
    message.numQuotes !== undefined && (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<PoolRoute>): PoolRoute {
    return PoolRoute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PoolRoute>): PoolRoute {
    const message = createBasePoolRoute();
    message.marketId = object.marketId ?? "";
    message.poolIds = object.poolIds?.map((e) => Long.fromValue(e)) || [];
    message.legacyNumQuotes = (object.legacyNumQuotes !== undefined && object.legacyNumQuotes !== null)
      ? Long.fromValue(object.legacyNumQuotes)
      : Long.ZERO;
    message.numQuotes = (object.numQuotes !== undefined && object.numQuotes !== null)
      ? Long.fromValue(object.numQuotes)
      : Long.UZERO;
    return message;
  },
};

function createBaseAddLiquidity(): AddLiquidity {
  return { creator: "", id: Long.UZERO, amountA: "", amountB: "", minShares: "" };
}

export const AddLiquidity = {
  encode(message: AddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.minShares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      minShares: isSet(object.minShares) ? String(object.minShares) : "",
    };
  },

  toJSON(message: AddLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.minShares !== undefined && (obj.minShares = message.minShares);
    return obj;
  },

  create(base?: DeepPartial<AddLiquidity>): AddLiquidity {
    return AddLiquidity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddLiquidity>): AddLiquidity {
    const message = createBaseAddLiquidity();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.amountB = object.amountB ?? "";
    message.minShares = object.minShares ?? "";
    return message;
  },
};

function createBaseAddLiquidities(): AddLiquidities {
  return { addLiquidities: [] };
}

export const AddLiquidities = {
  encode(message: AddLiquidities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addLiquidities) {
      AddLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddLiquidities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddLiquidities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addLiquidities.push(AddLiquidity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddLiquidities {
    return {
      addLiquidities: Array.isArray(object?.addLiquidities)
        ? object.addLiquidities.map((e: any) => AddLiquidity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddLiquidities): unknown {
    const obj: any = {};
    if (message.addLiquidities) {
      obj.addLiquidities = message.addLiquidities.map((e) => e ? AddLiquidity.toJSON(e) : undefined);
    } else {
      obj.addLiquidities = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AddLiquidities>): AddLiquidities {
    return AddLiquidities.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddLiquidities>): AddLiquidities {
    const message = createBaseAddLiquidities();
    message.addLiquidities = object.addLiquidities?.map((e) => AddLiquidity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemoveLiquidity(): RemoveLiquidity {
  return { creator: "", id: Long.UZERO, amount: "" };
}

export const RemoveLiquidity = {
  encode(message: RemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveLiquidity {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: RemoveLiquidity): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<RemoveLiquidity>): RemoveLiquidity {
    return RemoveLiquidity.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemoveLiquidity>): RemoveLiquidity {
    const message = createBaseRemoveLiquidity();
    message.creator = object.creator ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseRemoveLiquidities(): RemoveLiquidities {
  return { removeLiquidities: [] };
}

export const RemoveLiquidities = {
  encode(message: RemoveLiquidities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.removeLiquidities) {
      RemoveLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveLiquidities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveLiquidities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.removeLiquidities.push(RemoveLiquidity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveLiquidities {
    return {
      removeLiquidities: Array.isArray(object?.removeLiquidities)
        ? object.removeLiquidities.map((e: any) => RemoveLiquidity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RemoveLiquidities): unknown {
    const obj: any = {};
    if (message.removeLiquidities) {
      obj.removeLiquidities = message.removeLiquidities.map((e) => e ? RemoveLiquidity.toJSON(e) : undefined);
    } else {
      obj.removeLiquidities = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveLiquidities>): RemoveLiquidities {
    return RemoveLiquidities.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemoveLiquidities>): RemoveLiquidities {
    const message = createBaseRemoveLiquidities();
    message.removeLiquidities = object.removeLiquidities?.map((e) => RemoveLiquidity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemovePoolRoutes(): RemovePoolRoutes {
  return { removePoolRoutes: [] };
}

export const RemovePoolRoutes = {
  encode(message: RemovePoolRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.removePoolRoutes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePoolRoutes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovePoolRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.removePoolRoutes.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemovePoolRoutes {
    return {
      removePoolRoutes: Array.isArray(object?.removePoolRoutes)
        ? object.removePoolRoutes.map((e: any) => bytesFromBase64(e))
        : [],
    };
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

  create(base?: DeepPartial<RemovePoolRoutes>): RemovePoolRoutes {
    return RemovePoolRoutes.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemovePoolRoutes>): RemovePoolRoutes {
    const message = createBaseRemovePoolRoutes();
    message.removePoolRoutes = object.removePoolRoutes?.map((e) => e) || [];
    return message;
  },
};

function createBasePoolReserve(): PoolReserve {
  return { id: Long.UZERO, amountA: "", weightA: "", amountB: "", weightB: "", vAmountA: "", vAmountB: "" };
}

export const PoolReserve = {
  encode(message: PoolReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.weightA = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.weightB = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vAmountA = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.vAmountB = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PoolReserve {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      weightA: isSet(object.weightA) ? String(object.weightA) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      weightB: isSet(object.weightB) ? String(object.weightB) : "",
      vAmountA: isSet(object.vAmountA) ? String(object.vAmountA) : "",
      vAmountB: isSet(object.vAmountB) ? String(object.vAmountB) : "",
    };
  },

  toJSON(message: PoolReserve): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.weightA !== undefined && (obj.weightA = message.weightA);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.weightB !== undefined && (obj.weightB = message.weightB);
    message.vAmountA !== undefined && (obj.vAmountA = message.vAmountA);
    message.vAmountB !== undefined && (obj.vAmountB = message.vAmountB);
    return obj;
  },

  create(base?: DeepPartial<PoolReserve>): PoolReserve {
    return PoolReserve.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PoolReserve>): PoolReserve {
    const message = createBasePoolReserve();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.amountA = object.amountA ?? "";
    message.weightA = object.weightA ?? "";
    message.amountB = object.amountB ?? "";
    message.weightB = object.weightB ?? "";
    message.vAmountA = object.vAmountA ?? "";
    message.vAmountB = object.vAmountB ?? "";
    return message;
  },
};

function createBaseReserveData(): ReserveData {
  return {
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
}

export const ReserveData = {
  encode(message: ReserveData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.baseDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.baseBalance = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteBalance = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.baseWeight = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.quoteWeight = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.swapFee = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.ampBps = reader.uint64() as Long;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.vBaseBalance = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.vQuoteBalance = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReserveData {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      baseBalance: isSet(object.baseBalance) ? String(object.baseBalance) : "",
      quoteBalance: isSet(object.quoteBalance) ? String(object.quoteBalance) : "",
      baseWeight: isSet(object.baseWeight) ? String(object.baseWeight) : "",
      quoteWeight: isSet(object.quoteWeight) ? String(object.quoteWeight) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      ampBps: isSet(object.ampBps) ? Long.fromValue(object.ampBps) : Long.UZERO,
      vBaseBalance: isSet(object.vBaseBalance) ? String(object.vBaseBalance) : "",
      vQuoteBalance: isSet(object.vQuoteBalance) ? String(object.vQuoteBalance) : "",
    };
  },

  toJSON(message: ReserveData): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
    message.baseBalance !== undefined && (obj.baseBalance = message.baseBalance);
    message.quoteBalance !== undefined && (obj.quoteBalance = message.quoteBalance);
    message.baseWeight !== undefined && (obj.baseWeight = message.baseWeight);
    message.quoteWeight !== undefined && (obj.quoteWeight = message.quoteWeight);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.ampBps !== undefined && (obj.ampBps = (message.ampBps || Long.UZERO).toString());
    message.vBaseBalance !== undefined && (obj.vBaseBalance = message.vBaseBalance);
    message.vQuoteBalance !== undefined && (obj.vQuoteBalance = message.vQuoteBalance);
    return obj;
  },

  create(base?: DeepPartial<ReserveData>): ReserveData {
    return ReserveData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReserveData>): ReserveData {
    const message = createBaseReserveData();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.baseBalance = object.baseBalance ?? "";
    message.quoteBalance = object.quoteBalance ?? "";
    message.baseWeight = object.baseWeight ?? "";
    message.quoteWeight = object.quoteWeight ?? "";
    message.swapFee = object.swapFee ?? "";
    message.ampBps = (object.ampBps !== undefined && object.ampBps !== null)
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
