import { MsgUpdateProfile } from "@carbon-sdk/codec/Switcheo/carbon/profile/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class ProfileModule extends BaseModule {
  public async update(params: ProfileModule.UpdateProfileParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdateProfile.fromPartial({
      creator: wallet.bech32Address,
      username: params.username,
      twitter: params.twitter,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateProfile,
        value,
      },
      opts
    );
  }
}

export namespace ProfileModule {
  export interface UpdateProfileParams {
    username: string;
    twitter?: string;
  }
}
