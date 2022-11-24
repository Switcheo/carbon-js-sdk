import { Token } from "@carbon-sdk/codec";
import { CoinGeckoTokenNames, CommonAssetName, NetworkConfigProvider, TokenBlacklist } from "@carbon-sdk/constant";
import { ibcTokenRegex, ibcWhitelist, swthChannels, swthIbcWhitelist } from "@carbon-sdk/constant/ibc";
import { Network } from "@carbon-sdk/constant/network";
import { FeeQuote } from "@carbon-sdk/hydrogen/feeQuote";
import KeplrAccount from "@carbon-sdk/provider/keplr/KeplrAccount";
import { BlockchainUtils, FetchUtils, IBCUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { AppCurrency } from "@keplr-wallet/types";
import { BN_ONE, BN_ZERO } from "@carbon-sdk/util/number";
import BigNumber from "bignumber.js";
import Long from "long";
import CarbonQueryClient from "./CarbonQueryClient";
import InsightsQueryClient from "./InsightsQueryClient";
import { SimpleMap } from "@carbon-sdk/util/type";

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
  TSWTH: 'tSWTH',
};

class TokenClient {
  public static Blacklist = TokenBlacklist;
  public readonly tokens: TypeUtils.SimpleMap<Token> = {};
  public readonly wrapperMap: TypeUtils.SimpleMap<string> = {};
  public readonly poolTokens: TypeUtils.SimpleMap<Token> = {};
  public readonly cdpTokens: TypeUtils.SimpleMap<Token> = {};
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
    await this.reloadDenomGeckoMap();

