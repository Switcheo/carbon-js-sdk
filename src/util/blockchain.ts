import { TokenClient } from '@carbon-sdk/clients'
import { Bridge } from '@carbon-sdk/codec'
import { CarbonEvmChainIDs, Network } from "@carbon-sdk/constant/network"
import { SimpleMap } from "./type"
import { parseChainId } from './ethermint'

export enum Blockchain {
  Neo = "neo",
  Ethereum = "eth",
  BinanceSmartChain = "bsc",
  Zilliqa = "zil",
  Arbitrum = "arbitrum",
  Polygon = "polygon",
  Okc = "okc",
  Native = "native",
  Btc = "btc",
  Carbon = "carbon",
  Switcheo = "switcheo",
  TradeHub = "tradehub",
  PolyNetwork = "polynetwork",
  Neo3 = "neo3",
  Osmosis = "osmosis",
  Ibc = "ibc",
  Terra = "terra",
  CosmosHub = "cosmoshub",
  Juno = "juno",
  Evmos = "evmos",
  Axelar = "axelar",
  Stride = "stride",
  Kujira = "kujira",
  Terra2 = "terra2",
  Quicksilver = "quicksilver",
  Comdex = "comdex",
  StafiHub = "stafi",
  Persistence = "persistence",
  Stargaze = "stargaze",
  Canto = "canto",
  OmniFlixHub = "omniflixhub",
  Agoric = "agoric",
  Sommelier = "sommelier",
}

export type BlockchainV2 = ReturnType<TokenClient['getAllBlockchainNames']>[number] | "Native" | "Carbon" | "Tradehub" | "Ibc" | "Polynetwork"

export const BLOCKCHAIN_V2_TO_V1_MAPPING: SimpleMap<Blockchain> = {
  "Binance Smart Chain": Blockchain.BinanceSmartChain,
  "Ethereum": Blockchain.Ethereum,
  "Arbitrum": Blockchain.Arbitrum,
  "Polygon": Blockchain.Polygon,
  "OKC": Blockchain.Okc,
  "Zilliqa": Blockchain.Zilliqa,
  "Neo": Blockchain.Neo,
  "Neo3": Blockchain.Neo3
};

export const BRIDGE_IDS = {
  polynetwork: 1,
  ibc: 2,
}

export interface PolyNetworkBridge extends Bridge {
  isEvmChain: boolean;
}

export interface IbcBridge extends Bridge {
  chain_id_name: string;
  channels: {
    src_channel: string;
    dst_channel: string;
    port_id: string; // for cosmwasm bridges
  }
}

export function isIbcBridge(object: Bridge): object is IbcBridge {
  return Object.prototype.hasOwnProperty.call(object, "chain_id_name")
}

export interface BridgeMap {
  polynetwork: PolyNetworkBridge[]
  ibc: IbcBridge[]
}

export type ChainIds = SimpleMap<number>

export const ChainNames = {
  1: "MainNet",
  3: "Ropsten",
  4: "Rinkeby",
  5: "Goerli",
  56: "BSC MainNet",
  97: "BSC TestNet",
  110: "ZIL DevNet",
  111: "ZIL TestNet",
  65: "Okc TestNet",
  66: "Okc MainNet",
  137: "Polygon MainNet",
  80001: "Polygon Mumbai",
  42161: "Arbitrum MainNet",
  421611: "Arbitrum TestNet",
} as const

export const CHAIN_IDS: ChainIds = {
  native: 0,
  btc: 1,
  eth: 2,
  neo: 4,
  bsc: 6,
  neo3: 14,
  zil: 18,
  arbitrum: 19,
  okc: 66,
  polygon: 137,
  osmosis: 244,
  terra: 245,
  cosmoshub: 246,
  juno: 247,
  evmos: 248,
  axelar: 249,
  stride: 313,
  kujira: 314,
  terra2: 315,
  quicksilver: 316,
  comdex: 317,
  stafihub: 318,
  persistence: 319,
  stargaze: 320,
  canto: 321,
  omniflixhub: 322,
  agoric: 323,
}

export const CHAIN_IDS_DEV: ChainIds = {
  eth: 350,
  neo: 5,
  neo3: 88,
  bsc: 79,
  zil: 111,
}

