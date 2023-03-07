import { EthNetworkConfig, Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import { Blockchain, getBlockchainFromChain, ChainNames, BlockchainV2 } from "@carbon-sdk/util/blockchain";
import { ethers } from "ethers";
import * as ethSignUtils from "eth-sig-util";

export type EVMChain = 'Ethereum' | 'Binance Smart Chain' | 'Arbitrum' | Blockchain.Polygon | Blockchain.Okc;
type ChainContracts = {
  [key in Network]: string;
};
const CONTRACT_HASH: {
  [key in EVMChain]: ChainContracts;
} = {
  ['Ethereum']: {
    // use same rinkeby contract for all non-mainnet uses
    [Network.TestNet]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",
    [Network.DevNet]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",
    [Network.LocalHost]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",

    [Network.MainNet]: "0xf4552877A40c1527D38970F170993660084D4541",
  } as const,
  ['Binance Smart Chain']: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",
    [Network.DevNet]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",
    [Network.LocalHost]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",

    [Network.MainNet]: "0x3786d94AC6B15FE2eaC72c3CA78cB82578Fc66f4",
  } as const,
  ['Arbitrum']: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x43138036d1283413035b8eca403559737e8f7980",
  } as const,
  [Blockchain.Polygon]: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x61B9503Fe023E1F1Dd0ab7417923cB0A41DD9E0c",
  } as const,
  [Blockchain.Okc]: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x7e8D8c98a016877Cb3103e837Fc71D41b155aF70",
  } as const,
} as const;

const REGISTRY_CONTRACT_ABI = ABIs.keyStorage;

const ENCRYPTION_VERSION = "x25519-xsalsa20-poly1305";

const MNEMONIC_MATCH_REGEX = /-----BEGIN MNEMONIC PHRASE-----([a-z\s]*)-----END MNEMONIC PHRASE-----/im;
const MNEMONIC_MATCH_REGEX_LEGACY = /^[a-z\s]*$/i;

const getEncryptMessage = (input: string) => {
  return `
  !!! Attention !!! Please make sure you are connecting to https://app.dem.exchange, do not confirm decrypt if you're connecting to untrusted sites.
  -----BEGIN MNEMONIC PHRASE-----
  ${input}
  -----END MNEMONIC PHRASE-----
  `
    .trim()
    .replace(/^\s+/gm, "");
};

interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

interface MetaMaskAPI {
  isConnected: () => boolean;
  request: (args: RequestArguments) => Promise<unknown>;
}

