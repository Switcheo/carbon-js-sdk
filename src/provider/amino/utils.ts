import { NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { SimpleMap } from "@carbon-sdk/util/type";
import { AminoTypesMap } from "@carbon-sdk/index";
import { AminoConverter, AminoTypes } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import Long from "long";

export enum ConvertEncType {
  Long = "long",
  LongToNum = "long-number",
  Dec = "dec",
  DecOrZero = "dec-or-zero",
  NumToStr = "number-str",
  Date = "date",
  DateToNum = "date-number",
  Duration = "duration",
  Uint8Array = "uint8array",
}

export type AminoValueMap =
  | SimpleMap<ConvertEncType>
  | SimpleMap<SimpleMap<ConvertEncType>>
  | SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>>>
  | SimpleMap<SimpleMap<ConvertEncType> | ConvertEncType>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType> | ConvertEncType>>>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType> | ConvertEncType>>>>
export interface AminoInit {
  aminoType: string;
  valueMap: AminoValueMap;
}

export interface AminoProcessOutput {
  amino?: AminoValueMap;
  input?: any;
}

export interface AminoProcess {
  toAminoProcess?: (amino: AminoValueMap, input: any, aminoTypesMap: AminoTypes) => AminoProcessOutput;
  fromAminoProcess?: (amino: AminoValueMap, input: any, aminoTypesMap: AminoTypes) => AminoProcessOutput;
}

/**
 * checks if value is Long, BigNumber, Date, Duration or Uint8Array
 * @param value value to check
 */
const typeCheck = (value: any): boolean => {
  return Long.isLong(value)
    || BigNumber.isBigNumber(value)
    || value instanceof Date
    || value instanceof Uint8Array
    || ((value.seconds !== undefined && Long.isLong(value.seconds)) && (value.nanos !== undefined && typeof value.nanos === 'number')); // Check for Duration interface
};

const isArrayOfStrings = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.length !== 0 && value.every(item => typeof item === "string");
}

const isConvertEncType = (value: any): value is ConvertEncType => {
  return Object.values(ConvertEncType).includes(value as ConvertEncType)
}

/**
 * checks maps object to amino or direct form
 * @param mapItem obj to be converted
 * @param valueKey obj with labels that indicate how each value is treated
 * @param toAmino indicates whether to convert to amino or direct
 */
export const mapEachIndiv = (
  mapItem: TypeUtils.SimpleMap<any> | null | undefined,
  valueKey: AminoValueMap,
  toAmino: boolean = false
): TypeUtils.SimpleMap<any> | null | undefined => {
  if (!mapItem) {
    return mapItem;
  }

  const indivDirectKeys = Object.keys(mapItem) ?? [];
  const directMap: TypeUtils.SimpleMap<any> = {};
  indivDirectKeys.forEach((key: string) => {
    const altKey = toAmino ? TypeUtils.camelToSnake(key) : TypeUtils.snakeToCamel(key);

    const keyMap = toAmino ? valueKey?.[key] : valueKey?.[altKey];
    if (typeof keyMap !== "object") {
      // Check if this is a Long/BigNumber/Buffer/Date/Duration obj or a non-object/array
      if (typeCheck(mapItem[key]) || typeof mapItem[key] !== "object") {
        if (!keyMap && mapItem[key] instanceof Date) {
          directMap[altKey] = paramConverter(mapItem[key], ConvertEncType.Date, toAmino);
          return
        }
        directMap[altKey] = paramConverter(mapItem[key], keyMap, toAmino);
        return;
      }
    }
    if (mapItem[key].length && typeof mapItem[key] === "object") {
      if (isArrayOfStrings(mapItem[key])) {
        directMap[altKey] = mapItem[key]
        return
      }
      // If value is an array of objects, iterate through objects and call mapToObj function
      directMap[altKey] = mapItem[key].map((newMap: any) => {
        return mapEachIndiv(newMap, valueKey, toAmino);
      });
      return;
    } else {
      if (TypeUtils.isDurationType(mapItem[key])) {

        directMap[altKey] = paramConverter(mapItem[key], keyMap as ConvertEncType, toAmino);
        return;
      }
      if (mapItem[key]?.length === 0) {
        directMap[altKey] = []
        return
      }
      directMap[altKey] = mapEachIndiv(mapItem[key], keyMap as AminoValueMap, toAmino);
    }
  });
  return directMap;
};

export const NANOS_IN_ONE_SECOND = new Long(10 ** 9)

/**
 * convert direct params to corresponding amino params
 * @param value direct params to be converted
 * @param type param type (check ConvertEncType for list of types)
 * @param toAmino indicates whether to convert to amino or direct
 */
