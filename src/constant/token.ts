import { OptionalNetworkMap, SimpleMap } from "@carbon-sdk/util/type";
import assetLists from "assetlists/osmosis-1/osmosis-1.assetlist.json";
import { Network } from "./network";

export const CommonAssetName: SimpleMap<string> = {
  swth: 'swth',
  'swth-n': 'swth',
  'swth-b': 'swth',
  'swth-e': 'swth',
  dai: 'dai',
  'dai.1.2.0fdfd1': 'dai',
  flm1: 'flm',
  eth1: 'eth',
  'eth.1.2.4730ca': 'eth',
  btc1: 'btc',
  'btc.1.1.6569cd': 'btc',
  usdc1: 'usdc',
  'usdc.0.2.ef2019': 'usdc',
  wbtc1: 'wbtc',
  cel1: 'cel',
  nex1: 'nex',
  'nex.0.4.bb5b3d': 'nex',
  neo: 'neo',
  'neo.0.4.1e3867': 'neo',
  nneo2: 'nneo',
  bnb1: 'bnb',
  bnb2: 'bnb',
  busd1: 'busd',
  btcb1: 'btcb',
  busdt1: 'busdt',
  bbelt1: 'bbelt',
  elink1: 'link',
  elink2: 'link',
  euni1: 'uni',
  euni2: 'uni',
  ncgas1: 'cgas',
  yam1: 'yam',
  yam2: 'yam',
  'trb1-3c2c697a0ad67fed978d3dd7ec61c464': 'trb',
  'tru-e2de3f751ecb78216c447144c8c1f4bf': 'tru',
  'usdt1-176391161fae2a4819870b05a720e642': 'usdt',
  'grt-43b071c61ac0332f7c85cff55b60f9d7': 'grt',
  'inch-1cf6e72a3b6db4bc509c5fa97df8865b': '1inch',
  'okb.e.1': 'okb',
  'aave.e.1': 'aave',
  'mkr.e.1': 'mkr',
  'cro.e.1': 'cro',
  'dai.e.1': 'dai',
  'comp.e.1': 'comp',
  'tel.e.1': 'tel',
  'snx.e.1': 'snx',
  'sushi.e.1': 'sushi',
  'chz.e.1': 'chz',
  'hot.e.1': 'hot',
  'enj.e.1': 'enj',
  'nexo.e.1': 'nexo',
  'nexo.0.2.632b26': 'nexo',
  'bat.e.1': 'bat',
  'yfi.e.1': 'yfi',
  'grt.e.1': 'grt',
  'omg.e.1': 'omg',
  'bnt.e.1': 'bnt',
  'zrx.e.1': 'zrx',
  'one.e.1': 'one',
  'chsb.e.1': 'chsb',
  'crv.e.1': 'crv',
  'nxm.e.1': 'nxm',
  'snt.e.1': 'snt',
  'bal.e.1': 'bal',
  'rlc.e.1': 'rlc',
  'lrc.e.1': 'lrc',
  'ocean.e.1': 'ocean',
  'btmx.e.1': 'btmx',
  'band.e.1': 'band',
  'knc.e.1': 'knc',
  'inj.e.1': 'inj',
  'gno.e.1': 'gno',
  'fun.e.1': 'fun',
  'sxp.e.1': 'sxp',
  'iotx.e.1': 'iotx',
  'nkn.e.1': 'nkn',
  'stmx.e.1': 'stmx',
  'agi.e.1': 'agi',
  'oxt.e.1': 'oxt',
  'nmr.e.1': 'nmr',
  'sand.e.1': 'sand',
  'poly.e.1': 'poly',
  'ant.e.1': 'ant',
  'ogn.e.1': 'ogn',
  'storj.e.1': 'storj',
  'zil.z.1': 'zil',
  'eth.z.1': 'eth',
  'usdt.z.1': 'usdt',
  'wbtc.z.1': 'wbtc',
  'zeth.z.1': 'eth',
  'zusdt.z.3': 'usdt',
  'zwbtc.z.1': 'wbtc',
  'zwap.z.1': 'zwap',
  'xsgd.z.1': 'xsgd',
  'gzil.z.1': 'gzil',
  'port.e.1': 'port',
  'port.z.1': 'port',
  'xcad.e.1': 'xcad',
  'xcad.z.1': 'xcad',
  'brkl.1.2.797e04': 'brkl',
  'zbrkl.1.18.b8c24f': 'brkl',
  'zopul.1.18.4bcdc9': 'opul',
  'opul.1.2.d9af8f': 'opul',
  asa1: 'asa',
  asa2: 'asa',
  dbc1: 'dbc',
  dbc2: 'dbc',
  'lkt.7ef7febf': 'lkt',
  'lkt.bep20.c5a4937a': 'lkt',
  'gas.1.4.66bba7': 'gas',
  'fees.z.1': 'fees',
  'lunr.z.1': 'lunr',
  'play.z.1': 'play',
  'gm.1.6.e93773': 'gm',
  'ava1.1.6.95712b': 'ava',

  // devnet tokens
  'one.1.2.0c4e3f': 'one',
  'one.1.2.2ce83e': 'one',

  'swth-e-test': 'swth',

  'ewnxm1': 'nxm',
  'wnxm.b.1': 'nxm',
  'wnxm.e.1': 'nxm',
  'wnxm.0.6.b4e1db': 'nxm',

  'uni.e.2': 'uni',

  'zil1': 'zil',
  'zil.e': 'zil',
  'zil2.e': 'zil',
  'zil3.e': 'zil',
  'zil4.e': 'zil',
  'zil9': 'zil',
  'zil9.e': 'zil',
  'zil5.e': 'zil',
  'zil2.z': 'zil',
  'zil3.z': 'zil',
  'zil5.z': 'zil',

  'zwap.e': 'zwap',
  'zwap1.e': 'zwap',
  'zwap2.e': 'zwap',
  'zwap3.e': 'zwap',
  'zwap5.e': 'zwap',
  'zwap2.z': 'zwap',
  'zwap3.z': 'zwap',
  'zwap5.z': 'zwap',
  'zwap6.z': 'zwap',
  'zwap1': 'zwap',

  'dai1': 'dai',
  'dai2.e': 'dai',
  'dai3.e': 'dai',
  'dai.z': 'dai',
  'dai2.z': 'dai',
  'dai3.z': 'dai',
  'dai4.z': 'dai',
  'dai5.z': 'dai',
  'dai6.z': 'dai',

  'eth2.e': 'eth',
  'eth3.e': 'eth',
  'eth1.z': 'eth',
  'eth2.z': 'eth',
  'eth3.z': 'eth',
  'eth4.z': 'eth',
  'eth5.z': 'eth',
  'eth6.z': 'eth',
  'eth.zilliqa': 'eth',

  'zusdc': 'usdc',
  'zusdc2': 'usdc',

  'usdt.e': 'usdt',
  'usdt.z': 'usdt',
  'usdt1.z': 'usdt',
  'usdt2.z': 'usdt',
  'zusdt': 'usdt',
  'zusdt1': 'usdt', 
  'zusdt99': 'usdt',
};

