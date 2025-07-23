/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AssetParams } from "./asset_params";
import { DebtInfo } from "./debt_info";
import { EModeCategory } from "./e_mode_category";
import { Params } from "./params";
import { RateStrategyParams } from "./rate_strategy_params";
import { RewardScheme } from "./reward_scheme";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";
import { StablecoinInterestInfo } from "./stablecoin_interest_info";

export const protobufPackage = "Switcheo.carbon.cdp";

/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
  params?: Params;
  rateStrategies: RateStrategyParams[];
  assets: AssetParams[];
  debtInfos: DebtInfo[];
  rewardSchemes: RewardScheme[];
  sequenceNumber: Long;
  collateralizedCibtRecords: { [key: string]: Uint8Array };
  principalRecords: { [key: string]: Uint8Array };
  initialCumulativeInterestMultiplierRecords: { [key: string]: Uint8Array };
  stablecoinDebtInfo?: StablecoinDebtInfo;
  principalStablecoinDebtRecords: { [key: string]: Uint8Array };
  stablecoinInitialCumulativeInterestMultiplierRecords: { [key: string]: Uint8Array };
  rewardDebtRecords: { [key: string]: Uint8Array };
  stablecoinInterestInfo?: StablecoinInterestInfo;
  eModeCategories: EModeCategory[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  accountEModeCategoryRecords: { [key: string]: string };
}