export const paramConverter = (value: any, type?: ConvertEncType, toAmino: boolean = false): unknown => {
  if (!value) {
    return value;
  }
  switch (type) {
    case ConvertEncType.Dec: {
      const bnVal = NumberUtils.bnOrZero(value);
      if (bnVal.isZero()) return null;
      return bnVal.toString(10);
    }
    case ConvertEncType.DecOrZero: {
      const decBnVal = NumberUtils.bnOrZero(value);
      if (decBnVal.isZero()) return "0";
      return decBnVal.toString(10);
    }
    case ConvertEncType.Long:
      return toAmino ? value.toString() : Long.fromValue(value);
    case ConvertEncType.LongToNum:
      return toAmino ? value.toNumber() : Long.fromValue(value);
    case ConvertEncType.NumToStr:
      return toAmino ? value.toString() : Number(value);
    case ConvertEncType.Date:
      return toAmino ? value.toISOString().replace(".000", "") : new Date(value);
    case ConvertEncType.DateToNum:
      if (toAmino) {
        const timestampBN = new BigNumber(value.getTime() ?? 0).shiftedBy(-3).decimalPlaces(0, 1);
        return timestampBN.toNumber();
      } else {
        const timestampNum = (value ?? 0) * 1000;
        return new Date(timestampNum);
      }
    case ConvertEncType.Duration:
      // Process Duration model from google protobuf
      if (toAmino) {
        const nanosBN = new BigNumber(value?.nanos ?? 0).shiftedBy(-6);
        const seconds = (value?.seconds as Long) ?? new Long(0);
        return `${nanosBN.plus(seconds.mul(NANOS_IN_ONE_SECOND).toString()).toString(10)}`;
      } else {
        const totalNanos = Long.fromString(value)
        return {
          seconds: totalNanos.divide(NANOS_IN_ONE_SECOND),
          nanos: totalNanos.mod(NANOS_IN_ONE_SECOND).toNumber(),
        };
      }
    case ConvertEncType.Uint8Array:
      return toAmino ? Buffer.from(value).toString('base64') : new Uint8Array(Buffer.from(value, 'base64'));
    default:
      return value;
  }
};

// generateAminoType drops falsy values, writes empty lists and writes zero ids. A message whose Go json tags keep a false
// BoolValue, omit an empty list or omit a zero uint64 uses generateFieldAminoType instead.
export const generateAminoType = (amino: AminoInit, aminoProcess: AminoProcess = {}): AminoConverter => {
  const valueMap = amino.valueMap ?? {};
  return {
    ...amino,
    toAmino: (input: TypeUtils.SimpleMap<any>) => {
      const processRes: AminoProcessOutput | undefined = aminoProcess?.toAminoProcess ? aminoProcess.toAminoProcess(valueMap, input, AminoTypesMap) : {};
      const { input: newInput = input, amino: newAminoMap = valueMap } = processRes;

      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(newInput).forEach((key: string) => {
        const snakeKey = TypeUtils.camelToSnake(key);
        if (!newInput[key]) return;
        if (typeCheck(newInput[key])) {
          aminoObj[snakeKey] = paramConverter(newInput[key], newAminoMap[key] as ConvertEncType, true);
          if (aminoObj[snakeKey] === null) delete aminoObj[snakeKey]
          return;
        }
        if (typeof newInput[key] !== "object" && typeof newAminoMap[key] !== "object") {
          aminoObj[snakeKey] = paramConverter(newInput[key], newAminoMap[key] as ConvertEncType, true);
          if (aminoObj[snakeKey] === null) delete aminoObj[snakeKey]
        } else {
          // empty array should be mapped over too
          if (newInput[key]?.length === 0) {
            aminoObj[snakeKey] = []
            return
          }
          if (newInput[key]?.length && typeof newInput[key] === "object") {
            aminoObj[snakeKey] = newInput[key].map((newItem: any) =>
              mapEachIndiv(newItem, newAminoMap[key] as TypeUtils.SimpleMap<ConvertEncType>, true)
            );
            return;
          }
          aminoObj[snakeKey] = mapEachIndiv(newInput[key], newAminoMap[key] as TypeUtils.SimpleMap<ConvertEncType>, true);
        }
      });
      return aminoObj;
    },
    fromAmino: (input: TypeUtils.SimpleMap<any>) => {
      const processRes: AminoProcessOutput | undefined = aminoProcess?.fromAminoProcess
        ? aminoProcess.fromAminoProcess(valueMap, input, AminoTypesMap)
        : {};
      const { input: newInput = input, amino: newAminoMap = valueMap } = processRes;
      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(newInput).forEach((key: string) => {
        const camelKey = TypeUtils.snakeToCamel(key);

        if (isConvertEncType(newAminoMap[key])) {
          aminoObj[camelKey] = paramConverter(newInput[key], newAminoMap[camelKey] as ConvertEncType, false)
          return
        }
        if (typeof newInput[key] !== "object" && typeof newAminoMap[key] !== "object") {
          aminoObj[camelKey] = paramConverter(newInput[key], newAminoMap[camelKey] as ConvertEncType, false);
          if (aminoObj[camelKey] === null) delete aminoObj[camelKey]
        } else {
          if (newInput[key]?.length && typeof newInput[key] === "object") {
            aminoObj[camelKey] = newInput[key].map((newItem: any) =>
              mapEachIndiv(newItem, newAminoMap[camelKey] as TypeUtils.SimpleMap<ConvertEncType>, false)
            );
            return;
          }
          aminoObj[camelKey] = mapEachIndiv(newInput[key], newAminoMap[camelKey] as TypeUtils.SimpleMap<ConvertEncType>, false);
        }
      });
      return aminoObj;
    },
  };
};