export const CoinGeckoTokenNames: SimpleMap<string> = {
  swth: 'switcheo',
  btc: 'bitcoin',
  dai: 'dai',
  uni: 'uniswap',
  link: 'chainlink',
  neo: 'neo',
  nneo: 'neo',
  eth: 'ethereum',
  flm: 'flamingo-finance',
  usdc: 'usd-coin',
  usdt: 'tether',
  cel: 'celsius-degree-token',
  nex: 'neon-exchange',
  wbtc: 'wrapped-bitcoin',
  bnb: 'binancecoin',
  busd: 'binance-usd',
  btcb: 'binance-bitcoin',
  tru: 'truebit-protocol',
  zil: 'zilliqa',
  zwap: 'zilswap',
  trb: 'tellor',
  brkl: 'brokoli',
  opul: 'opulous',
  grt: 'the-graph',
  inch: '1inch',
  storj: 'storj',
  ogn: 'origin-protocol',
  ant: 'aragon',
  poly: 'polymath-network',
  sand: 'the-sandbox',
  nmr: 'numeraire',
  oxt: 'orchid-protocol',
  agi: 'singularitynet',
  stmx: 'storm',
  nkn: 'nkn',
  iotx: 'iotex',
  sxp: 'swipe',
  fun: 'funfair',
  gno: 'gnosis',
  inj: 'injective-protocol',
  knc: 'kyber-network',
  band: 'band-protocol',
  btmx: 'asd',
  ocean: 'ocean-protocol',
  lrc: 'loopring',
  rlc: 'iexec-rlc',
  bal: 'balancer',
  snt: 'status',
  nxm: 'nxm',
  crv: 'curve-dao-token',
  chsb: 'swissborg',
  one: 'harmony',
  zrx: '0x',
  bnt: 'bancor',
  omg: 'omisego',
  yfi: 'yearn-finance',
  bat: 'basic-attention-token',
  nexo: 'nexo',
  enj: 'enjincoin',
  hot: 'holotoken',
  chz: 'chiliz',
  sushi: 'sushi',
  snx: 'havven',
  tel: 'telcoin',
  comp: 'compound-governance-token',
  cro: 'crypto-com-chain',
  mkr: 'maker',
  aave: 'aave',
  okb: 'okb',
  helmet: 'helmet-insure',
  belt: 'belt',
  busdt: 'tether',
  cgas: 'gas',
  dbc: 'deepbrain-chain',
  yam: 'yam-2',
  asa: 'asura',
  eps: 'ellipsis',
  ada: 'binance-peg-cardano',
  wbnb: 'wbnb',
  doge: 'binance-peg-dogecoin',
  xrp: 'binance-peg-xrp',
  dot: 'binance-peg-polkadot',
  bch: 'binance-peg-bitcoin-cash',
  ltc: 'binance-peg-litecoin',
  etc: 'ethereum-classic',
  eos: 'binance-peg-eos',
  trx: 'tron-bsc',
  xtz: 'tezos',
  cake: 'pancakeswap-token',
  atom: 'cosmos',
  safemoon: 'safemoon',
  ust: 'wrapped-ust-bsc',
  zec: 'zcash',
  pax: 'paxos-standard',
  near: 'near',
  ont: 'ontology',
  wrx: 'wazirx',
  bake: 'bakerytoken',
  ankr: 'ankr',
  bcha: 'bitcoin-cash-abc-2',
  bcfx: 'conflux-token',
  mir: 'mirror-protocol',
  reef: 'reef-finance',
  xvs: 'venus',
  btcst: 'btc-standard-hashrate-token',
  tlm: 'alien-worlds-bsc',
  prom: 'prometeus',
  alpha: 'alpha-finance',
  dodo: 'dodo',
  math: 'math',
  lkt: 'locklet',
  xsgd: 'xsgd',
  gzil: 'governance-zil',
  xcad: 'xcad-network',
  fees: 'unifees',
  lunr: 'lunr-token',
  port: 'packageportal',
  gm: 'ghostmarket',
  ava: 'concierge-io',
};

export const TokenBlacklist: OptionalNetworkMap<string[]> = {
  [Network.MainNet]: [
    "brkl.1.2.337f55",    // wrong token address
    "zusdt.1.18.1cbca1",  // duplicated token
  ],
}

export interface DenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}

export interface LogoURI {
  png: string;
  svg?: string;
}

export interface IBCObj {
  source_channel: string;
  dst_channel: string;
  source_denom: string;
}

export interface AssetData {
  description?: string;
  type_asset?: string;
  address?: string;
  denom_units: DenomUnit[];
  base: string;
  name: string;
  display: string;
  symbol: string;
  ibc?: IBCObj;
  logo_URIs: LogoURI;
  coingecko_id?: string;
}

export interface AssetListObj {
  chain_id: string;
  assets: SimpleMap<AssetData>
}

export const ibcAssetObj: AssetListObj = {
  ...assetLists,
  assets: assetLists.assets.reduce((
    prev: SimpleMap<AssetData>,
    asset: AssetData,
  ) => {
    const newList = prev;
    newList[asset.display] = asset;
    return newList;
  }, {}),
}

export const ibcDisplayOverride: SimpleMap<string> = {
  'swth': 'dswth',
}
