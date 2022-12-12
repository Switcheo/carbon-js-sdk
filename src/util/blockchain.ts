import { Network } from '@carbon-sdk/constant/network';
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
  Terra = 'terra',
  CosmosHub = 'cosmoshub',
  Juno = 'juno',
  Evmos = 'evmos',
  Axelar = 'axelar',
  Stride = 'stride',
  Kujira = 'kujira',
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
} as const

export const CHAIN_IDS: ChainIds = {
  'native': 0,
  'btc': 1,
  'eth': 2,
  'neo': 4,
  'bsc': 6,
  'neo3': 14,
  'zil': 18,
  'osmosis': 244,
  'terra': 245,
  'cosmoshub': 246,
  'juno': 247,
  'evmos': 248,
  'axelar': 249,
  'stride': 313,
  'kujira': 10
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
      return Blockchain.Kujira
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
    default:
      return undefined
  }
}
