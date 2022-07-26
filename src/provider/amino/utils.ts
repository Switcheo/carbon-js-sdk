import { GovUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { SimpleMap } from "@carbon-sdk/util/type";
import { AminoConverter } from "@cosmjs/stargate";
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
};

export type AminoValueMap = SimpleMap<ConvertEncType>
  | SimpleMap<SimpleMap<ConvertEncType>>
  | SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>>
  | SimpleMap<SimpleMap<SimpleMap<SimpleMap<SimpleMap<ConvertEncType>>>>>
  | SimpleMap<SimpleMap<ConvertEncType> | ConvertEncType>;

export interface AminoInit {
  aminoType: string;
  valueMap: AminoValueMap;
}

export interface AminoProcessOutput {
  amino?: AminoValueMap;
  input?: any;
}

export interface AminoProcess {
  toAminoProcess?: (amino: AminoValueMap, input: any) => AminoProcessOutput;
  fromAminoProcess?: (amino: AminoValueMap, input: any) => AminoProcessOutput;
}

/**
 * checks if value is Long, BigNumber, Date, Duration or Uint8Array
 * @param value value to check
 */
const typeCheck = (value: any): boolean => {
  return Long.isLong(value)
    || BigNumber.isBigNumber(value)
    || value instanceof Uint8Array
    || value instanceof Date;
};


/**
 * checks maps object to amino or direct form
 * @param mapItem obj to be converted
 * @param valueKey obj with labels that indicate how each value is treated
 * @param toAmino indicates whether to convert to amino or direct
 */
export const mapEachIndiv = (
  mapItem: TypeUtils.SimpleMap<any> | null | undefined,
  valueKey: AminoValueMap,
  toAmino: boolean = false,
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
        directMap[altKey] = paramConverter(mapItem[key], keyMap, toAmino);
        return;
      }
    }
    if (mapItem[key].length && typeof mapItem[key] === "object") {
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
      directMap[altKey] = mapEachIndiv(mapItem[key], keyMap as AminoValueMap, toAmino);
    }
  });
  return directMap;
}

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
    case ConvertEncType.Dec:
      const bnVal = NumberUtils.bnOrZero(value);
      return toAmino
        ? bnVal.shiftedBy(-18).toFixed(18)
        : bnVal.shiftedBy(18).toString(10);
    case ConvertEncType.DecOrZero:
      const decBnVal = NumberUtils.bnOrZero(value);
      if (decBnVal.isZero()) return "0";
      return toAmino
        ? decBnVal.shiftedBy(-18).toFixed(18)
        : decBnVal.shiftedBy(18).toString(10);
    case ConvertEncType.Long:
      return toAmino ? value.toString() : new Long(Number(value));
    case ConvertEncType.LongToNum:
      return toAmino ? value.toNumber() : new Long(value);
    case ConvertEncType.NumToStr:
      return toAmino ? value.toString() : Number(value);
    case ConvertEncType.Date:
      return toAmino ? value.toISOString().replace('.000', '') : new Date(value);
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
        const seconds = value?.seconds as Long ?? new Long(0);
        return `${nanosBN.plus(seconds.toString()).toString(10)}`;
      } else {
        const durationBN = NumberUtils.bnOrZero(value.replace('s', ''));
        const secondsBN = durationBN.decimalPlaces(0, 1);
        const nanosBN = durationBN.minus(secondsBN).shiftedBy(6).decimalPlaces(0, 1);
        return {
          seconds: new Long(secondsBN.toNumber()),
          nanos: nanosBN.toNumber(),
        };
      }
    default:
      return value;
  }
};

export const generateAminoType = (
  amino: AminoInit,
  aminoProcess: AminoProcess = {},
): AminoConverter => {
  const valueMap = amino.valueMap ?? {}
  return {
    ...amino,
    toAmino: (input: TypeUtils.SimpleMap<any>) => {
      const processRes: AminoProcessOutput | undefined = aminoProcess?.toAminoProcess
        ? aminoProcess.toAminoProcess(valueMap, input)
        : {};
      const { input: newInput = input, amino: newAminoMap = valueMap } = processRes;

      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(newInput).forEach((key: string) => {
        const snakeKey = TypeUtils.camelToSnake(key);
        if (typeCheck(newInput[key])) {
          aminoObj[snakeKey] = paramConverter(newInput[key], newAminoMap[key] as ConvertEncType, true);
          return;
        }
        if (typeof newInput[key] !== "object" && typeof newAminoMap[key] !== "object") {
          aminoObj[snakeKey] = paramConverter(newInput[key], newAminoMap[key] as ConvertEncType, true);
        } else {
          if (newInput[key]?.length && typeof newInput[key] === "object") {
            aminoObj[snakeKey] = newInput[key].map((newItem: any) => mapEachIndiv(newItem, newAminoMap[key] as TypeUtils.SimpleMap<ConvertEncType>, true));
            return;
          }
          aminoObj[snakeKey] = mapEachIndiv(newInput[key], newAminoMap[key] as TypeUtils.SimpleMap<ConvertEncType>, true);
        }
      });
      return aminoObj;
    },
    fromAmino: (input: TypeUtils.SimpleMap<any>) => {
      const processRes: AminoProcessOutput | undefined = aminoProcess?.fromAminoProcess
        ? aminoProcess.fromAminoProcess(valueMap, input)
        : {};
      const { input: newInput = input, amino: newAminoMap = valueMap } = processRes;

      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(newInput).forEach((key: string) => {
        const camelKey = TypeUtils.snakeToCamel(key);
        if (typeof newInput[key] !== "object" && typeof newAminoMap[key] !== "object") {
          aminoObj[camelKey] = paramConverter(newInput[key], newAminoMap[camelKey] as ConvertEncType, false);
        } else {
          if (newInput[key]?.length && typeof newInput[key] === "object") {
            aminoObj[camelKey] = newInput[key].map((newItem: any) => mapEachIndiv(newItem, newAminoMap[camelKey] as TypeUtils.SimpleMap<ConvertEncType>, false));
            return;
          }
          aminoObj[camelKey] = mapEachIndiv(newInput[key], newAminoMap[camelKey] as TypeUtils.SimpleMap<ConvertEncType>, false);
        }
      });
      return aminoObj;
    },
  };
};

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
