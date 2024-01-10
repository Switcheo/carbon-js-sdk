import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryAllowanceRequest } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
import BaseModule from "./base";
import { SignlessTypes } from "@carbon-sdk/provider/amino/types/signless";

export class SignlessModule extends BaseModule {
  public async grantSignlessPermission(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []
    let messages: EncodeObject[] = []
    if (params.existingGrantee) {
      const encodedRevokeAllowanceMsg = [{
        typeUrl: CarbonTx.Types.MsgRevokeAllowance,
        value: MsgRevokeAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
        }),
      }]
      messages = encodedRevokeAllowanceMsg
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

    const encodedGrantMsgs = authorizedSignlessMsgs?.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl: SignlessTypes.GenericAuthorization,
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
    messages = messages.concat(encodedGrantMsgs)

    const result = await wallet.sendTxs(messages, opts)

    return result
  }

  public async grantAllowance(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const messages: EncodeObject[] = []
    if (params.existingGrantee) {
      const encodedRevokeAllowanceMsg = {
        typeUrl: CarbonTx.Types.MsgRevokeAllowance,
        value: MsgRevokeAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
        }),
      }
      messages.push(encodedRevokeAllowanceMsg)
    }
    const encodedAllowanceMsg = {
      typeUrl: CarbonTx.Types.MsgGrantAllowance,
      value: MsgGrantAllowance.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        allowance: {
          typeUrl: '/cosmos.feegrant.v1beta1.AllowedMsgAllowance',
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
    }
    messages.push(encodedAllowanceMsg)
    const result = await wallet.sendTxs(messages, opts)
    return result
  }

  public async grantSelectedMsgsSignless(params: SignlessModule.GrantSignlessPermissionParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []

    const encodedGrantMsgs = (params.selectedMsgs ?? authorizedSignlessMsgs)?.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl: SignlessTypes.GenericAuthorization,
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

    const result = await wallet.sendTxs(encodedGrantMsgs, opts)

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
    selectedMsgs?: string[]
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