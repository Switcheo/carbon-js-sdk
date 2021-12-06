import { Network, NetworkConfigs } from '@carbon-sdk/constant'
import { ABIs } from '@carbon-sdk/eth'
import { Blockchain, getBlockchainFromChain, ChainNames } from '@carbon-sdk/util/blockchain'
import { ethers } from 'ethers'
import * as ethSignUtils from 'eth-sig-util'
import { ETHClient } from '@carbon-sdk/clients/ETHClient'

const CONTRACT_HASH = {
  [Blockchain.Ethereum]: {
    // use same ropsten contract for all non-mainnet uses
    [Network.TestNet]: '0x23629C94F4e8b719094f5D1Ae1c1AA8d6d687966',
    [Network.DevNet]: '0x23629C94F4e8b719094f5D1Ae1c1AA8d6d687966',
    [Network.LocalHost]: '0x23629C94F4e8b719094f5D1Ae1c1AA8d6d687966',

    [Network.MainNet]: '0xf4552877A40c1527D38970F170993660084D4541',
  } as const,
  [Blockchain.BinanceSmartChain]: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: '0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085',
    [Network.DevNet]: '0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085',
    [Network.LocalHost]: '0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085',

    [Network.MainNet]: '0x3786d94AC6B15FE2eaC72c3CA78cB82578Fc66f4',
  } as const,
  [Blockchain.Neo]: {
    [Network.TestNet]: '',
    [Network.DevNet]: '',
    [Network.LocalHost]: '',

    [Network.MainNet]: '',
  } as const,
  [Blockchain.Zilliqa]: {
    [Network.TestNet]: '',
    [Network.DevNet]: '',
    [Network.LocalHost]: '',

    [Network.MainNet]: '',
  } as const,
  [Blockchain.Native]: {
    [Network.TestNet]: '',
    [Network.DevNet]: '',
    [Network.LocalHost]: '',

    [Network.MainNet]: '',
  } as const,
  [Blockchain.Btc]: {
    [Network.TestNet]: '',
    [Network.DevNet]: '',
    [Network.LocalHost]: '',

    [Network.MainNet]: '',
  } as const,
} as const

const REGISTRY_CONTRACT_ABI = ABIs.keyStorage

const ENCRYPTION_VERSION = 'x25519-xsalsa20-poly1305'

const MNEMONIC_MATCH_REGEX = /-----BEGIN MNEMONIC PHRASE-----([a-z\s]*)-----END MNEMONIC PHRASE-----/mi
const MNEMONIC_MATCH_REGEX_LEGACY = /^[a-z\s]*$/i

const getEncryptMessage = (input: string) => {
  return `
  !!! Attention !!! Please make sure you are connecting to https://app.dem.exchange, do not confirm decrypt if you're connecting to untrusted sites.
  -----BEGIN MNEMONIC PHRASE-----
  ${input}
  -----END MNEMONIC PHRASE-----
  `.trim().replace(/^\s+/gm, '')
}

interface RequestArguments {
  method: string
  params?: unknown[] | object
}

interface MetaMaskAPI {
  isConnected: () => boolean
  request: (args: RequestArguments) => Promise<unknown>
}

export interface MetaMaskChangeNetworkParam {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

export interface CallContractArgs {
  from?: string
  value?: string
  data?: string
}

export interface MetaMaskSyncResult {
  blockchain?: Blockchain
  chainId?: number
}

/**
 * TODO: Add docs
 */
export class MetaMask {
  private blockchain: Blockchain = Blockchain.Ethereum

