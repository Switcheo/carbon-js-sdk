import { TxTypes } from "@carbon-sdk/codec";
import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { MsgGrantAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import BaseModule from "./base";

export const authorizedSignlessMsgs = [
  TxTypes.MsgCreateOrder,
  TxTypes.MsgCancelOrder,
  TxTypes.MsgEditOrder,
]

export class SignlessModule extends BaseModule {
  public async grantSignlessPermission(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()

    const encodedGrantMsgs = authorizedSignlessMsgs.map((typeUrl) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl,
          },
          expiration: params.expiry,
        },
      })
      return {
        typeUrl: CarbonTx.Types.MsgGrant, value: grantMsg,
      }
    })


    const allowanceMsg = MsgGrantAllowance.fromPartial({
      granter: params.granter,
      grantee: params.grantee,
    })

    const encodedAllowanceMsg = { typeUrl: CarbonTx.Types.MsgGrantAllowance, value: allowanceMsg }

    const messages = encodedGrantMsgs.concat(encodedAllowanceMsg)

    const result = await wallet.sendTxs(messages, opts)

    return result
  }

  public async queryGranteeDetails(params: SignlessModule.QueryGrantParams) {
    const wallet = this.getWallet()
    const queryParams: QueryGrantsRequest = {
      grantee: params.grantee,
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
    expiry: Date,
  }
  export interface QueryGrantParams {
    grantee: string,
    granter?: string,
    msgTypeUrl?: string,
  }
}
