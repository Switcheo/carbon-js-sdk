import { Models } from "@carbon-sdk/index";
import { CarbonTx } from "@carbon-sdk/util";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { Algo } from "@cosmjs/proto-signing";
import { Leap } from "@cosmos-kit/leap";
import SDKProvider from "../sdk";

class LeapAccount {
  static createLeapSigner(leap: Leap, chainId: string): CarbonSigner {
    
    const signDirect = async (signerAddress: string, doc: Models.Tx.SignDoc) => {
      const signOpts = { preferNoSetFee: true };
      return await leap!.signDirect(chainId, signerAddress, doc, signOpts);
    };
    
    const signAmino = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      const signOpts = { preferNoSetFee: true };
      return await leap!.signAmino(chainId, signerAddress, doc, signOpts)
    };

    const getAccounts = async () => {
      const account = await leap.getKey(chainId)
      return [{
        algo: 'secp256k1' as Algo,
        address: account.bech32Address,
        pubkey: account.pubKey,
      }]
    };

    return {
      type: CarbonSignerTypes.BrowserInjected,
      signDirect,
      signAmino,
      getAccounts,
    };
  }

  static async getChainId(configProvider: SDKProvider): Promise<string> {
    const chainId = await configProvider.query.chain.getChainId();
    return chainId
  }
}

namespace LeapAccount {

}

export default LeapAccount