/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue } from "../../../google/protobuf/wrappers";
import { DetailedMarketConfig, MarketConfig } from "./market";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** main store holding each Pool */
export interface Pool {
  /** auto-incrementing id */
  id: Long;
  /** admin/govt determined name */
  name: string;
  /** deposit_denom for nav token that will be used to provide liquidity */
  depositDenom: string;
  /**
   * auto-generated denom for the share token that can be used to redeem
   * deposited token
   */
  shareDenom: string;
  /** auto-created address of the vault that stores the tokens */
  vaultAddress: string;
  /** supply cap to limit amount of tokens that can go into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to pool in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from pool in decimal */
  withdrawalFee: string;
  /** borrow fee in decimal per time period to charge on use of liquidity in pool */
  baseBorrowFeePerFundingInterval: string;
}

export interface UpdatePoolParams {
  name?: string;
  supplyCap: string;
  depositFee: string;
  withdrawalFee: string;
  baseBorrowFeePerFundingInterval: string;
}

/**
 * PoolDetails used for for querying. same as Pool but appended with
 * registered_markets
 * Deprecated: Use DetailedPool instead.
 */
export interface PoolDetails {
  pool?: Pool;
  registeredMarkets: MarketConfig[];
}

/**
 * PoolDetails used for for querying. same as Pool but appended with
 * MarketConfigWithQuoteStrategy
 */
export interface DetailedPool {
  pool?: Pool;
  detailedMarketConfigs: DetailedMarketConfig[];
}

/** DepositParams params required for enqueuing into deposit transient store */
export interface DepositToPoolParams {
  poolId: Long;
  fromAccount: string;
  depositAmount: string;
  minSharesToReceive: string;
  processingId: Long;
}

/** WithdrawParams params required for enqueuing into withdraw transient store */
export interface WithdrawFromPoolParams {
  poolId: Long;
  toAccount: string;
  shareAmount: string;
  minWithdrawAmount: string;
  processingId: Long;
}

export interface NavPerShareLastRecorded {
  lastRecordedAt?: Date;
}

