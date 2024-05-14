/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { MarketConfig } from "./market";
import { StringValue } from "../../../google/protobuf/wrappers";

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
 */
export interface PoolDetails {
  pool?: Pool;
  registeredMarkets: MarketConfig[];
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

const basePool: object = {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.depositDenom = reader.string();
          break;
        case 4:
          message.shareDenom = reader.string();
          break;
        case 5:
          message.vaultAddress = reader.string();
          break;
        case 6:
          message.supplyCap = reader.string();
          break;
        case 7:
          message.depositFee = reader.string();
          break;
        case 8:
          message.withdrawalFee = reader.string();
          break;
        case 9:
          message.baseBorrowFeePerFundingInterval = reader.string();
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
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.depositDenom =
      object.depositDenom !== undefined && object.depositDenom !== null
        ? String(object.depositDenom)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.vaultAddress =
      object.vaultAddress !== undefined && object.vaultAddress !== null
        ? String(object.vaultAddress)
        : "";
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawalFee =
      object.withdrawalFee !== undefined && object.withdrawalFee !== null
        ? String(object.withdrawalFee)
        : "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval !== undefined &&
      object.baseBorrowFeePerFundingInterval !== null
        ? String(object.baseBorrowFeePerFundingInterval)
        : "";
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.vaultAddress !== undefined &&
      (obj.vaultAddress = message.vaultAddress);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval =
        message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

const baseUpdatePoolParams: object = {
  supplyCap: "",
  depositFee: "",
  withdrawalFee: "",
  baseBorrowFeePerFundingInterval: "",
};

export const UpdatePoolParams = {
  encode(
    message: UpdatePoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.supplyCap = reader.string();
          break;
        case 3:
          message.depositFee = reader.string();
          break;
        case 4:
          message.withdrawalFee = reader.string();
          break;
        case 5:
          message.baseBorrowFeePerFundingInterval = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolParams {
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : undefined;
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawalFee =
      object.withdrawalFee !== undefined && object.withdrawalFee !== null
        ? String(object.withdrawalFee)
        : "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval !== undefined &&
      object.baseBorrowFeePerFundingInterval !== null
        ? String(object.baseBorrowFeePerFundingInterval)
        : "";
    return message;
  },

  toJSON(message: UpdatePoolParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.baseBorrowFeePerFundingInterval !== undefined &&
      (obj.baseBorrowFeePerFundingInterval =
        message.baseBorrowFeePerFundingInterval);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePoolParams>): UpdatePoolParams {
    const message = { ...baseUpdatePoolParams } as UpdatePoolParams;
    message.name = object.name ?? undefined;
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.baseBorrowFeePerFundingInterval =
      object.baseBorrowFeePerFundingInterval ?? "";
    return message;
  },
};

const basePoolDetails: object = {};

export const PoolDetails = {
  encode(
    message: PoolDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredMarkets) {
      MarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolDetails } as PoolDetails;
    message.registeredMarkets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredMarkets.push(
            MarketConfig.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolDetails {
    const message = { ...basePoolDetails } as PoolDetails;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e: any) =>
      MarketConfig.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PoolDetails): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    if (message.registeredMarkets) {
      obj.registeredMarkets = message.registeredMarkets.map((e) =>
        e ? MarketConfig.toJSON(e) : undefined
      );
    } else {
      obj.registeredMarkets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PoolDetails>): PoolDetails {
    const message = { ...basePoolDetails } as PoolDetails;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e) =>
      MarketConfig.fromPartial(e)
    );
    return message;
  },
};

const baseDepositToPoolParams: object = {
  poolId: Long.UZERO,
  fromAccount: "",
  depositAmount: "",
  minSharesToReceive: "",
  processingId: Long.UZERO,
};

export const DepositToPoolParams = {
  encode(
    message: DepositToPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.fromAccount = reader.string();
          break;
        case 3:
          message.depositAmount = reader.string();
          break;
        case 4:
          message.minSharesToReceive = reader.string();
          break;
        case 5:
          message.processingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolParams {
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.fromAccount =
      object.fromAccount !== undefined && object.fromAccount !== null
        ? String(object.fromAccount)
        : "";
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? String(object.depositAmount)
        : "";
    message.minSharesToReceive =
      object.minSharesToReceive !== undefined &&
      object.minSharesToReceive !== null
        ? String(object.minSharesToReceive)
        : "";
    message.processingId =
      object.processingId !== undefined && object.processingId !== null
        ? Long.fromString(object.processingId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: DepositToPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.minSharesToReceive !== undefined &&
      (obj.minSharesToReceive = message.minSharesToReceive);
    message.processingId !== undefined &&
      (obj.processingId = (message.processingId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToPoolParams>): DepositToPoolParams {
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.fromAccount = object.fromAccount ?? "";
    message.depositAmount = object.depositAmount ?? "";
    message.minSharesToReceive = object.minSharesToReceive ?? "";
    message.processingId =
      object.processingId !== undefined && object.processingId !== null
        ? Long.fromValue(object.processingId)
        : Long.UZERO;
    return message;
  },
};

const baseWithdrawFromPoolParams: object = {
  poolId: Long.UZERO,
  toAccount: "",
  shareAmount: "",
  minWithdrawAmount: "",
  processingId: Long.UZERO,
};

export const WithdrawFromPoolParams = {
  encode(
    message: WithdrawFromPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.toAccount = reader.string();
          break;
        case 3:
          message.shareAmount = reader.string();
          break;
        case 4:
          message.minWithdrawAmount = reader.string();
          break;
        case 5:
          message.processingId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolParams {
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.toAccount =
      object.toAccount !== undefined && object.toAccount !== null
        ? String(object.toAccount)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.minWithdrawAmount =
      object.minWithdrawAmount !== undefined &&
      object.minWithdrawAmount !== null
        ? String(object.minWithdrawAmount)
        : "";
    message.processingId =
      object.processingId !== undefined && object.processingId !== null
        ? Long.fromString(object.processingId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: WithdrawFromPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.minWithdrawAmount !== undefined &&
      (obj.minWithdrawAmount = message.minWithdrawAmount);
    message.processingId !== undefined &&
      (obj.processingId = (message.processingId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPoolParams>
  ): WithdrawFromPoolParams {
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.toAccount = object.toAccount ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.minWithdrawAmount = object.minWithdrawAmount ?? "";
    message.processingId =
      object.processingId !== undefined && object.processingId !== null
        ? Long.fromValue(object.processingId)
        : Long.UZERO;
    return message;
  },
};

const baseNavPerShareLastRecorded: object = {};

export const NavPerShareLastRecorded = {
  encode(
    message: NavPerShareLastRecorded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastRecordedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastRecordedAt),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NavPerShareLastRecorded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNavPerShareLastRecorded,
    } as NavPerShareLastRecorded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastRecordedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NavPerShareLastRecorded {
    const message = {
      ...baseNavPerShareLastRecorded,
    } as NavPerShareLastRecorded;
    message.lastRecordedAt =
      object.lastRecordedAt !== undefined && object.lastRecordedAt !== null
        ? fromJsonTimestamp(object.lastRecordedAt)
        : undefined;
    return message;
  },

  toJSON(message: NavPerShareLastRecorded): unknown {
    const obj: any = {};
    message.lastRecordedAt !== undefined &&
      (obj.lastRecordedAt = message.lastRecordedAt.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<NavPerShareLastRecorded>
  ): NavPerShareLastRecorded {
    const message = {
      ...baseNavPerShareLastRecorded,
    } as NavPerShareLastRecorded;
    message.lastRecordedAt = object.lastRecordedAt ?? undefined;
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
