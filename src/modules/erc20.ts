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
      receiver: wallet.evmHexAddress.toLowerCase(),
      sender: wallet.bech32Address.toLowerCase(),
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
      receiver: wallet.bech32Address.toLowerCase(),
      sender: wallet.bech32Address.toLowerCase(),
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
    denom: string;
    amount: string;
  }

  export interface ConvertERC20Params {
    contractAddress: string;
    amount: string;
  }
}
