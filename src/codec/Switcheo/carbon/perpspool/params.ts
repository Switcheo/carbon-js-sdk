/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { UInt64Value, StringValue } from "../../../google/protobuf/wrappers";

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
  /**
   * cooldown duration before the next update to the user vault's market
   * can be made
   */
  updateVaultMarketCooldownDuration?: Duration;
  /** max length of the user vault's description */
  vaultDescriptionMaxLength: Long;
  vaultDepositLockUpDuration?: Duration;
  minUserVaultOwnerDeposit?: Coin;
  minUserVaultOwnerRatio: string;
  userVaultProfitShareCap: string;
  userVaultDepositFeeCap: string;
  userVaultWithdrawalFeeCap: string;
  userVaultTradeCommissionRatio: string;
  userVaultFeeCommissionRatio: string;
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
  updateVaultMarketCooldownDuration?: Duration;
  vaultDescriptionMaxLength?: Long;
  vaultDepositLockUpDuration?: Duration;
  minUserVaultOwnerDeposit?: Coin;
  minUserVaultOwnerRatio: string;
  userVaultProfitShareCap: string;
  userVaultDepositFeeCap: string;
  userVaultWithdrawalFeeCap: string;
  userVaultTradeCommissionRatio: string;
  userVaultFeeCommissionRatio: string;
}

