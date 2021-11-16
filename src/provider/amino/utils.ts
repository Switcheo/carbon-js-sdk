import { NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import Long from "long";

type SignDocType = "string" | "long" | "dec";

export interface AminoInit {
  aminoType: string;
  valueMap: TypeUtils.SimpleMap<SignDocType>;
}

const directValueToAmino = (value: any, type?: SignDocType): unknown => {
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

const aminoValueToDirect = (value: any, type?: SignDocType): unknown => {
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

export const generateAminoType = (amino: AminoInit): AminoConverter => {
  const valueMap = amino.valueMap ?? {}
  return {
    ...amino,
    toAmino: (input: TypeUtils.SimpleMap<unknown>) => {
      const keysArr = Object.keys(input);
      const aminoObj: TypeUtils.SimpleMap<unknown> = {};
      keysArr.forEach((key: string) => {
        aminoObj[TypeUtils.camelToSnake(key)] = directValueToAmino(input[key], valueMap[key])
      });
      return aminoObj;
    },
    fromAmino: (input: TypeUtils.SimpleMap<unknown>) => {
      const keysArr = Object.keys(input);
      const aminoObj: TypeUtils.SimpleMap<unknown> = {};
      keysArr.forEach((key: string) => {
        const camelKey = TypeUtils.snakeToCamel(key)
        aminoObj[camelKey] = aminoValueToDirect(input[key], valueMap[camelKey])
      });
      return aminoObj;
    },
  };
};
