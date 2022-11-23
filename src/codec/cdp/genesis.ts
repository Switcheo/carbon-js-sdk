/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";
import { DebtInfo } from "./debt_info";
import { RewardScheme } from "./reward_scheme";

export const protobufPackage = "Switcheo.carbon.cdp";

/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
  params?: Params;
  rateStrategies: RateStrategyParams[];
  assets: AssetParams[];
  debtInfos: DebtInfo[];
  rewardSchemes: RewardScheme[];
  sequenceNumber: Long;
  accountToCollateralized: { [key: string]: Uint8Array };
  accountToPrincipalDebt: { [key: string]: Uint8Array };
  accountToInitialCumulativeInterestMultiplier: { [key: string]: Uint8Array };
  stablecoinDebtInfo?: StablecoinDebtInfo;
  accountToPrincipalStablecoinDebt: { [key: string]: Uint8Array };
  accountToStablecoinInitialCumulativeInterestMultiplier: {
    [key: string]: Uint8Array;
  };
  /** this line is used by starport scaffolding # genesis/proto/state */
  accountToRewardDebt: { [key: string]: Uint8Array };
}

export interface GenesisState_AccountToCollateralizedEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToPrincipalDebtEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToInitialCumulativeInterestMultiplierEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToPrincipalStablecoinDebtEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToRewardDebtEntry {
  key: string;
  value: Uint8Array;
}

