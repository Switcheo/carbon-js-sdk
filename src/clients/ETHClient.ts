import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { EthNetworkConfig, NativeTokenHash, NetworkConfig, NetworkConfigProvider } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import { Models } from "@carbon-sdk/index";
import { AddressUtils } from "@carbon-sdk/util";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { Blockchain, blockchainForChainId } from "@carbon-sdk/util/blockchain";
import { TokenInitInfo, TokensWithExternalBalance } from "@carbon-sdk/util/external";
import { appendHexPrefix, stripHexPrefix } from "@carbon-sdk/util/generic";
import { BN_ZERO } from "@carbon-sdk/util/number";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import TokenClient from "./TokenClient";

export interface ETHClientOpts {
  configProvider: NetworkConfigProvider;
  tokenClient: TokenClient;
  blockchain: Blockchain;
}

interface ETHTxParams {
  gasPriceGwei: BigNumber;
  gasLimit: BigNumber;
  ethAddress: string;
  signer: ethers.Signer;
}

export interface BridgeParams {
  fromToken: Models.Token;
  toToken: Models.Token;
  amount: BigNumber;
  fromAddress: string;
  recoveryAddress: string;
  toAddress: string;
  feeAmount: BigNumber;
  gasPriceGwei: BigNumber;
  gasLimit: BigNumber;
  signer: ethers.Signer;
  signCompleteCallback?: () => void;
}

export interface LockParams extends ETHTxParams {
  address: Uint8Array;
  amount: BigNumber;
  token: Models.Token;
  signCompleteCallback?: () => void;
}
export interface ApproveERC20Params extends ETHTxParams {
  token: Models.Token;
  spenderAddress?: string;
  signCompleteCallback?: () => void;
}

export interface EthersTransactionResponse extends ethers.Transaction {
  wait: () => Promise<ethers.Transaction>;
}

export const FEE_MULTIPLIER = ethers.BigNumber.from(2);

type SupportedBlockchains = Blockchain.BinanceSmartChain | Blockchain.Ethereum | Blockchain.Arbitrum;

export class ETHClient {
  static SUPPORTED_BLOCKCHAINS = [Blockchain.BinanceSmartChain, Blockchain.Ethereum, Blockchain.Arbitrum];
  static BLOCKCHAIN_KEY = {
    [Blockchain.BinanceSmartChain]: "bsc",
    [Blockchain.Ethereum]: "eth",
    [Blockchain.Arbitrum]: "arbitrum",
  };

  private constructor(
    public readonly configProvider: NetworkConfigProvider,
    public readonly blockchain: Blockchain,
    public readonly tokenClient: TokenClient
  ) {}

  public static instance(opts: ETHClientOpts) {
    const { configProvider, blockchain, tokenClient } = opts;

    if (!ETHClient.SUPPORTED_BLOCKCHAINS.includes(blockchain)) throw new Error(`unsupported blockchain - ${blockchain}`);

    return new ETHClient(configProvider, blockchain, tokenClient);
  }

  public async getExternalBalances(api: CarbonSDK, address: string, whitelistDenoms?: string[]): Promise<TokensWithExternalBalance[]> {
    const tokenQueryResults = await api.token.getAllTokens();
    const lockProxyAddress = this.getLockProxyAddress().toLowerCase();
    const tokens = tokenQueryResults.filter(
      (token) =>
        blockchainForChainId(token.chainId.toNumber()) == this.blockchain &&
        token.tokenAddress.length == 40 &&
        token.bridgeAddress.toLowerCase() == stripHexPrefix(lockProxyAddress) &&
        (!whitelistDenoms || whitelistDenoms.includes(token.denom)) &&
        this.verifyChecksum(appendHexPrefix(token.tokenAddress))
    );
    const assetIds = tokens.map((token) => {
      return this.verifyChecksum(appendHexPrefix(token.tokenAddress));
    });

    const provider = this.getProvider();
    const contractAddress = this.getBalanceReaderAddress();
    const contract = new ethers.Contract(contractAddress, ABIs.balanceReader, provider);

    const checkSumAddr = ethers.utils.getAddress(address);
    const balances = await contract.getBalances(checkSumAddr, assetIds);
    const TokensWithExternalBalance: TokensWithExternalBalance[] = [];
    for (let i = 0; i < assetIds.length; i++) {
      if (!tokens[i]) continue;

      TokensWithExternalBalance.push({
        ...tokens[i],
        externalBalance: balances[i].toString(),
      });
    }

    return TokensWithExternalBalance;
  }

