import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AuthorizedSignlessMSgs } from "@carbon-sdk/constant/signless";
import { BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import BaseModule from "./base";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";

export class SignlessModule extends BaseModule {
  public async grantSignlessPermission(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()

    const encodedGrantMsgs = AuthorizedSignlessMSgs.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
            value: GenericAuthorization.encode(GenericAuthorization.fromPartial({
              msg,
            })).finish(),
          },
          expiration: params.expiry,
        },
      })
      return {
        typeUrl: CarbonTx.Types.MsgGrant, value: grantMsg,
      }
    })
    let messages = encodedGrantMsgs
    if (!params.existingGrantee) {
      const tokenAllResult = await this.sdkProvider.query.coin.TokenAll({})
      const coinArray: Coin[] = tokenAllResult.tokens.map((token) => {
        return {
          denom: token.denom,
          amount: '1000000000000000000000000000',
        }
      })
      const encodedAllowanceMsg = [{
        typeUrl: CarbonTx.Types.MsgGrantAllowance,
        value: MsgGrantAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
          allowance: {
            typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
            value: BasicAllowance.encode(BasicAllowance.fromPartial({
              spendLimit: coinArray,
              expiration: params.expiry,
            })).finish(),
          },
        }),
      }]
      messages = encodedGrantMsgs.concat(encodedAllowanceMsg)
    }

    const result = await wallet.sendTxs(messages, opts)

    return result
  }

  public async queryGranteeDetails(params: SignlessModule.QueryGrantParams) {
    const wallet = this.getWallet()
    const queryParams: QueryGrantsRequest = {
      grantee: params.grantee ?? '',
      granter: params.granter ?? wallet.bech32Address,
      msgTypeUrl: params.msgTypeUrl ?? '',
    }
    const response = await this.sdkProvider.query.grant.Grants(queryParams)
    return response
  }
}

export namespace SignlessModule {
  export interface GrantSignlessPermissionParams {
    grantee: string,
    granter?: string,
    existingGrantee: boolean,
    expiry: Date,
  }
  export interface QueryGrantParams {
    grantee?: string,
    granter?: string,
    msgTypeUrl?: string,
  }
}