const baseGenesisState: object = { sequenceNumber: Long.UZERO };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rateStrategies) {
      RateStrategyParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.assets) {
      AssetParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.debtInfos) {
      DebtInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.rewardSchemes) {
      RewardScheme.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.sequenceNumber.isZero()) {
      writer.uint32(48).uint64(message.sequenceNumber);
    }
    Object.entries(message.accountToCollateralized).forEach(([key, value]) => {
      GenesisState_AccountToCollateralizedEntry.encode(
        { key: key as any, value },
        writer.uint32(58).fork()
      ).ldelim();
    });
    Object.entries(message.accountToPrincipalDebt).forEach(([key, value]) => {
      GenesisState_AccountToPrincipalDebtEntry.encode(
        { key: key as any, value },
        writer.uint32(66).fork()
      ).ldelim();
    });
    Object.entries(
      message.accountToInitialCumulativeInterestMultiplier
    ).forEach(([key, value]) => {
      GenesisState_AccountToInitialCumulativeInterestMultiplierEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork()
      ).ldelim();
    });
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(
        message.stablecoinDebtInfo,
        writer.uint32(82).fork()
      ).ldelim();
    }
    Object.entries(message.accountToPrincipalStablecoinDebt).forEach(
      ([key, value]) => {
        GenesisState_AccountToPrincipalStablecoinDebtEntry.encode(
          { key: key as any, value },
          writer.uint32(90).fork()
        ).ldelim();
      }
    );
    Object.entries(
      message.accountToStablecoinInitialCumulativeInterestMultiplier
    ).forEach(([key, value]) => {
      GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry.encode(
        { key: key as any, value },
        writer.uint32(98).fork()
      ).ldelim();
    });
    Object.entries(message.accountToRewardDebt).forEach(([key, value]) => {
      GenesisState_AccountToRewardDebtEntry.encode(
        { key: key as any, value },
        writer.uint32(106).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.rateStrategies = [];
    message.assets = [];
    message.debtInfos = [];
    message.rewardSchemes = [];
    message.accountToCollateralized = {};
    message.accountToPrincipalDebt = {};
    message.accountToInitialCumulativeInterestMultiplier = {};
    message.accountToPrincipalStablecoinDebt = {};
    message.accountToStablecoinInitialCumulativeInterestMultiplier = {};
    message.accountToRewardDebt = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.rateStrategies.push(
            RateStrategyParams.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.assets.push(AssetParams.decode(reader, reader.uint32()));
          break;
        case 4:
          message.debtInfos.push(DebtInfo.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardSchemes.push(
            RewardScheme.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.sequenceNumber = reader.uint64() as Long;
          break;
        case 7:
          const entry7 = GenesisState_AccountToCollateralizedEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry7.value !== undefined) {
            message.accountToCollateralized[entry7.key] = entry7.value;
          }
          break;
        case 8:
          const entry8 = GenesisState_AccountToPrincipalDebtEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry8.value !== undefined) {
            message.accountToPrincipalDebt[entry8.key] = entry8.value;
          }
          break;
        case 9:
          const entry9 =
            GenesisState_AccountToInitialCumulativeInterestMultiplierEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry9.value !== undefined) {
            message.accountToInitialCumulativeInterestMultiplier[entry9.key] =
              entry9.value;
          }
          break;
        case 10:
          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          const entry11 =
            GenesisState_AccountToPrincipalStablecoinDebtEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry11.value !== undefined) {
            message.accountToPrincipalStablecoinDebt[entry11.key] =
              entry11.value;
          }
          break;
        case 12:
          const entry12 =
            GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry12.value !== undefined) {
            message.accountToStablecoinInitialCumulativeInterestMultiplier[
              entry12.key
            ] = entry12.value;
          }
          break;
        case 13:
          const entry13 = GenesisState_AccountToRewardDebtEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry13.value !== undefined) {
            message.accountToRewardDebt[entry13.key] = entry13.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.rateStrategies = (object.rateStrategies ?? []).map((e: any) =>
      RateStrategyParams.fromJSON(e)
    );
    message.assets = (object.assets ?? []).map((e: any) =>
      AssetParams.fromJSON(e)
    );
    message.debtInfos = (object.debtInfos ?? []).map((e: any) =>
      DebtInfo.fromJSON(e)
    );
    message.rewardSchemes = (object.rewardSchemes ?? []).map((e: any) =>
      RewardScheme.fromJSON(e)
    );
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromString(object.sequenceNumber)
        : Long.UZERO;
    message.accountToCollateralized = Object.entries(
      object.accountToCollateralized ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.accountToPrincipalDebt = Object.entries(
      object.accountToPrincipalDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.accountToInitialCumulativeInterestMultiplier = Object.entries(
      object.accountToInitialCumulativeInterestMultiplier ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined;
    message.accountToPrincipalStablecoinDebt = Object.entries(
      object.accountToPrincipalStablecoinDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.accountToStablecoinInitialCumulativeInterestMultiplier =
      Object.entries(
        object.accountToStablecoinInitialCumulativeInterestMultiplier ?? {}
      ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
        acc[key] = bytesFromBase64(value as string);
        return acc;
      }, {});
    message.accountToRewardDebt = Object.entries(
      object.accountToRewardDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rateStrategies) {
      obj.rateStrategies = message.rateStrategies.map((e) =>
        e ? RateStrategyParams.toJSON(e) : undefined
      );
    } else {
      obj.rateStrategies = [];
    }
    if (message.assets) {
      obj.assets = message.assets.map((e) =>
        e ? AssetParams.toJSON(e) : undefined
      );
    } else {
      obj.assets = [];
    }
    if (message.debtInfos) {
      obj.debtInfos = message.debtInfos.map((e) =>
        e ? DebtInfo.toJSON(e) : undefined
      );
    } else {
      obj.debtInfos = [];
    }
    if (message.rewardSchemes) {
      obj.rewardSchemes = message.rewardSchemes.map((e) =>
        e ? RewardScheme.toJSON(e) : undefined
      );
    } else {
      obj.rewardSchemes = [];
    }
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    obj.accountToCollateralized = {};
    if (message.accountToCollateralized) {
      Object.entries(message.accountToCollateralized).forEach(([k, v]) => {
        obj.accountToCollateralized[k] = base64FromBytes(v);
      });
    }
    obj.accountToPrincipalDebt = {};
    if (message.accountToPrincipalDebt) {
      Object.entries(message.accountToPrincipalDebt).forEach(([k, v]) => {
        obj.accountToPrincipalDebt[k] = base64FromBytes(v);
      });
    }
    obj.accountToInitialCumulativeInterestMultiplier = {};
    if (message.accountToInitialCumulativeInterestMultiplier) {
      Object.entries(
        message.accountToInitialCumulativeInterestMultiplier
      ).forEach(([k, v]) => {
        obj.accountToInitialCumulativeInterestMultiplier[k] =
          base64FromBytes(v);
      });
    }
    message.stablecoinDebtInfo !== undefined &&
      (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
        ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
        : undefined);
    obj.accountToPrincipalStablecoinDebt = {};
    if (message.accountToPrincipalStablecoinDebt) {
      Object.entries(message.accountToPrincipalStablecoinDebt).forEach(
        ([k, v]) => {
          obj.accountToPrincipalStablecoinDebt[k] = base64FromBytes(v);
        }
      );
    }
    obj.accountToStablecoinInitialCumulativeInterestMultiplier = {};
    if (message.accountToStablecoinInitialCumulativeInterestMultiplier) {
      Object.entries(
        message.accountToStablecoinInitialCumulativeInterestMultiplier
      ).forEach(([k, v]) => {
        obj.accountToStablecoinInitialCumulativeInterestMultiplier[k] =
          base64FromBytes(v);
      });
    }
    obj.accountToRewardDebt = {};
    if (message.accountToRewardDebt) {
      Object.entries(message.accountToRewardDebt).forEach(([k, v]) => {
        obj.accountToRewardDebt[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.rateStrategies = (object.rateStrategies ?? []).map((e) =>
      RateStrategyParams.fromPartial(e)
    );
    message.assets = (object.assets ?? []).map((e) =>
      AssetParams.fromPartial(e)
    );
    message.debtInfos = (object.debtInfos ?? []).map((e) =>
      DebtInfo.fromPartial(e)
    );
    message.rewardSchemes = (object.rewardSchemes ?? []).map((e) =>
      RewardScheme.fromPartial(e)
    );
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromValue(object.sequenceNumber)
        : Long.UZERO;
    message.accountToCollateralized = Object.entries(
      object.accountToCollateralized ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.accountToPrincipalDebt = Object.entries(
      object.accountToPrincipalDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.accountToInitialCumulativeInterestMultiplier = Object.entries(
      object.accountToInitialCumulativeInterestMultiplier ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
        : undefined;
    message.accountToPrincipalStablecoinDebt = Object.entries(
      object.accountToPrincipalStablecoinDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.accountToStablecoinInitialCumulativeInterestMultiplier =
      Object.entries(
        object.accountToStablecoinInitialCumulativeInterestMultiplier ?? {}
      ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {});
    message.accountToRewardDebt = Object.entries(
      object.accountToRewardDebt ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseGenesisState_AccountToCollateralizedEntry: object = { key: "" };

export const GenesisState_AccountToCollateralizedEntry = {
  encode(
    message: GenesisState_AccountToCollateralizedEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_AccountToCollateralizedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToCollateralizedEntry,
    } as GenesisState_AccountToCollateralizedEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_AccountToCollateralizedEntry {
    const message = {
      ...baseGenesisState_AccountToCollateralizedEntry,
    } as GenesisState_AccountToCollateralizedEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToCollateralizedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToCollateralizedEntry>
  ): GenesisState_AccountToCollateralizedEntry {
    const message = {
      ...baseGenesisState_AccountToCollateralizedEntry,
    } as GenesisState_AccountToCollateralizedEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_AccountToPrincipalDebtEntry: object = { key: "" };

export const GenesisState_AccountToPrincipalDebtEntry = {
  encode(
    message: GenesisState_AccountToPrincipalDebtEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_AccountToPrincipalDebtEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToPrincipalDebtEntry,
    } as GenesisState_AccountToPrincipalDebtEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_AccountToPrincipalDebtEntry {
    const message = {
      ...baseGenesisState_AccountToPrincipalDebtEntry,
    } as GenesisState_AccountToPrincipalDebtEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToPrincipalDebtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToPrincipalDebtEntry>
  ): GenesisState_AccountToPrincipalDebtEntry {
    const message = {
      ...baseGenesisState_AccountToPrincipalDebtEntry,
    } as GenesisState_AccountToPrincipalDebtEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_AccountToInitialCumulativeInterestMultiplierEntry: object =
  { key: "" };

export const GenesisState_AccountToInitialCumulativeInterestMultiplierEntry = {
  encode(
    message: GenesisState_AccountToInitialCumulativeInterestMultiplierEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_AccountToInitialCumulativeInterestMultiplierEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToInitialCumulativeInterestMultiplierEntry,
    } as GenesisState_AccountToInitialCumulativeInterestMultiplierEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): GenesisState_AccountToInitialCumulativeInterestMultiplierEntry {
    const message = {
      ...baseGenesisState_AccountToInitialCumulativeInterestMultiplierEntry,
    } as GenesisState_AccountToInitialCumulativeInterestMultiplierEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(
    message: GenesisState_AccountToInitialCumulativeInterestMultiplierEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToInitialCumulativeInterestMultiplierEntry>
  ): GenesisState_AccountToInitialCumulativeInterestMultiplierEntry {
    const message = {
      ...baseGenesisState_AccountToInitialCumulativeInterestMultiplierEntry,
    } as GenesisState_AccountToInitialCumulativeInterestMultiplierEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_AccountToPrincipalStablecoinDebtEntry: object = {
  key: "",
};

export const GenesisState_AccountToPrincipalStablecoinDebtEntry = {
  encode(
    message: GenesisState_AccountToPrincipalStablecoinDebtEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_AccountToPrincipalStablecoinDebtEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToPrincipalStablecoinDebtEntry,
    } as GenesisState_AccountToPrincipalStablecoinDebtEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_AccountToPrincipalStablecoinDebtEntry {
    const message = {
      ...baseGenesisState_AccountToPrincipalStablecoinDebtEntry,
    } as GenesisState_AccountToPrincipalStablecoinDebtEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToPrincipalStablecoinDebtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToPrincipalStablecoinDebtEntry>
  ): GenesisState_AccountToPrincipalStablecoinDebtEntry {
    const message = {
      ...baseGenesisState_AccountToPrincipalStablecoinDebtEntry,
    } as GenesisState_AccountToPrincipalStablecoinDebtEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry: object =
  { key: "" };

export const GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry =
  {
    encode(
      message: GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry,
      writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value.length !== 0) {
        writer.uint32(18).bytes(message.value);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number
    ): GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry {
      const reader =
        input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseGenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry,
      } as GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry;
      message.value = new Uint8Array();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },

    fromJSON(
      object: any
    ): GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry {
      const message = {
        ...baseGenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry,
      } as GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry;
      message.key =
        object.key !== undefined && object.key !== null
          ? String(object.key)
          : "";
      message.value =
        object.value !== undefined && object.value !== null
          ? bytesFromBase64(object.value)
          : new Uint8Array();
      return message;
    },

    toJSON(
      message: GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry
    ): unknown {
      const obj: any = {};
      message.key !== undefined && (obj.key = message.key);
      message.value !== undefined &&
        (obj.value = base64FromBytes(
          message.value !== undefined ? message.value : new Uint8Array()
        ));
      return obj;
    },

    fromPartial(
      object: DeepPartial<GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry>
    ): GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry {
      const message = {
        ...baseGenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry,
      } as GenesisState_AccountToStablecoinInitialCumulativeInterestMultiplierEntry;
      message.key = object.key ?? "";
      message.value = object.value ?? new Uint8Array();
      return message;
    },
  };

const baseGenesisState_AccountToRewardDebtEntry: object = { key: "" };

export const GenesisState_AccountToRewardDebtEntry = {
  encode(
    message: GenesisState_AccountToRewardDebtEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_AccountToRewardDebtEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToRewardDebtEntry,
    } as GenesisState_AccountToRewardDebtEntry;
    message.value = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_AccountToRewardDebtEntry {
    const message = {
      ...baseGenesisState_AccountToRewardDebtEntry,
    } as GenesisState_AccountToRewardDebtEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToRewardDebtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToRewardDebtEntry>
  ): GenesisState_AccountToRewardDebtEntry {
    const message = {
      ...baseGenesisState_AccountToRewardDebtEntry,
    } as GenesisState_AccountToRewardDebtEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
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