function createBasePool(): Pool {
  return {
    id: Long.UZERO,
    name: "",
    depositDenom: "",
    shareDenom: "",
    vaultAddress: "",
    supplyCap: "",
    depositFee: "",
    withdrawalFee: "",
    baseBorrowFeePerFundingInterval: "",
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.depositDenom !== "") {
      writer.uint32(26).string(message.depositDenom);
    }
    if (message.shareDenom !== "") {
      writer.uint32(34).string(message.shareDenom);
    }
    if (message.vaultAddress !== "") {
      writer.uint32(42).string(message.vaultAddress);
    }
    if (message.supplyCap !== "") {
      writer.uint32(50).string(message.supplyCap);
    }
    if (message.depositFee !== "") {
      writer.uint32(58).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(66).string(message.withdrawalFee);
    }
    if (message.baseBorrowFeePerFundingInterval !== "") {
      writer.uint32(74).string(message.baseBorrowFeePerFundingInterval);
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
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.depositDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.shareDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vaultAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.supplyCap = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.withdrawalFee = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.baseBorrowFeePerFundingInterval = reader.string();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
      supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      baseBorrowFeePerFundingInterval: isSet(object.baseBorrowFeePerFundingInterval)
        ? String(object.baseBorrowFeePerFundingInterval)
        : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval = message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  create(base?: DeepPartial<Pool>): Pool {
    return Pool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval = object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

function createBaseUpdatePoolParams(): UpdatePoolParams {
  return { name: undefined, supplyCap: "", depositFee: "", withdrawalFee: "", baseBorrowFeePerFundingInterval: "" };
}

export const UpdatePoolParams = {
  encode(message: UpdatePoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode({ value: message.name! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.supplyCap !== "") {
      writer.uint32(18).string(message.supplyCap);
    }
    if (message.depositFee !== "") {
      writer.uint32(26).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(34).string(message.withdrawalFee);
    }
    if (message.baseBorrowFeePerFundingInterval !== "") {
      writer.uint32(42).string(message.baseBorrowFeePerFundingInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.supplyCap = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.withdrawalFee = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.baseBorrowFeePerFundingInterval = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolParams {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      baseBorrowFeePerFundingInterval: isSet(object.baseBorrowFeePerFundingInterval)
        ? String(object.baseBorrowFeePerFundingInterval)
        : "",
    };
  },

  toJSON(message: UpdatePoolParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval = message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  create(base?: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    return UpdatePoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    const message = createBaseUpdatePoolParams();
    message.name = object.name ?? undefined;
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval = object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

function createBasePoolDetails(): PoolDetails {
  return { pool: undefined, registeredMarkets: [] };
}

export const PoolDetails = {
  encode(message: PoolDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredMarkets) {
      MarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registeredMarkets.push(MarketConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PoolDetails {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      registeredMarkets: Array.isArray(object?.registeredMarkets)
        ? object.registeredMarkets.map((e: any) => MarketConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PoolDetails): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    if (message.registeredMarkets) {
      obj.registeredMarkets = message.registeredMarkets.map((e) => e ? MarketConfig.toJSON(e) : undefined);
    } else {
      obj.registeredMarkets = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PoolDetails>): PoolDetails {
    return PoolDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PoolDetails>): PoolDetails {
    const message = createBasePoolDetails();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.registeredMarkets = object.registeredMarkets?.map((e) => MarketConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDetailedPool(): DetailedPool {
  return { pool: undefined, detailedMarketConfigs: [] };
}

export const DetailedPool = {
  encode(message: DetailedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.detailedMarketConfigs) {
      DetailedMarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetailedPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetailedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.detailedMarketConfigs.push(DetailedMarketConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetailedPool {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      detailedMarketConfigs: Array.isArray(object?.detailedMarketConfigs)
        ? object.detailedMarketConfigs.map((e: any) => DetailedMarketConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DetailedPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    if (message.detailedMarketConfigs) {
      obj.detailedMarketConfigs = message.detailedMarketConfigs.map((e) =>
        e ? DetailedMarketConfig.toJSON(e) : undefined
      );
    } else {
      obj.detailedMarketConfigs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<DetailedPool>): DetailedPool {
    return DetailedPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DetailedPool>): DetailedPool {
    const message = createBaseDetailedPool();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.detailedMarketConfigs = object.detailedMarketConfigs?.map((e) => DetailedMarketConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDepositToPoolParams(): DepositToPoolParams {
  return { poolId: Long.UZERO, fromAccount: "", depositAmount: "", minSharesToReceive: "", processingId: Long.UZERO };
}

export const DepositToPoolParams = {
  encode(message: DepositToPoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.fromAccount !== "") {
      writer.uint32(18).string(message.fromAccount);
    }
    if (message.depositAmount !== "") {
      writer.uint32(26).string(message.depositAmount);
    }
    if (message.minSharesToReceive !== "") {
      writer.uint32(34).string(message.minSharesToReceive);
    }
    if (!message.processingId.isZero()) {
      writer.uint32(40).uint64(message.processingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToPoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositToPoolParams();
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

          message.fromAccount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.depositAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minSharesToReceive = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.processingId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolParams {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      fromAccount: isSet(object.fromAccount) ? String(object.fromAccount) : "",
      depositAmount: isSet(object.depositAmount) ? String(object.depositAmount) : "",
      minSharesToReceive: isSet(object.minSharesToReceive) ? String(object.minSharesToReceive) : "",
      processingId: isSet(object.processingId) ? Long.fromValue(object.processingId) : Long.UZERO,
    };
  },

  toJSON(message: DepositToPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.fromAccount !== undefined && (obj.fromAccount = message.fromAccount);
    message.depositAmount !== undefined && (obj.depositAmount = message.depositAmount);
    message.minSharesToReceive !== undefined && (obj.minSharesToReceive = message.minSharesToReceive);
    message.processingId !== undefined && (obj.processingId = (message.processingId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<DepositToPoolParams>): DepositToPoolParams {
    return DepositToPoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DepositToPoolParams>): DepositToPoolParams {
    const message = createBaseDepositToPoolParams();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.fromAccount = object.fromAccount ?? "";
    message.depositAmount = object.depositAmount ?? "";
    message.minSharesToReceive = object.minSharesToReceive ?? "";
    message.processingId = (object.processingId !== undefined && object.processingId !== null)
      ? Long.fromValue(object.processingId)
      : Long.UZERO;
    return message;
  },
};

function createBaseWithdrawFromPoolParams(): WithdrawFromPoolParams {
  return { poolId: Long.UZERO, toAccount: "", shareAmount: "", minWithdrawAmount: "", processingId: Long.UZERO };
}

export const WithdrawFromPoolParams = {
  encode(message: WithdrawFromPoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.toAccount !== "") {
      writer.uint32(18).string(message.toAccount);
    }
    if (message.shareAmount !== "") {
      writer.uint32(26).string(message.shareAmount);
    }
    if (message.minWithdrawAmount !== "") {
      writer.uint32(34).string(message.minWithdrawAmount);
    }
    if (!message.processingId.isZero()) {
      writer.uint32(40).uint64(message.processingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFromPoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawFromPoolParams();
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

          message.toAccount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minWithdrawAmount = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.processingId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolParams {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      toAccount: isSet(object.toAccount) ? String(object.toAccount) : "",
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      minWithdrawAmount: isSet(object.minWithdrawAmount) ? String(object.minWithdrawAmount) : "",
      processingId: isSet(object.processingId) ? Long.fromValue(object.processingId) : Long.UZERO,
    };
  },

  toJSON(message: WithdrawFromPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.minWithdrawAmount !== undefined && (obj.minWithdrawAmount = message.minWithdrawAmount);
    message.processingId !== undefined && (obj.processingId = (message.processingId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<WithdrawFromPoolParams>): WithdrawFromPoolParams {
    return WithdrawFromPoolParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawFromPoolParams>): WithdrawFromPoolParams {
    const message = createBaseWithdrawFromPoolParams();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.toAccount = object.toAccount ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.minWithdrawAmount = object.minWithdrawAmount ?? "";
    message.processingId = (object.processingId !== undefined && object.processingId !== null)
      ? Long.fromValue(object.processingId)
      : Long.UZERO;
    return message;
  },
};

function createBaseNavPerShareLastRecorded(): NavPerShareLastRecorded {
  return { lastRecordedAt: undefined };
}

export const NavPerShareLastRecorded = {
  encode(message: NavPerShareLastRecorded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastRecordedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastRecordedAt), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NavPerShareLastRecorded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNavPerShareLastRecorded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastRecordedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NavPerShareLastRecorded {
    return { lastRecordedAt: isSet(object.lastRecordedAt) ? fromJsonTimestamp(object.lastRecordedAt) : undefined };
  },

  toJSON(message: NavPerShareLastRecorded): unknown {
    const obj: any = {};
    message.lastRecordedAt !== undefined && (obj.lastRecordedAt = message.lastRecordedAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<NavPerShareLastRecorded>): NavPerShareLastRecorded {
    return NavPerShareLastRecorded.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NavPerShareLastRecorded>): NavPerShareLastRecorded {
    const message = createBaseNavPerShareLastRecorded();
    message.lastRecordedAt = object.lastRecordedAt ?? undefined;
    return message;
  },
};

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
