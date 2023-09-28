import { Carbon } from "@carbon-sdk/CarbonSDK";

export interface TokensWithExternalBalance extends Carbon.Coin.Token {
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