export const CHAIN_IDS_TEST: ChainIds = {
  eth: 2,
  neo: 5,
  neo3: 88,
  bsc: 79,
  zil: 111,
}

export const chainIdsByBlockchain: SimpleMap<ChainIds> = {
  [Network.MainNet]: CHAIN_IDS,
  [Network.DevNet]: CHAIN_IDS_DEV,
  [Network.TestNet]: CHAIN_IDS_TEST,
  [Network.LocalHost]: CHAIN_IDS_TEST,
}

export function parseBlockchain(value: string | null): Blockchain | null {
  if (value === null || value === undefined) return null
  return Object.values(Blockchain).find((enumMember) => enumMember.toLowerCase() === value.toLowerCase()) ?? null
}

export function getChainFromID(id: number): string | undefined {
  return Object.keys(CHAIN_IDS).find((key) => CHAIN_IDS[key] === id)
}

export const getBlockchainFromChain = (chainId?: number) => {
  switch (chainId) {
    case 1:
    case 3:
    case 4:
    case 5:
      return Blockchain.Ethereum
    case 56:
    case 97:
      return Blockchain.BinanceSmartChain
    case 65:
    case 66:
      return Blockchain.Okc
    case 137:
    case 80001:
      return Blockchain.Polygon
    case 110:
    case 111:
      return Blockchain.Zilliqa
    case 42161:
    case 421611:
      return Blockchain.Arbitrum
  }
  return undefined
}

export const blockchainForChainId = (chainId?: number, network = Network.MainNet): Blockchain | undefined => {
  switch (network) {
    case Network.MainNet:
      switch (chainId) {
        case 0:
          return Blockchain.Native
        case 1:
          return Blockchain.Btc
        case 2:
          return Blockchain.Ethereum
        case 4:
          return Blockchain.Neo
        case 6:
          return Blockchain.BinanceSmartChain
        case 14:
          return Blockchain.Neo3
        case 9:  /* FALLTHROUGH */
        case 18:
          return Blockchain.Zilliqa
        case 12: /* FALLTHROUGH */
        case 66:
          return Blockchain.Okc
        case 17: /* FALLTHROUGH */
        case 137:
          return Blockchain.Polygon
        case 244:
          return Blockchain.Osmosis
        case 13: /* FALLTHROUGH */
        case 245:
          return Blockchain.Terra
        case 246:
          return Blockchain.CosmosHub
        case 5: /* FALLTHROUGH */
        case 247:
          return Blockchain.Juno
        case 7: /* FALLTHROUGH */
        case 248:
          return Blockchain.Evmos
        case 8: /* FALLTHROUGH */
        case 249:
          return Blockchain.Axelar
        case 313:
          return Blockchain.Stride
        case 314:
          return Blockchain.Kujira
        case 315:
          return Blockchain.Terra2
        case 316:
          return Blockchain.Quicksilver
        // eslint duplicate case
        // case 12: /* FALLTHROUGH */
        case 317:
          return Blockchain.Comdex
        case 318:
          return Blockchain.StafiHub
        case 15: /* FALLTHROUGH */
        case 319:
          return Blockchain.Persistence
        case 16: /* FALLTHROUGH */
        case 320:
          return Blockchain.Stargaze
        case 321:
          return Blockchain.Canto
        case 322:
          return Blockchain.OmniFlixHub
        case 323:
          return Blockchain.Agoric
        case 19: /* FALLTHROUGH */
        case 42161:
          return Blockchain.Arbitrum
        default:
          return undefined
      }
    case Network.TestNet:
      switch (chainId) {
        case 1:
          return Blockchain.Btc
        case 0:
        case 5:
          return Blockchain.Carbon
        case 79:
          return Blockchain.BinanceSmartChain
        case 88:
          return Blockchain.Neo3
        case 111:
          return Blockchain.Zilliqa
        case 2: /* FALLTHROUGH */
        case 502:
          return Blockchain.Ethereum
        default:
          return undefined
      }
    case Network.DevNet:
      switch (chainId) {
        case 0:
          return Blockchain.Carbon
        case 1:
          return Blockchain.Btc
        case 2:
        case 350:
          return Blockchain.Ethereum
        case 5:
          return Blockchain.Neo
        case 79:
          return Blockchain.BinanceSmartChain
        case 111:
          return Blockchain.Zilliqa
        default:
          return undefined
      }
    case Network.LocalHost:
      return undefined
    default:
      return undefined
  }
}

