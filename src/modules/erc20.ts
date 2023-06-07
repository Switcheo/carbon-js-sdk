import { Coin } from "@cosmjs/stargate";
import { CarbonTx, Models } from "..";
import BaseModule from "./base";

export class ERC20Module extends BaseModule {
  public async convertCoin(params: ERC20Module.ConvertCoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const coin: Coin = {
      denom: params.denom,
      amount: params.amount,
    }

    const value = Models.MsgConvertCoin.fromPartial({
      coin,
      receiver: wallet.bech32Address,
      sender: params.receiver,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgConvertCoin,
        value,
      },
      opts
    );
  }

  public async convertERC20(params: ERC20Module.ConvertERC20Params, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgConvertERC20.fromPartial({
      contractAddress: params.contractAddress,
      amount: params.amount,
      receiver: params.receiver,
      sender: wallet.bech32Address,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgConvertERC20,
        value,
      },
      opts
    )
  }
}

export namespace ERC20Module {

  export interface ConvertCoinParams {
    receiver: string;
    denom: string;
    amount: string;
  }

  export interface ConvertERC20Params {
    receiver: string;
    contractAddress: string;
    amount: string;
  }
}
