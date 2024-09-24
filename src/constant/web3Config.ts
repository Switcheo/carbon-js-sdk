import { CarbonEvmChainIDs, Network, NetworkConfigs } from "@carbon-sdk/constant";
import { parseChainId } from "@carbon-sdk/util/ethermint";

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

export const BSC_MAINNET: ChangeNetworkParam = {
  chainId: "0x38",
  blockExplorerUrls: ["https://bscscan.com"],
  chainName: "BSC Mainnet",
  rpcUrls: [
    "https://bsc-dataseed2.binance.org/",
    "https://bsc-dataseed3.binance.org/",
    "https://bsc-dataseed4.binance.org/",
    "https://bsc-dataseed1.defibit.io/",
    "https://bsc-dataseed2.defibit.io/",
    "https://bsc-dataseed3.defibit.io/",
    "https://bsc-dataseed4.defibit.io/",
    "https://bsc-dataseed1.ninicoin.io/",
    "https://bsc-dataseed2.ninicoin.io/",
    "https://bsc-dataseed3.ninicoin.io/",
    "https://bsc-dataseed4.ninicoin.io/",
    "https://bsc-dataseed1.binance.org/",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Binance Coin",
    symbol: "BNB",
  },
};
export const BSC_TESTNET: ChangeNetworkParam = {
  chainId: "0x61",
  blockExplorerUrls: ["https://testnet.bscscan.com"],
  chainName: "BNB Smart Chain Testnet",
  rpcUrls: [
    "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Binance Coin",
    symbol: "tBNB",
  },
};

export const ETH_MAINNET: ChangeNetworkParam = {
  chainId: "0x1",
  rpcUrls: ["https://mainnet.infura.io/v3/"],
};
export const ETH_TESTNET: ChangeNetworkParam = {
  chainId: "0x5",
  rpcUrls: ["https://goerli.infura.io/v3/"],
};

export const ARBITRUM_MAINNET: ChangeNetworkParam = {
  chainId: "0xA4B1",
  blockExplorerUrls: ["https://explorer.arbitrum.io"],
  chainName: "Arbitrum One",
  rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
};
export const ARBITRUM_TESTNET: ChangeNetworkParam = {
  chainId: "0x66EEB",
  blockExplorerUrls: [""],
  chainName: "Arbitrum Testnet",
  rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
};
export const POLYGON_MAINNET: ChangeNetworkParam = {
  chainId: "0x89",
  blockExplorerUrls: ["https://polygonscan.com/"],
  chainName: "Polygon Mainnet",
  rpcUrls: ["https://polygon-rpc.com"],
  nativeCurrency: {
    decimals: 18,
    name: "Matic",
    symbol: "MATIC",
  },
};
export const POLYGON_TESTNET: ChangeNetworkParam = {
  chainId: "0x13881",
  blockExplorerUrls: ["https://mumbai.polygonscan.com"],
  chainName: "Polygon Mumbai",
  rpcUrls: ["https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"],
  nativeCurrency: {
    decimals: 18,
    name: "Matic",
    symbol: "MATIC",
  },
};
export const OKC_MAINNET: ChangeNetworkParam = {
  chainId: "0x42",
  blockExplorerUrls: ["https://www.oklink.com/okc"],
  chainName: "OKC Mainnet",
  rpcUrls: ["https://exchainrpc.okex.org"],
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT",
  },
};
export const OKC_TESTNET: ChangeNetworkParam = {
  chainId: "0x41",
  blockExplorerUrls: ["https://www.oklink.com/okc-test"],
  chainName: "OKC Testnet",
  rpcUrls: ["https://exchaintestrpc.okex.org"],
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT",
  },
};

export const MANTLE_MAINNET: ChangeNetworkParam = {
  chainId: "0x1388",
  blockExplorerUrls: ["https://explorer.mantle.xyz"],
  chainName: "Mantle Mainnet",
  rpcUrls: [
    "https://rpc.mantle.xyz/",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
}

export const MANTLE_TESTNET: ChangeNetworkParam = {
  chainId: "0x138B",
  blockExplorerUrls: ["https://sepolia.mantlescan.xyz"],
  chainName: "Mantle Sepolia",
  rpcUrls: [
    "https://rpc.sepolia.mantle.xyz",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
}

export const OP_MAINNET: ChangeNetworkParam = {
  chainId: "0xA",  // Optimism Mainnet Chain ID (hex of 10)
  blockExplorerUrls: ["https://optimistic.etherscan.io"],
  chainName: "OP Mainnet",
  rpcUrls: [
    "https://mainnet.optimism.io",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
}

export const OP_TESTNET: ChangeNetworkParam = {
  chainId: "0x1A4",  // Optimism Sepolia Chain ID (hex of 420)
  blockExplorerUrls: ["https://sepolia-optimism.etherscan.io"],
  chainName: "OP Sepolia",
  rpcUrls: [
    "https://sepolia.optimism.io",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
}
