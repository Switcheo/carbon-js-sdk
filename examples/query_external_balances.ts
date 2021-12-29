import * as BIP39 from "bip39";
import { AddressUtils, CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  if (!connectedSDK.wallet.mnemonic) {
    throw new Error("No mnemonic found. Please ensure you have provided a valid mnemonic.");
  }

  // query eth external balances
  const ethAddress = AddressUtils.ETHAddress.generateAddress(connectedSDK.wallet.mnemonic);
  const ethDepositAddr = await sdk.eth.getDepositContractAddress(connectedSDK.wallet.bech32Address, ethAddress);
  const ethBalances = await sdk.eth.getExternalBalances(sdk, ethDepositAddr);
  console.log("ethBalances", ethBalances);

  // query bsc external balances
  // use ETHAddress to generate address because bsc and eth addresses are similar
  const bscAddress = AddressUtils.ETHAddress.generateAddress(connectedSDK.wallet.mnemonic);
  const bscdepositAddr = await sdk.bsc.getDepositContractAddress(connectedSDK.wallet.bech32Address, bscAddress);
  const bscBalances = await sdk.bsc.getExternalBalances(sdk, bscdepositAddr);
  console.log("bscBalances", bscBalances);

  // query neo external balances
  const neoAddress = AddressUtils.NEOAddress.generateAddress(connectedSDK.wallet.mnemonic);
  const neoBalances = await sdk.neo.getExternalBalances(sdk, neoAddress, sdk.networkConfig.neo.rpcURL);
  console.log("neoBalances", neoBalances);
})().catch(console.error).finally(() => process.exit(0));

