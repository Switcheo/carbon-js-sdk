import { NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import Long from "long";

type SignDocType = "string" | "long" | "dec" | "default";

export interface AminoInit {
  aminoType: string;
  valueMap: TypeUtils.SimpleMap<SignDocType | TypeUtils.SimpleMap<SignDocType>>;
}

const indivDirectToAmino = (value: any, type: SignDocType): unknown => {
  switch (type) {
    case "dec":
      return NumberUtils.bnOrZero(value).shiftedBy(-18).toString(10);
    case "long":
      return value.toString(10);
    case "string":
    default:
      return value;
  }
};

const mapEachIndivDirect = (indivDirect: TypeUtils.SimpleMap<any>, valueKey: TypeUtils.SimpleMap<SignDocType>) => {
  const indivDirectKeys = Object.keys(indivDirect) ?? [];
  const directMap: TypeUtils.SimpleMap<any> = {};
  indivDirectKeys.forEach((key: string) => {
    const snakeKey = TypeUtils.camelToSnake(key);
    directMap[snakeKey] = indivDirectToAmino(indivDirect[key], valueKey[key]);
  });
  return directMap;
};

const aminoValueToDirect = (value: any, type: SignDocType): unknown => {
  switch (type) {
    case "dec":
      return NumberUtils.bnOrZero(value).shiftedBy(18).toString(10);
    case "long":
      return new Long(value);
    case "string":
    default:
      return value;
  }
};

const mapEachIndivAmino = (indivDirect: TypeUtils.SimpleMap<any>, valueKey: TypeUtils.SimpleMap<SignDocType>) => {
  const indivDirectKeys = Object.keys(indivDirect) ?? [];
  const directMap: TypeUtils.SimpleMap<any> = {};
  indivDirectKeys.forEach((key: string) => {
    const camelKey = TypeUtils.snakeToCamel(key);
    directMap[camelKey] = aminoValueToDirect(indivDirect[key], valueKey[camelKey]);
  });
  return directMap;
};

export const generateAminoType = (amino: AminoInit): AminoConverter => {
  const valueMap = amino.valueMap ?? {}
  return {
    ...amino,
    toAmino: (input: TypeUtils.SimpleMap<any>) => {
      const keysArr = Object.keys(input);
      const aminoObj: TypeUtils.SimpleMap<any> = {};
      keysArr.forEach((key: string) => {
        if (typeof input[key] !== "object" && typeof valueMap[key] !== "object") {
          aminoObj[TypeUtils.camelToSnake(key)] = indivDirectToAmino(input[key], valueMap[key] as SignDocType);
        } else {
          aminoObj[TypeUtils.camelToSnake(key)] = mapEachIndivDirect(input[key], valueMap[key] as TypeUtils.SimpleMap<SignDocType>);
        }
      });
      return aminoObj;
    },
    fromAmino: (input: TypeUtils.SimpleMap<any>) => {
      const keysArr = Object.keys(input);
      const aminoObj: TypeUtils.SimpleMap<any> = {};
      keysArr.forEach((key: string) => {
        const camelKey = TypeUtils.snakeToCamel(key);
        if (typeof input[key] !== "object" && typeof valueMap[key] !== "object") {
          aminoObj[camelKey] = aminoValueToDirect(input[key], valueMap[camelKey] as SignDocType);
        } else {
          aminoObj[camelKey] = mapEachIndivAmino(input[key], valueMap[camelKey] as TypeUtils.SimpleMap<SignDocType>);
        }
      });
      return aminoObj;
    },
  };
};
