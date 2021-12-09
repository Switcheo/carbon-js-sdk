import * as BIP39 from "bip39";
import { CarbonSDK } from "./_sdk";
import "./_setup";
import { coins } from "@cosmjs/amino";
import BigNumber from "bignumber.js";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });
  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const FeeProposalresult = await connectedSDK.gov.submit({
    content: {
      typeUrl: "/Switcheo.carbon.fee.SetMsgFeeProposal",
      value: {
        title: "proposal title",
        description: "proposal desc",
        msg: {
          msgType: "test1",
          fee: new BigNumber(2)
        }
      }
    },
    initialDeposit: coins(100000000, "swth"),
    proposer: connectedSDK.wallet.bech32Address,
  })

  const OracleProposalresult = await connectedSDK.gov.submit({
    content: {
      typeUrl: "/Switcheo.carbon.oracle.CreateOracleProposal",
      value: {
        title: "proposal title",
        description: "proposal desc",
        msg: {
          id: "DXBT4",
        description: "Demex XBT Index",
        minTurnoutPercentage: 67,
        maxResultAge: 100,
        securityType: "SecuredByValidators",
        resultStrategy: "median",
        resolution: 1,
        spec: "{}",
        }
      }
    },
    initialDeposit: coins(100000000, "swth"),
    proposer: connectedSDK.wallet.bech32Address,
  })

  console.log(FeeProposalresult)
  console.log(OracleProposalresult)
  
})().catch(console.error).finally(() => process.exit(0));
