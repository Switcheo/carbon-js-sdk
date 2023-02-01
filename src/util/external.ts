import { Token } from "@carbon-sdk/codec";

export interface TokensWithExternalBalance extends Token {
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
