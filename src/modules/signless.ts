import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowance, MsgRevokeAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { AuthorizedSignlessMsgs } from "@carbon-sdk/util/signless";
import BaseModule from "./base";
import { QueryAllowanceRequest } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
import { SignlessTypes } from "@carbon-sdk/provider/amino/types/signless";

export class SignlessModule extends BaseModule {
  public async grantSignlessPermission(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const encodedGrantMsgs = AuthorizedSignlessMsgs.map((msg) => {
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
    if (params.existingGrantee) {
      const encodedRevokeAllowanceMsg = [{
        typeUrl: CarbonTx.Types.MsgRevokeAllowance,
        value: MsgRevokeAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
        }),
      }]
      messages = messages.concat(encodedRevokeAllowanceMsg)
    }
    const encodedAllowanceMsg = [{
      typeUrl: CarbonTx.Types.MsgGrantAllowance,
      value: MsgGrantAllowance.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        allowance: {
          typeUrl: SignlessTypes.AllowedMsgAllowance,
          value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
            allowance: {
              typeUrl: SignlessTypes.BasicAllowance,
              value: BasicAllowance.encode(BasicAllowance.fromPartial({
                expiration: params.expiry,
              })).finish(),
            },
            allowedMessages: [CarbonTx.Types.MsgExec],
          })).finish(),
        },
      }),
    }]
    messages = messages.concat(encodedAllowanceMsg)
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

  public async queryGranteeAllowance(params: SignlessModule.QueryAllowanceParams) {
    const wallet = this.getWallet()
    const queryParams: QueryAllowanceRequest = {
      grantee: params.grantee ?? '',
      granter: params.granter ?? wallet.bech32Address,
    }
    const response = await this.sdkProvider.query.feegrant.Allowance(queryParams)
    return response
  }
}

export namespace SignlessModule {
  export interface GrantSignlessPermissionParams {
    grantee: string,
    granter?: string,
    expiry: Date,
    existingGrantee?: boolean,
  }
  export interface QueryGrantParams {
    grantee?: string,
    granter?: string,
    msgTypeUrl?: string,
  }
  export interface QueryAllowanceParams {
    grantee?: string,
    granter?: string,
  }
}