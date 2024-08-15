import * as BIP39 from "bip39";
import Long from "long";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });

  const bridgeStateAll = await sdk.query.bridge.BridgeStateAll({})
  console.log('bridge state all', bridgeStateAll.bridgeStates)
  const connectionAll = await sdk.query.bridge.ConnectionAll({ bridgeId: new Long(0) })
  console.log('connection all', connectionAll)

  // const testDepositDenom = 'brdg/114ee976b51b7bdff465ced2c489e77cd7f03c56f048aaf6e3629361cd529866'
  // const externalTokenAll = await sdk.query.bridge.ExternalTokenAll({ bridgeId: new Long(0), chainId: '', denom: '' })
  // console.log('external token all', externalTokenAll)

  // const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  // const connectedSDK = await CarbonSDK.instanceWithMnemonic(mnemonics, {
  //   network: CarbonSDK.Network.DevNet,
  // })
  // const depositTokenExternal = externalTokenAll.externalTokens.find((token) => token.denom === testDepositDenom)
  // console.log('deposit token external address: ', depositTokenExternal?.externalAddress)
  // const evmAddress = connectedSDK.wallet.evmHexAddress
  // console.log('evmAddress', evmAddress)
  // // Mint some balance on external address before proceeding

  // const connection = connectionAll.connections.find((connection) => connection.connectionId === depositTokenExternal?.connectionId)
  // const tokenGatewayAddress = connection?.gatewayAddress
  // console.log('token gateway address', tokenGatewayAddress)

})().catch(console.error).finally(() => process.exit(0));

