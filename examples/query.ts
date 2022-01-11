import { encodeBech32Pubkey, Pubkey } from "@cosmjs/amino";
import { Tendermint34Client, NewBlockEvent } from "@cosmjs/tendermint-rpc";

import { AddressUtils } from "../lib";
import { Network } from "../lib/constant";
import { SWTHAddress } from "../lib/util/address";
import { CarbonSDK } from "./_sdk";
import * as bech32 from "bech32";
import "./_setup";


const getBytes = (bech32Address: string) => {
  const { prefix, words } = bech32.decode(bech32Address);
  return {
    hex: Buffer.from(bech32.fromWords(words)).toString("hex"),
    prefix,
  };
}

  ;
(async () => {
  console.log('init sdk');
  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.DevNet,
  });

  // GRPC Queries

  // query txn fees
  console.log('starting query');
  const { validators } = await sdk.tmClient.validators({});
  for (const validator of validators) {
    const hash = Buffer.from(validator.address);
    // console.log("validator", validator)
    console.log("validator operatorAddress", AddressUtils.SWTHAddress.encode(hash));
    console.log("validator operator hex", hash.toString("hex"))
    // console.log("validator pubkey", encodeBech32Pubkey({
    //   type: "tendermint/PubKeyEd25519",
    //   value: Buffer.from(validator.consensusPubkey!.value).toString("base64"),
    // }, sdk.networkConfig.Bech32Prefix));
  }


  const { validators: carbonVals } = await sdk.query.staking.Validators({
    status: "",
  })
  for (const validator of carbonVals) {
    console.log("validator", validator)
    // console.log("validator pubkey", encodeBech32Pubkey({
    //   type: "tendermint/PubKeyEd25519",
    //   value: Buffer.from(validator.consensusPubkey!.value).toString("base64"),
    // }, sdk.networkConfig.Bech32Prefix));
  }

  let count = 0, unsub: any = null;

  const listener = {
    next: async (value: any) => {
      const { header: { height } } = value as NewBlockEvent;
      const block = await sdk.tmClient.block(height)
      console.log("block hex", height, Buffer.from(block.block.header.proposerAddress).toString("hex"))
      // console.log("block", AddressUtils.SWTHAddress.encode(Buffer.from(block.block.header.proposerAddress), {
      //   type: "validator"
      // }))

      if (count++ > 10) {
        unsub?.unsubscribe();
        await new Promise(resolve => setTimeout(resolve, 1000));
        process.exit(0)
      }
    }
  };

  const tmWsClient = await Tendermint34Client.connect(sdk.networkConfig.tmWsUrl);
  const stream = tmWsClient.subscribeNewBlock()

  unsub = stream.subscribe(listener);


})().catch(console.error)//.finally(() => process.exit(0));
