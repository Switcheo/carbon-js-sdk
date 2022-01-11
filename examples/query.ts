import Long from "long";
import { CarbonSDK, CarbonTx, GenericUtils } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  // GRPC Queries

  // query txn fees
  const fees = await sdk.query.fee.MsgFeeAll({})
  console.log("fees", fees);

  // query all tokens
  const tokens = await sdk.query.coin.TokenAll({
    pagination: {
      limit: new Long(100),
      offset: new Long(0),
      key: new Uint8Array(),
      countTotal: true,
      reverse: false,
    },
  });
  console.log("tokens", tokens);

  // query all token mappings
  const mappings = await sdk.query.coin.WrapperMappings({});
  console.log("mappings", mappings);

  // query all markets
  const markets = await sdk.query.market.MarketAll({});
  console.log("markets", markets);

  // query all orders;
  const orders = await sdk.query.order.OrderAll({
    address: "",
    market: "",
    orderType: "",
    orderStatus: "",
  });
  console.log("orders", orders);

  // query all profiles with pagination
  const profiles = await sdk.query.profile.ProfileAll({
    username: "",
  });
  console.log("profiles", profiles);

  // Tendermint Queries
  // Note: sdk.query.chain is an instance of BlockchainClient
  // BlockchainClient is a wrapper of StargateClient
  // StargateClient is a wrapper of Tendermint34Client

  // query latest block
  const block = await sdk.query.chain.getBlock();
  console.log("block", block)
  console.log("block tx hashes", block.txs.map(GenericUtils.computeTxHash))

  const txHash = GenericUtils.computeTxHash(block.txs[0])!;

  // get tx
  const txs = await sdk.query.chain.searchTx({
    tags: [{
      key: "tx.hash",
      value: txHash,
    }]
  })
  const [tx] = txs; 
  console.log("tx", tx)
  console.log("tx hash", tx.hash)
  console.log("tx events", JSON.parse(tx.rawLog))

  // decode tx
  const decodedTx = CarbonTx.decode(tx.tx)
  console.log("tx decoded", JSON.stringify(decodedTx))
  console.log("tx msgs", decodedTx?.body?.messages)
})().catch(console.error).finally(() => process.exit(0));