export const getBlockchainFromChainV2 = (chainId?: number) => {
  switch (chainId) {
    case 1:
    case 3:
    case 4:
    case 5:
      return 'Ethereum'
    case 56:
    case 97:
      return 'Binance Smart Chain'
    case 65:
    case 66:
      return 'Okc'
    case 137:
    case 80001:
      return 'Polygon'
    case 110:
    case 111:
      return 'Zilliqa'
    case 42161:
    case 421611:
      return 'Arbitrum'
    case Number(parseChainId((CarbonEvmChainIDs[Network.LocalHost]))):
    case Number(parseChainId((CarbonEvmChainIDs[Network.DevNet]))):
    case Number(parseChainId((CarbonEvmChainIDs[Network.TestNet]))):
    case Number(parseChainId((CarbonEvmChainIDs[Network.MainNet]))):
      return 'Carbon'
  }
  return undefined
}

export const blockchainForChainIdV2 = (chainId?: number, network = Network.MainNet): Blockchain | BlockchainV2 | undefined => {
  switch (network) {
    case Network.MainNet:
      switch (chainId) {
        case 0:
          return "Native"
        case 1:
          return "Bitcoin"
        case 2:
          return "Ethereum"
        case 4:
          return "Neo"
        case 6:
          return "Binance Smart Chain"
        case 14:
          return "Neo3"
        case 9:  /* FALLTHROUGH */
        case 18:
          return "Zilliqa"
        case 12: /* FALLTHROUGH */
        case 66:
          return 'Okc'
        case 17: /* FALLTHROUGH */
        case 137:
          return 'Polygon'
        case 244:
          return "Osmosis"
        case 13: /* FALLTHROUGH */
        case 245:
          return "Terra Classic"
        case 246:
          return "Cosmos Hub"
        case 5: /* FALLTHROUGH */
        case 247:
          return "Juno"
        case 7: /* FALLTHROUGH */
        case 248:
          return "Evmos"
        case 8: /* FALLTHROUGH */
        case 249:
          return "Axelar"
        case 313:
          return "Stride"
        case 314:
          return "Kujira"
        case 315:
          return "Terra"
        case 316:
          return "Quicksilver"
        // eslint duplicate case 
        // case 12: /* FALLTHROUGH */
        case 317:
          return "Comdex"
        case 318:
          return "Stafihub"
        case 15: /* FALLTHROUGH */
        case 319:
          return "Persistence Core"
        case 16: /* FALLTHROUGH */
        case 320:
          return "Stargaze"
        case 321:
          return "Canto"
        case 322:
          return "OmniFlix Hub"
        case 323:
          return "Agoric"
        case 19: /* FALLTHROUGH */
        case 42161:
          return "Arbitrum"
        default:
          return undefined
      }
    case Network.TestNet:
      switch (chainId) {
        case 1:
          return "Bitcoin"
        case 0:
        case 5:
          return "Carbon"
        case 79:
          return "Binance Smart Chain"
        case 88:
          return "Neo3"
        case 111:
          return "Zilliqa"
        case 2: /* FALLTHROUGH */
        case 502:
          return "Ethereum"
        default:
          return undefined
      }
    case Network.DevNet:
      switch (chainId) {
        case 0:
          return 'Carbon'
        case 1:
          return 'Bitcoin'
        case 2:
        case 350:
          return "Ethereum"
        case 5:
          return "Neo"
        case 79:
          return "Binance Smart Chain"
        case 111:
          return 'Zilliqa'
        default:
          return undefined
      }
    case Network.LocalHost:
      return undefined
    default:
      return undefined
  }
}

export const EvmChains = ['Ethereum', 'Binance Smart Chain', 'Arbitrum', 'Polygon', 'OKC', 'Carbon'] as const;
export type EVMChain = (typeof EvmChains)[number];
export const isEvmChain = (chain: string): chain is EVMChain => EvmChains.includes(chain as any);
