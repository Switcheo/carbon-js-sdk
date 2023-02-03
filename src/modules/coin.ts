import { MsgMintToken, MsgWithdraw, MsgAddBridgeAddress, MsgCreateToken } from "@carbon-sdk/codec/coin/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import BaseModule from "./base";
import Long from "long";

export class CoinModule extends BaseModule {
  public async createWithdrawal(params: CoinModule.CreateWithdrawalParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdraw.fromPartial({
      creator: wallet.bech32Address,
      toAddress: params.toAddress,
      denom: params.denom,
      amount: params.amount.toString(10),
      feeAmount: params.feeAmount.toString(10),
      feeAddress: params.feeAddress,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdraw,
        value,
      },
      opts
    );
  }

  public async mintToken(params: CoinModule.MintTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgMintToken.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      to: params.to ?? wallet.bech32Address,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgMintToken,
        value,
      },
      opts
    );
  }

  public async addBridgeAddress(params: CoinModule.AddBridgeAddressParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgAddBridgeAddress.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      chainId: params.chainId,
      bridgeId: params.bridgeId,
      bridgeAddress: params.bridgeAddress,
    })
    return await wallet.sendTx(
        {
          typeUrl: CarbonTx.Types.MsgAddBridgeAddress,
          value,
        },
        opts
    );
  }

  public async createToken(params: CoinModule.CreateTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgCreateToken.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      createTokenParams: {
        creator: params.creator ?? wallet.bech32Address,
        name: params.name,
        symbol: params.symbol,
        decimals: params.decimals,
        chainId: params.chainId,
        bridgeId: params.bridgeId,
        bridgeAddress: params.bridgeAddress,
        tokenAddress: params.tokenAddress,
      }
    })
    return await wallet.sendTx(
        {
          typeUrl: CarbonTx.Types.MsgCreateToken,
          value,
        },
        opts
    );
  }

}

export namespace CoinModule {
  export interface CreateWithdrawalParams {
    toAddress: string;
    denom: string;
    amount: BigNumber;
    feeAmount: BigNumber;
    feeAddress: string;
  }

  export interface MintTokenParams {
    creator?: string;
    denom: string;
    amount: BigNumber;
    to?: string;
  }

  export interface AddBridgeAddressParams {
    creator?: string;
    chainId: Long;
    bridgeId: Long;
    bridgeAddress: string;
  }

  export interface CreateTokenParams {
    creator?: string;
    name: string;
    symbol: string;
    decimals: Long;
    chainId: Long;
    bridgeId: Long;
    bridgeAddress: string;
    tokenAddress: string;
  }
}