  public async approveERC20(params: ApproveERC20Params): Promise<EthersTransactionResponse> {
    const { token, gasPriceGwei, gasLimit, ethAddress, spenderAddress, signer } = params;
    const contractAddress = token.tokenAddress;

    const rpcProvider = this.getProvider();
    const contract = new ethers.Contract(contractAddress, ABIs.erc20, rpcProvider);

    const nonce = await rpcProvider.getTransactionCount(ethAddress);
    const approveResultTx = await contract.connect(signer).approve(spenderAddress ?? token.bridgeAddress, ethers.constants.MaxUint256, {
      nonce,
      gasPrice: gasPriceGwei.shiftedBy(9).toString(10),
      gasLimit: gasLimit.toString(10),
    });

    return approveResultTx;
  }

  public async checkAllowanceERC20(token: Models.Token, owner: string, spender: string) {
    const contractAddress = token.tokenAddress;
    const rpcProvider = this.getProvider();
    const contract = new ethers.Contract(contractAddress, ABIs.erc20, rpcProvider);
    const allowance = await contract.allowance(owner, spender);
    return new BigNumber(allowance.toString());
  }

  public async bridgeTokens(params: BridgeParams): Promise<EthersTransactionResponse> {
    const {
      fromToken,
      toToken,
      amount,
      toAddress,
      fromAddress,
      recoveryAddress,
      signer,
      gasPriceGwei,
      gasLimit,
      feeAmount,
      signCompleteCallback,
    } = params;

    const networkConfig = this.getNetworkConfig();
    const rpcProvider = this.getProvider();

    if (!recoveryAddress.match(/^swth[a-z0-9]{39}$/)) {
      throw new Error("Invalid recovery address");
    }

    const fromTokenId = fromToken.id;
    const fromTokenAddress = appendHexPrefix(fromToken.tokenAddress);
    const toTokenDenom = toToken.denom;

    const recoveryAddressHex = ethers.utils.hexlify(AddressUtils.SWTHAddress.getAddressBytes(recoveryAddress, CarbonSDK.Network.MainNet));

    const fromAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(fromTokenId));
    const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(toTokenDenom));
    const nonce = await rpcProvider.getTransactionCount(fromAddress);

    const contract = new ethers.Contract(this.getBridgeEntranceAddr(), ABIs.bridgeEntrance, rpcProvider);
    const feeAddress = appendHexPrefix(networkConfig.feeAddress);

    const tokenCreator = fromToken.creator;

    const targetAddressBytes = AddressUtils.SWTHAddress.getAddressBytes(tokenCreator, CarbonSDK.Network.MainNet);
    const targetProxyHash = ethers.utils.hexlify(targetAddressBytes);

    const ethAmount = fromToken.tokenAddress === NativeTokenHash ? amount : BN_ZERO;
    const bridgeResultTx = await contract.connect(signer).lock(
      fromTokenAddress, // the asset to deposit (from) (0x00 if eth)
      [
        targetProxyHash, // _targetProxyHash
        recoveryAddressHex, // _recoveryAddress
        fromAssetHash, // _fromAssetHash
        feeAddress, // _feeAddress
        toAddress, // _toAddress the L1 address to bridge to
        toAssetHash, // _toAssetHash
      ],
      [
        amount.toString(10), // amount
        feeAmount.toString(10), // fee amount
        amount.toString(10),
      ], // callAmount
      {
        gasLimit: gasLimit.toString(10),
        gasPrice: gasPriceGwei.shiftedBy(9).toString(10),
        nonce,
        value: ethAmount.toString(10),
      }
    );

    signCompleteCallback?.();

    return bridgeResultTx;
  }

  public async lockDeposit(params: LockParams): Promise<EthersTransactionResponse> {
    const { address, token, amount, gasPriceGwei, gasLimit, ethAddress, signer, signCompleteCallback } = params;

    if (gasLimit.lt(150000)) {
      throw new Error("Minimum gas required: 150,000");
    }

    const networkConfig = this.getNetworkConfig();

    const assetId = appendHexPrefix(token.tokenAddress);
    const targetProxyHash = appendHexPrefix(this.getTargetProxyHash(token));
    const feeAddress = appendHexPrefix(networkConfig.feeAddress);
    const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(token.id));

    const swthAddress = ethers.utils.hexlify(address);
    const contractAddress = this.getLockProxyAddress();

    const rpcProvider = this.getProvider();

    const nonce = await rpcProvider.getTransactionCount(ethAddress);
    const contract = new ethers.Contract(contractAddress, ABIs.lockProxy, rpcProvider);
    const lockResultTx = await contract.connect(signer).lock(
      assetId, // _assetHash
      targetProxyHash, // _targetProxyHash
      swthAddress, // _toAddress
      toAssetHash, // _toAssetHash
      feeAddress, // _feeAddress
      [
        // _values
        amount.toString(), // amount
        "0", // feeAmount
        amount.toString(), // callAmount
      ],
      {
        nonce,
        value: "0",
        gasPrice: gasPriceGwei.shiftedBy(9).toString(10),
        gasLimit: gasLimit.toString(10),

        // add tx value for ETH deposits, omit if ERC20 token
        ...(token.tokenAddress === "0000000000000000000000000000000000000000" && {
          value: amount.toString(),
        }),
      }
    );

    signCompleteCallback?.();

    return lockResultTx;
  }

  public async getDepositContractAddress(swthBech32Address: string, ownerEthAddress: string): Promise<string> {
    const network = this.getNetworkConfig().network;
    const addressBytes = SWTHAddress.getAddressBytes(swthBech32Address, network);
    const swthAddress = ethers.utils.hexlify(addressBytes);

    const provider = this.getProvider();
    const contractAddress = this.getLockProxyAddress();
    // logger("getDepositContractAddress lock proxy", contractAddress)
    const contract = new ethers.Contract(contractAddress, ABIs.lockProxy, provider);
    const walletAddress = await contract.getWalletAddress(ownerEthAddress, swthAddress, this.getWalletBytecodeHash());

    // logger("getDepositContractAddress", swthBech32Address, ownerEthAddress, walletAddress)

    return walletAddress;
  }

  public async sendDeposit(
    tokenWithExternalBalances: TokensWithExternalBalance,
    swthAddress: string,
    ethAddress: string,
    getSignatureCallback: (msg: string) => Promise<{ address: string; signature: string }>,
    overrideFee?: ethers.BigNumber
  ) {
    const depositAddress = await this.getDepositContractAddress(swthAddress, ethAddress);

    // TODO: Remove overrideFee when hydrogen feeQuote is deployed on production
    let feeAmount: ethers.BigNumber = await this.getDepositFeeAmount(tokenWithExternalBalances, depositAddress);
    if (overrideFee) {
      feeAmount = overrideFee;
    }

    const amount = ethers.BigNumber.from(tokenWithExternalBalances.externalBalance);
    if (amount.lt(feeAmount)) {
      return "insufficient balance";
    }

    const networkConfig = this.getNetworkConfig();

    const assetId = appendHexPrefix(tokenWithExternalBalances.tokenAddress);
    const targetProxyHash = appendHexPrefix(this.getTargetProxyHash(tokenWithExternalBalances));
    const feeAddress = appendHexPrefix(networkConfig.feeAddress);
    const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(tokenWithExternalBalances.id));
    const nonce = Math.floor(Math.random() * 1000000000); // random nonce to prevent replay attacks
    const message = ethers.utils.solidityKeccak256(
      ["string", "address", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"],
      ["sendTokens", assetId, targetProxyHash, toAssetHash, feeAddress, amount, feeAmount, nonce]
    );
    // logger("sendDeposit message", message)

    let signatureResult:
      | {
          owner: string;
          r: string;
          s: string;
          v: string;
        }
      | undefined;

    const { address, signature } = await getSignatureCallback(message);
    const signatureBytes = ethers.utils.arrayify(appendHexPrefix(signature));
    const rsv = ethers.utils.splitSignature(signatureBytes);

    // logger("sign result", address, signature)

    signatureResult = {
      owner: address,
      v: rsv.v.toString(),
      r: rsv.r,
      s: rsv.s,
    };

    const network = this.getNetworkConfig().network;
    const addressBytes = SWTHAddress.getAddressBytes(swthAddress, network);
    const swthAddressHex = ethers.utils.hexlify(addressBytes);
    const body = {
      owner_address: signatureResult.owner,
      swth_address: swthAddressHex,
      token_address: assetId,
      token_creator: targetProxyHash,
      token_denom: tokenWithExternalBalances.denom,
      token_id: tokenWithExternalBalances.id,
      amount: amount.toString(),
      fee_amount: feeAmount.toString(),
      fee_address: feeAddress,
      nonce: nonce.toString(),
      v: signatureResult.v,
      r: signatureResult.r,
      s: signatureResult.s,
      blockchain: this.blockchain,
    };

    const result = await fetch(this.getPayerUrl() + "/deposit", { method: "POST", body: JSON.stringify(body) });
    // logger("fetch result", result)
    return result;
  }

  public async getDepositFeeAmount(token: Models.Token, depositAddress: string) {
    const feeInfo = await this.tokenClient.getFeeInfo(token.denom);
    if (!feeInfo.deposit_fee) {
      throw new Error("unsupported token");
    }
    if (blockchainForChainId(token.chainId.toNumber()) !== this.blockchain) {
      throw new Error("unsupported token");
    }

    let feeAmount = ethers.BigNumber.from(feeInfo.deposit_fee);
    const walletContractDeployed = await this.isContract(depositAddress);
    if (!walletContractDeployed) {
      feeAmount = feeAmount.add(ethers.BigNumber.from(feeInfo.create_wallet_fee));
    }

    return feeAmount;
  }

  public async isContract(address: string) {
    const provider = this.getProvider();
    const code = await provider.getCode(address);
    // non-contract addresses should return 0x
    return code !== "0x";
  }

  public async retrieveERC20Info(address: string): Promise<TokenInitInfo> {
    const provider = this.getProvider();
    const contract = new ethers.Contract(address, ABIs.erc20, provider);
    const decimals = await contract.decimals();
    const name = await contract.name();
    const symbol = await contract.symbol();

    return { address, decimals, name, symbol };
  }

  public async formatWithdrawalAddress(address: string): Promise<string> {
    const isValidAddress = ethers.utils.isAddress(address);
    if (!isValidAddress) {
      throw new Error("invalid address");
    }
    const isContract = await this.isContract(address);
    if (isContract) {
      throw new Error("cannot withdraw to contract address");
    }
    return address.substr(2);
  }

  public getEthSigner(privateKey: ethers.utils.BytesLike): ethers.Wallet {
    return new ethers.Wallet(privateKey, this.getProvider());
  }

  public async sign(message: string, privateKey: ethers.utils.BytesLike) {
    const ethWallet = this.getEthSigner(privateKey);
    const messageBytes = ethers.utils.arrayify(message);
    const signatureBytes = await ethWallet.signMessage(messageBytes);
    const signature = ethers.utils.hexlify(signatureBytes).replace(/^0x/g, "");
    return {
      address: ethWallet.address,
      signature,
    };
  }

  /**
   * TargetProxyHash is a hash of token originator address that is used
   * for lockproxy asset registration and identification
   *
   * @param token
   */
  public getTargetProxyHash(token: Models.Token) {
    const networkConfig = this.getNetworkConfig();
    const addressBytes = SWTHAddress.getAddressBytes(token.creator, networkConfig.network);
    const addressHex = stripHexPrefix(ethers.utils.hexlify(addressBytes));
    return addressHex;
  }

  public getProvider() {
    return new ethers.providers.JsonRpcProvider(this.getProviderUrl());
  }

  public getNetworkConfig(): NetworkConfig {
    return this.configProvider.getConfig();
  }

  public getConfig(): EthNetworkConfig {
    const networkConfig = this.getNetworkConfig();
    const blockchain = this.blockchain as SupportedBlockchains;
    return networkConfig[ETHClient.BLOCKCHAIN_KEY[blockchain] as SupportedBlockchains];
  }

  public getPayerUrl() {
    return this.getConfig().payerURL;
  }

  public getProviderUrl() {
    return this.getConfig().rpcURL;
  }

  public getLockProxyAddress() {
    return this.getConfig().lockProxyAddr;
  }

  public getBalanceReaderAddress() {
    return this.getConfig().balanceReader;
  }

  public getWalletBytecodeHash() {
    return this.getConfig().byteCodeHash;
  }

  public getBridgeEntranceAddr() {
    return this.getConfig().bridgeEntranceAddr as string;
  }
  /**
   * verify that address is a valid checksum.
   * Returns checksum address if valid, returns undefined if invalid
   * @input address to be verified
   */
  public verifyChecksum(input: string): string | undefined {
    try {
      return ethers.utils.getAddress(input);
    } catch {}
  }
}

export default ETHClient;
