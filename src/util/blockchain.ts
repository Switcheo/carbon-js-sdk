export enum Blockchain {
  Neo = 'neo',
  Ethereum = 'eth',
  BinanceSmartChain = 'bsc',
  Zilliqa = 'zil',
  Native = 'native',
};

export const BRIDGE_IDS = {
  'polynetwork': 1
};

type ChainIds = {
  [id: string]: number
}

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