  static getNetworkParams(network: Network, blockchain: Blockchain = Blockchain.Ethereum): MetaMaskChangeNetworkParam {
    if (network === Network.MainNet) {
      switch (blockchain) {
        case Blockchain.BinanceSmartChain:
          return {
            chainId: '0x38',
            blockExplorerUrls: ['https://bscscan.com'],
            chainName: 'BSC Mainnet',
            rpcUrls: [
              'https://bsc-dataseed2.binance.org/',
              'https://bsc-dataseed3.binance.org/',
              'https://bsc-dataseed4.binance.org/',
              'https://bsc-dataseed1.defibit.io/',
              'https://bsc-dataseed2.defibit.io/',
              'https://bsc-dataseed3.defibit.io/',
              'https://bsc-dataseed4.defibit.io/',
              'https://bsc-dataseed1.ninicoin.io/',
              'https://bsc-dataseed2.ninicoin.io/',
              'https://bsc-dataseed3.ninicoin.io/',
              'https://bsc-dataseed4.ninicoin.io/',
              'https://bsc-dataseed1.binance.org/',
            ],
            nativeCurrency: {
              decimals: 18,
              name: 'Binance Coin',
              symbol: 'BNB',
            },
          }
        default:
          // metamask should come with Ethereum configs
          return { chainId: '0x1' }
      }
    }

    switch (blockchain) {
      case Blockchain.BinanceSmartChain:
        return {
          chainId: '0x61',
          blockExplorerUrls: ['https://testnet.bscscan.com'],
          chainName: 'BSC Testnet',
          rpcUrls: [
            'https://data-seed-prebsc-2-s1.binance.org:8545/',
            'http://data-seed-prebsc-1-s2.binance.org:8545/',
            'http://data-seed-prebsc-2-s2.binance.org:8545/',
            'https://data-seed-prebsc-1-s3.binance.org:8545/',
            'https://data-seed-prebsc-2-s3.binance.org:8545/',
            'https://data-seed-prebsc-1-s1.binance.org:8545/',
          ],
          nativeCurrency: {
            decimals: 18,
            name: 'Binance Coin',
            symbol: 'BNB',
          },
        }
      default:
        // metamask should come with Ethereum configs
        return { chainId: '0x3' }
    }
  }

  static getRequiredChainId(network: Network, blockchain: Blockchain = Blockchain.Ethereum) {
    if (network === Network.MainNet) {
      switch (blockchain) {
        case Blockchain.BinanceSmartChain: return 56
        default: return 1
      }
    }

    switch (blockchain) {
      case Blockchain.BinanceSmartChain: return 97
      default: return 3
    }
  }

  constructor(
    public readonly network: Network,
  ) { }

  private checkProvider(blockchain: Blockchain = this.blockchain): ethers.providers.Provider {
    const ethClient = ETHClient.instance({
      blockchain: blockchain,
      configProvider: {
        getConfig: () => NetworkConfigs[this.network],
      },
    })

    const provider = ethClient.getProvider()

    if (!provider) {
      throw new Error(`MetaMask login not supported for this network ${this.network}`)
    }

    return provider
  }

  public getBlockchain(): Blockchain {
    return this.blockchain
  }

  async syncBlockchain(): Promise<MetaMaskSyncResult> {
    const chainIdHex = await this.getAPI()?.request({ method: 'eth_chainId' }) as string
    const chainId = !!chainIdHex ? parseInt(chainIdHex, 16) : undefined
    const blockchain = getBlockchainFromChain(chainId)
    this.blockchain = blockchain!

    return { chainId, blockchain }
  }

  async getSigner(): Promise<ethers.Signer> {
    const ethereum = await this.getConnectedAPI()
    return new ethers.providers.Web3Provider(ethereum).getSigner()
  }

  getAPI(): MetaMaskAPI | null {
    return (window as any).ethereum as MetaMaskAPI | null ?? null
  }

  async getConnectedAPI(): Promise<MetaMaskAPI> {
    const metamaskAPI = this.getAPI()
    if (!metamaskAPI) {
      throw new Error('MetaMask not connected, please check that your extension is enabled')
    }

    if (metamaskAPI?.isConnected()) {
      return metamaskAPI
    }

    await metamaskAPI.request({ method: 'eth_requestAccounts' })
    return metamaskAPI
  }

  async connect() {
    return this.getConnectedAPI()
  }

  async defaultAccount() {
    const metamaskAPI = await this.getConnectedAPI()
    const [defaultAccount] = await metamaskAPI.request({ method: 'eth_requestAccounts' }) as string[]

    if (!defaultAccount) {
      throw new Error('No default account on MetaMask, please create one first')
    }

    return defaultAccount
  }

  async getStoredMnemonicCipher(account: string, blockchain?: Blockchain): Promise<string | undefined> {
    const contractHash = this.getContractHash(blockchain)
    const provider = this.checkProvider(blockchain)
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider)
    const cipherTextHex: string | undefined = await contract.map(account)
    if (!cipherTextHex?.length || cipherTextHex === '0x') {
      // value would be '0x' if not initialized
      return undefined
    }
    return cipherTextHex
  }

