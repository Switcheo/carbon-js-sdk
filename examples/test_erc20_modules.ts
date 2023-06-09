import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics:", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected wallet:", connectedSDK.wallet.bech32Address);

  const balance = await sdk.query.bank.AllBalances({
    address: connectedSDK.wallet.bech32Address,
  });
  console.log("wallet balance:", balance);

  // await connectedSDK.evmmerge.mergeAccount({
  //   creator: connectedSDK.wallet.bech32Address,
  //   pubKey: connectedSDK.wallet.publicKey.toString("hex"),
  //   pubKeySig: connectedSDK.wallet.privateKey!.toString("hex"),
  // });

  // Test cosmos -> evm
  await connectedSDK.erc20.registerToken({ denom: "swth", creator: connectedSDK.wallet.bech32Address });
  await connectedSDK.erc20.convertCoin({ denom: "swth", amount: "100", receiver: connectedSDK.wallet.evmHexAddress });
  await connectedSDK.erc20.convertERC20({
    contractAddress: "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
    amount: "100",
    receiver: connectedSDK.wallet.evmHexAddress,
  });

  // // Test evm -> cosmos
  await connectedSDK.erc20.registerERC20({
    contractAddress: "0xf5221859dF5246f038ecD93B2586A03e66A103a7",
    creator: connectedSDK.wallet.bech32Address,
  });
  await connectedSDK.erc20.convertERC20({
    contractAddress: "0xf5221859dF5246f038ecD93B2586A03e66A103a7",
    amount: "100",
    receiver: connectedSDK.wallet.bech32Address,
  });
  await connectedSDK.erc20.convertCoin({
    denom: "erc20/0xf5221859dF5246f038ecD93B2586A03e66A103a7",
    amount: "100",
    receiver: connectedSDK.wallet.evmHexAddress,
  });
})()
  .catch(console.error)
  .finally(() => process.exit(0));
