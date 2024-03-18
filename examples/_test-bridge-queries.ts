import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      restUrl: 'http://203.118.10.75:30002',
      faucetUrl: 'http://203.118.10.75:30003',
      wsUrl: 'wss://203.118.10.75:30004',
      grpcUrl: 'http://203.118.10.75:30005',
      grpcWebUrl: 'http://203.118.10.75:30002',
      tmRpcUrl: 'http://203.118.10.75:30007',
      evmJsonRpcUrl: 'http://203.118.10.75:30008',
      evmWsUrl: 'wss://203.118.10.75:30009',
    },
  });
  console.log('query bridge', sdk.query.bridge)
  const bridgeStateAll = await sdk.query.bridge.BridgeStateAll({})
  console.log('bridge state all', bridgeStateAll.bridgeStates)
  const connectionAll = await sdk.query.bridge.ConnectionAll({ bridgeId: '' })
  console.log('connection all', connectionAll)
  const externalTokenAll = await sdk.query.bridge.ExternalTokenAll({ bridgeId: '', chainId: '', denom: '' })
  console.log('external token all', externalTokenAll)
  const executableContractsAll = await sdk.query.bridge.ExecutableContractsAll({ bridgeId: '', chainId: '' })
  console.log('executable contracts all', executableContractsAll)
})().catch(console.error).finally(() => process.exit(0));

