import { Network } from "@carbon-sdk/constant";
import Long from "long";

export interface SimpleMap<T = unknown> {
  [index: string]: T;
}

export interface NetworkMap<T> {
  [Network.MainNet]: T;
  [Network.TestNet]: T;
  [Network.DevNet]: T;
  [Network.LocalHost]: T;
}

export type OptionalNetworkMap<T> = Partial<NetworkMap<T>>;

/**
 * converts snakecase strings to camelcase
 * @param snakeStr string to convert to camelcase
 */
export const snakeToCamel = (snakeStr: string): string => {
  if (!snakeStr.includes("_")) {
    return snakeStr;
  }
  const camelArr = snakeStr.split("_").map((snakeItem: string, index: number) => {
    if (index === 0) {
      return snakeItem;
    }
    return snakeItem.length > 1 ? `${snakeItem[0].toUpperCase()}${snakeItem.substr(1)}` : snakeItem.toUpperCase();
  });
  return camelArr.join("");
};

/**
 * converts snakecase strings to camelcase
 * @param camelStr string to convert to camelcase
 */
export const camelToSnake = (camelStr: string): string => {
  if (camelStr.length <= 1) {
    return camelStr;
  }
  let newSnake = "";
  for (const letter of camelStr) {
    const newLetter = letter !== letter.toLowerCase() ? `_${letter.toLowerCase()}` : letter;
    newSnake = `${newSnake}${newLetter}`;
  }
  return newSnake;
};

export const isDurationType = (value: any): boolean => {
  return Long.isLong(value?.seconds) && typeof value?.nanos === "number";
};
