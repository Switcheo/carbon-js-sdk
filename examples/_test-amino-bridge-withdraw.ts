import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import Long from "long";
import { BridgeModule, CarbonSDK, CoinModule } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instanceWithMnemonic(mnemonics, { network: CarbonSDK.Network.LocalHost });
  console.log('sdk initialized')

  const externalTokensResult = await sdk.query.bridge.ExternalTokenAll({ bridgeId: new Long(0), chainId: '', denom: '' })

  const externalToken = externalTokensResult.externalTokens[0]
  const externalTokenCarbonDenom = externalToken?.denom ?? ''

  const body = JSON.stringify({
    address: sdk?.wallet?.bech32Address,
    coins: ['1000000000swth'],
  })
  await fetch(sdk.networkConfig.faucetUrl, { method: 'POST', body })
  console.log('Minted SWTH for gas')

  const tokenDp = sdk.token.getDecimals(externalTokenCarbonDenom) ?? 0
  const params: CoinModule.MintTokenParams = {
    amount: new BigNumber(10000).shiftedBy(tokenDp),
    denom: externalTokenCarbonDenom,
  }
  const mintBrdgToken = await sdk.coin.mintToken(params)
  console.log('Minted brdg tokens', mintBrdgToken)

  const balancesResult = await sdk.query.coin.Balances({ address: sdk.wallet.bech32Address })
  console.log('balances:', balancesResult)

  const withdrawParams: BridgeModule.WithdrawParams = {
    connectionId: externalToken?.connectionId ?? '',
    receiver: sdk.wallet.evmHexAddress,
    tokenDenom: externalToken?.denom ?? '',
    tokenAmount: new BigNumber(10).shiftedBy(tokenDp),
    relayDenom: 'swth',
    relayAmount: new BigNumber(100),
    expirySeconds: 1000,
  }
  const result = await sdk.bridge.withdraw(withdrawParams)

  console.log('withdraw tokens:', result);
})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));
