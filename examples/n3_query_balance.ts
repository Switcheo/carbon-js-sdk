import { CONST } from "@cityofzion/neon-core-3";
import { rpc } from "@cityofzion/neon-js-3";
import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
import * as wif from "wif";
import N3Client from "../lib/clients/N3Client";
import { N3Address, SWTHAddress } from "../lib/util/address";
import { BN_ZERO } from "../lib/util/number";
import { CarbonSDK } from "./_sdk";
import "./_setup";

const neoRpcUrl = "http://seed1t4.neo.org:20332";

;
(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const n3Client = N3Client.instance({
    configProvider: {
      getConfig: () => ({
        n3: {
          rpcURL: neoRpcUrl,
          networkMagic: CONST.MAGIC_NUMBER.TestNet,
        },
      } as any),
    },
  })

  const bech32Address = SWTHAddress.generateAddress(mnemonics);
  console.log("deposit to ", bech32Address)

  const privateKeyWif = "";
  const privateKey = wif.decode(privateKeyWif).privateKey.toString("hex");
  const fromAddress = N3Address.privateKeyToAddress(privateKey);

  console.log("fromAddress", fromAddress);

  const balances = await new rpc.RPCClient(neoRpcUrl).execute(new rpc.Query({
    method: "getnep17balances",
    "params": [fromAddress],
  }));

  console.log("balances", balances);

  const toAddressBytes = SWTHAddress.getAddressBytes(bech32Address, CarbonSDK.Network.DevNet);
  const toAddressHex = Buffer.from(toAddressBytes).toString("hex");

  const lockProxyScriptHash = "eeebee7ef57cb2106fbad2c51c5b9b4c30f0c0ca"
  const tokenScriptHash = "285b332bc0323bc334987bd4735fb39cc3269e20"

  const signer = N3Client.signerFromPrivateKey(privateKey);
  const result = await n3Client.lock(lockProxyScriptHash, tokenScriptHash, fromAddress, toAddressHex, new BigNumber(8800), BN_ZERO, signer);
  console.log(result);

})().catch(console.error).finally(() => process.exit(0));