export interface MetaMaskChangeNetworkParam {
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

export interface CallContractArgs {
  from?: string;
  value?: string;
  data?: string;
}

export interface MetaMaskSyncResult {
  blockchain?: Blockchain | BlockchainV2;
  chainId?: number;
}

const BSC_MAINNET: MetaMaskChangeNetworkParam = {
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
const BSC_TESTNET: MetaMaskChangeNetworkParam = {
  chainId: "0x61",
  blockExplorerUrls: ["https://testnet.bscscan.com"],
  chainName: "BSC Testnet",
  rpcUrls: [
    "https://data-seed-prebsc-2-s1.binance.org:8545/",
    "http://data-seed-prebsc-1-s2.binance.org:8545/",
    "http://data-seed-prebsc-2-s2.binance.org:8545/",
    "https://data-seed-prebsc-1-s3.binance.org:8545/",
    "https://data-seed-prebsc-2-s3.binance.org:8545/",
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Binance Coin",
    symbol: "BNB",
  },
};

const ETH_MAINNET: MetaMaskChangeNetworkParam = {
  chainId: "0x1",
  rpcUrls: ["https://mainnet.infura.io/v3/"],
};
const ETH_TESTNET: MetaMaskChangeNetworkParam = {
  chainId: "0x5",
  rpcUrls: ["https://goerli.infura.io/v3/"],
};

const ARBITRUM_MAINNET: MetaMaskChangeNetworkParam = {
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
const ARBITRUM_TESTNET: MetaMaskChangeNetworkParam = {
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
const POLYGON_MAINNET: MetaMaskChangeNetworkParam = {
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
const POLYGON_TESTNET: MetaMaskChangeNetworkParam = {
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
const OKC_MAINNET: MetaMaskChangeNetworkParam = {
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
const OKC_TESTNET: MetaMaskChangeNetworkParam = {
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

/**
 * TODO: Add docs
 */
export class MetaMask {
  private blockchain: EVMChain = 'Ethereum';

  static getNetworkParams(network: Network, blockchain: EVMChain = 'Ethereum'): MetaMaskChangeNetworkParam {
    if (network === Network.MainNet) {
      switch (blockchain) {
        case 'Binance Smart Chain':
          return BSC_MAINNET;
        case 'Arbitrum':
          return ARBITRUM_MAINNET;
        case Blockchain.Polygon:
          return POLYGON_MAINNET;
        case Blockchain.Okc:
          return OKC_MAINNET;
        default:
          // metamask should come with Ethereum configs
          return ETH_MAINNET;
      }
    }

    switch (blockchain) {
      case 'Binance Smart Chain':
        return BSC_TESTNET;
      case 'Arbitrum':
        return ARBITRUM_TESTNET;
      case Blockchain.Polygon:
        return POLYGON_TESTNET;
      case Blockchain.Okc:
        return OKC_TESTNET;
      default:
        // metamask should come with Ethereum configs
        return ETH_TESTNET;
    }
  }

  static getRequiredChainId(network: Network, blockchain: BlockchainV2 = 'Ethereum') {
    if (network === Network.MainNet) {
      switch (blockchain) {
        case 'Binance Smart Chain':
          return 56;
        case 'Arbitrum':
          return 42161;
        case Blockchain.Polygon:
          return 137;
        case Blockchain.Okc:
          return 66;
        default:
          return 1;
      }
    }

    switch (blockchain) {
      case 'Binance Smart Chain':
        return 97;
      case 'Arbitrum':
        return 421611;
      case Blockchain.Polygon:
        return 80001;
      case Blockchain.Okc:
        return 65;
      default:
        return 5;
    }
  }

  constructor(public readonly network: Network) {}

  private checkProvider(blockchain: BlockchainV2 = this.blockchain): ethers.providers.Provider {
    const config: any = NetworkConfigs[this.network];

    if (!config[blockchain]) {
      throw new Error(`MetaMask login not supported for this network ${this.network}`);
    }

    const ethNetworkConfig: EthNetworkConfig = config[blockchain];

    const provider = new ethers.providers.JsonRpcProvider(ethNetworkConfig.rpcURL);

    return provider;
  }

  public getBlockchain(): BlockchainV2 {
    return this.blockchain;
  }

  async syncBlockchain(): Promise<MetaMaskSyncResult> {
    const chainIdHex = (await this.getAPI()?.request({ method: "eth_chainId" })) as string;
    const chainId = !!chainIdHex ? parseInt(chainIdHex, 16) : undefined;
    const blockchain = getBlockchainFromChain(chainId) as EVMChain;
    this.blockchain = blockchain!;

    return { chainId, blockchain };
  }

  async getSigner(): Promise<ethers.Signer> {
    const ethereum = await this.getConnectedAPI();
    return new ethers.providers.Web3Provider(ethereum).getSigner();
  }

  getAPI(): MetaMaskAPI | null {
    return ((window as any).ethereum as MetaMaskAPI | null) ?? null;
  }

  async getConnectedAPI(): Promise<MetaMaskAPI> {
    const metamaskAPI = this.getAPI();
    if (!metamaskAPI) {
      throw new Error("MetaMask not connected, please check that your extension is enabled");
    }

    if (metamaskAPI?.isConnected()) {
      return metamaskAPI;
    }

    await metamaskAPI.request({ method: "eth_requestAccounts" });
    return metamaskAPI;
  }

  async connect() {
    return this.getConnectedAPI();
  }

  async defaultAccount() {
    const metamaskAPI = await this.getConnectedAPI();
    const [defaultAccount] = (await metamaskAPI.request({ method: "eth_requestAccounts" })) as string[];

    if (!defaultAccount) {
      throw new Error("No default account on MetaMask, please create one first");
    }

    return defaultAccount;
  }

  async getStoredMnemonicCipher(account: string, blockchain?: EVMChain): Promise<string | undefined> {
    const contractHash = this.getContractHash(blockchain);
    const provider = this.checkProvider(blockchain);
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider);
    const cipherTextHex: string | undefined = await contract.map(account);
    if (!cipherTextHex?.length || cipherTextHex === "0x") {
      // value would be '0x' if not initialized
      return undefined;
    }
    return cipherTextHex;
  }

  async encryptMnemonic(mnemonic: string): Promise<string> {
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();
    const publicKey = (await metamaskAPI.request({
      method: "eth_getEncryptionPublicKey",
      params: [defaultAccount],
    })) as string;

    const messageToEncrypt = getEncryptMessage(mnemonic);

    const cipher = ethSignUtils.encrypt(
      publicKey,
      {
        data: messageToEncrypt,
      },
      ENCRYPTION_VERSION
    );

    const { version, nonce, ephemPublicKey, ciphertext } = cipher;
    const encryptedMnemonic = ethers.utils.toUtf8Bytes([version, nonce, ephemPublicKey, ciphertext].join("."));

    return Buffer.from(encryptedMnemonic).toString("hex");
  }

  async storeMnemonic(encryptedMnemonic: string, blockchain?: EVMChain) {
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();
    const storedMnemonicCipher = await this.getStoredMnemonicCipher(defaultAccount, blockchain);

    if (storedMnemonicCipher) {
      throw new Error("Cannot store key on registry - key already exists for ETH account");
    }

    const contractHash = this.getContractHash(blockchain);
    const provider = this.checkProvider(blockchain);
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider);

    const dataBytes = Buffer.from(encryptedMnemonic, "hex");
    const unsignedTx = await contract.populateTransaction.Store(dataBytes);

    const txHash = (await metamaskAPI.request({
      method: "eth_sendTransaction",
      params: [
        {
          ...unsignedTx,
          from: defaultAccount,
        },
      ],
    })) as string;

    return txHash;
  }

  async login(blockchain?: EVMChain): Promise<string | null> {
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();
    const cipherTextHex: string | undefined = await this.getStoredMnemonicCipher(defaultAccount, blockchain);

    const chainIdHex = (await metamaskAPI.request({ method: "eth_chainId" })) as string;
    const chainId = parseInt(chainIdHex, 16);

    const requiredChainId = this.getRequiredChain(this.network, chainId);
    if (chainId !== requiredChainId) {
      const requiredNetworkName = ChainNames[requiredChainId] || ChainNames[3];
      throw new Error(`MetaMask not connected to correct network, please use ${requiredNetworkName} (Chain ID: ${requiredChainId})`);
    }

    if (!cipherTextHex || !cipherTextHex.length) {
      return null;
    }

    const cipherText = ethers.utils.toUtf8String(cipherTextHex);
    const [version, nonce, ephemPublicKey, ciphertext] = cipherText.split(".");

    const cipher = {
      version,
      nonce,
      ephemPublicKey,
      ciphertext,
    };

    const decryptedCipherText = (
      (await metamaskAPI.request({
        method: "eth_decrypt",
        params: [JSON.stringify(cipher), defaultAccount],
      })) as string
    )?.trim();

    // legacy encrypted mnemonic doesnt include warning message.
    if (decryptedCipherText.match(MNEMONIC_MATCH_REGEX_LEGACY)) {
      return decryptedCipherText;
    }

    // match line with prefix 'mnemonic: '
    const match = decryptedCipherText.match(MNEMONIC_MATCH_REGEX);

    // invalid cipher
    if (!match) {
      console.error("invalid account info retrieved from contract");
      console.error(decryptedCipherText);
      throw new Error("Retrieved invalid account on blockchain, please check console for more information.");
    }

    return match[1]?.trim();
  }

  private getRequiredChain(network: Network, currentChainId: number) {
    // set correct blockchain given the chain ID
    if (network === Network.MainNet) {
      if (currentChainId === 1) {
        this.blockchain = 'Ethereum';
        return currentChainId;
      }
      if (currentChainId === 56) {
        this.blockchain = 'Binance Smart Chain';
        return currentChainId;
      }
      if (currentChainId === 42161) {
        this.blockchain = 'Arbitrum';
        return currentChainId;
      }
      if (currentChainId === 137) {
        this.blockchain = Blockchain.Polygon;
        return currentChainId;
      }
      if (currentChainId === 66) {
        this.blockchain = Blockchain.Okc;
        return currentChainId;
      }
      if (currentChainId === 137) {
        this.blockchain = Blockchain.Polygon;
        return currentChainId;
      }
      if (currentChainId === 66) {
        this.blockchain = Blockchain.Okc;
        return currentChainId;
      }

      return 1;
    }

    if (currentChainId === 5) {
      this.blockchain = 'Ethereum';
      return currentChainId;
    }
    if (currentChainId === 97) {
      this.blockchain = 'Binance Smart Chain';
      return currentChainId;
    }
    if (currentChainId === 421611) {
      this.blockchain = 'Arbitrum';
      return currentChainId;
    }
    if (currentChainId === 80001) {
      this.blockchain = Blockchain.Polygon;
      return currentChainId;
    }
    if (currentChainId === 65) {
      this.blockchain = Blockchain.Okc;
      return currentChainId;
    }
    if (currentChainId === 80001) {
      this.blockchain = Blockchain.Polygon;
      return currentChainId;
    }
    if (currentChainId === 65) {
      this.blockchain = Blockchain.Okc;
      return currentChainId;
    }

    // Deal with cases where users are logging in to devnet using mainnet chains
    if (currentChainId === 56) {
      return 97;
    }
    return 5;
  }

  private getContractHash(blockchain: EVMChain = this.blockchain) {
    const contractHash = CONTRACT_HASH[blockchain][this.network];
    if (!contractHash) {
      throw new Error(`MetaMask login is not supported on ${this.network} on ${blockchain}`);
    }

    return contractHash;
  }
}
