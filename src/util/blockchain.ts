import { SimpleMap } from './type';

export enum Blockchain {
  Neo = 'neo',
  Ethereum = 'eth',
  BinanceSmartChain = 'bsc',
  Zilliqa = 'zil',
  Native = 'native',
  Btc = 'btc',
  Carbon = 'carbon',
  Switcheo = 'carbon',
  PolyNetwork = 'polynetwork',
  NEO = 'neo',
  NEO3 = 'n3',
};

export const BRIDGE_IDS = {
  'polynetwork': 1
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
};

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
    default:
      return undefined
  }
}
