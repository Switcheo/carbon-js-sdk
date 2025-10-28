import { isDeliverTxSuccess, DeliverTxResponse } from '@cosmjs/stargate';
import axios from "axios";
import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

const mintAmt = new BigNumber(100000)

const newNetwork = CarbonSDK.Network.MainNet;

const mintAccount = process.env.MNEMONICS ?? BIP39.generateMnemonic();

const networkConfig = {
  Bech32Prefix: 'swth',
  // // localhost
  // tmRpcUrl: 'http://localhost:26657',
  // tmWsUrl: 'ws://localhost:26657',
  // restUrl: 'http://localhost:1317',
  // grpcUrl: 'localhost:9090',
  // faucetUrl: 'http://localhost:4500',

  // orbix mainnet
  tmRpcUrl: 'https://orbix-tm-api.carbon.network',
  tmWsUrl: 'wss://orbix-tm-api.carbon.network',
  restUrl: 'https://orbix-api.carbon.network',
  grpcUrl: 'orbix-grpc.carbon.network',
  faucetUrl: 'https://orbix-faucet.carbon.network',
};

// tokens to mint:
const tokensName = ['btc', 'eth', 'swth', 'usd'];
// these are tokens not allowed to be minted
const tokensExcluded = ['clpt/', 'cibt/'];

(async () => {
  const sdk = await CarbonSDK.instance({
    network: newNetwork,
    config: networkConfig,
  });

  let connectedSDK = await sdk.connectWithMnemonic(mintAccount);

  console.log("");
  console.log("=============== mint for wallet ================");
  console.log(`address: ${connectedSDK.wallet.bech32Address}`);
  console.log("");

  // https://orbix-api.carbon.network/carbon/coin/v1/tokens
  const response = await sdk.query.coin.TokenAll({});
  const tokensArr = response.tokens
    .filter(token => {
      const nameMatch = tokensName
        .some(term => token.name.toLocaleLowerCase().includes(term));

      const isExcluded = tokensExcluded
        .some(prefix => token.denom.toLocaleLowerCase().startsWith(prefix.toLocaleLowerCase()));

      return nameMatch && !isExcluded;
    });


  console.log('minting: ', tokensArr.map(({name, denom, symbol}) => ({name, denom, symbol})));

  // init account with faucet
  await tryMintTokens(connectedSDK);

  connectedSDK = await sdk.connectWithMnemonic(mintAccount);

  for (let ii = 0; ii < tokensArr.length; ii++) {
    const indivToken = tokensArr[ii];
    const tokenDec = indivToken.decimals.toNumber() ?? 0;
    const result = await connectedSDK.coin.mintToken({
      creator: connectedSDK.wallet.bech32Address,
      denom: indivToken.denom,
      amount: mintAmt.shiftedBy(tokenDec),
      to: connectedSDK.wallet.bech32Address,
    }) as DeliverTxResponse;

    if (isDeliverTxSuccess(result)) {
      console.log(`${indivToken.denom} mint success`);
    }
  }

  console.log("");

})().catch(console.error).finally(() => process.exit(0));

async function tryMintTokens (sdk) {
  const body = JSON.stringify({
    address: sdk?.wallet?.bech32Address,
    coins: [
      "1000000000swth",
    ],
  });

  return axios.post(
    networkConfig.faucetUrl,
    body,
  );
}
