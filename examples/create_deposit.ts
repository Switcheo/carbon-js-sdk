import { AddressUtils } from "../lib";
import { Network } from "../lib/constant";

const { ethers, Wallet } = require("ethers")
const { BigNumber } = require('bignumber.js')

// Eth: {
//   RpcURL: 'https://eth-ropsten.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut',
//   WsURL: 'wss://ropsten.dagger.matic.network',
//   PayerURL: http://13.251.218.38:7001,
//   LockProxyAddr: '0x91f453851e297524749a740d53cf54a89231487c',
//   BalanceReader: '0xa74c81866c5bfff6684aa8edf35a5de8c3b9f173',
//   ByteCodeHash: '0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3',
// },

// Bsc: {
//   RpcURL: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
//   WsURL: '',
//   PayerURL: http://13.251.218.38:8001,
//   LockProxyAddr: '0x7c2b13d656d222cb79670e301dd826dc5b8dc20c',
//   BalanceReader: '0x25c22f65cb820e787a13951f295d0b86db7b07b5',
//   ByteCodeHash: '0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1',
// },

// Neo: {
//   RpcURL: 'https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com',
//   WrapperScriptHash: 'f46719e2d16bf50cddcef9d4bbfece901f73cbb6',
// },

// Zil: {
//   RpcURL: 'https://dev-api.zilliqa.com',
//   LockProxyAddr: '0xa5484b227f35f5e192e444146a3d9e09f4cdad80',
//   ChainId: 333,
// }

const mnemonic = ""
const privateKey = '6dfe92e14189ffeff2f4b1370da668623bc6068b6c7e47b9e26e7181e7acea77'

// const tokenContractAddress = "0xd8c2f5ec90ef36552faefb3f700eb3474b5a8c38";
const lockProxyContractAddress = "0x91f453851e297524749a740d53cf54a89231487c";

const LOCK_PROXY_ABI = [{ "inputs": [{ "internalType": "address", "name": "_assetHash", "type": "address" }, { "internalType": "bytes", "name": "_targetProxyHash", "type": "bytes" }, { "internalType": "bytes", "name": "_toAddress", "type": "bytes" }, { "internalType": "bytes", "name": "_toAssetHash", "type": "bytes" }, { "internalType": "bytes", "name": "_feeAddress", "type": "bytes" }, { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }], "name": "lock", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }];
const ERC20_ABI = [{ "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

// const wallet = ethers.Wallet.fromMnemonic(mnemonic);
const wallet = new Wallet(privateKey)

// BSC testnet RPC endpoint
// const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s2.binance.org:8545");
const provider = new ethers.providers.JsonRpcProvider("https://eth-ropsten.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut");
const walletWithProvider = wallet.connect(provider);

// public async lockEthDeposit(params: LockEthParams) {
//   const { token, amount, gasPriceGwei, gasLimit, ethAddress, signer } = params

//   if (gasLimit.lt(150000)) {
//     throw new Error('Minimum gas required: 150,000')
//   }

//   const assetId = 0x${token.asset_id}
//   const targetProxyHash = 0x${this.getTargetProxyHash(token)}
//   const feeAddress = 0x${this.network.FEE_ADDRESS}
//   const toAssetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(token.denom))

//   const swthAddress = ethers.utils.hexlify(this.address)
//   const contractAddress = this.network.ETH_LOCKPROXY

//   const ethProvider = this.getEthProvider()

//   const nonce = await ethProvider.getTransactionCount(ethAddress)
//   const contract = new ethers.Contract(contractAddress, LOCK_PROXY_ABI, ethProvider)
//   const lockResultTx = await contract.connect(signer).lock( // eslint-disable-line no-await-in-loop
//     assetId, // _assetHash
//     targetProxyHash, // _targetProxyHash
//     swthAddress, // _toAddress
//     toAssetHash, // _toAssetHash
//     feeAddress, // _feeAddress
//     [ // _values
//       amount.toString(), // amount
//       '0', // feeAmount
//       amount.toString(), // callAmount
//     ],
//     {
//       nonce,
//       value: '0',
//       gasPrice: ethers.BigNumber.from(gasPriceGwei.shiftedBy(9).toString()),
//       gasLimit: ethers.BigNumber.from(gasLimit.toString()),

//       // add tx value for ETH deposits, omit if ERC20 token
//       ...token.asset_id === '0000000000000000000000000000000000000000' && {
//         value: amount.toString(),
//       },
//     },
//   )

//   return lockResultTx
// }

;(async () => {
  console.log("caller address", wallet.address);
  // const tokenContract = new ethers.Contract(tokenContractAddress, ERC20_ABI, provider);

  // const balance = await tokenContract.balanceOf(wallet.address);
  // console.log("token balance", balance.toString());

  // const allowance: ethers.BigNumber = await tokenContract.allowance(wallet.address, lockProxyContractAddress);
  // console.log("token allowance", allowance.toString());


  // // check token allowance
  // if (allowance.isZero()) {
  //   console.log("approving max possible amount for", lockProxyContractAddress);
  //   const tokenContractWithSigner = tokenContract.connect(walletWithProvider);
  //   const approveTx = await tokenContractWithSigner.approve(
  //     lockProxyContractAddress,
  //     ethers.constants.MaxUint256,
  //     {
  //       gasLimit: 1000000,
  //     },
  //   );
  //   console.log("approve tx", approveTx.hash);
  //   console.log("waiting for confirmation");
  //   await approveTx.wait();

  //   const allowance: ethers.BigNumber = await tokenContract.allowance(wallet.address, lockProxyContractAddress);
  //   console.log("token allowance", allowance.toString());
  // }

  // execute lock proxy
  const contract = new ethers.Contract(lockProxyContractAddress, LOCK_PROXY_ABI, provider);
  const contractWithSigner = contract.connect(walletWithProvider);

  const amount = ethers.utils.parseEther('0.01')
  console.log(amount.toString())
  console.log(parseInt(amount.toString()))

  const toAddress = 'swth1kvyzg4rz3m66wzpqla4lfa20m2jx9fuqmjnpme'
  // const tokenDenom = 'eth.1.2.4730ca'
  const tokenDenom = 'eth1'

  const swthAddress = ethers.utils.hexlify(AddressUtils.SWTHAddress.getAddressBytes(toAddress, Network.DevNet))
  const assetHash = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(tokenDenom))
  const feeAddress = 0x989761fb0c0eb0c05605e849cae77d239f98ac7f

  const ethAssetAddress = '0x0000000000000000000000000000000000000000'

  const tokenCreator = 'swth1ex0e3g7zkwxntcw4qv803rm7yjsc9grjynfad6'
  const targetProxyHash = ethers.utils.hexlify(AddressUtils.SWTHAddress.getAddressBytes(tokenCreator, Network.DevNet))
  console.log(targetProxyHash)

  const tx = await contractWithSigner.lock(
    ethAssetAddress, // asset hash (0x00 if eth)
    targetProxyHash, //_targetProxyHash
    swthAddress, // _toAddress
    assetHash, // _toAssetHash
    feeAddress, // _feeAddress
    [amount.toString(), '0', amount.toString()],
    {
      gasLimit: 1000000,
      value: amount.toString(),
    });

  console.log(tx.hash);
})().catch(console.error).finally(() => process.exit(0))

function stripHexPrefix(input: any) {
  return input.slice(0, 2) === "0x" ? input.slice(2) : input
};