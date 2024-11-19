import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant, MsgRevoke } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryAllowanceRequest } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { GrantTypes } from "@carbon-sdk/provider/amino/types/grant";
import BaseModule from "./base";

interface GrantMessages {
  typeUrl: string,
  value: MsgGrant | MsgRevokeAllowance | MsgGrantAllowance
}

interface RevokeMessages {
  typeUrl: string,
  value: MsgRevoke | MsgRevokeAllowance
}
export class GrantModule extends BaseModule {
  public async grantAuthAndAllowance(params: GrantModule.GrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []

    const encodedGrantMsgs = authorizedSignlessMsgs?.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl: GrantTypes.GenericAuthorization,
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
    let messages: GrantMessages[] = encodedGrantMsgs

    // can only have one existing grant between granter and grantee
    // to 'extend' have to revoke existing fee-grant and approve new fee-grant with new expiration
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
          typeUrl: GrantTypes.AllowedMsgAllowance,
          value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
            allowance: {
              typeUrl: GrantTypes.BasicAllowance,
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

  public async revokeAuthAndAllowance(params: GrantModule.RevokeGrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []


    const encodedRevokeGrantMsgs = authorizedSignlessMsgs.map((msg: string) => {
      const revokeMsg = MsgRevoke.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        msgTypeUrl: msg,
      })
      return {
        typeUrl: CarbonTx.Types.MsgRevoke,
        value: revokeMsg,
      }
    })

    let messages: RevokeMessages[] = encodedRevokeGrantMsgs
    const encodedRevokeAllowanceMsg = [{
      typeUrl: CarbonTx.Types.MsgRevokeAllowance,
      value: MsgRevokeAllowance.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
      }),
    }]

    messages = messages.concat(encodedRevokeAllowanceMsg)

    const result = await wallet.sendTxs(messages, opts)

    return result
  }

  public async grantAllowance(params: GrantModule.GrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const encodedAllowanceMsg = [{
      typeUrl: CarbonTx.Types.MsgGrantAllowance,
      value: MsgGrantAllowance.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        allowance: {
          typeUrl: GrantTypes.AllowedMsgAllowance,
          value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
            allowance: {
              typeUrl: GrantTypes.BasicAllowance,
              value: BasicAllowance.encode(BasicAllowance.fromPartial({
                expiration: params.expiry,
              })).finish(),
            },
            allowedMessages: [CarbonTx.Types.MsgExec],
          })).finish(),
        },
      }),
    }]
    let messages = encodedAllowanceMsg
    if (params.existingGrantee) {
      const encodedRevokeAllowanceMsg = [{
        typeUrl: CarbonTx.Types.MsgRevokeAllowance,
        value: MsgRevokeAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
        }),
      }]
      messages = encodedRevokeAllowanceMsg.concat(messages)
    }
    const result = await wallet.sendTxs(messages, opts)
    return result
  }

  public async grantAuth(params: GrantModule.GrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []

    const encodedGrantMsgs = (params.selectedMsgs ?? authorizedSignlessMsgs)?.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter: params.granter ?? wallet.bech32Address,
        grantee: params.grantee,
        grant: {
          authorization: {
            typeUrl: GrantTypes.GenericAuthorization,
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

  public async queryGranteeDetails(params: GrantModule.QueryGrantParams) {
    const wallet = this.getWallet()
    const queryParams: QueryGrantsRequest = {
      grantee: params.grantee ?? '',
      granter: params.granter ?? wallet.bech32Address,
      msgTypeUrl: params.msgTypeUrl ?? '',
    }
    const response = await this.sdkProvider.query.grant.Grants(queryParams)
    return response
  }

  public async queryGranteeAllowance(params: GrantModule.QueryAllowanceParams) {
    const wallet = this.getWallet()
    const queryParams: QueryAllowanceRequest = {
      grantee: params.grantee ?? '',
      granter: params.granter ?? wallet.bech32Address,
    }
    const response = await this.sdkProvider.query.feegrant.Allowance(queryParams)
    return response
  }
}

export namespace GrantModule {
  export interface GrantParams {
    grantee: string,
    granter?: string,
    expiry: Date,
    existingGrantee?: boolean,
    selectedMsgs?: string[]
  }
  export interface RevokeGrantParams {
    grantee: string,
    granter?: string,
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