export interface GenesisState_CollateralizedCibtRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_PrincipalRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_PrincipalStablecoinDebtRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_RewardDebtRecordsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountEModeCategoryRecordsEntry {
  key: string;
  value: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    rateStrategies: [],
    assets: [],
    debtInfos: [],
    rewardSchemes: [],
    sequenceNumber: Long.UZERO,
    collateralizedCibtRecords: {},
    principalRecords: {},
    initialCumulativeInterestMultiplierRecords: {},
    stablecoinDebtInfo: undefined,
    principalStablecoinDebtRecords: {},
    stablecoinInitialCumulativeInterestMultiplierRecords: {},
    rewardDebtRecords: {},
    stablecoinInterestInfo: undefined,
    eModeCategories: [],
    accountEModeCategoryRecords: {},
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    Object.entries(message.collateralizedCibtRecords).forEach(([key, value]) => {
      GenesisState_CollateralizedCibtRecordsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    Object.entries(message.principalRecords).forEach(([key, value]) => {
      GenesisState_PrincipalRecordsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    Object.entries(message.initialCumulativeInterestMultiplierRecords).forEach(([key, value]) => {
      GenesisState_InitialCumulativeInterestMultiplierRecordsEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork(),
      ).ldelim();
    });
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(message.stablecoinDebtInfo, writer.uint32(82).fork()).ldelim();
    }
    Object.entries(message.principalStablecoinDebtRecords).forEach(([key, value]) => {
      GenesisState_PrincipalStablecoinDebtRecordsEntry.encode({ key: key as any, value }, writer.uint32(90).fork())
        .ldelim();
    });
    Object.entries(message.stablecoinInitialCumulativeInterestMultiplierRecords).forEach(([key, value]) => {
      GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry.encode(
        { key: key as any, value },
        writer.uint32(98).fork(),
      ).ldelim();
    });
    Object.entries(message.rewardDebtRecords).forEach(([key, value]) => {
      GenesisState_RewardDebtRecordsEntry.encode({ key: key as any, value }, writer.uint32(106).fork()).ldelim();
    });
    if (message.stablecoinInterestInfo !== undefined) {
      StablecoinInterestInfo.encode(message.stablecoinInterestInfo, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.eModeCategories) {
      EModeCategory.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    Object.entries(message.accountEModeCategoryRecords).forEach(([key, value]) => {
      GenesisState_AccountEModeCategoryRecordsEntry.encode({ key: key as any, value }, writer.uint32(130).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rateStrategies.push(RateStrategyParams.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assets.push(AssetParams.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.debtInfos.push(DebtInfo.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rewardSchemes.push(RewardScheme.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sequenceNumber = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = GenesisState_CollateralizedCibtRecordsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.collateralizedCibtRecords[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = GenesisState_PrincipalRecordsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.principalRecords[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = GenesisState_InitialCumulativeInterestMultiplierRecordsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.initialCumulativeInterestMultiplierRecords[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = GenesisState_PrincipalStablecoinDebtRecordsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.principalStablecoinDebtRecords[entry11.key] = entry11.value;
          }
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          const entry12 = GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry12.value !== undefined) {
            message.stablecoinInitialCumulativeInterestMultiplierRecords[entry12.key] = entry12.value;
          }
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = GenesisState_RewardDebtRecordsEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.rewardDebtRecords[entry13.key] = entry13.value;
          }
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.stablecoinInterestInfo = StablecoinInterestInfo.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.eModeCategories.push(EModeCategory.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          const entry16 = GenesisState_AccountEModeCategoryRecordsEntry.decode(reader, reader.uint32());
          if (entry16.value !== undefined) {
            message.accountEModeCategoryRecords[entry16.key] = entry16.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      rateStrategies: Array.isArray(object?.rateStrategies)
        ? object.rateStrategies.map((e: any) => RateStrategyParams.fromJSON(e))
        : [],
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => AssetParams.fromJSON(e)) : [],
      debtInfos: Array.isArray(object?.debtInfos) ? object.debtInfos.map((e: any) => DebtInfo.fromJSON(e)) : [],
      rewardSchemes: Array.isArray(object?.rewardSchemes)
        ? object.rewardSchemes.map((e: any) => RewardScheme.fromJSON(e))
        : [],
      sequenceNumber: isSet(object.sequenceNumber) ? Long.fromValue(object.sequenceNumber) : Long.UZERO,
      collateralizedCibtRecords: isObject(object.collateralizedCibtRecords)
        ? Object.entries(object.collateralizedCibtRecords).reduce<{ [key: string]: Uint8Array }>(
          (acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          },
          {},
        )
        : {},
      principalRecords: isObject(object.principalRecords)
        ? Object.entries(object.principalRecords).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      initialCumulativeInterestMultiplierRecords: isObject(object.initialCumulativeInterestMultiplierRecords)
        ? Object.entries(object.initialCumulativeInterestMultiplierRecords).reduce<{ [key: string]: Uint8Array }>(
          (acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          },
          {},
        )
        : {},
      stablecoinDebtInfo: isSet(object.stablecoinDebtInfo)
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined,
      principalStablecoinDebtRecords: isObject(object.principalStablecoinDebtRecords)
        ? Object.entries(object.principalStablecoinDebtRecords).reduce<{ [key: string]: Uint8Array }>(
          (acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          },
          {},
        )
        : {},
      stablecoinInitialCumulativeInterestMultiplierRecords:
        isObject(object.stablecoinInitialCumulativeInterestMultiplierRecords)
          ? Object.entries(object.stablecoinInitialCumulativeInterestMultiplierRecords).reduce<
            { [key: string]: Uint8Array }
          >((acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          }, {})
          : {},
      rewardDebtRecords: isObject(object.rewardDebtRecords)
        ? Object.entries(object.rewardDebtRecords).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      stablecoinInterestInfo: isSet(object.stablecoinInterestInfo)
        ? StablecoinInterestInfo.fromJSON(object.stablecoinInterestInfo)
        : undefined,
      eModeCategories: Array.isArray(object?.eModeCategories)
        ? object.eModeCategories.map((e: any) => EModeCategory.fromJSON(e))
        : [],
      accountEModeCategoryRecords: isObject(object.accountEModeCategoryRecords)
        ? Object.entries(object.accountEModeCategoryRecords).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rateStrategies) {
      obj.rateStrategies = message.rateStrategies.map((e) => e ? RateStrategyParams.toJSON(e) : undefined);
    } else {
      obj.rateStrategies = [];
    }
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? AssetParams.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.debtInfos) {
      obj.debtInfos = message.debtInfos.map((e) => e ? DebtInfo.toJSON(e) : undefined);
    } else {
      obj.debtInfos = [];
    }
    if (message.rewardSchemes) {
      obj.rewardSchemes = message.rewardSchemes.map((e) => e ? RewardScheme.toJSON(e) : undefined);
    } else {
      obj.rewardSchemes = [];
    }
    message.sequenceNumber !== undefined && (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    obj.collateralizedCibtRecords = {};
    if (message.collateralizedCibtRecords) {
      Object.entries(message.collateralizedCibtRecords).forEach(([k, v]) => {
        obj.collateralizedCibtRecords[k] = base64FromBytes(v);
      });
    }
    obj.principalRecords = {};
    if (message.principalRecords) {
      Object.entries(message.principalRecords).forEach(([k, v]) => {
        obj.principalRecords[k] = base64FromBytes(v);
      });
    }
    obj.initialCumulativeInterestMultiplierRecords = {};
    if (message.initialCumulativeInterestMultiplierRecords) {
      Object.entries(message.initialCumulativeInterestMultiplierRecords).forEach(([k, v]) => {
        obj.initialCumulativeInterestMultiplierRecords[k] = base64FromBytes(v);
      });
    }
    message.stablecoinDebtInfo !== undefined && (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
      ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
      : undefined);
    obj.principalStablecoinDebtRecords = {};
    if (message.principalStablecoinDebtRecords) {
      Object.entries(message.principalStablecoinDebtRecords).forEach(([k, v]) => {
        obj.principalStablecoinDebtRecords[k] = base64FromBytes(v);
      });
    }
    obj.stablecoinInitialCumulativeInterestMultiplierRecords = {};
    if (message.stablecoinInitialCumulativeInterestMultiplierRecords) {
      Object.entries(message.stablecoinInitialCumulativeInterestMultiplierRecords).forEach(([k, v]) => {
        obj.stablecoinInitialCumulativeInterestMultiplierRecords[k] = base64FromBytes(v);
      });
    }
    obj.rewardDebtRecords = {};
    if (message.rewardDebtRecords) {
      Object.entries(message.rewardDebtRecords).forEach(([k, v]) => {
        obj.rewardDebtRecords[k] = base64FromBytes(v);
      });
    }
    message.stablecoinInterestInfo !== undefined && (obj.stablecoinInterestInfo = message.stablecoinInterestInfo
      ? StablecoinInterestInfo.toJSON(message.stablecoinInterestInfo)
      : undefined);
    if (message.eModeCategories) {
      obj.eModeCategories = message.eModeCategories.map((e) => e ? EModeCategory.toJSON(e) : undefined);
    } else {
      obj.eModeCategories = [];
    }
    obj.accountEModeCategoryRecords = {};
    if (message.accountEModeCategoryRecords) {
      Object.entries(message.accountEModeCategoryRecords).forEach(([k, v]) => {
        obj.accountEModeCategoryRecords[k] = v;
      });
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.rateStrategies = object.rateStrategies?.map((e) => RateStrategyParams.fromPartial(e)) || [];
    message.assets = object.assets?.map((e) => AssetParams.fromPartial(e)) || [];
    message.debtInfos = object.debtInfos?.map((e) => DebtInfo.fromPartial(e)) || [];
    message.rewardSchemes = object.rewardSchemes?.map((e) => RewardScheme.fromPartial(e)) || [];
    message.sequenceNumber = (object.sequenceNumber !== undefined && object.sequenceNumber !== null)
      ? Long.fromValue(object.sequenceNumber)
      : Long.UZERO;
    message.collateralizedCibtRecords = Object.entries(object.collateralizedCibtRecords ?? {}).reduce<
      { [key: string]: Uint8Array }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.principalRecords = Object.entries(object.principalRecords ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.initialCumulativeInterestMultiplierRecords = Object.entries(
      object.initialCumulativeInterestMultiplierRecords ?? {},
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.stablecoinDebtInfo = (object.stablecoinDebtInfo !== undefined && object.stablecoinDebtInfo !== null)
      ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
      : undefined;
    message.principalStablecoinDebtRecords = Object.entries(object.principalStablecoinDebtRecords ?? {}).reduce<
      { [key: string]: Uint8Array }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.stablecoinInitialCumulativeInterestMultiplierRecords = Object.entries(
      object.stablecoinInitialCumulativeInterestMultiplierRecords ?? {},
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.rewardDebtRecords = Object.entries(object.rewardDebtRecords ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.stablecoinInterestInfo =
      (object.stablecoinInterestInfo !== undefined && object.stablecoinInterestInfo !== null)
        ? StablecoinInterestInfo.fromPartial(object.stablecoinInterestInfo)
        : undefined;
    message.eModeCategories = object.eModeCategories?.map((e) => EModeCategory.fromPartial(e)) || [];
    message.accountEModeCategoryRecords = Object.entries(object.accountEModeCategoryRecords ?? {}).reduce<
      { [key: string]: string }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_CollateralizedCibtRecordsEntry(): GenesisState_CollateralizedCibtRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_CollateralizedCibtRecordsEntry = {
  encode(message: GenesisState_CollateralizedCibtRecordsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_CollateralizedCibtRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_CollateralizedCibtRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_CollateralizedCibtRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_CollateralizedCibtRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_CollateralizedCibtRecordsEntry>): GenesisState_CollateralizedCibtRecordsEntry {
    return GenesisState_CollateralizedCibtRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<GenesisState_CollateralizedCibtRecordsEntry>,
  ): GenesisState_CollateralizedCibtRecordsEntry {
    const message = createBaseGenesisState_CollateralizedCibtRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_PrincipalRecordsEntry(): GenesisState_PrincipalRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_PrincipalRecordsEntry = {
  encode(message: GenesisState_PrincipalRecordsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_PrincipalRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_PrincipalRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_PrincipalRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_PrincipalRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_PrincipalRecordsEntry>): GenesisState_PrincipalRecordsEntry {
    return GenesisState_PrincipalRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_PrincipalRecordsEntry>): GenesisState_PrincipalRecordsEntry {
    const message = createBaseGenesisState_PrincipalRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_InitialCumulativeInterestMultiplierRecordsEntry(): GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_InitialCumulativeInterestMultiplierRecordsEntry = {
  encode(
    message: GenesisState_InitialCumulativeInterestMultiplierRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_InitialCumulativeInterestMultiplierRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_InitialCumulativeInterestMultiplierRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(
    base?: DeepPartial<GenesisState_InitialCumulativeInterestMultiplierRecordsEntry>,
  ): GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
    return GenesisState_InitialCumulativeInterestMultiplierRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<GenesisState_InitialCumulativeInterestMultiplierRecordsEntry>,
  ): GenesisState_InitialCumulativeInterestMultiplierRecordsEntry {
    const message = createBaseGenesisState_InitialCumulativeInterestMultiplierRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_PrincipalStablecoinDebtRecordsEntry(): GenesisState_PrincipalStablecoinDebtRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_PrincipalStablecoinDebtRecordsEntry = {
  encode(
    message: GenesisState_PrincipalStablecoinDebtRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_PrincipalStablecoinDebtRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_PrincipalStablecoinDebtRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_PrincipalStablecoinDebtRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_PrincipalStablecoinDebtRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(
    base?: DeepPartial<GenesisState_PrincipalStablecoinDebtRecordsEntry>,
  ): GenesisState_PrincipalStablecoinDebtRecordsEntry {
    return GenesisState_PrincipalStablecoinDebtRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<GenesisState_PrincipalStablecoinDebtRecordsEntry>,
  ): GenesisState_PrincipalStablecoinDebtRecordsEntry {
    const message = createBaseGenesisState_PrincipalStablecoinDebtRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry(): GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry = {
  encode(
    message: GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(
    base?: DeepPartial<GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry>,
  ): GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
    return GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry>,
  ): GenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry {
    const message = createBaseGenesisState_StablecoinInitialCumulativeInterestMultiplierRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_RewardDebtRecordsEntry(): GenesisState_RewardDebtRecordsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_RewardDebtRecordsEntry = {
  encode(message: GenesisState_RewardDebtRecordsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_RewardDebtRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_RewardDebtRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_RewardDebtRecordsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_RewardDebtRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_RewardDebtRecordsEntry>): GenesisState_RewardDebtRecordsEntry {
    return GenesisState_RewardDebtRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_RewardDebtRecordsEntry>): GenesisState_RewardDebtRecordsEntry {
    const message = createBaseGenesisState_RewardDebtRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_AccountEModeCategoryRecordsEntry(): GenesisState_AccountEModeCategoryRecordsEntry {
  return { key: "", value: "" };
}

export const GenesisState_AccountEModeCategoryRecordsEntry = {
  encode(message: GenesisState_AccountEModeCategoryRecordsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_AccountEModeCategoryRecordsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_AccountEModeCategoryRecordsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_AccountEModeCategoryRecordsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GenesisState_AccountEModeCategoryRecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<GenesisState_AccountEModeCategoryRecordsEntry>,
  ): GenesisState_AccountEModeCategoryRecordsEntry {
    return GenesisState_AccountEModeCategoryRecordsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountEModeCategoryRecordsEntry>,
  ): GenesisState_AccountEModeCategoryRecordsEntry {
    const message = createBaseGenesisState_AccountEModeCategoryRecordsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
