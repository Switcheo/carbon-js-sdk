import { getBech32Prefix, NETWORK, Network as NetworkConfig } from "@lib/config";
import { Blockchain } from "@lib/constants";
import { ABIs } from "@lib/eth";
import { FeeResult, Token } from "@lib/models";
import { Network, TokenInitInfo } from "@lib/types";
import { Address } from "@lib/utils";
import { logger } from "@lib/utils/logger";
import fetch from "@lib/utils/fetch";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import stripHexPrefix from 'strip-hex-prefix';

export interface ETHClientOpts {
  network: Network,
  blockchain: Blockchain,
}

interface ETHTxParams {
  gasPriceGwei: BigNumber
  gasLimit: BigNumber
  ethAddress: string
  signer: ethers.Signer
}

export interface LockParams extends ETHTxParams {
  address: Uint8Array
  amount: BigNumber
  token: Token
  signCompleteCallback?: () => void
}
export interface ApproveERC20Params extends ETHTxParams {
  token: Token
  signCompleteCallback?: () => void
}

export const FEE_MULTIPLIER = ethers.BigNumber.from(2)


/**
 * stop-gap be refactored
 * aim: decouple with wallet instance
 */
const getTokens = async (network: Network) => {
  const url = `${NETWORK[network].REST_URL}/get_tokens`
  const response = await fetch(url)
  const body = await response.json()
  return body as Token[]
}

const getAddressBytes = (bech32Address: string, networkConfig: NetworkConfig) => {
  const prefix = getBech32Prefix(networkConfig, 'main')
  const address = Address.fromBech32(prefix, bech32Address)
  return address.toBytes()
}

/**
 * @deprecated 
 * use TradeHubSDK.eth
 */
export class ETHClient {
  static SUPPORTED_BLOCKCHAINS = [Blockchain.BinanceSmartChain, Blockchain.Ethereum]

  private constructor(
    public readonly network: Network,
    public readonly blockchain: Blockchain,
  ) { }

  public static instance(opts: ETHClientOpts) {
    const { network, blockchain } = opts

    if (!ETHClient.SUPPORTED_BLOCKCHAINS.includes(blockchain))
      throw new Error(`unsupported blockchain - ${blockchain}`)

    return new ETHClient(network, blockchain)
  }

  public async getExternalBalances(address: string, whitelistDenoms?: string[]) {
    const tokenList = await getTokens(this.network)
    const lockProxyAddress = this.getLockProxyAddress().toLowerCase()
    const tokens = tokenList.filter(token =>
      token.blockchain == this.blockchain &&
      token.asset_id.length == 40 &&
      ('0x' + token.lock_proxy_hash).toLowerCase() == lockProxyAddress &&
      (!whitelistDenoms || whitelistDenoms.includes(token.denom))
    )
    const assetIds = tokens.map(token => '0x' + token.asset_id)
    const provider = this.getProvider()
    const contractAddress = this.getBalanceReaderAddress()
    const contract = new ethers.Contract(contractAddress, ABIs.balanceReader, provider)

    const balances = await contract.getBalances(address, assetIds)
    for (let i = 0; i < tokens.length; i++) {
      (tokens[i] as any).external_balance = balances[i].toString()
    }

    return tokens
  }


  public async approveERC20(params: ApproveERC20Params) {
    const { token, gasPriceGwei, gasLimit, ethAddress, signer } = params
    const contractAddress = token.asset_id

    const rpcProvider = this.getProvider()
    const contract = new ethers.Contract(contractAddress, ABIs.erc20, rpcProvider)

    const nonce = await rpcProvider.getTransactionCount(ethAddress)
    const approveResultTx = await contract.connect(signer).approve(
      token.lock_proxy_hash,
      ethers.constants.MaxUint256,
      {
        nonce,
        gasPrice: gasPriceGwei.shiftedBy(9).toString(10),
        gasLimit: gasLimit.toString(10),
      },
    )

    return approveResultTx
  }

  public async checkAllowanceERC20(token: Token, owner: string, spender: string) {
    const contractAddress = token.asset_id
    const rpcProvider = this.getProvider()
    const contract = new ethers.Contract(contractAddress, ABIs.erc20, rpcProvider)
    const allowance = await contract.allowance(owner, spender)
    return new BigNumber(allowance.toString())
  }

  public async lockDeposit(params: LockParams) {
    const { address, token, amount, gasPriceGwei, gasLimit, ethAddress, signer } = params

    if (gasLimit.lt(150000)) {
      throw new Error('Minimum gas required: 150,000')
    }

    const networkConfigs = NETWORK[this.network]

    const assetId = `0x${token.asset_id}`
    const targetProxyHash = `0x${this.getTargetProxyHash(token)}`
    const feeAddress = `0x${networkConfigs.FEE_ADDRESS}`
    const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(token.denom))

    const swthAddress = ethers.utils.hexlify(address)
    const contractAddress = this.getLockProxyAddress()

    const rpcProvider = this.getProvider()

