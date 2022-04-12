import { Token } from "@carbon-sdk/codec";
import { CoinGeckoTokenNames, CommonAssetName, NetworkConfigProvider, TokenBlacklist } from "@carbon-sdk/constant";
import { AssetData, ChainIds, totalAssetObj, ibcTokenRegex } from "@carbon-sdk/constant/ibc";
import { Network } from "@carbon-sdk/constant/network";
import { BlockchainUtils, FetchUtils, IBCUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { BN_ONE, BN_ZERO } from "@carbon-sdk/util/number";
import BigNumber from "bignumber.js";
import Long from "long";
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
  AVA1: 'AVA',
};

class TokenClient {
  public static Blacklist = TokenBlacklist;
  public readonly tokens: TypeUtils.SimpleMap<Token> = {};
  public readonly wrapperMap: TypeUtils.SimpleMap<string> = {};
  public readonly poolTokens: TypeUtils.SimpleMap<Token> = {};
  public readonly symbols: TypeUtils.SimpleMap<string> = {};
  public readonly usdValues: TypeUtils.SimpleMap<BigNumber> = {};
  public readonly commonAssetNames: TypeUtils.SimpleMap<string> = CommonAssetName;
  public readonly geckoTokenNames: TypeUtils.SimpleMap<string> = CoinGeckoTokenNames;

  private additionalGeckoDenoms: TypeUtils.SimpleMap<string> = {};

  private constructor(
    public readonly query: CarbonQueryClient,
    public readonly configProvider: NetworkConfigProvider,
  ) {
  }

  public static instance(query: CarbonQueryClient, configProvider: NetworkConfigProvider) {
    return new TokenClient(query, configProvider);
  }

  public async initialize(): Promise<void> {
    this.setCommonAssetConfig();
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
    return this.commonAssetNames[denom] ?? denom;
  }

  public getDecimals(denom: string): number | undefined {
    return (this.tokens[denom] ?? this.poolTokens[denom])?.decimals.toNumber();
  }

  public getBlockchain(denom: string): BlockchainUtils.Blockchain | undefined {
    // chainId defaults to 3 so that blockchain will be undefined
    let chainId = this.tokens[denom]?.chainId?.toNumber() ?? 3;
    if (this.isNativeToken(denom) || TokenClient.isPoolToken(denom)) {
      // native denom "swth" should be native.
      // pool tokens are on the Native blockchain, hence 0
      chainId = 0;
    }
    if (TokenClient.isIBCDenom(denom)) {
      return IBCUtils.BlockchainMap[denom];
    }

    const blockchain = BlockchainUtils.blockchainForChainId(chainId);
    return blockchain;
  }

  public getSymbol(denom: string): string {
    const commonDenom = this.getCommonDenom(denom);
    return this.symbols[commonDenom] ?? commonDenom.toUpperCase();
  }

