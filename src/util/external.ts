import { Coin } from "@carbon-sdk/codec/carbon-models";

export interface TokensWithExternalBalance extends Coin.Token {
  externalBalance: string;
}

export interface TokenInitInfo {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
}

// Detect device type
export function iOS() {
  return /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