    const nonce = await rpcProvider.getTransactionCount(ethAddress)
    const contract = new ethers.Contract(contractAddress, ABIs.lockProxy, rpcProvider)
    const lockResultTx = await contract.connect(signer).lock( // eslint-disable-line no-await-in-loop
      assetId, // _assetHash
      targetProxyHash, // _targetProxyHash
      swthAddress, // _toAddress
      toAssetHash, // _toAssetHash
      feeAddress, // _feeAddress
      [ // _values
        amount.toString(), // amount
        '0', // feeAmount
        amount.toString(), // callAmount
      ],
      {
        nonce,
        value: '0',
        gasPrice: gasPriceGwei.shiftedBy(9).toString(10),
        gasLimit: gasLimit.toString(10),

        // add tx value for ETH deposits, omit if ERC20 token
        ...token.asset_id === '0000000000000000000000000000000000000000' && {
          value: amount.toString(),
        },
      },
    )

    return lockResultTx
  }

  public async getDepositContractAddress(swthBech32Addres: string, ownerEthAddress: string) {
    const networkConfigs = NETWORK[this.network]
    const addressBytes = getAddressBytes(swthBech32Addres, networkConfigs)
    const swthAddress = ethers.utils.hexlify(addressBytes)

    const provider = this.getProvider()
    const contractAddress = this.getLockProxyAddress()
    logger('getDepositContractAddress lock proxy', contractAddress)
    const contract = new ethers.Contract(contractAddress, ABIs.lockProxy, provider)
    const walletAddress = await contract.getWalletAddress(ownerEthAddress, swthAddress, this.getWalletBytecodeHash())

    logger('getDepositContractAddress', swthBech32Addres, ownerEthAddress, walletAddress)

    return walletAddress
  }

  public async sendDeposit(token, swthAddress: string, ethAddress: string, getSignatureCallback?: (msg: string) => Promise<{ address: string, signature: string }>) {
    logger('sendDeposit', token, swthAddress, ethAddress)
    const depositAddress = await this.getDepositContractAddress(swthAddress, ethAddress)
    const feeAmount = await this.getDepositFeeAmount(token, depositAddress)
    const amount = ethers.BigNumber.from(token.external_balance)
    if (amount.lt(feeAmount.mul(FEE_MULTIPLIER))) {
      return 'insufficient balance'
    }

    const networkConfigs = NETWORK[this.network]

    const assetId = '0x' + token.asset_id
    const targetProxyHash = '0x' + this.getTargetProxyHash(token)
    const feeAddress = '0x' + networkConfigs.FEE_ADDRESS
    const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(token.denom))
    const nonce = Math.floor(Math.random() * 1000000000) // random nonce to prevent replay attacks
    const message = ethers.utils.solidityKeccak256(
      ['string', 'address', 'bytes', 'bytes', 'bytes', 'uint256', 'uint256', 'uint256'],
      ['sendTokens', assetId, targetProxyHash, toAssetHash, feeAddress, amount, feeAmount, nonce]
    )
    logger('sendDeposit message', message)

    let signatureResult: {
      owner: string
      r: string
      s: string
      v: string
    } | undefined

    const { address, signature } = await getSignatureCallback(message)
    const signatureBytes = ethers.utils.arrayify('0x' + signature)
    const rsv = ethers.utils.splitSignature(signatureBytes)

    logger('sign result', address, signature)

    signatureResult = {
      owner: address,
      v: rsv.v.toString(),
      r: rsv.r,
      s: rsv.s,
    }

    const addressBytes = getAddressBytes(swthAddress, networkConfigs)
    const swthAddressHex = ethers.utils.hexlify(addressBytes)
    const body = {
      OwnerAddress: signatureResult.owner,
      SwthAddress: swthAddressHex,
      AssetHash: assetId,
      TargetProxyHash: targetProxyHash,
      ToAssetHash: toAssetHash,
      Amount: amount.toString(),
      FeeAmount: feeAmount.toString(),
      FeeAddress: feeAddress,
      Nonce: nonce.toString(),
      V: signatureResult.v,
      R: signatureResult.r,
      S: signatureResult.s,
    }

    const result = await fetch(
      this.getPayerUrl() + '/deposit',
      { method: 'POST', body: JSON.stringify(body) }
    )
    logger('fetch result', result)
    return result
  }

  public async getDepositFeeAmount(token: Token, depositAddress: string) {
    const feeInfo = await this.getFeeInfo(token.denom)
    if (!feeInfo.details?.deposit?.fee) {
      throw new Error('unsupported token')
    }
    if (token.blockchain !== this.blockchain) {
      throw new Error('unsupported token')
    }

    let feeAmount = ethers.BigNumber.from(feeInfo.details.deposit.fee)
    const walletContractDeployed = await this.isContract(depositAddress)
    if (!walletContractDeployed) {
      feeAmount = feeAmount.add(ethers.BigNumber.from(feeInfo.details.createWallet.fee))
    }

    return feeAmount
  }


  public async getFeeInfo(denom: string) {
    const networkConfigs = NETWORK[this.network]
    const url = `${networkConfigs.FEE_URL}/fees?denom=${denom}`
    const result = await fetch(url).then(res => res.json()) as FeeResult
    return result
  }

  public async isContract(address: string) {
    const provider = this.getProvider()
    const code = await provider.getCode(address)
    // non-contract addresses should return 0x
    return code != '0x'
  }

  public async retrieveERC20Info(address: string): Promise<TokenInitInfo> {
    const provider = this.getProvider()
    const contract = new ethers.Contract(address, ABIs.erc20, provider)
    const decimals = await contract.decimals()
    const name = await contract.name()
    const symbol = await contract.symbol()

    return { address, decimals, name, symbol }
  }

  /**
   * TargetProxyHash is a hash of token originator address that is used
   * for lockproxy asset registration and identification
   * 
   * @param token 
   * @param networkConfig 
   */
  public getTargetProxyHash(token: Token) {
    const networkConfig = NETWORK[this.network]
    const prefix = getBech32Prefix(networkConfig, 'main')
    const address = Address.fromBech32(prefix, token.originator)
    const addressBytes = address.toBytes()
    const addressHex = stripHexPrefix(ethers.utils.hexlify(addressBytes))
    return addressHex
  }

  public getProvider() {
    return new ethers.providers.JsonRpcProvider(this.getProviderUrl())
  }

  public getPayerUrl() {
    return clientConfig[this.blockchain][this.network].payerUrl
  }

  public getProviderUrl() {
    return clientConfig[this.blockchain][this.network].providerUrl
  }

  public getLockProxyAddress() {
    return clientConfig[this.blockchain][this.network].lockProxyAddress
  }

  public getBalanceReaderAddress() {
    return clientConfig[this.blockchain][this.network].balanceReaderAddress
  }

  public getWalletBytecodeHash() {
    return clientConfig[this.blockchain][this.network].walletBytecodeHash
  }
}

