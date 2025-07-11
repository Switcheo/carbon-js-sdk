import * as BIP39 from "bip39";
import { AddressUtils, CarbonSDK, EVMChain } from "./_sdk";
import "./_setup";
import { ETHClient } from "../lib/clients";

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
  const ethClient = ETHClient.instance({
    configProvider: sdk,
    tokenClient: sdk.token,
    blockchain: "Ethereum" as EVMChain,
    rpcURL: sdk.networkConfig.eth.rpcURL,
  })
  const ethDepositAddr = await ethClient.getDepositContractAddress(connectedSDK.wallet.bech32Address, ethAddress);
  const ethBalances = await ethClient.getExternalBalances(sdk, ethDepositAddr);
  console.log("ethBalances", ethBalances);

  // query bsc external balances
  // use ETHAddress to generate address because bsc and eth addresses are similar
  const bscAddress = AddressUtils.ETHAddress.generateAddress(connectedSDK.wallet.mnemonic);
  const bscClient = ETHClient.instance({
    configProvider: sdk,
    tokenClient: sdk.token,
    blockchain: "Binance Smart Chain" as EVMChain,
    rpcURL: sdk.networkConfig.bsc.rpcURL,
  })
  const bscdepositAddr = await bscClient.getDepositContractAddress(connectedSDK.wallet.bech32Address, bscAddress);
  const bscBalances = await bscClient.getExternalBalances(sdk, bscdepositAddr);
  console.log("bscBalances", bscBalances);
})().catch(console.error).finally(() => process.exit(0));