  public getUSDValue(denom: string): BigNumber | undefined {
    const tokenId = this.tokenForDenom(denom)?.id;
    // Deal with tokens with id = "" on testnet/devnet/localhost
    const id = tokenId
      ? (tokenId !== "" ? tokenId : denom)
      : denom
    const commonDenom = this.getCommonDenom(id);
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

  public tokenForId(id: string): Token | undefined {
    return Object.values(this.tokens).find(token => token.id === id);
  }

  public tokenForDenom(denom: string): Token | undefined {
    return this.tokens[denom];
  }

  public async getFeeInfo(denom: string) {
    const config = this.configProvider.getConfig();
    const url = `${config.feeURL}/fees?denom=${denom}`
    const result = await fetch(url).then(res => res.json())

    return result;
  }

  public getTokenName(denom: string, overrideMap?: TypeUtils.SimpleMap<string>): string {
    if (typeof denom !== 'string') return '';
    if (!TokenClient.isIBCDenom(denom)) {
      denom = denom.toLowerCase();
    }

    const symbol = this.getSymbol(denom);
    if (TokenClient.isPoolTokenLegacy(denom)) {
      const match = symbol.match(/^([a-z\d.-\/]+)-(\d+)-([a-z\d.-\/]+)-(\d+)-lp\d+$/i);
      // inconsistent implementation of isPoolToken, exit
      if (match === null) return symbol;

      const denomA = match[1];
      const denomB = match[3];

      const symbolA = this.getTokenName(denomA);
      const symbolB = this.getTokenName(denomB);

      return `${symbolA}-${symbolB}`;
    }

    if (TokenClient.isIBCDenom(denom)) {
      const splitDenom = denom.split('/')
      denom = `${splitDenom[0].toLowerCase()}/${splitDenom[1].toUpperCase()}`
      return this.symbols[denom] ?? denom.toUpperCase()
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
    if (TokenClient.isPoolTokenLegacy(denom)) {
      const match = denom.match(/^([a-z\d.-\/]+)-(\d+)-([a-z\d.-\/]+)-(\d+)-lp\d+$/i);
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

  public static isPoolTokenNew(denom: string): boolean {
    return denom.match(/^clpt\/(\d+)$/i) !== null;
  }

  public static isPoolTokenLegacy(denom: string): boolean {
    return denom.match(/^([a-z\d.-]+)-(\d+)-([a-z\d.-]+)-(\d+)-lp\d+$/i) !== null;
  }

  public static isPoolToken(denom: string): boolean {
    return this.isPoolTokenNew(denom) || this.isPoolTokenLegacy(denom);
  }

  public static isIBCDenom(denom: string): boolean {
    return denom.match(ibcTokenRegex) !== null;
  }

  public isWrappedToken(denom?: string) {
    return !!this.wrapperMap[denom ?? ""];
  }
  public hasWrappedToken(denom?: string) {
    return Object.values(this.wrapperMap).includes(denom ?? "");
  }

  public getWrappedTokens(denom: string): Token[] {
    const result: Token[] = [];

    if (!this.tokens) return result;

    // check if denom is source token
    if (Object.values(this.wrapperMap).includes(denom)) {
      for (const [wrappedDenom, sourceDenom] of Object.entries(this.wrapperMap)) {
        // if mapping is not relevant to current source denom, skip.
        if (sourceDenom !== denom) {
          continue;
        }

        // add wrapped to result list
        const token = this.tokens[wrappedDenom];

        if (token) {
          result.push(token);
        }
      }
    }

    return result;
  }

  public getWrappedToken(denom: string, blockchain?: BlockchainUtils.Blockchain): Token | null {
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
        let tokenChain = BlockchainUtils.blockchainForChainId(token.chainId.toNumber());
        if (TokenClient.isIBCDenom(wrappedDenom)) {
          tokenChain = IBCUtils.BlockchainMap[wrappedDenom]
        }
        if (!blockchain || !tokenChain || tokenChain === blockchain) {
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

  public getNativeToken(): Token | undefined {
    return this.tokenForId("swth");
  }

  public isNativeToken(denom: string): boolean {
    return denom === "swth";
  }

  public getDepositTokenFor(tokenDenom: string, chain: BlockchainUtils.Blockchain): Token | undefined {
    const token = this.tokenForDenom(tokenDenom);
    if (!token) {
      console.error('getDepositTokenFor token not found for', tokenDenom)
      return
    }

    // check if selected token is a source token
    let targetChain = BlockchainUtils.blockchainForChainId(token.chainId.toNumber());
    if (TokenClient.isIBCDenom(token.denom)) {
      targetChain = IBCUtils.BlockchainMap[token.denom];
    }
    const isSourceToken = targetChain === chain
      && token.denom !== "swth";

    // if not source token find wrapped token for chain
    const depositToken = isSourceToken ? token : this.getWrappedToken(token.denom, chain)
    if (!depositToken) {
      console.error(`getDepositTokenFor wrapped token not found for "${token.denom}"`)
      return
    }

    return depositToken;
  }

  public async getAllTokens(): Promise<Token[]> {
    const result = await this.query.coin.TokenAll({
      pagination: {
        limit: new Long(10000),
        offset: Long.UZERO,
        key: new Uint8Array(),
        countTotal: false,
      },
    });

    const networkConfig = this.configProvider.getConfig();
    const tokenBlacklist = TokenBlacklist[networkConfig.network] ?? [];
    return result.tokens.filter(token => !tokenBlacklist.includes(token.denom));
  }

  public async reloadTokens(): Promise<TypeUtils.SimpleMap<Token>> {
    const tokenResponse = await this.getAllTokens();

    for (const token of tokenResponse) {
      if (TokenClient.isPoolToken(token.denom)) {
        this.poolTokens[token.denom] = token;
      } else {
        if (this.isNativeToken(token.denom)) {
          // Change token name to Carbon
          token.name = 'Carbon';
        }
        this.tokens[token.denom] = token;
        this.symbols[token.denom] = token.symbol;
      }
    }

    const networkConfig = this.configProvider.getConfig();
    if (networkConfig.network === Network.MainNet) {
      const symbolDenoms = Object.keys(this.symbols);
      const symbolMap = Object.values(this.symbols);
      const osmosisTokens = this.getOsmosisTokens();

      osmosisTokens.forEach((token: Token) => {
        const tokenSymbol = token.symbol.toLowerCase() === "swth" ? "swth" : token.symbol.toUpperCase();
        const index = symbolMap.indexOf(tokenSymbol);
        if (!this.tokens[token.denom])
          this.tokens[token.denom] = token;
        if (!this.symbols[token.denom])
          this.symbols[token.denom] = token.symbol;
        if (index > -1) {
          const similarDenom = symbolDenoms[index];
          if (similarDenom && !this.wrapperMap[token.denom] && similarDenom !== token.denom) {
            this.wrapperMap[token.denom] = similarDenom;
          }
        }
      });
    }

    return this.tokens;
  }

  public getOsmosisTokens(): Token[] {
    const tokensObj = totalAssetObj[ChainIds.Osmosis]
    const tokens = Object.values(tokensObj).map((asset: AssetData) => {
      let assetDenom = TokenClient.isIBCDenom(asset.base)
        ? asset.base
        : IBCUtils.makeIBCMinimalDenom("channel-0", asset.denom_units[0].denom ?? '') // for OSMO/ION token on osmo

      const assetDecimals = asset.denom_units[1]?.exponent ?? 0;
      return {
        id: asset.symbol.toLowerCase() === "swth" ? "swth.o.1" : asset.symbol.toLowerCase(), // use swth.o.1 as id because swth already has an id
        creator: "",
        denom: assetDenom,
        name: asset.name,
        symbol: asset.symbol.toUpperCase(),
        decimals: new Long(assetDecimals),
        bridgeId: new Long(BlockchainUtils.BRIDGE_IDS.ibc), // ibc = 2
        chainId: new Long(BlockchainUtils.CHAIN_IDS.osmo), // osmos = 26
        tokenAddress: "",
        bridgeAddress: "",
        isActive: true,
        isCollateral: false,
      };
    });
    return tokens;
  }

  public async reloadWrapperMap(): Promise<TypeUtils.SimpleMap<string>> {
    const mappingResponse = await this.query.coin.WrapperMappings({});
    Object.assign(this.wrapperMap, mappingResponse.wrapperMappings ?? {});
    return this.wrapperMap;
  }

  public async reloadUSDValues(denoms: string[] = Object.keys(this.tokens)): Promise<TypeUtils.SimpleMap<BigNumber>> {
    this.usdValues.iusd = BN_ONE;

    // flatten duplicate denoms
    const commonDenoms = denoms.reduce((accum, denom) => {
      if (TokenClient.isPoolToken(denom)) {
        return accum;
      }

      const tokenId = this.tokenForDenom(denom)?.id ?? "";
      const commonDenom = this.getCommonDenom(tokenId !== "" ? tokenId : denom);

      if (!accum[commonDenom]) {
        accum[commonDenom] = commonDenom;
      }

      return accum;
    }, {} as TypeUtils.SimpleMap);
    const coinIds = Object.keys(commonDenoms).map((denom) => this.geckoTokenNames[denom] ?? denom);

    const request = await FetchUtils.fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd`);
    const response = await request.json();

    for (const denom in commonDenoms) {
      const coinId = this.geckoTokenNames[denom];
      const price = NumberUtils.bnOrZero(response?.[coinId]?.usd);
      if (price?.gt(0)) {
        this.usdValues[denom] = price!;
      }
    }

    return this.usdValues;
  }

  public setCommonAssetConfig() {
    // For osmosis tokens
    const osmoTokenObj = totalAssetObj[ChainIds.Osmosis];
    Object.values(osmoTokenObj).forEach((asset: AssetData) => {
      const symbolSmall = asset.symbol.toLowerCase();
      const assetDenom = TokenClient.isIBCDenom(asset.base)
        ? asset.base
        : IBCUtils.makeIBCMinimalDenom("channel-0", asset.denom_units[0].denom ?? '') // for OSMO/ION token on osmo
      if (!this.commonAssetNames[assetDenom])
        this.commonAssetNames[assetDenom] = symbolSmall;
      if (!this.commonAssetNames[symbolSmall])
        this.commonAssetNames[symbolSmall] = symbolSmall;
      if (asset.coingecko_id && !this.geckoTokenNames[symbolSmall])
        this.geckoTokenNames[symbolSmall] = asset.coingecko_id;
    });
  }
}

export default TokenClient;
