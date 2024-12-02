import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { OrderModule } from "../lib";
import { randomMnemonic } from "../lib/util/address";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");


  const randomMnemonics = randomMnemonic()

  const sdkInstance = await CarbonSDK.instanceWithMnemonic(randomMnemonics, { network: CarbonSDK.Network.LocalHost })
  const grantee = sdkInstance?.wallet?.bech32Address ?? ''
  dayjs.extend(utc)
  const expiry: Date = dayjs.utc().add(60, "hours").toDate()
  const params = {
    grantee,
    expiry,
    existingGrantee: false,
  }

  const result = await connectedSDK.grant.grantAuthAndAllowance(params);
  // Copy the following to populate the params in _test-signless-create-order.ts
  console.log('grant signless permission result', result)

  const granteeDetails = {
    mnemonics: randomMnemonics,
    expiry,
    enabled: true,
  }

  await connectedSDK.wallet.setGranteeDetails(granteeDetails)
  // retrieve market to use for order creation
  const marketsResult = await sdk.query.market.MarketAll({})

  if (!marketsResult.markets.length) {
    throw new Error("no markets found, create a market first");
  }
  const [market] = marketsResult.markets


  // create an order using Order Module
  // for better input type checking
  const moduleCallResult = await connectedSDK.order.create({
    market: market.name,
    orderType: OrderModule.OrderType.Limit,
    price: new BigNumber(100),
    quantity: new BigNumber(market.minQuantity),
    side: OrderModule.OrderSide.Buy,
  });
  console.log("call from module", moduleCallResult);
})().catch(console.error).finally(() => process.exit(0));