    // non-blocking reload
    try {
      this.reloadUSDValues();
    } catch (error) {
      console.error("failed to reload usd values");
      console.error(error);
    }
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
    return (this.tokens[denom] ?? this.poolTokens[denom] ?? this.cdpTokens[denom])?.decimals.toNumber();
  }

  public getBlockchain(denom: string): BlockchainUtils.Blockchain | undefined {
    // chainId defaults to 3 so that blockchain will be undefined
    let chainId = this.tokens[denom]?.chainId?.toNumber() ?? 3;
    if (this.isNativeToken(denom) || this.isNativeStablecoin(denom) || TokenClient.isPoolToken(denom) || TokenClient.isCdpToken(denom)) {
      // native denoms "swth" and "usc" should be native.
      // pool and cdp tokens are on the Native blockchain, hence 0
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
    return this.usdValues[denom];
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

  public async getFeeInfo(denom: string): Promise<FeeQuote> {
    const config = this.configProvider.getConfig();
    const url = `${config.hydrogenUrl}/fee_quote?token_denom=${denom}`
    const result = await fetch(url).then(res => res.json())

    return result as FeeQuote;
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

    if (TokenClient.isCdpToken(denom)) {
      return this.cdpTokens[denom]?.name ?? this.getSymbol(denom);
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

  public static isCdpToken(denom: string): boolean {
    return denom.includes('cibt/');
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

  public getNativeStablecoin(): Token | undefined {
    return this.tokenForId("usc");
  }

  public isNativeToken(denom: string): boolean {
    return denom === "swth";
  }

  public isNativeStablecoin(denom: string): boolean {
    return denom === "usc";
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
        reverse: false,
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
      } else if (TokenClient.isCdpToken(token.denom)) {
        this.cdpTokens[token.denom] = token;
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
      const carbonIbc = this.getCarbonIbcTokens();

      carbonIbc.forEach((token: Token) => {
        const index = symbolMap.indexOf("swth");
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

  public getCarbonIbcTokens(): Token[] {
    const swthTokens = swthIbcWhitelist.map((chainId: string) => {
      const blockchain = IBCUtils.BlockchainMap[chainId]
      const carbonBlockchain = IBCUtils.ChainIdBlockchainMap[blockchain ?? ''];
      const blockchainNum = BlockchainUtils.CHAIN_IDS[carbonBlockchain ?? ''] ?? 0
      const swthChannel = swthChannels[chainId]
      const assetDenom = IBCUtils.makeIBCMinimalDenom(swthChannel.dstChannel ?? "channel-0", KeplrAccount.SWTH_CURRENCY.coinMinimalDenom);
      return {
        id: assetDenom,
        creator: "",
        denom: assetDenom,
        name: "Carbon",
        symbol: KeplrAccount.SWTH_CURRENCY.coinDenom,
        decimals: new Long(KeplrAccount.SWTH_CURRENCY.coinDecimals),
        bridgeId: new Long(BlockchainUtils.BRIDGE_IDS.ibc), // ibc = 2
        chainId: new Long(blockchainNum),
        tokenAddress: "",
        bridgeAddress: "",
        isActive: true,
        isCollateral: false,
      };
    });
    return swthTokens;
  }

  public getCdpUnderlyingToken(cdpDenom: string) {
    if (!this.cdpTokens[cdpDenom])
      throw new Error("not a CDP denom");
    const tokenDenom = cdpDenom.replace(/^cdp\//i, "");
    return this.tokenForDenom(tokenDenom);
  }

  public async reloadWrapperMap(): Promise<TypeUtils.SimpleMap<string>> {
    const mappingResponse = await this.query.coin.WrapperMappings({});
    Object.assign(this.wrapperMap, mappingResponse.wrapperMappings ?? {});
    return this.wrapperMap;
  }

  public async reloadDenomGeckoMap() {
    const geckoTokensDenomToCoinIdMap = (await this.getDenomToGeckoIdMap()) as TypeUtils.SimpleMap<string>;

    for (const geckoDenom in geckoTokensDenomToCoinIdMap) {
      this.geckoTokenNames[geckoDenom] = geckoTokensDenomToCoinIdMap[geckoDenom];
    }
  }

  public async reloadUSDValues(denoms: string[] = Object.keys(this.tokens)): Promise<TypeUtils.SimpleMap<BigNumber>> {
    this.usdValues.iusd = BN_ONE;

    //Get corresponding geckoId for denoms and removes any duplicated geckoIds (espeically for different wrapped tokens as they correspond to the same geckoId(same price))
    const geckoIds = denoms.reduce((coinIds, denom) => {
      const geckoId = this.geckoTokenNames[denom] ?? denom;

      if (geckoId && !coinIds.includes(geckoId)) {
        coinIds.push(geckoId);
      }
      return coinIds;
    }, [] as string[]);

    const geckoIdToUsdPriceMap = await this.getUSDValuesFromCoinGecko(geckoIds);

    //store price based on denoms
    for (const denom of denoms) {
      const coinId = this.geckoTokenNames[denom] ?? denom;
      const price = NumberUtils.bnOrZero(geckoIdToUsdPriceMap?.[coinId]?.usd)!;
      if (price.gt(0)) {
        this.usdValues[denom] = price;
      }
    }
    return this.usdValues;
  }

  async getUSDValuesFromCoinGecko(geckoIds: string[]) {
    const response = await FetchUtils.fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join(",")}&vs_currencies=usd`);
    return await response.json();
  }

  async getDenomToGeckoIdMap(): Promise<TypeUtils.SimpleMap<string>> {
    const networkConfig = this.configProvider.getConfig();
    const insights = new InsightsQueryClient(networkConfig);
    let tokens : SimpleMap<string> = {};
    try {
      const response = await insights.DenomToGeckoIdMap();
      tokens = response.result.gecko;
    } catch (err) {
      throw new Error((err as Error).message ?? "Unknown gecko query error");
    } finally {
      return tokens;
    }
  }

  public setCommonAssetConfig() {
    // whitelisted ibc tokens
    ibcWhitelist.forEach((chainId: string) => {
      const currencies = IBCUtils.EmbedChainInfos[chainId].currencies;
      const channelObj = swthChannels[chainId]
      currencies.forEach((asset: AppCurrency) => {
        const channel = asset.coinMinimalDenom !== "swth"
          ? (channelObj?.sourceChannel ?? "channel-0")
          : (channelObj?.dstChannel ?? "channel-0");
        const assetDenom = TokenClient.isIBCDenom(asset.coinMinimalDenom)
          ? asset.coinMinimalDenom
          : IBCUtils.makeIBCMinimalDenom(channel, asset.coinMinimalDenom);
        const symbolSmall = asset.coinDenom.toLowerCase();
        if (!this.commonAssetNames[assetDenom])
          this.commonAssetNames[assetDenom] = symbolSmall;
        if (asset.coinGeckoId && !this.geckoTokenNames[symbolSmall])
          this.geckoTokenNames[symbolSmall] = asset.coinGeckoId;
      })
    });
  }
}

export default TokenClient;
