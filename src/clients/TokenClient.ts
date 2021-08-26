import { Token } from "@carbon-sdk/codec";
import { CoinGeckoTokenNames, CommonAssetName } from "@carbon-sdk/constant";
import { BlockChainUtils, FetchUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { BN_ZERO } from "@carbon-sdk/util/number";
import BigNumber from "bignumber.js";
import CarbonQueryClient from "./CarbonQueryClient";

const SYMBOL_OVERRIDE: {
  [symbol: string]: string
} = {
  swth: 'SWTH',
  NNEO: 'nNEO',
  YAM1: 'YAM',
  YAM2: 'YAM',
  ASA1: 'ASA',
  ASA2: 'ASA',
  DBC1: 'DBC',
  DBC2: 'DBC',
};

class TokenClient {
  public readonly tokens: TypeUtils.SimpleMap<Token> = {};
  public readonly wrapperMap: TypeUtils.SimpleMap<string> = {};
  public readonly poolTokens: TypeUtils.SimpleMap<Token> = {};
  public readonly symbols: TypeUtils.SimpleMap<string> = {};
  public readonly usdValues: TypeUtils.SimpleMap<BigNumber> = {};

  private additionalGeckoDenoms: TypeUtils.SimpleMap<string> = {};

  private constructor(
    public readonly query: CarbonQueryClient,
  ) {
  }

  public static instance(query: CarbonQueryClient) {
    return new TokenClient(query);
  }

  public async initialize(): Promise<void> {
    await this.reloadWrapperMap();
    await this.reloadTokens();
    await this.reloadUSDValues();
  }

  public registerGeckoIdMap(map: TypeUtils.SimpleMap<string>) {
    this.additionalGeckoDenoms = {
      ...this.additionalGeckoDenoms,
      ...map,
    };
  }

  public getCommonDenom(denom: string): string {
    return CommonAssetName[denom] ?? denom;
  }

  public getDecimals(denom: string): number | undefined {
    return (this.tokens[denom] ?? this.poolTokens[denom])?.decimals.toNumber();
  }

  public getSymbol(denom: string): string {
    const commonDenom = this.getCommonDenom(denom);
    return this.symbols[commonDenom] ?? commonDenom.toUpperCase();
  }

  public getUSDValue(denom: string): BigNumber | undefined {
    const commonDenom = this.getCommonDenom(denom);
    return this.usdValues[commonDenom];
  }

  public toHuman(denom: string, unitlessAmt: BigNumber): BigNumber {
    const decimals = this.getDecimals(denom);
    return NumberUtils.toHuman(unitlessAmt, decimals) ?? BN_ZERO;
  }

  public toUnitless(denom: string, humanAmt: BigNumber): BigNumber {
    const decimals = this.getDecimals(denom);
    return NumberUtils.toUnitless(humanAmt, decimals) ?? BN_ZERO;
  }

  public getTokenName(denom: string, overrideMap?: TypeUtils.SimpleMap<string>): string {
    if (typeof denom !== 'string') return '';
    denom = denom.toLowerCase();

    const symbol = this.getSymbol(denom);
    if (TokenClient.isPoolToken(denom)) {
      const match = symbol.match(/^([a-z\d.-]+)-(\d+)-([a-z\d.-]+)-(\d+)-lp\d+$/i);
      // inconsistent implementation of isPoolToken, exit
      if (match === null) return symbol;

      const denomA = match[1];
      const denomB = match[3];

      const symbolA = this.getTokenName(denomA);
      const symbolB = this.getTokenName(denomB);

      return `${symbolA}-${symbolB}`;
    }

    if (SYMBOL_OVERRIDE[symbol]) {
      return SYMBOL_OVERRIDE[symbol];
    }

    if (overrideMap?.[symbol]) {
      return overrideMap[symbol];
    }

    return symbol;
  }

  public getTokenDesc(denom: string) {
    if (typeof denom !== 'string') return '';
    denom = denom.toLowerCase();

    if (TokenClient.isPoolToken(denom)) {
      const match = denom.match(/^([a-z\d.-]+)-(\d+)-([a-z\d.-]+)-(\d+)-lp\d+$/i);
      // inconsistent implementation of isPoolToken, exit
      if (match === null) return this.getSymbol(denom);

      const denomA = match[1];
      const weightA = match[2];
      const denomB = match[3];
      const weightB = match[4];

      const symbolA = this.getTokenName(denomA);
      const symbolB = this.getTokenName(denomB);

      return `${weightA}% ${symbolA} / ${weightB}% ${symbolB}`;
    }

    return this.tokens[denom]?.name ?? this.getSymbol(denom);
  }

  public static isPoolToken(denom: string): boolean {
    return denom.match(/^([a-z\d.-]+)-(\d+)-([a-z\d.-]+)-(\d+)-lp\d+$/i) !== null;
  }

  public getWrappedToken(denom: string, blockchain?: BlockChainUtils.Blockchain): Token | null {
    // check if denom is wrapped token
    if (this.wrapperMap[denom]) {
      return this.tokens[denom];
    }

    // check if denom is source token
    if (Object.values(this.wrapperMap).includes(denom)) {
      for (const [wrappedDenom, sourceDenom] of Object.entries(this.wrapperMap)) {
        // if mapping is not relevant to current source denom, skip.
        if (sourceDenom !== denom) {
          continue;
        }

        // check if wrapped denom is of correct blockchain
        const token = this.tokens[wrappedDenom];
        if (!blockchain || token?.blockchain === blockchain) {
          return token;
        }
      }
    }

    return null;
  }

  public getSourceToken(denom: string): Token | null {
    // check if denom is source token
    if (Object.values(this.wrapperMap).includes(denom)) {
      return this.tokens[denom];
    }

    // check if denom is wrapped token
    if (this.wrapperMap[denom]) {
      const sourceDenom = this.wrapperMap[denom];
      return this.tokens[sourceDenom];
    }

    return null;
  }

  public async reloadTokens(): Promise<TypeUtils.SimpleMap<Token>> {
    const tokenResponse = await this.query.coin.TokenAll({});

    for (const token of tokenResponse.tokens) {
      if (TokenClient.isPoolToken(token.denom)) {
        this.poolTokens[token.denom] = token;
      } else {
        this.tokens[token.denom] = token;

        if (!this.wrapperMap[token.denom]) {
          const commonDenom = CommonAssetName[token.denom] ?? token.denom;
          this.symbols[commonDenom] = token.symbol;
        }
      }
    }

    return this.tokens;
  }

  public async reloadWrapperMap(): Promise<TypeUtils.SimpleMap<string>> {
    const mappingResponse = await this.query.coin.WrapperMappings({});
    Object.assign(this.wrapperMap, mappingResponse.WrapperMappings ?? {});
    return this.wrapperMap;
  }

  public async reloadUSDValues(denoms: string[] = Object.keys(this.tokens)): Promise<TypeUtils.SimpleMap<BigNumber>> {
    // flatten duplicate denoms
    const commonDenoms = denoms.reduce((accum, denom) => {
      if (TokenClient.isPoolToken(denom)) {
        return accum;
      }

      const commonDenom = CommonAssetName[denom] ?? denom;

      if (!accum[commonDenom]) {
        accum[commonDenom] = commonDenom;
      }

      return accum;
    }, {} as TypeUtils.SimpleMap);
    const coinIds = Object.keys(commonDenoms).map((denom) => CoinGeckoTokenNames[denom] ?? denom);

    const request = await FetchUtils.fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd`);
    const response = await request.json();

    for (const denom in commonDenoms) {
      const coinId = CoinGeckoTokenNames[denom];
      const price = NumberUtils.bnOrZero(response?.[coinId]?.usd);
      if (price?.gt(0)) {
        this.usdValues[denom] = price!;
      }
    }

    return this.usdValues;
  }
}

export default TokenClient;