interface ClientNetworkConfig {
  providerUrl: string
  balanceReaderAddress: string
  lockProxyAddress: string
  payerUrl: string
  walletBytecodeHash: string
}
interface BlockchainConfig {
  [network: string]: ClientNetworkConfig
}
interface ETHClientConfig {
  [blockchain: string]: BlockchainConfig
}

export const clientConfig: ETHClientConfig = {
  [Blockchain.Ethereum]: {
    [Network.LocalHost]: {
      providerUrl: NETWORK[Network.LocalHost].ETH_URL,
      payerUrl: NETWORK[Network.LocalHost].ETH_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.LocalHost].ETH_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.LocalHost].ETH_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.LocalHost].ETH_WALLET_BYTECODE_HASH,
    },
    [Network.DevNet]: {
      providerUrl: NETWORK[Network.DevNet].ETH_URL,
      payerUrl: NETWORK[Network.DevNet].ETH_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.DevNet].ETH_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.DevNet].ETH_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.DevNet].ETH_WALLET_BYTECODE_HASH,
    },
    [Network.TestNet]: {
      providerUrl: NETWORK[Network.TestNet].ETH_URL,
      payerUrl: NETWORK[Network.TestNet].ETH_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.TestNet].ETH_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.TestNet].ETH_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.TestNet].ETH_WALLET_BYTECODE_HASH,
    },
    [Network.MainNet]: {
      providerUrl: NETWORK[Network.MainNet].ETH_URL,
      payerUrl: NETWORK[Network.MainNet].ETH_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.MainNet].ETH_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.MainNet].ETH_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.MainNet].ETH_WALLET_BYTECODE_HASH,
    },
  },
  [Blockchain.BinanceSmartChain]: {
    [Network.LocalHost]: {
      providerUrl: NETWORK[Network.LocalHost].BSC_URL,
      payerUrl: NETWORK[Network.LocalHost].BSC_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.LocalHost].BSC_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.LocalHost].BSC_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.LocalHost].BSC_WALLET_BYTECODE_HASH,
    },
    [Network.DevNet]: {
      providerUrl: NETWORK[Network.DevNet].BSC_URL,
      payerUrl: NETWORK[Network.DevNet].BSC_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.DevNet].BSC_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.DevNet].BSC_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.DevNet].BSC_WALLET_BYTECODE_HASH,
    },
    [Network.TestNet]: {
      providerUrl: NETWORK[Network.TestNet].BSC_URL,
      payerUrl: NETWORK[Network.TestNet].BSC_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.TestNet].BSC_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.TestNet].BSC_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.TestNet].BSC_WALLET_BYTECODE_HASH,
    },
    [Network.MainNet]: {
      providerUrl: NETWORK[Network.MainNet].BSC_URL,
      payerUrl: NETWORK[Network.MainNet].BSC_PAYER_URL,
      balanceReaderAddress: NETWORK[Network.MainNet].BSC_BALANCE_READER,
      lockProxyAddress: NETWORK[Network.MainNet].BSC_LOCKPROXY,
      walletBytecodeHash: NETWORK[Network.MainNet].BSC_WALLET_BYTECODE_HASH,
    },
  }
} as const
