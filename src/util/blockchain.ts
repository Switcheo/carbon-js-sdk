import { Network } from '@carbon-sdk/constant/network';
import { SimpleMap } from './type';

export enum Blockchain {
  Neo = 'neo',
  Ethereum = 'eth',
  BinanceSmartChain = 'bsc',
  Zilliqa = 'zil',
  Arbitrum = 'arbitrum',
  Native = 'native',
  Btc = 'btc',
  Carbon = 'carbon',
  Switcheo = 'switcheo',
  TradeHub = 'tradehub',
  PolyNetwork = 'polynetwork',
  Neo3 = 'neo3',
  Osmosis = 'osmosis',
  Ibc = 'ibc',
  Terra = 'terra',
  CosmosHub = 'cosmoshub',
  Juno = 'juno',
  Evmos = 'evmos',
  Axelar = 'axelar',
  Stride = 'stride',
  Kujira = 'kujira',
  Terra2 = 'terra2',
  Quicksilver = 'quicksilver',
  Comdex = 'comdex',
  StafiHub = 'stafi',
  Persistence = 'persistence',
  Stargaze = 'stargaze',
};

export const BRIDGE_IDS = {
  'polynetwork': 1,
  'ibc': 2,
};

export type ChainIds = SimpleMap<number>;

export const ChainNames = {
  1: 'MainNet',
  3: 'Ropsten',
  4: 'Rinkeby',
  56: 'BSC MainNet',
  97: 'BSC TestNet',
  110: 'ZIL DevNet',
  111: 'ZIL TestNet',
  42161: 'Arbitrum MainNet',
  421611: 'Arbitrum TestNet',
} as const

export const CHAIN_IDS: ChainIds = {
  'native': 0,
  'btc': 1,
  'eth': 2,
  'neo': 4,
  'bsc': 6,
  'neo3': 14,
  'zil': 18,
  'arbitrum': 19,
  'osmosis': 244,
  'terra': 245,
  'cosmoshub': 246,
  'juno': 247,
  'evmos': 248,
  'axelar': 249,
  'stride': 313,
  'kujira': 314,
  'terra2': 315,
  'quicksilver': 316,
  'comdex': 317,
  'stafihub': 318,
  'persistence': 319,
  'stargaze': 320,
};

export const CHAIN_IDS_DEV: ChainIds = {
  'eth': 350,
  'neo': 5,
  'neo3': 88,
  'bsc': 79,
  'zil': 111,
};

export const CHAIN_IDS_TEST: ChainIds = {
  'eth': 2,
  'neo': 5,
  'neo3': 88,
  'bsc': 79,
  'zil': 111,
};

export const chainIdsByBlockchain: SimpleMap<ChainIds> = {
  [Network.MainNet]: CHAIN_IDS,
  [Network.DevNet]: CHAIN_IDS_DEV,
  [Network.TestNet]: CHAIN_IDS_TEST,
  [Network.LocalHost]: CHAIN_IDS_TEST,
}

export function parseBlockchain(value: string | null): Blockchain | null {
  if (value === null || value === undefined) return null;
  return Object.values(Blockchain).find((enumMember) => enumMember.toLowerCase() === value.toLowerCase()) ?? null;
}

export function getChainFromID(id: number): string | undefined {
  return Object.keys(CHAIN_IDS).find((key) => CHAIN_IDS[key] === id)
}

export const getBlockchainFromChain = (chainId?: number) => {
  switch (chainId) {
    case 1:
    case 3:
    case 4:
      return Blockchain.Ethereum
    case 56:
    case 97:
      return Blockchain.BinanceSmartChain
    case 110:
    case 111:
      return Blockchain.Zilliqa
    case 42161:
    case 421611:
      return Blockchain.Arbitrum
  }
  return undefined
}

export const blockchainForChainId = (chainId?: number): Blockchain | undefined => {
  switch (chainId) {
    case 0:
      return Blockchain.Native
    case 1:
      return Blockchain.Btc
    case 2:
    case 350: // devnet
      return Blockchain.Ethereum
    case 4:
    case 5: // devnet
      return Blockchain.Neo
    case 6:
    case 79: // devnet
      return Blockchain.BinanceSmartChain
    case 9: // mainnet
    case 10:
    case 18:
    case 110: // testnet
    case 111:
      return Blockchain.Zilliqa
    case 14: // mainnet
    case 88: // testnet
      return Blockchain.Neo3
    case 19: // mainnet
      return Blockchain.Arbitrum
    case 244: // mainnet
      return Blockchain.Osmosis
    case 245: // mainnet
      return Blockchain.Terra
    case 246: // mainnet
      return Blockchain.CosmosHub
    case 247: // mainnet
      return Blockchain.Juno
    case 248: // mainnet
      return Blockchain.Evmos
    case 249: // mainnet
      return Blockchain.Axelar
    case 313: // mainnet
      return Blockchain.Stride
    case 314: // mainnnet
      return Blockchain.Kujira
    case 315: // mainnnet
      return Blockchain.Terra2
    case 316: // mainnnet
      return Blockchain.Quicksilver
    case 317: // mainnnet
      return Blockchain.Comdex
    case 318: // mainnnet
      return Blockchain.StafiHub
    case 319: // mainnnet
      return Blockchain.Persistence
    case 320: // mainnnet
      return Blockchain.Stargaze
    case 42161: // mainnnet
      return Blockchain.Arbitrum
    default:
      return undefined
  }
}
