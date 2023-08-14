/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { MarketConfig } from "./market";
import { StringValue } from "../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** main store holding each Pool */
export interface PlPool {
  /** auto-incrementing id */
  id: Long;
  /** admin/govt determined name */
  name: string;
  /** deposit_denom for underlying token that will be used to provide liquidity */
  depositDenom: string;
  /** auto-generated denom for the share token that can be used to redeem underlying deposited token */
  shareDenom: string;
  /** auto-created address of the vault that stores the tokens */
  vaultAddress: string;
  /** supply cap to limit amount of tokens that can go into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to PLP in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from PLP in decimal */
  withdrawalFee: string;
  /** borrow fee in decimal per time period to charge on use of liquidity in pool */
  borrowFee: string;
}

export interface UpdatePlPoolParams {
  name?: string;
  supplyCap: string;
  depositFee: string;
  withdrawalFee: string;
  borrowFee: string;
}

/** PoolDetails used for for querying. same as Pool but appended with registered_markets */
export interface PoolDetails {
  pool?: PlPool;
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

/** DepositToBonusContractParams params required for enqueuing into deposit transient store */
export interface DepositToBonusContractParams {
  bonusVaultId: Long;
  isLongUnbond: boolean;
  fluoDistributorAddress: Uint8Array;
  bonusFluoDistributorAddress: Uint8Array;
}

/** MarketUtilizationRateSnapshot represents the utilization rate of a market at a given timestamp */
export interface MarketUtilizationRateSnapshot {
  timestamp?: Date;
  utilizationRate: string;
}

const basePlPool: object = {
  id: Long.UZERO,
  name: "",
  depositDenom: "",
  shareDenom: "",
  vaultAddress: "",
  supplyCap: "",
  depositFee: "",
  withdrawalFee: "",
  borrowFee: "",
};

export const PlPool = {
  encode(
    message: PlPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.borrowFee !== "") {
      writer.uint32(74).string(message.borrowFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlPool } as PlPool;
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
          message.borrowFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlPool {
    const message = { ...basePlPool } as PlPool;
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
    message.borrowFee =
      object.borrowFee !== undefined && object.borrowFee !== null
        ? String(object.borrowFee)
        : "";
    return message;
  },

  toJSON(message: PlPool): unknown {
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
    message.borrowFee !== undefined && (obj.borrowFee = message.borrowFee);
    return obj;
  },

  fromPartial(object: DeepPartial<PlPool>): PlPool {
    const message = { ...basePlPool } as PlPool;
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
    message.borrowFee = object.borrowFee ?? "";
    return message;
  },
};

const baseUpdatePlPoolParams: object = {
  supplyCap: "",
  depositFee: "",
  withdrawalFee: "",
  borrowFee: "",
};

export const UpdatePlPoolParams = {
  encode(
    message: UpdatePlPoolParams,
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
    if (message.borrowFee !== "") {
      writer.uint32(42).string(message.borrowFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
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
          message.borrowFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePlPoolParams {
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
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
    message.borrowFee =
      object.borrowFee !== undefined && object.borrowFee !== null
        ? String(object.borrowFee)
        : "";
    return message;
  },

  toJSON(message: UpdatePlPoolParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.borrowFee !== undefined && (obj.borrowFee = message.borrowFee);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePlPoolParams>): UpdatePlPoolParams {
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
    message.name = object.name ?? undefined;
    message.supplyCap = object.supplyCap ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.borrowFee = object.borrowFee ?? "";
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
      PlPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
          message.pool = PlPool.decode(reader, reader.uint32());
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
        ? PlPool.fromJSON(object.pool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e: any) =>
      MarketConfig.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PoolDetails): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PlPool.toJSON(message.pool) : undefined);
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
        ? PlPool.fromPartial(object.pool)
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

const baseDepositToBonusContractParams: object = {
  bonusVaultId: Long.UZERO,
  isLongUnbond: false,
};

export const DepositToBonusContractParams = {
  encode(
    message: DepositToBonusContractParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bonusVaultId.isZero()) {
      writer.uint32(8).uint64(message.bonusVaultId);
    }
    if (message.isLongUnbond === true) {
      writer.uint32(16).bool(message.isLongUnbond);
    }
    if (message.fluoDistributorAddress.length !== 0) {
      writer.uint32(26).bytes(message.fluoDistributorAddress);
    }
    if (message.bonusFluoDistributorAddress.length !== 0) {
      writer.uint32(34).bytes(message.bonusFluoDistributorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DepositToBonusContractParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    message.fluoDistributorAddress = new Uint8Array();
    message.bonusFluoDistributorAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bonusVaultId = reader.uint64() as Long;
          break;
        case 2:
          message.isLongUnbond = reader.bool();
          break;
        case 3:
          message.fluoDistributorAddress = reader.bytes();
          break;
        case 4:
          message.bonusFluoDistributorAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToBonusContractParams {
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    message.bonusVaultId =
      object.bonusVaultId !== undefined && object.bonusVaultId !== null
        ? Long.fromString(object.bonusVaultId)
        : Long.UZERO;
    message.isLongUnbond =
      object.isLongUnbond !== undefined && object.isLongUnbond !== null
        ? Boolean(object.isLongUnbond)
        : false;
    message.fluoDistributorAddress =
      object.fluoDistributorAddress !== undefined &&
      object.fluoDistributorAddress !== null
        ? bytesFromBase64(object.fluoDistributorAddress)
        : new Uint8Array();
    message.bonusFluoDistributorAddress =
      object.bonusFluoDistributorAddress !== undefined &&
      object.bonusFluoDistributorAddress !== null
        ? bytesFromBase64(object.bonusFluoDistributorAddress)
        : new Uint8Array();
    return message;
  },

  toJSON(message: DepositToBonusContractParams): unknown {
    const obj: any = {};
    message.bonusVaultId !== undefined &&
      (obj.bonusVaultId = (message.bonusVaultId || Long.UZERO).toString());
    message.isLongUnbond !== undefined &&
      (obj.isLongUnbond = message.isLongUnbond);
    message.fluoDistributorAddress !== undefined &&
      (obj.fluoDistributorAddress = base64FromBytes(
        message.fluoDistributorAddress !== undefined
          ? message.fluoDistributorAddress
          : new Uint8Array()
      ));
    message.bonusFluoDistributorAddress !== undefined &&
      (obj.bonusFluoDistributorAddress = base64FromBytes(
        message.bonusFluoDistributorAddress !== undefined
          ? message.bonusFluoDistributorAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<DepositToBonusContractParams>
  ): DepositToBonusContractParams {
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    message.bonusVaultId =
      object.bonusVaultId !== undefined && object.bonusVaultId !== null
        ? Long.fromValue(object.bonusVaultId)
        : Long.UZERO;
    message.isLongUnbond = object.isLongUnbond ?? false;
    message.fluoDistributorAddress =
      object.fluoDistributorAddress ?? new Uint8Array();
    message.bonusFluoDistributorAddress =
      object.bonusFluoDistributorAddress ?? new Uint8Array();
    return message;
  },
};

const baseMarketUtilizationRateSnapshot: object = { utilizationRate: "" };

export const MarketUtilizationRateSnapshot = {
  encode(
    message: MarketUtilizationRateSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.utilizationRate !== "") {
      writer.uint32(18).string(message.utilizationRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketUtilizationRateSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.utilizationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketUtilizationRateSnapshot {
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.utilizationRate =
      object.utilizationRate !== undefined && object.utilizationRate !== null
        ? String(object.utilizationRate)
        : "";
    return message;
  },

  toJSON(message: MarketUtilizationRateSnapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.utilizationRate !== undefined &&
      (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MarketUtilizationRateSnapshot>
  ): MarketUtilizationRateSnapshot {
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    message.timestamp = object.timestamp ?? undefined;
    message.utilizationRate = object.utilizationRate ?? "";
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
