/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { StableCoinDebtInfo } from "./stable_coin_debt_info";
import { RateStrategyParams } from "./rate_strategy_params";
import { AssetParams } from "./asset_params";
import { DebtInfo } from "./debt_info";
import {
  MsgBorrowAsset,
  MsgRepayAsset,
  MsgLockCollateral,
  MsgUnlockCollateral,
} from "./tx";

export const protobufPackage = "Switcheo.carbon.cdp";

/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
  params?: Params;
  rateStrategies: RateStrategyParams[];
  assets: AssetParams[];
  debtInfos: DebtInfo[];
  accountToCollateralized: { [key: string]: Uint8Array };
  accountToDebt: { [key: string]: Uint8Array };
  accountToPaidInterest: { [key: string]: Uint8Array };
  stableCoinDebtInfo?: StableCoinDebtInfo;
  borrows: MsgBorrowAsset[];
  repays: MsgRepayAsset[];
  lockCollaterals: MsgLockCollateral[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  unlockCollaterals: MsgUnlockCollateral[];
}

export interface GenesisState_AccountToCollateralizedEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToDebtEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_AccountToPaidInterestEntry {
  key: string;
  value: Uint8Array;
}

const baseGenesisState: object = {};

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
    Object.entries(message.accountToCollateralized).forEach(([key, value]) => {
      GenesisState_AccountToCollateralizedEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    Object.entries(message.accountToDebt).forEach(([key, value]) => {
      GenesisState_AccountToDebtEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork()
      ).ldelim();
    });
    Object.entries(message.accountToPaidInterest).forEach(([key, value]) => {
      GenesisState_AccountToPaidInterestEntry.encode(
        { key: key as any, value },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.stableCoinDebtInfo !== undefined) {
      StableCoinDebtInfo.encode(
        message.stableCoinDebtInfo,
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.borrows) {
      MsgBorrowAsset.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.repays) {
      MsgRepayAsset.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.lockCollaterals) {
      MsgLockCollateral.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.unlockCollaterals) {
      MsgUnlockCollateral.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.rateStrategies = [];
    message.assets = [];
    message.debtInfos = [];
    message.accountToCollateralized = {};
    message.accountToDebt = {};
    message.accountToPaidInterest = {};
    message.borrows = [];
    message.repays = [];
    message.lockCollaterals = [];
    message.unlockCollaterals = [];
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
          const entry5 = GenesisState_AccountToCollateralizedEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.accountToCollateralized[entry5.key] = entry5.value;
          }
          break;
        case 6:
          const entry6 = GenesisState_AccountToDebtEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.accountToDebt[entry6.key] = entry6.value;
          }
          break;
        case 7:
          const entry7 = GenesisState_AccountToPaidInterestEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry7.value !== undefined) {
            message.accountToPaidInterest[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.stableCoinDebtInfo = StableCoinDebtInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.borrows.push(MsgBorrowAsset.decode(reader, reader.uint32()));
          break;
        case 10:
          message.repays.push(MsgRepayAsset.decode(reader, reader.uint32()));
          break;
        case 11:
          message.lockCollaterals.push(
            MsgLockCollateral.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.unlockCollaterals.push(
            MsgUnlockCollateral.decode(reader, reader.uint32())
          );
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
    message.accountToCollateralized = Object.entries(
      object.accountToCollateralized ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.accountToDebt = Object.entries(object.accountToDebt ?? {}).reduce<{
      [key: string]: Uint8Array;
    }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.accountToPaidInterest = Object.entries(
      object.accountToPaidInterest ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      acc[key] = bytesFromBase64(value as string);
      return acc;
    }, {});
    message.stableCoinDebtInfo =
      object.stableCoinDebtInfo !== undefined &&
      object.stableCoinDebtInfo !== null
        ? StableCoinDebtInfo.fromJSON(object.stableCoinDebtInfo)
        : undefined;
    message.borrows = (object.borrows ?? []).map((e: any) =>
      MsgBorrowAsset.fromJSON(e)
    );
    message.repays = (object.repays ?? []).map((e: any) =>
      MsgRepayAsset.fromJSON(e)
    );
    message.lockCollaterals = (object.lockCollaterals ?? []).map((e: any) =>
      MsgLockCollateral.fromJSON(e)
    );
    message.unlockCollaterals = (object.unlockCollaterals ?? []).map((e: any) =>
      MsgUnlockCollateral.fromJSON(e)
    );
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
    obj.accountToCollateralized = {};
    if (message.accountToCollateralized) {
      Object.entries(message.accountToCollateralized).forEach(([k, v]) => {
        obj.accountToCollateralized[k] = base64FromBytes(v);
      });
    }
    obj.accountToDebt = {};
    if (message.accountToDebt) {
      Object.entries(message.accountToDebt).forEach(([k, v]) => {
        obj.accountToDebt[k] = base64FromBytes(v);
      });
    }
    obj.accountToPaidInterest = {};
    if (message.accountToPaidInterest) {
      Object.entries(message.accountToPaidInterest).forEach(([k, v]) => {
        obj.accountToPaidInterest[k] = base64FromBytes(v);
      });
    }
    message.stableCoinDebtInfo !== undefined &&
      (obj.stableCoinDebtInfo = message.stableCoinDebtInfo
        ? StableCoinDebtInfo.toJSON(message.stableCoinDebtInfo)
        : undefined);
    if (message.borrows) {
      obj.borrows = message.borrows.map((e) =>
        e ? MsgBorrowAsset.toJSON(e) : undefined
      );
    } else {
      obj.borrows = [];
    }
    if (message.repays) {
      obj.repays = message.repays.map((e) =>
        e ? MsgRepayAsset.toJSON(e) : undefined
      );
    } else {
      obj.repays = [];
    }
    if (message.lockCollaterals) {
      obj.lockCollaterals = message.lockCollaterals.map((e) =>
        e ? MsgLockCollateral.toJSON(e) : undefined
      );
    } else {
      obj.lockCollaterals = [];
    }
    if (message.unlockCollaterals) {
      obj.unlockCollaterals = message.unlockCollaterals.map((e) =>
        e ? MsgUnlockCollateral.toJSON(e) : undefined
      );
    } else {
      obj.unlockCollaterals = [];
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
    message.accountToCollateralized = Object.entries(
      object.accountToCollateralized ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.accountToDebt = Object.entries(object.accountToDebt ?? {}).reduce<{
      [key: string]: Uint8Array;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.accountToPaidInterest = Object.entries(
      object.accountToPaidInterest ?? {}
    ).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.stableCoinDebtInfo =
      object.stableCoinDebtInfo !== undefined &&
      object.stableCoinDebtInfo !== null
        ? StableCoinDebtInfo.fromPartial(object.stableCoinDebtInfo)
        : undefined;
    message.borrows = (object.borrows ?? []).map((e) =>
      MsgBorrowAsset.fromPartial(e)
    );
    message.repays = (object.repays ?? []).map((e) =>
      MsgRepayAsset.fromPartial(e)
    );
    message.lockCollaterals = (object.lockCollaterals ?? []).map((e) =>
      MsgLockCollateral.fromPartial(e)
    );
    message.unlockCollaterals = (object.unlockCollaterals ?? []).map((e) =>
      MsgUnlockCollateral.fromPartial(e)
    );
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

const baseGenesisState_AccountToDebtEntry: object = { key: "" };

export const GenesisState_AccountToDebtEntry = {
  encode(
    message: GenesisState_AccountToDebtEntry,
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
  ): GenesisState_AccountToDebtEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToDebtEntry,
    } as GenesisState_AccountToDebtEntry;
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

  fromJSON(object: any): GenesisState_AccountToDebtEntry {
    const message = {
      ...baseGenesisState_AccountToDebtEntry,
    } as GenesisState_AccountToDebtEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToDebtEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToDebtEntry>
  ): GenesisState_AccountToDebtEntry {
    const message = {
      ...baseGenesisState_AccountToDebtEntry,
    } as GenesisState_AccountToDebtEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseGenesisState_AccountToPaidInterestEntry: object = { key: "" };

export const GenesisState_AccountToPaidInterestEntry = {
  encode(
    message: GenesisState_AccountToPaidInterestEntry,
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
  ): GenesisState_AccountToPaidInterestEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_AccountToPaidInterestEntry,
    } as GenesisState_AccountToPaidInterestEntry;
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

  fromJSON(object: any): GenesisState_AccountToPaidInterestEntry {
    const message = {
      ...baseGenesisState_AccountToPaidInterestEntry,
    } as GenesisState_AccountToPaidInterestEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GenesisState_AccountToPaidInterestEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_AccountToPaidInterestEntry>
  ): GenesisState_AccountToPaidInterestEntry {
    const message = {
      ...baseGenesisState_AccountToPaidInterestEntry,
    } as GenesisState_AccountToPaidInterestEntry;
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
