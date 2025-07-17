/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, StringValue, UInt64Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** Params defines the parameters for the module. */
export interface Params {
  /** requotes when index price fluctuation threshold exceeded (in ratio) */
  quoteIndexPriceFluctuationToleranceRatio: string;
  /** requotes after orders are x seconds old */
  quoteExpiryDuration?: Duration;
  /** interval to take market utilization snapshot, e.g. every 60 seconds */
  marketUtilizationSnapshotInterval?: Duration;
  /**
   * time duration window used to calculate the TWA market utilization e.g. last
   * 24 hours
   */
  maxMarketUtilizationSnapshotWindow?: Duration;
  navPerShareSnapshots: Long;
  navPerShareSnapshotInterval?: Duration;
  indexLastUpdatedAtThreshold?: Duration;
  /**
   * trade commission ratio is the ratio to transfer to the perps commission
   * account from profitable perps amm trades
   */
  poolTradeCommissionRatio: string;
  /**
   * fee commission ratio is the ratio of the fees to transfer to the perps
   * commission account when depositing and withdrawing from the pool
   */
  poolFeeCommissionRatio: string;
  poolCommissionAddress: string;
  userVaultMinOwnerDeposit?: Coin;
  userVaultMinOwnerRatio: string;
  userVaultProfitShareCap: string;
  userVaultDepositFeeCap: string;
  userVaultWithdrawalFeeCap: string;
  userVaultTradeCommissionRatio: string;
  userVaultFeeCommissionRatio: string;
  stalePriceAllowance?: Duration;
  volatilitySpreadEnabled: boolean;
  volatilitySpreadBlacklist: string;
}

export interface ParamsToUpdate {
  quoteIndexPriceFluctuationToleranceRatio: string;
  quoteExpiryDuration?: Duration;
  marketUtilizationSnapshotInterval?: Duration;
  maxMarketUtilizationSnapshotWindow?: Duration;
  navPerShareSnapshots?: Long;
  navPerShareSnapshotInterval?: Duration;
  indexLastUpdatedAtThreshold?: Duration;
  poolTradeCommissionRatio: string;
  poolFeeCommissionRatio: string;
  poolCommissionAddress?: string;
  userVaultMinOwnerDeposit?: Coin;
  userVaultMinOwnerRatio: string;
  userVaultProfitShareCap: string;
  userVaultDepositFeeCap: string;
  userVaultWithdrawalFeeCap: string;
  userVaultTradeCommissionRatio: string;
  userVaultFeeCommissionRatio: string;
  stalePriceAllowance?: Duration;
  volatilitySpreadEnabled?: boolean;
  volatilitySpreadBlacklist?: string;
}