  async encryptMnemonic(mnemonic: string): Promise<string> {
    const metamaskAPI = await this.getConnectedAPI()
    const defaultAccount = await this.defaultAccount()
    const publicKey = await metamaskAPI.request({
      method: 'eth_getEncryptionPublicKey',
      params: [defaultAccount],
    }) as string

    const messageToEncrypt = getEncryptMessage(mnemonic)

    const cipher = ethSignUtils.encrypt(publicKey, {
      data: messageToEncrypt,
    }, ENCRYPTION_VERSION)

    const {
      version,
      nonce,
      ephemPublicKey,
      ciphertext,
    } = cipher
    const encryptedMnemonic = ethers.utils.toUtf8Bytes([
      version,
      nonce,
      ephemPublicKey,
      ciphertext,
    ].join('.'))

    return Buffer.from(encryptedMnemonic).toString('hex')
  }

  async storeMnemonic(encryptedMnemonic: string, blockchain?: Blockchain) {
    const metamaskAPI = await this.getConnectedAPI()
    const defaultAccount = await this.defaultAccount()
    const storedMnemonicCipher = await this.getStoredMnemonicCipher(defaultAccount, blockchain)

    if (storedMnemonicCipher) {
      throw new Error('Cannot store key on registry - key already exists for ETH account')
    }

    const contractHash = this.getContractHash(blockchain)
    const provider = this.checkProvider(blockchain)
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider)

    const dataBytes = Buffer.from(encryptedMnemonic, 'hex')
    const unsignedTx = await contract.populateTransaction.Store(dataBytes)

    const txHash = await metamaskAPI.request({
      method: 'eth_sendTransaction',
      params: [{
        ...unsignedTx,
        from: defaultAccount,
      }],
    }) as string

    return txHash
  }

  async login(blockchain?: Blockchain): Promise<string | null> {
    const metamaskAPI = await this.getConnectedAPI()
    const defaultAccount = await this.defaultAccount()
    const cipherTextHex: string | undefined = await this.getStoredMnemonicCipher(defaultAccount, blockchain)

    const chainIdHex = await metamaskAPI.request({ method: 'eth_chainId' }) as string
    const chainId = parseInt(chainIdHex, 16)

    const requiredChainId = this.getRequiredChain(this.network, chainId)
    if (chainId !== requiredChainId) {
      const requiredNetworkName = ChainNames[requiredChainId] || ChainNames[3]
      throw new Error(`MetaMask not connected to correct network, please use ${requiredNetworkName} (Chain ID: ${requiredChainId})`)
    }

    if (!cipherTextHex || !cipherTextHex.length) {
      return null
    }

    const cipherText = ethers.utils.toUtf8String(cipherTextHex)
    const [version, nonce, ephemPublicKey, ciphertext] = cipherText.split('.')

    const cipher = {
      version,
      nonce,
      ephemPublicKey,
      ciphertext,
    }

    const decryptedCipherText = (await metamaskAPI.request({
      method: 'eth_decrypt',
      params: [JSON.stringify(cipher), defaultAccount],
    }) as string)?.trim()

    // legacy encrypted mnemonic doesnt include warning message.
    if (decryptedCipherText.match(MNEMONIC_MATCH_REGEX_LEGACY)) {
      return decryptedCipherText
    }

    // match line with prefix 'mnemonic: '
    const match = decryptedCipherText.match(MNEMONIC_MATCH_REGEX)

    // invalid cipher
    if (!match) {
      console.error('invalid account info retrieved from contract')
      console.error(decryptedCipherText)
      throw new Error('Retrieved invalid account on blockchain, please check console for more information.')
    }

    return match[1]?.trim()
  }

  private getRequiredChain(network: Network, currentChainId: number) {
    // set correct blockchain given the chain ID
    if (network === Network.MainNet) {
      if (currentChainId === 1) {
        this.blockchain = Blockchain.Ethereum
        return currentChainId
      }
      if (currentChainId === 56) {
        this.blockchain = Blockchain.BinanceSmartChain
        return currentChainId
      }
      return 1
    }

    if (currentChainId === 3) {
      this.blockchain = Blockchain.Ethereum
      return currentChainId
    }
    if (currentChainId === 97) {
      this.blockchain = Blockchain.BinanceSmartChain
      return currentChainId
    }

    // Deal with cases where users are logging in to devnet using mainnet chains
    if (currentChainId === 56) {
      return 97
    }
    return 3
  }

  private getContractHash(blockchain: Blockchain = this.blockchain) {
    const contractHash = CONTRACT_HASH[blockchain][this.network]
    if (!contractHash) {
      throw new Error(`MetaMask login is not supported on ${this.network} on ${blockchain}`)
    }

    return contractHash
  }
}