// An AminoFieldKind maps one field to legacy amino JSON as its Go json tag reads. toAmino returns undefined to omit the
// field, and fromAmino receives undefined when the field is absent.
export interface AminoFieldKind {
  toAmino: (value: any) => unknown;
  fromAmino: (value: any) => unknown;
}

export type AminoFields = SimpleMap<AminoFieldKind>;

const DEC_PLACES = 18;

// A LegacyDec with a fraction of a 10^-18 unit throws, because rounding it would sign a different number than the
// caller gave.
const wholeUnits = (units: BigNumber, input: string): BigNumber => {
  if (!units.isInteger()) throw new Error(`math.LegacyDec ${input} is not a whole number of 10^-${DEC_PLACES} units`);
  return units;
};

const toAminoFields = (fields: AminoFields, value: SimpleMap<any>): SimpleMap<unknown> => {
  const amino: SimpleMap<unknown> = {};
  Object.entries(fields).forEach(([key, field]) => {
    const aminoValue = field.toAmino(value[key]);
    if (aminoValue !== undefined) amino[TypeUtils.camelToSnake(key)] = aminoValue;
  });
  return amino;
};

const fromAminoFields = (fields: AminoFields, amino: SimpleMap<any>): SimpleMap<unknown> => {
  const value: SimpleMap<unknown> = {};
  Object.entries(fields).forEach(([key, field]) => {
    value[key] = field.fromAmino(amino[TypeUtils.camelToSnake(key)]);
  });
  return value;
};

const omittedWhenEmpty: AminoFieldKind = {
  toAmino: (value?: string) => value || undefined,
  fromAmino: (value?: string) => value ?? "",
};

export const AminoField = {
  // A string is omitted when empty.
  str: omittedWhenEmpty,

  // A non-nullable math.Int is always written, as "0" when unset.
  int: {
    toAmino: (value?: string) => value || "0",
    fromAmino: (value?: string) => value ?? "",
  } as AminoFieldKind,

  // A nullable math.Int is omitted when unset.
  optionalInt: omittedWhenEmpty,

  // A nullable math.LegacyDec is omitted when unset. Protobuf carries it as a whole number of 10^-18 units, and amino
  // writes it with 18 decimals.
  optionalDec: {
    toAmino: (value?: string) =>
      value ? wholeUnits(new BigNumber(value), value).shiftedBy(-DEC_PLACES).toFixed(DEC_PLACES) : undefined,
    fromAmino: (value?: string) =>
      value === undefined ? "" : wholeUnits(new BigNumber(value).shiftedBy(DEC_PLACES), value).toFixed(0),
  } as AminoFieldKind,

  // A uint64 is written as a decimal string and omitted when zero.
  uint64: {
    toAmino: (value?: Long) => {
      const id = Long.fromValue(value ?? Long.UZERO).toUnsigned();
      return id.isZero() ? undefined : id.toString();
    },
    fromAmino: (value?: string) => (value === undefined ? Long.UZERO : Long.fromString(value, true)),
  } as AminoFieldKind,

  // A google.protobuf.BoolValue is omitted when unset and written when false.
  optionalBool: {
    toAmino: (value?: boolean) => value ?? undefined,
    fromAmino: (value?: boolean) => value,
  } as AminoFieldKind,

  // A repeated string is omitted when empty.
  strs: {
    toAmino: (value?: string[]) => (value?.length ? value : undefined),
    fromAmino: (value?: string[]) => value ?? [],
  } as AminoFieldKind,

  // A nullable nested message is omitted when unset.
  optionalMessage: (fields: AminoFields): AminoFieldKind => ({
    toAmino: (value?: SimpleMap<any>) => (value ? toAminoFields(fields, value) : undefined),
    fromAmino: (value?: SimpleMap<any>) => (value === undefined ? undefined : fromAminoFields(fields, value)),
  }),
};

export const generateFieldAminoType = (aminoType: string, fields: AminoFields): AminoConverter => ({
  aminoType,
  toAmino: (value: SimpleMap<any>) => toAminoFields(fields, value),
  fromAmino: (amino: SimpleMap<any>) => fromAminoFields(fields, amino),
});

export const pruneAmino = (value: any, pruneMap: TypeUtils.SimpleMap<ConvertEncType>) => {
  const newValue = value;
  const newMsg = value.msg;
  Object.entries(newMsg).forEach(([key, value]) => {
    const camelKey = TypeUtils.snakeToCamel(key);
    const pruneItem = pruneMap[camelKey];
    switch (pruneItem) {
      case ConvertEncType.Long:
        if (Long.isLong(value) && value.isZero()) {
          delete newMsg[key];
        }
        break
      default:
        if (typeof value === "boolean" && !value) {
          delete newMsg[key];
        }
        if (typeof value === "string" && value === "") {
          delete newMsg[key];
        }
        if (typeof value === "number" && value === 0) {
          delete newMsg[key];
        }
    }
  });
  newValue.msg = newMsg;
  return newValue;
};
