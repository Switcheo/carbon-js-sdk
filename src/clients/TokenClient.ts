import { Bridge, QueryTokenPriceAllResponse, Token, TokenPrice } from "@carbon-sdk/codec";
import { PageRequest } from '@carbon-sdk/codec/cosmos/base/query/v1beta1/pagination';
import { DenomTrace } from "@carbon-sdk/codec/ibc/applications/transfer/v1/transfer";
import { ClientState } from '@carbon-sdk/codec/ibc/lightclients/tendermint/v1/tendermint';
import {
  CoinGeckoTokenNames,
  CommonAssetName, decTypeDecimals, DenomPrefix,
  NetworkConfigProvider,
  TokenBlacklist, uscUsdValue,
} from "@carbon-sdk/constant";
import { cibtIbcTokenRegex, ibcTokenRegex, ibcWhitelist, swthChannels, cosmBridgeRegex } from "@carbon-sdk/constant/ibc";
import { publicRpcNodes } from "@carbon-sdk/constant/network";
import { FeeQuote } from "@carbon-sdk/hydrogen/feeQuote";
import { BlockchainUtils, FetchUtils, IBCUtils, NumberUtils, TypeUtils } from "@carbon-sdk/util";
import { BlockchainV2, BridgeMap, BRIDGE_IDS, IbcBridge, PolyNetworkBridge, isIbcBridge } from '@carbon-sdk/util/blockchain';
import { bnOrZero, BN_ONE, BN_ZERO } from "@carbon-sdk/util/number";
import { QueryClientImpl as IBCTransferQueryClient } from "@carbon-sdk/codec/ibc/applications/transfer/v1/query";
import { SimpleMap } from "@carbon-sdk/util/type";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { AppCurrency } from "@keplr-wallet/types";
import BigNumber from "bignumber.js";
import Long from "long";
import CarbonQueryClient from "./CarbonQueryClient";
import InsightsQueryClient from "./InsightsQueryClient";
import { QueryChannelsResponse } from "@carbon-sdk/codec/ibc/core/channel/v1/query";
import { QueryConnectionsResponse } from "@carbon-sdk/codec/ibc/core/connection/v1/query";
import { QueryClientStatesResponse } from "@carbon-sdk/codec/ibc/core/client/v1/query";

export interface DenomTraceExtended extends DenomTrace {
  token?: Token;
}

const SYMBOL_OVERRIDE: {
  [symbol: string]: string;
} = {
  swth: "SWTH",
  NNEO: "nNEO",
  YAM1: "YAM",
  YAM2: "YAM",
  ASA1: "ASA",
  ASA2: "ASA",
  DBC1: "DBC",
  DBC2: "DBC",
  AVA1: "AVA",
  TSWTH: "tSWTH",
  "cibStride Liquid Staked LUNA": "cibstLUNA",
};

const regexCdpDenom = RegExp(`^${DenomPrefix.CDPToken}/`, "i");
const regexLPDenom = RegExp(`^${DenomPrefix.LPToken}/(\\d+)$`, "i");

class TokenClient {
  public static Blacklist = TokenBlacklist;
  public readonly tokens: TypeUtils.SimpleMap<Token> = {};
  public readonly wrapperMap: TypeUtils.SimpleMap<string> = {};
  public readonly poolTokens: TypeUtils.SimpleMap<Token> = {};
  public readonly cdpTokens: TypeUtils.SimpleMap<Token> = {};
  public readonly bridges: BridgeMap = { polynetwork: [], ibc: [] };
  public readonly symbols: TypeUtils.SimpleMap<string> = {};
  public readonly usdValues: TypeUtils.SimpleMap<BigNumber> = {};
  public readonly commonAssetNames: TypeUtils.SimpleMap<string> = CommonAssetName;
  public readonly geckoTokenNames: TypeUtils.SimpleMap<string> = CoinGeckoTokenNames;

  // ibc apis
  public readonly denomTraces: TypeUtils.SimpleMap<DenomTraceExtended> = {};

  private additionalGeckoDenoms: TypeUtils.SimpleMap<string> = {};

  private constructor(public readonly query: CarbonQueryClient, public readonly configProvider: NetworkConfigProvider) { }

