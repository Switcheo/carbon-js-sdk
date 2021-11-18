import { NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import Long from "long";

type SignDocType = "string" | "long" | "long-number" | "dec" | "bignumber" | "default" | "number" | "boolean" | "number-str" | "duration" | "date" | "date-number";

export interface AminoInit {
  aminoType: string;
  valueMap: TypeUtils.SimpleMap<SignDocType | TypeUtils.SimpleMap<SignDocType>>;
}

/**
 * checks maps object to amino or direct form
 * @param mapItem obj to be converted
 * @param valueKey obj with labels that indicate how each value is treated
 * @param toAmino indicates whether to convert to amino or direct
 */
const mapEachIndiv = (
  mapItem: TypeUtils.SimpleMap<any> | null | undefined,
  valueKey: TypeUtils.SimpleMap<SignDocType>,
  toAmino: boolean = false,
): TypeUtils.SimpleMap<any> | null | undefined => {
  if (!mapItem) {
    return mapItem;
  }

  const indivDirectKeys = Object.keys(mapItem) ?? [];
  const directMap: TypeUtils.SimpleMap<any> = {};
  indivDirectKeys.forEach((key: string) => {
    const altKey = toAmino ? TypeUtils.camelToSnake(key) : TypeUtils.snakeToCamel(key);

    if (mapItem[key].length && typeof mapItem[key] === "object") {
      // If value is an array of objects, iterate through objects and call mapToObj function
      directMap[altKey] = mapItem[key].map((newMap: any) => {
        return mapEachIndiv(newMap, valueKey, toAmino);
      });
      return;
    } else {
      // This happens when this is not an object/array. Pass straight into converter
      const keyMap = toAmino ? valueKey[key] : valueKey[altKey];
      directMap[altKey] = paramConverter(mapItem[key], keyMap, toAmino);
    }
  });
  return directMap;
}

/**
 * convert direct params to corresponding amino params
 * @param value direct params to be converted
 * @param type param type (e.g. "string" | "long" | "dec" | "bignumber" | "default" | "number" | "boolean" | "number-str";)
 * @param toAmino indicates whether to convert to amino or direct
 */
const paramConverter = (value: any, type: SignDocType, toAmino: boolean = false): unknown => {
  if (!value) {
    return value;
  }
  switch (type) {
    case "dec":
      const bnVal = NumberUtils.bnOrZero(value);
      const adjustedVal = toAmino ? bnVal.shiftedBy(-18) : bnVal.shiftedBy(18);
      return adjustedVal.toString(10);
    case "bignumber":
      return NumberUtils.bnOrZero(value).toString(10);
    case "long":
      return toAmino ? value.toString(10) : new Long(value);
    case "long-number":
      return toAmino ? value.toNumber() : new Long(value);
    case "number-str":
      return toAmino ? value.toString() : Number(value);
    case "date":
      return toAmino ? value.toISOString() : new Date(value);
    case "date-number":
      if (toAmino) {
        console.log('date-number value', value);
        const timestampBN = new BigNumber(value.getTime() ?? 0).shiftedBy(-3).decimalPlaces(0, 3);
        return timestampBN.toNumber();
      } else {
        const timestampNum = (value ?? 0) * 1000;
        return new Date(timestampNum);
      }
    case "duration":
      // Process Duration model from google protobuf
      if (toAmino) {
        const nanosBN = new BigNumber(value?.nanos ?? 0).shiftedBy(-6);
        const duration = (value?.duration ?? 0).toString();
        return nanosBN.plus(duration).toString(10);
      } else {
        const durationBN = NumberUtils.bnOrZero(value);
        const nanosBN = durationBN.modulo(new BigNumber(1).shiftedBy(-6));
        return {
          duration: new Long(durationBN.toNumber()),
          nanos: nanosBN.toNumber(),
        };
      }
    case "boolean":
    case "number":
    case "string":
    default:
      return value;
  }
};

export const generateAminoType = (amino: AminoInit): AminoConverter => {
  const valueMap = amino.valueMap ?? {}
  return {
    ...amino,
    toAmino: (input: TypeUtils.SimpleMap<any>) => {
      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(input).forEach((key: string) => {
        const snakeKey = TypeUtils.camelToSnake(key);
        if (typeof input[key] !== "object" && typeof valueMap[key] !== "object") {
          aminoObj[snakeKey] = paramConverter(input[key], valueMap[key] as SignDocType, true);
        } else {
          if (input[key]?.length && typeof input[key] === "object") {
            aminoObj[snakeKey] = input[key].map((newItem: any) => mapEachIndiv(newItem, valueMap[key] as TypeUtils.SimpleMap<SignDocType>, true));
            return;
          }
          aminoObj[snakeKey] = mapEachIndiv(input[key], valueMap[key] as TypeUtils.SimpleMap<SignDocType>, true);
        }
      });
      return aminoObj;
    },
    fromAmino: (input: TypeUtils.SimpleMap<any>) => {
      const aminoObj: TypeUtils.SimpleMap<any> = {};
      Object.keys(input).forEach((key: string) => {
        const camelKey = TypeUtils.snakeToCamel(key);
        if (typeof input[key] !== "object" && typeof valueMap[key] !== "object") {
          aminoObj[camelKey] = paramConverter(input[key], valueMap[camelKey] as SignDocType, false);
        } else {
          if (input[key]?.length && typeof input[key] === "object") {
            aminoObj[camelKey] = input[key].map((newItem: any) => mapEachIndiv(newItem, valueMap[key] as TypeUtils.SimpleMap<SignDocType>, false));
            return;
          }
          aminoObj[camelKey] = mapEachIndiv(input[key], valueMap[camelKey] as TypeUtils.SimpleMap<SignDocType>, false);
        }
      });
      return aminoObj;
    },
  };
};
