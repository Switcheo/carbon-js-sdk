import { Coin } from "@cosmjs/stargate";
import { CarbonTx, Models } from "..";
import BaseModule from "./base";

export class ERC20Module extends BaseModule {
  public async convertCoin(params: ERC20Module.ConvertCoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const coin: Coin = {
      denom: params.denom,
      amount: params.amount,
    };

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
    );
  }

  public async registerToken(params: ERC20Module.RegisterTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgRegisterToken.fromPartial({
      creator: params.creator,
      denom: params.denom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterToken,
        value,
      },
      opts
    );
  }

  public async registerERC20(params: ERC20Module.RegisterERC20Params, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgRegisterERC20.fromPartial({
      creator: params.creator,
      contractAddress: params.contractAddress,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterERC20,
        value,
      },
      opts
    );
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

  export interface RegisterTokenParams {
    creator: string;
    denom: string;
  }

  export interface RegisterERC20Params {
    creator: string;
    contractAddress: string;
  }
}