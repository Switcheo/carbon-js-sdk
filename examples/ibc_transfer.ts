import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import { BigNumber } from "bignumber.js";
import Long from "long";
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

  // Withdrawal 
  const response = await connectedSDK.ibc.sendIBCTransfer({
    sourcePort: "transfer",
    sourceChannel: "channel-0", // channel of receiving blockchain
    denom: "uatom",
    amount: new BigNumber(4981550),
    sender: "osmo1wz62puany843kr8rk7vx8kh3yg53cwfkerc6tp", // address to send from
    receiver: "cosmos1wz62puany843kr8rk7vx8kh3yg53cwfk3ct2an", // address to send to
    revisionNumber: new Long(1),
    revisionHeight: new Long(3208766),
  });
  console.log("response", response);
})().catch(console.error).finally(() => process.exit(0));
