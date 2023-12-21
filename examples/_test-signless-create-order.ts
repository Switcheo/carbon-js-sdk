import { BigNumber } from "bignumber.js";
import * as BIP39 from "bip39";
import dayjs from "dayjs";
import { OrderModule } from "../lib";
import { MsgCreateOrder } from "../lib/codec/order/tx";
import { CarbonTx } from "../lib/util";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.TestNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  // need to update this if expired and run authz_grant.ts to generate new grantee acc
  const granteeDetails = {
    mnemonics: "taste expire day chair flower royal pelican keep dismiss flush fragile subway",
    expiry: dayjs("2023-12-23T15:36:02.986Z").toDate(),
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