const baseParams: object = {
  quoteIndexPriceFluctuationToleranceRatio: "",
  navPerShareSnapshots: Long.UZERO,
  poolTradeCommissionRatio: "",
  poolFeeCommissionRatio: "",
  poolCommissionAddress: "",
  vaultDescriptionMaxLength: Long.UZERO,
  minUserVaultOwnerRatio: "",
  userVaultProfitShareCap: "",
  userVaultDepositFeeCap: "",
  userVaultWithdrawalFeeCap: "",
  userVaultTradeCommissionRatio: "",
  userVaultFeeCommissionRatio: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer
        .uint32(10)
        .string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(
        message.quoteExpiryDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(
        message.marketUtilizationSnapshotInterval,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(
        message.maxMarketUtilizationSnapshotWindow,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.navPerShareSnapshots.isZero()) {
      writer.uint32(40).uint64(message.navPerShareSnapshots);
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(
        message.navPerShareSnapshotInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(
        message.indexLastUpdatedAtThreshold,
        writer.uint32(58).fork()
      ).ldelim();
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
    if (message.updateVaultMarketCooldownDuration !== undefined) {
      Duration.encode(
        message.updateVaultMarketCooldownDuration,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (!message.vaultDescriptionMaxLength.isZero()) {
      writer.uint32(96).uint64(message.vaultDescriptionMaxLength);
    }
    if (message.vaultDepositLockUpDuration !== undefined) {
      Duration.encode(
        message.vaultDepositLockUpDuration,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.minUserVaultOwnerDeposit !== undefined) {
      Coin.encode(
        message.minUserVaultOwnerDeposit,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.minUserVaultOwnerRatio !== "") {
      writer.uint32(122).string(message.minUserVaultOwnerRatio);
    }
    if (message.userVaultProfitShareCap !== "") {
      writer.uint32(130).string(message.userVaultProfitShareCap);
    }
    if (message.userVaultDepositFeeCap !== "") {
      writer.uint32(138).string(message.userVaultDepositFeeCap);
    }
    if (message.userVaultWithdrawalFeeCap !== "") {
      writer.uint32(146).string(message.userVaultWithdrawalFeeCap);
    }
    if (message.userVaultTradeCommissionRatio !== "") {
      writer.uint32(154).string(message.userVaultTradeCommissionRatio);
    }
    if (message.userVaultFeeCommissionRatio !== "") {
      writer.uint32(162).string(message.userVaultFeeCommissionRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          break;
        case 2:
          message.quoteExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.marketUtilizationSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.maxMarketUtilizationSnapshotWindow = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.navPerShareSnapshots = reader.uint64() as Long;
          break;
        case 6:
          message.navPerShareSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.indexLastUpdatedAtThreshold = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.poolTradeCommissionRatio = reader.string();
          break;
        case 9:
          message.poolFeeCommissionRatio = reader.string();
          break;
        case 10:
          message.poolCommissionAddress = reader.string();
          break;
        case 11:
          message.updateVaultMarketCooldownDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.vaultDescriptionMaxLength = reader.uint64() as Long;
          break;
        case 13:
          message.vaultDepositLockUpDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.minUserVaultOwnerDeposit = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.minUserVaultOwnerRatio = reader.string();
          break;
        case 16:
          message.userVaultProfitShareCap = reader.string();
          break;
        case 17:
          message.userVaultDepositFeeCap = reader.string();
          break;
        case 18:
          message.userVaultWithdrawalFeeCap = reader.string();
          break;
        case 19:
          message.userVaultTradeCommissionRatio = reader.string();
          break;
        case 20:
          message.userVaultFeeCommissionRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      object.quoteIndexPriceFluctuationToleranceRatio !== null
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromString(object.navPerShareSnapshots)
        : Long.UZERO;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio =
      object.poolTradeCommissionRatio !== undefined &&
      object.poolTradeCommissionRatio !== null
        ? String(object.poolTradeCommissionRatio)
        : "";
    message.poolFeeCommissionRatio =
      object.poolFeeCommissionRatio !== undefined &&
      object.poolFeeCommissionRatio !== null
        ? String(object.poolFeeCommissionRatio)
        : "";
    message.poolCommissionAddress =
      object.poolCommissionAddress !== undefined &&
      object.poolCommissionAddress !== null
        ? String(object.poolCommissionAddress)
        : "";
    message.updateVaultMarketCooldownDuration =
      object.updateVaultMarketCooldownDuration !== undefined &&
      object.updateVaultMarketCooldownDuration !== null
        ? Duration.fromJSON(object.updateVaultMarketCooldownDuration)
        : undefined;
    message.vaultDescriptionMaxLength =
      object.vaultDescriptionMaxLength !== undefined &&
      object.vaultDescriptionMaxLength !== null
        ? Long.fromString(object.vaultDescriptionMaxLength)
        : Long.UZERO;
    message.vaultDepositLockUpDuration =
      object.vaultDepositLockUpDuration !== undefined &&
      object.vaultDepositLockUpDuration !== null
        ? Duration.fromJSON(object.vaultDepositLockUpDuration)
        : undefined;
    message.minUserVaultOwnerDeposit =
      object.minUserVaultOwnerDeposit !== undefined &&
      object.minUserVaultOwnerDeposit !== null
        ? Coin.fromJSON(object.minUserVaultOwnerDeposit)
        : undefined;
    message.minUserVaultOwnerRatio =
      object.minUserVaultOwnerRatio !== undefined &&
      object.minUserVaultOwnerRatio !== null
        ? String(object.minUserVaultOwnerRatio)
        : "";
    message.userVaultProfitShareCap =
      object.userVaultProfitShareCap !== undefined &&
      object.userVaultProfitShareCap !== null
        ? String(object.userVaultProfitShareCap)
        : "";
    message.userVaultDepositFeeCap =
      object.userVaultDepositFeeCap !== undefined &&
      object.userVaultDepositFeeCap !== null
        ? String(object.userVaultDepositFeeCap)
        : "";
    message.userVaultWithdrawalFeeCap =
      object.userVaultWithdrawalFeeCap !== undefined &&
      object.userVaultWithdrawalFeeCap !== null
        ? String(object.userVaultWithdrawalFeeCap)
        : "";
    message.userVaultTradeCommissionRatio =
      object.userVaultTradeCommissionRatio !== undefined &&
      object.userVaultTradeCommissionRatio !== null
        ? String(object.userVaultTradeCommissionRatio)
        : "";
    message.userVaultFeeCommissionRatio =
      object.userVaultFeeCommissionRatio !== undefined &&
      object.userVaultFeeCommissionRatio !== null
        ? String(object.userVaultFeeCommissionRatio)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio =
        message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval =
        message.marketUtilizationSnapshotInterval
          ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
          : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow =
        message.maxMarketUtilizationSnapshotWindow
          ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
          : undefined);
    message.navPerShareSnapshots !== undefined &&
      (obj.navPerShareSnapshots = (
        message.navPerShareSnapshots || Long.UZERO
      ).toString());
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    message.poolTradeCommissionRatio !== undefined &&
      (obj.poolTradeCommissionRatio = message.poolTradeCommissionRatio);
    message.poolFeeCommissionRatio !== undefined &&
      (obj.poolFeeCommissionRatio = message.poolFeeCommissionRatio);
    message.poolCommissionAddress !== undefined &&
      (obj.poolCommissionAddress = message.poolCommissionAddress);
    message.updateVaultMarketCooldownDuration !== undefined &&
      (obj.updateVaultMarketCooldownDuration =
        message.updateVaultMarketCooldownDuration
          ? Duration.toJSON(message.updateVaultMarketCooldownDuration)
          : undefined);
    message.vaultDescriptionMaxLength !== undefined &&
      (obj.vaultDescriptionMaxLength = (
        message.vaultDescriptionMaxLength || Long.UZERO
      ).toString());
    message.vaultDepositLockUpDuration !== undefined &&
      (obj.vaultDepositLockUpDuration = message.vaultDepositLockUpDuration
        ? Duration.toJSON(message.vaultDepositLockUpDuration)
        : undefined);
    message.minUserVaultOwnerDeposit !== undefined &&
      (obj.minUserVaultOwnerDeposit = message.minUserVaultOwnerDeposit
        ? Coin.toJSON(message.minUserVaultOwnerDeposit)
        : undefined);
    message.minUserVaultOwnerRatio !== undefined &&
      (obj.minUserVaultOwnerRatio = message.minUserVaultOwnerRatio);
    message.userVaultProfitShareCap !== undefined &&
      (obj.userVaultProfitShareCap = message.userVaultProfitShareCap);
    message.userVaultDepositFeeCap !== undefined &&
      (obj.userVaultDepositFeeCap = message.userVaultDepositFeeCap);
    message.userVaultWithdrawalFeeCap !== undefined &&
      (obj.userVaultWithdrawalFeeCap = message.userVaultWithdrawalFeeCap);
    message.userVaultTradeCommissionRatio !== undefined &&
      (obj.userVaultTradeCommissionRatio =
        message.userVaultTradeCommissionRatio);
    message.userVaultFeeCommissionRatio !== undefined &&
      (obj.userVaultFeeCommissionRatio = message.userVaultFeeCommissionRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromPartial(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : Long.UZERO;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio = object.poolTradeCommissionRatio ?? "";
    message.poolFeeCommissionRatio = object.poolFeeCommissionRatio ?? "";
    message.poolCommissionAddress = object.poolCommissionAddress ?? "";
    message.updateVaultMarketCooldownDuration =
      object.updateVaultMarketCooldownDuration !== undefined &&
      object.updateVaultMarketCooldownDuration !== null
        ? Duration.fromPartial(object.updateVaultMarketCooldownDuration)
        : undefined;
    message.vaultDescriptionMaxLength =
      object.vaultDescriptionMaxLength !== undefined &&
      object.vaultDescriptionMaxLength !== null
        ? Long.fromValue(object.vaultDescriptionMaxLength)
        : Long.UZERO;
    message.vaultDepositLockUpDuration =
      object.vaultDepositLockUpDuration !== undefined &&
      object.vaultDepositLockUpDuration !== null
        ? Duration.fromPartial(object.vaultDepositLockUpDuration)
        : undefined;
    message.minUserVaultOwnerDeposit =
      object.minUserVaultOwnerDeposit !== undefined &&
      object.minUserVaultOwnerDeposit !== null
        ? Coin.fromPartial(object.minUserVaultOwnerDeposit)
        : undefined;
    message.minUserVaultOwnerRatio = object.minUserVaultOwnerRatio ?? "";
    message.userVaultProfitShareCap = object.userVaultProfitShareCap ?? "";
    message.userVaultDepositFeeCap = object.userVaultDepositFeeCap ?? "";
    message.userVaultWithdrawalFeeCap = object.userVaultWithdrawalFeeCap ?? "";
    message.userVaultTradeCommissionRatio =
      object.userVaultTradeCommissionRatio ?? "";
    message.userVaultFeeCommissionRatio =
      object.userVaultFeeCommissionRatio ?? "";
    return message;
  },
};

const baseParamsToUpdate: object = {
  quoteIndexPriceFluctuationToleranceRatio: "",
  poolTradeCommissionRatio: "",
  poolFeeCommissionRatio: "",
  minUserVaultOwnerRatio: "",
  userVaultProfitShareCap: "",
  userVaultDepositFeeCap: "",
  userVaultWithdrawalFeeCap: "",
  userVaultTradeCommissionRatio: "",
  userVaultFeeCommissionRatio: "",
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer
        .uint32(10)
        .string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (message.quoteExpiryDuration !== undefined) {
      Duration.encode(
        message.quoteExpiryDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.marketUtilizationSnapshotInterval !== undefined) {
      Duration.encode(
        message.marketUtilizationSnapshotInterval,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.maxMarketUtilizationSnapshotWindow !== undefined) {
      Duration.encode(
        message.maxMarketUtilizationSnapshotWindow,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.navPerShareSnapshots !== undefined) {
      UInt64Value.encode(
        { value: message.navPerShareSnapshots! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.navPerShareSnapshotInterval !== undefined) {
      Duration.encode(
        message.navPerShareSnapshotInterval,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.indexLastUpdatedAtThreshold !== undefined) {
      Duration.encode(
        message.indexLastUpdatedAtThreshold,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.poolTradeCommissionRatio !== "") {
      writer.uint32(66).string(message.poolTradeCommissionRatio);
    }
    if (message.poolFeeCommissionRatio !== "") {
      writer.uint32(74).string(message.poolFeeCommissionRatio);
    }
    if (message.poolCommissionAddress !== undefined) {
      StringValue.encode(
        { value: message.poolCommissionAddress! },
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.updateVaultMarketCooldownDuration !== undefined) {
      Duration.encode(
        message.updateVaultMarketCooldownDuration,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.vaultDescriptionMaxLength !== undefined) {
      UInt64Value.encode(
        { value: message.vaultDescriptionMaxLength! },
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.vaultDepositLockUpDuration !== undefined) {
      Duration.encode(
        message.vaultDepositLockUpDuration,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.minUserVaultOwnerDeposit !== undefined) {
      Coin.encode(
        message.minUserVaultOwnerDeposit,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.minUserVaultOwnerRatio !== "") {
      writer.uint32(122).string(message.minUserVaultOwnerRatio);
    }
    if (message.userVaultProfitShareCap !== "") {
      writer.uint32(130).string(message.userVaultProfitShareCap);
    }
    if (message.userVaultDepositFeeCap !== "") {
      writer.uint32(138).string(message.userVaultDepositFeeCap);
    }
    if (message.userVaultWithdrawalFeeCap !== "") {
      writer.uint32(146).string(message.userVaultWithdrawalFeeCap);
    }
    if (message.userVaultTradeCommissionRatio !== "") {
      writer.uint32(154).string(message.userVaultTradeCommissionRatio);
    }
    if (message.userVaultFeeCommissionRatio !== "") {
      writer.uint32(162).string(message.userVaultFeeCommissionRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          break;
        case 2:
          message.quoteExpiryDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.marketUtilizationSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.maxMarketUtilizationSnapshotWindow = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.navPerShareSnapshots = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.navPerShareSnapshotInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.indexLastUpdatedAtThreshold = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.poolTradeCommissionRatio = reader.string();
          break;
        case 9:
          message.poolFeeCommissionRatio = reader.string();
          break;
        case 10:
          message.poolCommissionAddress = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 11:
          message.updateVaultMarketCooldownDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.vaultDescriptionMaxLength = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 13:
          message.vaultDepositLockUpDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.minUserVaultOwnerDeposit = Coin.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.minUserVaultOwnerRatio = reader.string();
          break;
        case 16:
          message.userVaultProfitShareCap = reader.string();
          break;
        case 17:
          message.userVaultDepositFeeCap = reader.string();
          break;
        case 18:
          message.userVaultWithdrawalFeeCap = reader.string();
          break;
        case 19:
          message.userVaultTradeCommissionRatio = reader.string();
          break;
        case 20:
          message.userVaultFeeCommissionRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      object.quoteIndexPriceFluctuationToleranceRatio !== null
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromJSON(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromJSON(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromJSON(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : undefined;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromJSON(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromJSON(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio =
      object.poolTradeCommissionRatio !== undefined &&
      object.poolTradeCommissionRatio !== null
        ? String(object.poolTradeCommissionRatio)
        : "";
    message.poolFeeCommissionRatio =
      object.poolFeeCommissionRatio !== undefined &&
      object.poolFeeCommissionRatio !== null
        ? String(object.poolFeeCommissionRatio)
        : "";
    message.poolCommissionAddress =
      object.poolCommissionAddress !== undefined &&
      object.poolCommissionAddress !== null
        ? String(object.poolCommissionAddress)
        : undefined;
    message.updateVaultMarketCooldownDuration =
      object.updateVaultMarketCooldownDuration !== undefined &&
      object.updateVaultMarketCooldownDuration !== null
        ? Duration.fromJSON(object.updateVaultMarketCooldownDuration)
        : undefined;
    message.vaultDescriptionMaxLength =
      object.vaultDescriptionMaxLength !== undefined &&
      object.vaultDescriptionMaxLength !== null
        ? Long.fromValue(object.vaultDescriptionMaxLength)
        : undefined;
    message.vaultDepositLockUpDuration =
      object.vaultDepositLockUpDuration !== undefined &&
      object.vaultDepositLockUpDuration !== null
        ? Duration.fromJSON(object.vaultDepositLockUpDuration)
        : undefined;
    message.minUserVaultOwnerDeposit =
      object.minUserVaultOwnerDeposit !== undefined &&
      object.minUserVaultOwnerDeposit !== null
        ? Coin.fromJSON(object.minUserVaultOwnerDeposit)
        : undefined;
    message.minUserVaultOwnerRatio =
      object.minUserVaultOwnerRatio !== undefined &&
      object.minUserVaultOwnerRatio !== null
        ? String(object.minUserVaultOwnerRatio)
        : "";
    message.userVaultProfitShareCap =
      object.userVaultProfitShareCap !== undefined &&
      object.userVaultProfitShareCap !== null
        ? String(object.userVaultProfitShareCap)
        : "";
    message.userVaultDepositFeeCap =
      object.userVaultDepositFeeCap !== undefined &&
      object.userVaultDepositFeeCap !== null
        ? String(object.userVaultDepositFeeCap)
        : "";
    message.userVaultWithdrawalFeeCap =
      object.userVaultWithdrawalFeeCap !== undefined &&
      object.userVaultWithdrawalFeeCap !== null
        ? String(object.userVaultWithdrawalFeeCap)
        : "";
    message.userVaultTradeCommissionRatio =
      object.userVaultTradeCommissionRatio !== undefined &&
      object.userVaultTradeCommissionRatio !== null
        ? String(object.userVaultTradeCommissionRatio)
        : "";
    message.userVaultFeeCommissionRatio =
      object.userVaultFeeCommissionRatio !== undefined &&
      object.userVaultFeeCommissionRatio !== null
        ? String(object.userVaultFeeCommissionRatio)
        : "";
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio =
        message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpiryDuration !== undefined &&
      (obj.quoteExpiryDuration = message.quoteExpiryDuration
        ? Duration.toJSON(message.quoteExpiryDuration)
        : undefined);
    message.marketUtilizationSnapshotInterval !== undefined &&
      (obj.marketUtilizationSnapshotInterval =
        message.marketUtilizationSnapshotInterval
          ? Duration.toJSON(message.marketUtilizationSnapshotInterval)
          : undefined);
    message.maxMarketUtilizationSnapshotWindow !== undefined &&
      (obj.maxMarketUtilizationSnapshotWindow =
        message.maxMarketUtilizationSnapshotWindow
          ? Duration.toJSON(message.maxMarketUtilizationSnapshotWindow)
          : undefined);
    message.navPerShareSnapshots !== undefined &&
      (obj.navPerShareSnapshots = message.navPerShareSnapshots);
    message.navPerShareSnapshotInterval !== undefined &&
      (obj.navPerShareSnapshotInterval = message.navPerShareSnapshotInterval
        ? Duration.toJSON(message.navPerShareSnapshotInterval)
        : undefined);
    message.indexLastUpdatedAtThreshold !== undefined &&
      (obj.indexLastUpdatedAtThreshold = message.indexLastUpdatedAtThreshold
        ? Duration.toJSON(message.indexLastUpdatedAtThreshold)
        : undefined);
    message.poolTradeCommissionRatio !== undefined &&
      (obj.poolTradeCommissionRatio = message.poolTradeCommissionRatio);
    message.poolFeeCommissionRatio !== undefined &&
      (obj.poolFeeCommissionRatio = message.poolFeeCommissionRatio);
    message.poolCommissionAddress !== undefined &&
      (obj.poolCommissionAddress = message.poolCommissionAddress);
    message.updateVaultMarketCooldownDuration !== undefined &&
      (obj.updateVaultMarketCooldownDuration =
        message.updateVaultMarketCooldownDuration
          ? Duration.toJSON(message.updateVaultMarketCooldownDuration)
          : undefined);
    message.vaultDescriptionMaxLength !== undefined &&
      (obj.vaultDescriptionMaxLength = message.vaultDescriptionMaxLength);
    message.vaultDepositLockUpDuration !== undefined &&
      (obj.vaultDepositLockUpDuration = message.vaultDepositLockUpDuration
        ? Duration.toJSON(message.vaultDepositLockUpDuration)
        : undefined);
    message.minUserVaultOwnerDeposit !== undefined &&
      (obj.minUserVaultOwnerDeposit = message.minUserVaultOwnerDeposit
        ? Coin.toJSON(message.minUserVaultOwnerDeposit)
        : undefined);
    message.minUserVaultOwnerRatio !== undefined &&
      (obj.minUserVaultOwnerRatio = message.minUserVaultOwnerRatio);
    message.userVaultProfitShareCap !== undefined &&
      (obj.userVaultProfitShareCap = message.userVaultProfitShareCap);
    message.userVaultDepositFeeCap !== undefined &&
      (obj.userVaultDepositFeeCap = message.userVaultDepositFeeCap);
    message.userVaultWithdrawalFeeCap !== undefined &&
      (obj.userVaultWithdrawalFeeCap = message.userVaultWithdrawalFeeCap);
    message.userVaultTradeCommissionRatio !== undefined &&
      (obj.userVaultTradeCommissionRatio =
        message.userVaultTradeCommissionRatio);
    message.userVaultFeeCommissionRatio !== undefined &&
      (obj.userVaultFeeCommissionRatio = message.userVaultFeeCommissionRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpiryDuration =
      object.quoteExpiryDuration !== undefined &&
      object.quoteExpiryDuration !== null
        ? Duration.fromPartial(object.quoteExpiryDuration)
        : undefined;
    message.marketUtilizationSnapshotInterval =
      object.marketUtilizationSnapshotInterval !== undefined &&
      object.marketUtilizationSnapshotInterval !== null
        ? Duration.fromPartial(object.marketUtilizationSnapshotInterval)
        : undefined;
    message.maxMarketUtilizationSnapshotWindow =
      object.maxMarketUtilizationSnapshotWindow !== undefined &&
      object.maxMarketUtilizationSnapshotWindow !== null
        ? Duration.fromPartial(object.maxMarketUtilizationSnapshotWindow)
        : undefined;
    message.navPerShareSnapshots =
      object.navPerShareSnapshots !== undefined &&
      object.navPerShareSnapshots !== null
        ? Long.fromValue(object.navPerShareSnapshots)
        : undefined;
    message.navPerShareSnapshotInterval =
      object.navPerShareSnapshotInterval !== undefined &&
      object.navPerShareSnapshotInterval !== null
        ? Duration.fromPartial(object.navPerShareSnapshotInterval)
        : undefined;
    message.indexLastUpdatedAtThreshold =
      object.indexLastUpdatedAtThreshold !== undefined &&
      object.indexLastUpdatedAtThreshold !== null
        ? Duration.fromPartial(object.indexLastUpdatedAtThreshold)
        : undefined;
    message.poolTradeCommissionRatio = object.poolTradeCommissionRatio ?? "";
    message.poolFeeCommissionRatio = object.poolFeeCommissionRatio ?? "";
    message.poolCommissionAddress = object.poolCommissionAddress ?? undefined;
    message.updateVaultMarketCooldownDuration =
      object.updateVaultMarketCooldownDuration !== undefined &&
      object.updateVaultMarketCooldownDuration !== null
        ? Duration.fromPartial(object.updateVaultMarketCooldownDuration)
        : undefined;
    message.vaultDescriptionMaxLength =
      object.vaultDescriptionMaxLength !== undefined &&
      object.vaultDescriptionMaxLength !== null
        ? Long.fromValue(object.vaultDescriptionMaxLength)
        : undefined;
    message.vaultDepositLockUpDuration =
      object.vaultDepositLockUpDuration !== undefined &&
      object.vaultDepositLockUpDuration !== null
        ? Duration.fromPartial(object.vaultDepositLockUpDuration)
        : undefined;
    message.minUserVaultOwnerDeposit =
      object.minUserVaultOwnerDeposit !== undefined &&
      object.minUserVaultOwnerDeposit !== null
        ? Coin.fromPartial(object.minUserVaultOwnerDeposit)
        : undefined;
    message.minUserVaultOwnerRatio = object.minUserVaultOwnerRatio ?? "";
    message.userVaultProfitShareCap = object.userVaultProfitShareCap ?? "";
    message.userVaultDepositFeeCap = object.userVaultDepositFeeCap ?? "";
    message.userVaultWithdrawalFeeCap = object.userVaultWithdrawalFeeCap ?? "";
    message.userVaultTradeCommissionRatio =
      object.userVaultTradeCommissionRatio ?? "";
    message.userVaultFeeCommissionRatio =
      object.userVaultFeeCommissionRatio ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
