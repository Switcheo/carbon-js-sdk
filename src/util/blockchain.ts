import { SimpleMap } from './type';

export enum Blockchain {
  Neo = 'neo',
  Ethereum = 'eth',
  BinanceSmartChain = 'bsc',
  Zilliqa = 'zil',
  Native = 'native',
  Btc = 'btc',
  Carbon = 'carbon',
  Switcheo = 'switcheo',
  TradeHub = 'tradehub',
  PolyNetwork = 'polynetwork',
  Neo3 = 'neo3',
  Osmosis = 'osmosis',
  Ibc = 'ibc',
  Terra = 'terra'
};

export const BRIDGE_IDS = {
  'polynetwork': 1,
  'ibc': 2,
};

export type ChainIds = SimpleMap<number>;

export const ChainNames = {
  1: 'MainNet',
  3: 'Ropsten',
  56: 'BSC MainNet',
  97: 'BSC TestNet',
  110: 'ZIL DevNet',
  111: 'ZIL TestNet',
} as const

export const CHAIN_IDS: ChainIds = {
  'native': 0,
  'btc': 1,
  'eth': 2,
  'neo': 4,
  'bsc': 6,
  'zil': 9,
  'osmosis': 244,
  'terra': 245,
};

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
      return Blockchain.Ethereum
    case 56:
    case 97:
      return Blockchain.BinanceSmartChain
    case 110:
    case 111:
      return Blockchain.Zilliqa
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
      return Blockchain.Ethereum
    case 4:
      return Blockchain.Neo
    case 6:
    case 79:
      return Blockchain.BinanceSmartChain
    case 9: // mainnet
    case 18:
    case 110: // testnet
    case 111:
      return Blockchain.Zilliqa
    case 14: // mainnet
    case 88: // testnet
      return Blockchain.Neo3
    case 244: // mainnet
      return Blockchain.Osmosis
    case 245: // mainnet
      return Blockchain.Terra
    case 348:
      return Blockchain.Ethereum
    default:
      return undefined
  }
}
