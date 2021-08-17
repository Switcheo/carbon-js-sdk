import { StargateClient } from "@cosmjs/stargate";
import Long from "long";
import { CarbonSDK, CarbonTx, GenericUtils } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      rpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  // GRPC Queries
  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({});
  console.log("tokens", tokens);

  // query all token mappings
  const mappings = await sdk.query.coin.WrapperMappings({});
  console.log("mappings", mappings);

  // query all markets
  const markets = await sdk.query.market.MarketAll({});
  console.log("markets", markets);

  // query all orders;
  const orders = await sdk.query.order.OrderAll({});
  console.log("orders", orders);

  // query all profiles with pagination
  const profiles = await sdk.query.profile.ProfileAll({
    pagination: {
      limit: Long.fromNumber(1),
      countTotal: true,
      offset: Long.fromNumber(0),
      key: Buffer.alloc(0),
    },
  });
  console.log("profiles", profiles);

  // Tendermint Queries
  console.log('connect stargate')
  // TODO: refactor stargate client init, add to CarbonSDK
  const stargateClient: StargateClient = new (StargateClient as any)(sdk.tmClient)

  // query latest block
  const block = await stargateClient.getBlock();
  console.log("block", block)
  console.log("block tx hashes", block.txs.map(GenericUtils.computeTxHash))

  // get tx
  const result = await sdk.tmClient.txSearchAll({
    query: "tx.height=" + block.header.height
  })
  console.log("tx", result.txs[0])
  console.log("tx events", result.txs[0].result.events)
  console.log("tx hash", GenericUtils.toTxHash(result.txs[0].hash))

  // decode tx
  const decodedTx = CarbonTx.decode(result.txs[0].tx)
  console.log("tx decoded", JSON.stringify(decodedTx))
  console.log("tx msgs", decodedTx?.body?.messages)
})().catch(console.error).finally(() => process.exit(0));
