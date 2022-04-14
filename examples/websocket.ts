import * as BIP39 from "bip39";
import { WSConnectorTypes } from "../lib";
import { CarbonSDK, WSConnector } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
  });

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected wallet:", connectedSDK.wallet.bech32Address);

  const wsConnector = new WSConnector({
    endpoint: sdk.networkConfig.wsUrl,
    timeoutConnect: 5000,
    onStatusChange: (connected: boolean) => {
      console.log(`ws connection changed: ${connected ? 'connected' : 'disconnected'}`)
    },
  });

  await wsConnector.connect();

  console.log(await wsConnector.request(WSConnectorTypes.WSRequest.Positions, {
    address: connectedSDK.wallet.bech32Address,
  }));
  
  await wsConnector.disconnect();
})().catch(console.error).finally(() => process.exit(0));
