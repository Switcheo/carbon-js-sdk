import { Token } from "@carbon-sdk/codec";

export interface TokensWithExternalBalance extends Token {
  externalBalance: string
}

export interface TokenInitInfo {
  address: string
  decimals: number
  symbol: string
  name: string
}