  public static instance(query: CarbonQueryClient, configProvider: NetworkConfigProvider) {
    return new TokenClient(query, configProvider);
  }

  public async initialize(): Promise<void> {
    this.setCommonAssetConfig();

    try {
      await Promise.all([
        this.reloadTokens(),
        this.reloadWrapperMap(),
        this.getBridges(),
      ]);
    } finally {
      // non-blocking reload
      try {
        this.reloadDenomGeckoMap().finally(() => {
          this.reloadUSDValues();
          this.reloadDenomTraces();
        });
      } catch (error) {
        console.error("failed to reload usd values");
        console.error(error);
      }
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

  public getBlockchain(denom: string): BlockchainUtils.Blockchain | BlockchainUtils.BlockchainV2 | undefined {
    const networkConfig = this.configProvider.getConfig();
    const tokenData = this.tokens[denom]

    // chainId defaults to 3 so that blockchain will be undefined
    let chainId = tokenData?.chainId?.toNumber() ?? 3;
    if (this.isNativeToken(denom) || this.isNativeStablecoin(denom) || TokenClient.isPoolToken(denom) || TokenClient.isCdpToken(denom)) {
      // native denoms "swth" and "usc" should be native.
      // pool and cdp tokens are on the Native blockchain, hence 0
      chainId = 0;
    }
    if (TokenClient.isIBCDenom(denom)) {
      return IBCUtils.BlockchainMap[denom];
    }

    const blockchain = BlockchainUtils.blockchainForChainId(chainId, networkConfig.network);
    return blockchain;
  }

  public getBlockchainV2(denom: string | undefined): BlockchainUtils.BlockchainV2 | undefined {
    if (!denom) return undefined
    let token = this.tokens[denom]
    if (this.isNativeToken(denom) || this.isNativeStablecoin(denom) || TokenClient.isPoolToken(denom) || TokenClient.isCdpToken(denom) || this.isGroupedToken(denom)) {
      // native denoms "swth" and "usc" should be native.
      // pool and cdp tokens are on the Native blockchain, hence 0
      return 'Native'
    }
    const bridge = this.getBridgeFromToken(token)
    return bridge?.chainName;
  }

  public getSymbol(denom: string): string {
    if (TokenClient.isCdpToken(denom)) {
      return this.symbols[denom] ?? denom;
    }
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
    let tokensList = Object.values(this.tokens);
    if (TokenClient.isPoolToken(id)) {
      tokensList = Object.values(this.poolTokens);
    } else if (TokenClient.isCdpToken(id)) {
      tokensList = Object.values(this.cdpTokens);
    }
    return tokensList.find((token) => token.id === id);
  }

  public tokenForDenom(denom: string): Token | undefined {
    return this.poolTokens[denom] ?? this.cdpTokens[denom] ?? this.tokens[denom];
  }

  public async getFeeInfo(denom: string): Promise<FeeQuote> {
    const config = this.configProvider.getConfig();
    const url = `${config.hydrogenUrl}/fee_quote?token_denom=${denom}`;
    const result = await fetch(url).then((res) => res.json());

    return result as FeeQuote;
  }

  public getTokenName(denom: string, overrideMap?: TypeUtils.SimpleMap<string>): string {
    if (typeof denom !== "string") return "";
    if (!TokenClient.isIBCDenom(denom) && !TokenClient.isCdpIbcDenom(denom)) {
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
      const splitDenom = denom.split("/");
      denom = `${splitDenom[0].toLowerCase()}/${splitDenom[1].toUpperCase()}`;
      return this.symbols[denom] ?? denom.toUpperCase();
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
    if (typeof denom !== "string") return "";
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
    return denom.match(regexLPDenom) !== null;
  }

  public static isPoolTokenLegacy(denom: string): boolean {
    return denom.match(/^([a-z\d.-]+)-(\d+)-([a-z\d.-]+)-(\d+)-lp\d+$/i) !== null;
  }

  public static isCdpToken(denom: string): boolean {
    return denom.match(regexCdpDenom) !== null;
  }

  public static isPoolToken(denom: string): boolean {
    return this.isPoolTokenNew(denom) || this.isPoolTokenLegacy(denom);
  }

  public static isIBCDenom(denom: string): boolean {
    return denom.match(ibcTokenRegex) !== null;
  }

  public static isCdpIbcDenom(denom: string): boolean {
    return cibtIbcTokenRegex.test(denom);
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

  public getWrappedToken(denom: string, blockchain?: BlockchainUtils.Blockchain | BlockchainUtils.BlockchainV2, version = 'V1'): Token | null {
    // if denom is already a wrapped denom or no blockchain was specified,
    // just return the input denom.
    if (this.wrapperMap[denom] || !blockchain) {
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
        let tokenChain: string | undefined = ''

        if (version === "V1") {
          tokenChain = BlockchainUtils.blockchainForChainId(token.chainId.toNumber());
          if (TokenClient.isIBCDenom(token.denom)) {
            tokenChain = IBCUtils.BlockchainMap[wrappedDenom];
          }
        } else {
          tokenChain = this.getBlockchainV2(token.denom);
        }
        if (!tokenChain) {
          continue; // unknown chain! just ignore this source token
        }
        if (tokenChain === blockchain) {
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

  public isGroupedToken(denom: string): boolean {
    const groupedTokenRegex = new RegExp(/^cgt\/\d+$/)
    return groupedTokenRegex.test(denom)
  }

  public isCarbonToken(token?: Token | null): boolean {
    return Boolean(token && (this.isNativeToken(token.denom) || token.bridgeId.eq(0)));
  }

  public getDepositTokenFor(tokenDenom: string, chain: BlockchainUtils.Blockchain | BlockchainUtils.BlockchainV2, version = "V1"): Token | undefined {
    const networkConfig = this.configProvider.getConfig();
    const token = this.tokenForDenom(tokenDenom);
    if (!token) {
      console.error("getDepositTokenFor token not found for", tokenDenom);
      return;
    }

    let targetChain: string | undefined = ""
    // check if selected token is a source token
    if (version === "V1") {
      targetChain = BlockchainUtils.blockchainForChainId(token.chainId.toNumber(), networkConfig.network);
      if (TokenClient.isIBCDenom(token.denom)) {
        targetChain = IBCUtils.BlockchainMap[token.denom];
      }
    } else {
      targetChain = this.getBlockchainV2(token.denom);
    }

    const isSourceToken = targetChain === chain && token.denom !== "swth";

    // if not source token find wrapped token for chain
    const depositToken = isSourceToken ? token : this.getWrappedToken(token.denom, chain, version);
    if (!depositToken) {
      console.error(`getDepositTokenFor wrapped token not found for "${token.denom}"`);
      return;
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
    return result.tokens.filter((token) => !tokenBlacklist.includes(token.denom));
  }

  public async reloadTokens(): Promise<TypeUtils.SimpleMap<Token>> {
    const tokenResponse = await this.getAllTokens();

    for (const token of tokenResponse) {
      if (TokenClient.isPoolToken(token.denom)) {
        this.poolTokens[token.denom] = token;
      } else if (TokenClient.isCdpToken(token.denom)) {
        this.cdpTokens[token.denom] = token;
        this.symbols[token.denom] = token.symbol;
      } else {
        if (this.isNativeToken(token.denom)) {
          // Change token name to Carbon
          token.name = "Carbon";
        }
        this.tokens[token.denom] = token;
        this.symbols[token.denom] = token.symbol;
      }
    }
    return this.tokens;
  }

  public async reloadDenomTraces(): Promise<TypeUtils.SimpleMap<DenomTraceExtended>> {
    const result = await this.query.ibc.transfer.DenomTraces({
      pagination: {
        limit: new Long(1000000),
        offset: Long.UZERO,
        key: new Uint8Array(),
        countTotal: false,
        reverse: false,
      },
    });
    result.denomTraces.forEach((denomTrace: DenomTrace) => {
      const ibcDenom = IBCUtils.makeIBCMinimalDenom(denomTrace.path, denomTrace.baseDenom);
      const token: Token | undefined = this.tokenForDenom(ibcDenom);
      this.denomTraces[ibcDenom] = {
        ...denomTrace,
        token,
      };
    });
    const swthTraces = await this.getCarbonDenomTraces();
    return { ...this.denomTraces, ...swthTraces };
  }

  public getDenomTraceData(denom: string): DenomTrace | undefined {
    return this.denomTraces[denom];
  }

  public async getBridges(): Promise<BridgeMap> {
    const allBridges = await this.query.coin.BridgeAll({
      pagination: {
        key: new Uint8Array(),
        limit: new Long(10000),
        offset: Long.UZERO,
        countTotal: true,
        reverse: false,
      },
    })
    const unmatchedIbcBridgeList = allBridges.bridges.filter(bridge => {
      if (!bridge.enabled) return
      return bridge.bridgeId.toNumber() === BRIDGE_IDS.ibc
    })
    const ibcBridges = await this.matchChainsWithDifferentChainIds(unmatchedIbcBridgeList)
    const polynetworkBridges = allBridges.bridges.reduce((prev: PolyNetworkBridge[], bridge: Bridge) => {
      if (bridge.bridgeId.toNumber() !== BRIDGE_IDS.polynetwork) return prev;
      prev.push({
        ...bridge,
        isEvmChain: BlockchainUtils.isEvmChain(bridge.chainName),
      } as PolyNetworkBridge)
      return prev;
    }, [])
    Object.assign(this.bridges, {
      polynetwork: polynetworkBridges,
      ibc: ibcBridges
    })
    return this.bridges
  }

  async matchChainsWithDifferentChainIds(bridges: Bridge[]): Promise<IbcBridge[]> {
    let newBridges: IbcBridge[] = []
    try {
      const pagination = PageRequest.fromPartial({ limit: new Long(1e6) });

      const results: [
        QueryChannelsResponse,
        QueryConnectionsResponse,
        QueryClientStatesResponse,
      ] = await Promise.all([
        this.query.ibc.channel.Channels({ pagination }),
        this.query.ibc.connection.Connections({ pagination }),
        this.query.ibc.client.ClientStates({ pagination }),
      ]);

      const [{ channels }, { connections }, { clientStates: rawClientStates }] = results;

      const clientStates = rawClientStates.map(s => ({
        clientState: ClientState.decode(s.clientState!.value),
        clientId: s.clientId,
      }));

      newBridges = bridges.map(bridge => {
        const connection = channels.find(channel => channel.channelId === ("channel-" + (bridge.chainId.toNumber() - 1)))
        const connectionId = connection?.connectionHops[0]
        const src_channel = connection?.channelId ?? ""
        const dst_channel = connection?.counterparty?.channelId ?? ""
        const cosmRegexArr = connection?.counterparty?.portId?.match(cosmBridgeRegex)
        const portId = cosmRegexArr?.[1] ?? "transfer";
        const clientId = connections.find(connection => connection.id === connectionId)?.clientId
        const chainIdName = (clientStates.find(client => client.clientId === clientId)?.clientState)?.chainId
        return { ...bridge, chain_id_name: chainIdName ?? "", channels: { src_channel, dst_channel, port_id: portId } }
      })
    } finally {
      const checkedBefore = new Array(newBridges.length).fill(false)
      const chainMap: SimpleMap<string> = {}

      for (let i = 0; i < newBridges.length; i++) {
        if (checkedBefore[i]) continue

        const bridge = newBridges[i]
        const chainId = bridge.chain_id_name

        if (chainMap[chainId]) {
          const chainName = chainMap[chainId]

          for (let j = i; j < newBridges.length; j++) {
            const subBridge = newBridges[j]

            if (subBridge.chain_id_name === chainId) {
              subBridge.chainName = chainName
              checkedBefore[j] = true
            }
          }
        } else {
          chainMap[chainId] = bridge.chainName
        }
      }
      return newBridges
    }
  }

  public getIbcBlockchainNames(): string[] {
    return this.bridges.ibc.map(bridge => bridge.chainName)
  }

  public getIbcChainFromBlockchainV2 = (blockchain: BlockchainV2 | undefined): string | undefined => {
    const ibcBridge = this.bridges.ibc.find(bridge => (bridge.chainName === blockchain || bridge.chainName.toLowerCase() === blockchain));
    return ibcBridge?.chain_id_name;
  };

  public getPolynetworkBlockchainNames(): string[] {
    return this.bridges.polynetwork.map(bridge => bridge.chainName)
  }

  public getAllBlockchainNames(): string[] {
    return this.getIbcBlockchainNames().concat(this.getPolynetworkBlockchainNames())
  }

  public getBridgesFromBridgeId(bridgeId: number): Bridge[] | IbcBridge[] {
    switch (bridgeId) {
      case BRIDGE_IDS.polynetwork:
        return this.bridges.polynetwork
      case BRIDGE_IDS.ibc:
        return this.bridges.ibc
      default:
        return this.bridges.polynetwork
    }
  }

  public getIbcTokens(): TypeUtils.SimpleMap<Token> {
    const ibcTokens = Object.values(this.tokens).reduce((prev: TypeUtils.SimpleMap<Token>, token: Token) => {
      const newPrev = prev
      if (token.bridgeId.toNumber() === BRIDGE_IDS.ibc) {
        newPrev[token.denom] = token
      }
      return newPrev
    }, {})
    return ibcTokens
  }

  public getPolyNetworkTokens(): TypeUtils.SimpleMap<Token> {
    const polynetworkTokens = Object.values(this.tokens).reduce((prev: TypeUtils.SimpleMap<Token>, token: Token) => {
      const newPrev = prev
      if (token.bridgeId.toNumber() === BRIDGE_IDS.polynetwork) {
        newPrev[token.denom] = token
      }
      return newPrev
    }, {})
    return polynetworkTokens
  }

  public getBlockchainV2FromIDs(chainId: string, bridgeId: string): BlockchainV2 | undefined {
    const chainIdNum = Number(chainId)
    const bridgeIdNum = Number(bridgeId)
    if ((chainIdNum === 5 && bridgeIdNum === 1) || (chainIdNum === 0 && bridgeIdNum === 2)) return "Carbon"
    const bridgeList = this.getBridgesFromBridgeId(bridgeIdNum)
    return bridgeList.find(bridge => bridge.chainId.toNumber() === chainIdNum)?.chainName ?? undefined
  }

  public getBridgeFromToken(token: Token | null): Bridge | IbcBridge | undefined {
    if (!token || !token.bridgeId) return undefined
    const bridgeList = this.getBridgesFromBridgeId(token.bridgeId.toNumber())
    return bridgeList.find(bridge => token.chainId.equals(bridge.chainId))
  }

  public getIbcChainIdFromToken(token: Token | null): string | undefined {
    if (!token) return undefined
    const bridge = this.getBridgeFromToken(token)
    if (!bridge || !isIbcBridge(bridge)) return undefined
    return bridge.chain_id_name
  }

  public async getCarbonDenomTraces(): Promise<TypeUtils.SimpleMap<DenomTrace>> {
    // get swth on osmosis
    const osmoTmClient = await Tendermint34Client.connect(publicRpcNodes.Osmosis);
    const osmoClient = new QueryClient(osmoTmClient);
    const osmosRpcClient = createProtobufRpcClient(osmoClient);
    const osmoIbcClient = new IBCTransferQueryClient(osmosRpcClient);
    const osmoDenomTraces = await osmoIbcClient.DenomTraces({
      pagination: PageRequest.fromPartial({
        limit: new Long(1000000),
      }),
    });

    const osmoSwthDenomTrace = osmoDenomTraces.denomTraces.filter((trace: DenomTrace) => {
      return trace.baseDenom === "swth";
    });
    return osmoSwthDenomTrace.reduce((prev: TypeUtils.SimpleMap<DenomTrace>, trace: DenomTrace) => {
      const coinMinimalDenom = IBCUtils.makeIBCMinimalDenom(trace.path, trace.baseDenom);
      const token: Token | undefined = this.tokenForDenom(coinMinimalDenom) ?? this.tokenForDenom(trace.baseDenom);
      const traceExtended: DenomTraceExtended = { ...trace, token };
      this.denomTraces[coinMinimalDenom] = traceExtended;
      prev[coinMinimalDenom] = traceExtended;
      return prev;
    }, {});
  }

  public getCdpUnderlyingToken(cdpDenom: string) {
    if (!this.cdpTokens[cdpDenom]) {
      console.error("not a CDP denom");
      return undefined;
    }
    const tokenDenom = cdpDenom.replace(regexCdpDenom, "");
    if (TokenClient.isPoolToken(tokenDenom)) {
      return this.poolTokens[tokenDenom];
    }

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
      // To ensure that ibc denoms are not added to the gecko ids list, the default is removed.
      const geckoId = this.geckoTokenNames[denom];

      if (geckoId && !coinIds.includes(geckoId)) {
        coinIds.push(geckoId);
      }
      return coinIds;
    }, [] as string[]);

    const geckoIdToUsdPriceMap = await this.getUSDValuesFromCoinGecko(geckoIds);
    const carbonTokenPrices = await this.getUSDValuesFromPricingModule();
    const uscStablecoin = this.getNativeStablecoin();

    // add carbon token prices first
    Object.entries(carbonTokenPrices).forEach(([key, value]: [string, BigNumber]) => {
      this.usdValues[key] = value;
    });

    //store price based on denoms
    for (const denom of denoms) {
      // if token price in pricing module exists for denom, return that as usd price first
      // else check coingecko
      if (this.usdValues[denom]) continue;

      const coinId = this.geckoTokenNames[denom] ?? denom;
      const price = NumberUtils.bnOrZero(geckoIdToUsdPriceMap?.[coinId]?.usd)!;
      if (price.gt(0)) {
        // if denom is usc, then return uscUsdValue, else return coingecko usd price
        this.usdValues[denom] = denom === uscStablecoin?.denom ? uscUsdValue : price;
      }
    }
    return this.usdValues;
  }

  async getUSDValuesFromCoinGecko(geckoIds: string[]) {
    const response = await FetchUtils.fetch(`https://coingecko-proxy.dem.exchange/api/v3/simple/price?ids=${geckoIds.join(",")}&vs_currencies=usd`);
    return await response.json();
  }

  processTokenPrices(tokenPrices: TokenPrice[]) {
    return tokenPrices.reduce((prevPrices: TypeUtils.SimpleMap<BigNumber>, price: TokenPrice) => {
      const newPrev = prevPrices;
      newPrev[price.denom] = bnOrZero(price.twap).shiftedBy(-decTypeDecimals);
      return newPrev;
    }, {});
  }

  async getUSDValuesFromPricingModule() {
    const initTokenPrices = await this.query.pricing.TokenPriceAll({
      pagination: {
        limit: new Long(10000),
        offset: new Long(0),
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    }) as QueryTokenPriceAllResponse;
    if (initTokenPrices.pagination?.total && initTokenPrices.pagination?.total.lt(10000)) {
      const tokenPricesMap = this.processTokenPrices(initTokenPrices.tokenPrices);
      return tokenPricesMap;
    }

    const fullTokenPrices = await this.query.pricing.TokenPriceAll({
      pagination: {
        limit: initTokenPrices.pagination?.total ?? new Long(0),
        offset: new Long(0),
        key: new Uint8Array(),
        countTotal: true,
        reverse: false,
      },
    }) as QueryTokenPriceAllResponse;
    return this.processTokenPrices(fullTokenPrices.tokenPrices);
  }

  async getDenomToGeckoIdMap(): Promise<TypeUtils.SimpleMap<string>> {
    const networkConfig = this.configProvider.getConfig();
    const insights = new InsightsQueryClient(networkConfig);
    let tokens: SimpleMap<string> = {};
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
      const channelObj = swthChannels[chainId]?.ibc;
      currencies.forEach((asset: AppCurrency) => {
        const channel =
          asset.coinMinimalDenom !== "swth" ? channelObj?.sourceChannel ?? "channel-0" : channelObj?.dstChannel ?? "channel-0";
        const assetDenom = TokenClient.isIBCDenom(asset.coinMinimalDenom)
          ? asset.coinMinimalDenom
          : IBCUtils.makeIBCMinimalDenom(channel, asset.coinMinimalDenom);
        const symbolSmall = asset.coinDenom.toLowerCase();
        if (!this.commonAssetNames[assetDenom]) this.commonAssetNames[assetDenom] = symbolSmall;
        if (asset.coinGeckoId && !this.geckoTokenNames[symbolSmall]) this.geckoTokenNames[symbolSmall] = asset.coinGeckoId;
      });
    });
  }
}

export default TokenClient;
