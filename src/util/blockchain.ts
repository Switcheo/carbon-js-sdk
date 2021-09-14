export enum Blockchain {
  Neo = 'neo',
  Ethereum = 'eth',
  BinanceSmartChain = 'bsc',
  Zilliqa = 'zil',
  Native = 'native',
  Btc = 'btc',
};

export const BRIDGE_IDS = {
  'polynetwork': 1
};

type ChainIds = {
  [id: string]: number
}

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

export function getChainFromID(id: number) {
  return Object.keys(CHAIN_IDS).find((key) => CHAIN_IDS[key] === id)
}

export const blockchainForChainId = (chainId?: number) => {
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
    case 9:
      return Blockchain.Zilliqa
  }
}