function createBaseParams(): Params {
  return {
    quoteIndexPriceFluctuationToleranceRatio: "",
    quoteExpiryDuration: undefined,
    marketUtilizationSnapshotInterval: undefined,
    maxMarketUtilizationSnapshotWindow: undefined,
    navPerShareSnapshots: Long.UZERO,
    navPerShareSnapshotInterval: undefined,
    indexLastUpdatedAtThreshold: undefined,
    poolTradeCommissionRatio: "",
    poolFeeCommissionRatio: "",
    poolCommissionAddress: "",
    userVaultMinOwnerDeposit: undefined,
    userVaultMinOwnerRatio: "",
    userVaultProfitShareCap: "",
    userVaultDepositFeeCap: "",
    userVaultWithdrawalFeeCap: "",
    userVaultTradeCommissionRatio: "",
    userVaultFeeCommissionRatio: "",
    stalePriceAllowance: undefined,
    volatilitySpreadEnabled: false,
    volatilitySpreadBlacklist: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer.uint32(10).string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(message.quoteExpiryDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(message.marketUtilizationSnapshotInterval, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(message.maxMarketUtilizationSnapshotWindow, writer.uint32(34).fork()).ldelim();
    }
    if (!message.navPerShareSnapshots.isZero()) {
      writer.uint32(40).uint64(message.navPerShareSnapshots);
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(message.navPerShareSnapshotInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(message.indexLastUpdatedAtThreshold, writer.uint32(58).fork()).ldelim();
    }
    if (message.poolTradeCommissionRatio !== "") {
      writer.uint32(66).string(message.poolTradeCommissionRatio);
    }
    if (message.poolFeeCommissionRatio !== "") {
      writer.uint32(74).string(message.poolFeeCommissionRatio);
    }
    if (message.poolCommissionAddress !== "") {
      writer.uint32(82).string(message.poolCommissionAddress);
    }
    if (message.userVaultMinOwnerDeposit !== undefined) {
      Coin.encode(message.userVaultMinOwnerDeposit, writer.uint32(90).fork()).ldelim();
    }
    if (message.userVaultMinOwnerRatio !== "") {
      writer.uint32(98).string(message.userVaultMinOwnerRatio);
    }
    if (message.userVaultProfitShareCap !== "") {
      writer.uint32(106).string(message.userVaultProfitShareCap);
    }
    if (message.userVaultDepositFeeCap !== "") {
      writer.uint32(114).string(message.userVaultDepositFeeCap);
    }
    if (message.userVaultWithdrawalFeeCap !== "") {
      writer.uint32(122).string(message.userVaultWithdrawalFeeCap);
    }
    if (message.userVaultTradeCommissionRatio !== "") {
      writer.uint32(130).string(message.userVaultTradeCommissionRatio);
    }
    if (message.userVaultFeeCommissionRatio !== "") {
      writer.uint32(138).string(message.userVaultFeeCommissionRatio);
    }
    if (message.stalePriceAllowance !== undefined) {
      Duration.encode(message.stalePriceAllowance, writer.uint32(146).fork()).ldelim();
    }
    if (message.volatilitySpreadEnabled === true) {
      writer.uint32(152).bool(message.volatilitySpreadEnabled);
    }
    if (message.volatilitySpreadBlacklist !== "") {
      writer.uint32(162).string(message.volatilitySpreadBlacklist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoteExpiryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketUtilizationSnapshotInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxMarketUtilizationSnapshotWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.navPerShareSnapshots = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.navPerShareSnapshotInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.indexLastUpdatedAtThreshold = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.poolTradeCommissionRatio = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.poolFeeCommissionRatio = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.poolCommissionAddress = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.userVaultMinOwnerDeposit = Coin.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.userVaultMinOwnerRatio = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userVaultProfitShareCap = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userVaultDepositFeeCap = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.userVaultWithdrawalFeeCap = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.userVaultTradeCommissionRatio = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.userVaultFeeCommissionRatio = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.stalePriceAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.volatilitySpreadEnabled = reader.bool();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.volatilitySpreadBlacklist = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      quoteIndexPriceFluctuationToleranceRatio: isSet(object.quoteIndexPriceFluctuationToleranceRatio)
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "",
      quoteExpiryDuration: isSet(object.quoteExpiryDuration)
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined,
      marketUtilizationSnapshotInterval: isSet(object.marketUtilizationSnapshotInterval)
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined,
      maxMarketUtilizationSnapshotWindow: isSet(object.maxMarketUtilizationSnapshotWindow)
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined,
      navPerShareSnapshots: isSet(object.navPerShareSnapshots)
        ? Long.fromValue(object.navPerShareSnapshots)
        : Long.UZERO,
      navPerShareSnapshotInterval: isSet(object.navPerShareSnapshotInterval)
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined,
      indexLastUpdatedAtThreshold: isSet(object.indexLastUpdatedAtThreshold)
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined,
      poolTradeCommissionRatio: isSet(object.poolTradeCommissionRatio) ? String(object.poolTradeCommissionRatio) : "",
      poolFeeCommissionRatio: isSet(object.poolFeeCommissionRatio) ? String(object.poolFeeCommissionRatio) : "",
      poolCommissionAddress: isSet(object.poolCommissionAddress) ? String(object.poolCommissionAddress) : "",
      userVaultMinOwnerDeposit: isSet(object.userVaultMinOwnerDeposit)
        ? Coin.fromJSON(object.userVaultMinOwnerDeposit)
        : undefined,
      userVaultMinOwnerRatio: isSet(object.userVaultMinOwnerRatio) ? String(object.userVaultMinOwnerRatio) : "",
      userVaultProfitShareCap: isSet(object.userVaultProfitShareCap) ? String(object.userVaultProfitShareCap) : "",
      userVaultDepositFeeCap: isSet(object.userVaultDepositFeeCap) ? String(object.userVaultDepositFeeCap) : "",
      userVaultWithdrawalFeeCap: isSet(object.userVaultWithdrawalFeeCap)
        ? String(object.userVaultWithdrawalFeeCap)
        : "",
      userVaultTradeCommissionRatio: isSet(object.userVaultTradeCommissionRatio)
        ? String(object.userVaultTradeCommissionRatio)
        : "",
      userVaultFeeCommissionRatio: isSet(object.userVaultFeeCommissionRatio)
        ? String(object.userVaultFeeCommissionRatio)
        : "",
      stalePriceAllowance: isSet(object.stalePriceAllowance)
        ? Duration.fromJSON(object.stalePriceAllowance)
        : undefined,
      volatilitySpreadEnabled: isSet(object.volatilitySpreadEnabled) ? Boolean(object.volatilitySpreadEnabled) : false,
      volatilitySpreadBlacklist: isSet(object.volatilitySpreadBlacklist)
        ? String(object.volatilitySpreadBlacklist)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio = message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval = message.marketUtilizationSnapshotInterval
        ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
        : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow = message.maxMarketUtilizationSnapshotWindow
        ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
        : undefined);
    message.navPerShareSnapshots !== undefined &&
      (obj.navPerShareSnapshots = (message.navPerShareSnapshots || Long.UZERO).toString());
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    message.poolTradeCommissionRatio !== undefined && (obj.poolTradeCommissionRatio = message.poolTradeCommissionRatio);
    message.poolFeeCommissionRatio !== undefined && (obj.poolFeeCommissionRatio = message.poolFeeCommissionRatio);
    message.poolCommissionAddress !== undefined && (obj.poolCommissionAddress = message.poolCommissionAddress);
    message.userVaultMinOwnerDeposit !== undefined && (obj.userVaultMinOwnerDeposit = message.userVaultMinOwnerDeposit
      ? Coin.toJSON(message.userVaultMinOwnerDeposit)
      : undefined);
    message.userVaultMinOwnerRatio !== undefined && (obj.userVaultMinOwnerRatio = message.userVaultMinOwnerRatio);
    message.userVaultProfitShareCap !== undefined && (obj.userVaultProfitShareCap = message.userVaultProfitShareCap);
    message.userVaultDepositFeeCap !== undefined && (obj.userVaultDepositFeeCap = message.userVaultDepositFeeCap);
    message.userVaultWithdrawalFeeCap !== undefined &&
      (obj.userVaultWithdrawalFeeCap = message.userVaultWithdrawalFeeCap);
    message.userVaultTradeCommissionRatio !== undefined &&
      (obj.userVaultTradeCommissionRatio = message.userVaultTradeCommissionRatio);
    message.userVaultFeeCommissionRatio !== undefined &&
      (obj.userVaultFeeCommissionRatio = message.userVaultFeeCommissionRatio);
    message.stalePriceAllowance !== undefined &&
      (obj.stalePriceAllowance = message.stalePriceAllowance
        ? Duration.toJSON(message.stalePriceAllowance)
        : undefined);
    message.volatilitySpreadEnabled !== undefined && (obj.volatilitySpreadEnabled = message.volatilitySpreadEnabled);
    message.volatilitySpreadBlacklist !== undefined &&
      (obj.volatilitySpreadBlacklist = message.volatilitySpreadBlacklist);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.quoteIndexPriceFluctuationToleranceRatio = object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration = (object.quoteExpiryDuration !== undefined && object.quoteExpiryDuration !== null)
      ? Duration.fromPartial(object.quoteExpiryDuration)
      : undefined;
    message.marketUtilizationSnapshotInterval =
      (object.marketUtilizationSnapshotInterval !== undefined && object.marketUtilizationSnapshotInterval !== null)
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      (object.maxMarketUtilizationSnapshotWindow !== undefined && object.maxMarketUtilizationSnapshotWindow !== null)
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots = (object.navPerShareSnapshots !== undefined && object.navPerShareSnapshots !== null)
      ? Long.fromValue(object.navPerShareSnapshots)
      : Long.UZERO;
    message.navPerShareSnapshotInterval =
      (object.navPerShareSnapshotInterval !== undefined && object.navPerShareSnapshotInterval !== null)
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      (object.indexLastUpdatedAtThreshold !== undefined && object.indexLastUpdatedAtThreshold !== null)
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio = object.poolTradeCommissionRatio ?? "";
    message.poolFeeCommissionRatio = object.poolFeeCommissionRatio ?? "";
    message.poolCommissionAddress = object.poolCommissionAddress ?? "";
    message.userVaultMinOwnerDeposit =
      (object.userVaultMinOwnerDeposit !== undefined && object.userVaultMinOwnerDeposit !== null)
        ? Coin.fromPartial(object.userVaultMinOwnerDeposit)
        : undefined;
    message.userVaultMinOwnerRatio = object.userVaultMinOwnerRatio ?? "";
    message.userVaultProfitShareCap = object.userVaultProfitShareCap ?? "";
    message.userVaultDepositFeeCap = object.userVaultDepositFeeCap ?? "";
    message.userVaultWithdrawalFeeCap = object.userVaultWithdrawalFeeCap ?? "";
    message.userVaultTradeCommissionRatio = object.userVaultTradeCommissionRatio ?? "";
    message.userVaultFeeCommissionRatio = object.userVaultFeeCommissionRatio ?? "";
    message.stalePriceAllowance = (object.stalePriceAllowance !== undefined && object.stalePriceAllowance !== null)
      ? Duration.fromPartial(object.stalePriceAllowance)
      : undefined;
    message.volatilitySpreadEnabled = object.volatilitySpreadEnabled ?? false;
    message.volatilitySpreadBlacklist = object.volatilitySpreadBlacklist ?? "";
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return {
    quoteIndexPriceFluctuationToleranceRatio: "",
    quoteExpiryDuration: undefined,
    marketUtilizationSnapshotInterval: undefined,
    maxMarketUtilizationSnapshotWindow: undefined,
    navPerShareSnapshots: undefined,
    navPerShareSnapshotInterval: undefined,
    indexLastUpdatedAtThreshold: undefined,
    poolTradeCommissionRatio: "",
    poolFeeCommissionRatio: "",
    poolCommissionAddress: undefined,
    userVaultMinOwnerDeposit: undefined,
    userVaultMinOwnerRatio: "",
    userVaultProfitShareCap: "",
    userVaultDepositFeeCap: "",
    userVaultWithdrawalFeeCap: "",
    userVaultTradeCommissionRatio: "",
    userVaultFeeCommissionRatio: "",
    stalePriceAllowance: undefined,
    volatilitySpreadEnabled: undefined,
    volatilitySpreadBlacklist: undefined,
  };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer.uint32(10).string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(message.quoteExpiryDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(message.marketUtilizationSnapshotInterval, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(message.maxMarketUtilizationSnapshotWindow, writer.uint32(34).fork()).ldelim();
    }
    if (message.navPerShareSnapshots !== undefined) {
      UInt64Value.encode({ value: message.navPerShareSnapshots! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(message.navPerShareSnapshotInterval, writer.uint32(50).fork()).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(message.indexLastUpdatedAtThreshold, writer.uint32(58).fork()).ldelim();
    }
    if (message.poolTradeCommissionRatio !== "") {
      writer.uint32(66).string(message.poolTradeCommissionRatio);
    }
    if (message.poolFeeCommissionRatio !== "") {
      writer.uint32(74).string(message.poolFeeCommissionRatio);
    }
    if (message.poolCommissionAddress !== undefined) {
      StringValue.encode({ value: message.poolCommissionAddress! }, writer.uint32(82).fork()).ldelim();
    }
    if (message.userVaultMinOwnerDeposit !== undefined) {
      Coin.encode(message.userVaultMinOwnerDeposit, writer.uint32(90).fork()).ldelim();
    }
    if (message.userVaultMinOwnerRatio !== "") {
      writer.uint32(98).string(message.userVaultMinOwnerRatio);
    }
    if (message.userVaultProfitShareCap !== "") {
      writer.uint32(106).string(message.userVaultProfitShareCap);
    }
    if (message.userVaultDepositFeeCap !== "") {
      writer.uint32(114).string(message.userVaultDepositFeeCap);
    }
    if (message.userVaultWithdrawalFeeCap !== "") {
      writer.uint32(122).string(message.userVaultWithdrawalFeeCap);
    }
    if (message.userVaultTradeCommissionRatio !== "") {
      writer.uint32(130).string(message.userVaultTradeCommissionRatio);
    }
    if (message.userVaultFeeCommissionRatio !== "") {
      writer.uint32(138).string(message.userVaultFeeCommissionRatio);
    }
    if (message.stalePriceAllowance !== undefined) {
      Duration.encode(message.stalePriceAllowance, writer.uint32(146).fork()).ldelim();
    }
    if (message.volatilitySpreadEnabled !== undefined) {
      BoolValue.encode({ value: message.volatilitySpreadEnabled! }, writer.uint32(154).fork()).ldelim();
    }
    if (message.volatilitySpreadBlacklist !== undefined) {
      StringValue.encode({ value: message.volatilitySpreadBlacklist! }, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoteExpiryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketUtilizationSnapshotInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxMarketUtilizationSnapshotWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.navPerShareSnapshots = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.navPerShareSnapshotInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.indexLastUpdatedAtThreshold = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.poolTradeCommissionRatio = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.poolFeeCommissionRatio = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.poolCommissionAddress = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.userVaultMinOwnerDeposit = Coin.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.userVaultMinOwnerRatio = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userVaultProfitShareCap = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userVaultDepositFeeCap = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.userVaultWithdrawalFeeCap = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.userVaultTradeCommissionRatio = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.userVaultFeeCommissionRatio = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.stalePriceAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.volatilitySpreadEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.volatilitySpreadBlacklist = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      quoteIndexPriceFluctuationToleranceRatio: isSet(object.quoteIndexPriceFluctuationToleranceRatio)
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "",
      quoteExpiryDuration: isSet(object.quoteExpiryDuration)
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined,
      marketUtilizationSnapshotInterval: isSet(object.marketUtilizationSnapshotInterval)
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined,
      maxMarketUtilizationSnapshotWindow: isSet(object.maxMarketUtilizationSnapshotWindow)
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined,
      navPerShareSnapshots: isSet(object.navPerShareSnapshots)
        ? Long.fromValue(object.navPerShareSnapshots)
        : undefined,
      navPerShareSnapshotInterval: isSet(object.navPerShareSnapshotInterval)
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined,
      indexLastUpdatedAtThreshold: isSet(object.indexLastUpdatedAtThreshold)
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined,
      poolTradeCommissionRatio: isSet(object.poolTradeCommissionRatio) ? String(object.poolTradeCommissionRatio) : "",
      poolFeeCommissionRatio: isSet(object.poolFeeCommissionRatio) ? String(object.poolFeeCommissionRatio) : "",
      poolCommissionAddress: isSet(object.poolCommissionAddress) ? String(object.poolCommissionAddress) : undefined,
      userVaultMinOwnerDeposit: isSet(object.userVaultMinOwnerDeposit)
        ? Coin.fromJSON(object.userVaultMinOwnerDeposit)
        : undefined,
      userVaultMinOwnerRatio: isSet(object.userVaultMinOwnerRatio) ? String(object.userVaultMinOwnerRatio) : "",
      userVaultProfitShareCap: isSet(object.userVaultProfitShareCap) ? String(object.userVaultProfitShareCap) : "",
      userVaultDepositFeeCap: isSet(object.userVaultDepositFeeCap) ? String(object.userVaultDepositFeeCap) : "",
      userVaultWithdrawalFeeCap: isSet(object.userVaultWithdrawalFeeCap)
        ? String(object.userVaultWithdrawalFeeCap)
        : "",
      userVaultTradeCommissionRatio: isSet(object.userVaultTradeCommissionRatio)
        ? String(object.userVaultTradeCommissionRatio)
        : "",
      userVaultFeeCommissionRatio: isSet(object.userVaultFeeCommissionRatio)
        ? String(object.userVaultFeeCommissionRatio)
        : "",
      stalePriceAllowance: isSet(object.stalePriceAllowance)
        ? Duration.fromJSON(object.stalePriceAllowance)
        : undefined,
      volatilitySpreadEnabled: isSet(object.volatilitySpreadEnabled)
        ? Boolean(object.volatilitySpreadEnabled)
        : undefined,
      volatilitySpreadBlacklist: isSet(object.volatilitySpreadBlacklist)
        ? String(object.volatilitySpreadBlacklist)
        : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio = message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval = message.marketUtilizationSnapshotInterval
        ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
        : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow = message.maxMarketUtilizationSnapshotWindow
        ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
        : undefined);
    message.navPerShareSnapshots !== undefined && (obj.navPerShareSnapshots = message.navPerShareSnapshots);
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    message.poolTradeCommissionRatio !== undefined && (obj.poolTradeCommissionRatio = message.poolTradeCommissionRatio);
    message.poolFeeCommissionRatio !== undefined && (obj.poolFeeCommissionRatio = message.poolFeeCommissionRatio);
    message.poolCommissionAddress !== undefined && (obj.poolCommissionAddress = message.poolCommissionAddress);
    message.userVaultMinOwnerDeposit !== undefined && (obj.userVaultMinOwnerDeposit = message.userVaultMinOwnerDeposit
      ? Coin.toJSON(message.userVaultMinOwnerDeposit)
      : undefined);
    message.userVaultMinOwnerRatio !== undefined && (obj.userVaultMinOwnerRatio = message.userVaultMinOwnerRatio);
    message.userVaultProfitShareCap !== undefined && (obj.userVaultProfitShareCap = message.userVaultProfitShareCap);
    message.userVaultDepositFeeCap !== undefined && (obj.userVaultDepositFeeCap = message.userVaultDepositFeeCap);
    message.userVaultWithdrawalFeeCap !== undefined &&
      (obj.userVaultWithdrawalFeeCap = message.userVaultWithdrawalFeeCap);
    message.userVaultTradeCommissionRatio !== undefined &&
      (obj.userVaultTradeCommissionRatio = message.userVaultTradeCommissionRatio);
    message.userVaultFeeCommissionRatio !== undefined &&
      (obj.userVaultFeeCommissionRatio = message.userVaultFeeCommissionRatio);
    message.stalePriceAllowance !== undefined &&
      (obj.stalePriceAllowance = message.stalePriceAllowance
        ? Duration.toJSON(message.stalePriceAllowance)
        : undefined);
    message.volatilitySpreadEnabled !== undefined && (obj.volatilitySpreadEnabled = message.volatilitySpreadEnabled);
    message.volatilitySpreadBlacklist !== undefined &&
      (obj.volatilitySpreadBlacklist = message.volatilitySpreadBlacklist);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.quoteIndexPriceFluctuationToleranceRatio = object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration = (object.quoteExpiryDuration !== undefined && object.quoteExpiryDuration !== null)
      ? Duration.fromPartial(object.quoteExpiryDuration)
      : undefined;
    message.marketUtilizationSnapshotInterval =
      (object.marketUtilizationSnapshotInterval !== undefined && object.marketUtilizationSnapshotInterval !== null)
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      (object.maxMarketUtilizationSnapshotWindow !== undefined && object.maxMarketUtilizationSnapshotWindow !== null)
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots = (object.navPerShareSnapshots !== undefined && object.navPerShareSnapshots !== null)
      ? Long.fromValue(object.navPerShareSnapshots)
      : undefined;
    message.navPerShareSnapshotInterval =
      (object.navPerShareSnapshotInterval !== undefined && object.navPerShareSnapshotInterval !== null)
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      (object.indexLastUpdatedAtThreshold !== undefined && object.indexLastUpdatedAtThreshold !== null)
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio = object.poolTradeCommissionRatio ?? "";
    message.poolFeeCommissionRatio = object.poolFeeCommissionRatio ?? "";
    message.poolCommissionAddress = object.poolCommissionAddress ?? undefined;
    message.userVaultMinOwnerDeposit =
      (object.userVaultMinOwnerDeposit !== undefined && object.userVaultMinOwnerDeposit !== null)
        ? Coin.fromPartial(object.userVaultMinOwnerDeposit)
        : undefined;
    message.userVaultMinOwnerRatio = object.userVaultMinOwnerRatio ?? "";
    message.userVaultProfitShareCap = object.userVaultProfitShareCap ?? "";
    message.userVaultDepositFeeCap = object.userVaultDepositFeeCap ?? "";
    message.userVaultWithdrawalFeeCap = object.userVaultWithdrawalFeeCap ?? "";
    message.userVaultTradeCommissionRatio = object.userVaultTradeCommissionRatio ?? "";
    message.userVaultFeeCommissionRatio = object.userVaultFeeCommissionRatio ?? "";
    message.stalePriceAllowance = (object.stalePriceAllowance !== undefined && object.stalePriceAllowance !== null)
      ? Duration.fromPartial(object.stalePriceAllowance)
      : undefined;
    message.volatilitySpreadEnabled = object.volatilitySpreadEnabled ?? undefined;
    message.volatilitySpreadBlacklist = object.volatilitySpreadBlacklist ?? undefined;
    return message;
  },
};

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
