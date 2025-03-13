import { CarbonEvmChainIDs, Network, NetworkConfigs } from "@carbon-sdk/constant";
import { parseChainId } from "@carbon-sdk/util/ethermint";
import { SimpleMap } from "@carbon-sdk/util/type";

export interface ChangeNetworkParam {
  chainId: string;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
}

type ChainDetail = {
  name: string;
  shortName: string;
  chain: string;
  chainId: number;
  networkId: number;
  rpc: string[];
  faucets: string[];
  explorers: {
    name: string;
    url: string;
    standard: 'EIP3091' | 'none';
  }[];
  infoURL: string;
  title: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  }
}

let chainMapCache: Record<string, ChainDetail> = {};

const apiKeyPattern = /\${[^}]*}/g;

const apiKeys: SimpleMap<string> = {
  'INFURA_API_KEY': '4458cf4d1689497b9a38b1d6bbf05e78',
}

const fetchChainMap = async (): Promise<Record<string, ChainDetail>> => {
  if (Object.keys(chainMapCache).length > 0) {
    return chainMapCache
  }
  const response = await fetch("https://chainid.network/chains.json");
  const data = await response.json();
  const chainMap = data.reduce((acc: any, chain: any) => {
    acc[chain.chainId] = chain;
    return acc;
  }, {});
  chainMapCache = chainMap;
  return chainMap;
}

const convertChainDetailToChangeNetworkParam = (chainDetail: ChainDetail): ChangeNetworkParam => {
  if (!chainDetail.chainId) {
    throw new Error("chainId not found in chainDetail: " + JSON.stringify(chainDetail));
  }
  const validRpcUrls = chainDetail.rpc.map((url) => {
    const matches = [...url.matchAll(apiKeyPattern)];
    if (matches.length) {
      for (const match of matches) {
        const placeholder = match[0];
        const keyName = placeholder.slice(2, -1);
        if (apiKeys[keyName]) {
          url = url.replace(placeholder, apiKeys[keyName]);
        } else {
          console.log(`No API key found for placeholder RPC URL ${url}`);
        }
      }
    }
    return url;
  });
  return {
    chainId: `0x${chainDetail.chainId.toString(16)}`,
    blockExplorerUrls: chainDetail.explorers.map((explorer) => explorer.url),
    chainName: chainDetail.name,
    rpcUrls: validRpcUrls,
    nativeCurrency: chainDetail.nativeCurrency,
  }
}

export const getChangeNetworkParams = async (chainId: number) => {
  const configs = await fetchChainMap();
  return convertChainDetailToChangeNetworkParam(configs[chainId]);
}

export const CarbonEvmNativeCurrency = {
  decimals: 18,
  name: "SWTH",
  symbol: "SWTH",
}

export const CARBON_EVM_LOCALHOST: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.LocalHost])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Localhost",
  rpcUrls: [`${NetworkConfigs[Network.LocalHost].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_DEVNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.DevNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Devnet",
  rpcUrls: [`${NetworkConfigs[Network.DevNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_TESTNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.TestNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Testnet",
  rpcUrls: [`${NetworkConfigs[Network.TestNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}

export const CARBON_EVM_MAINNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.MainNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM",
  rpcUrls: [`${NetworkConfigs[Network.MainNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}