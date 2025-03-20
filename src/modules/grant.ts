import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant, MsgRevoke } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryAllowanceRequest } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { GrantTypes } from "@carbon-sdk/provider/amino/types/grant";
import { EncodeObject } from "@cosmjs/proto-signing";
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

  public getGenericAuthorizationMsg(granter: string, grantee: string, expiry: Date | undefined, msgs: string[]): EncodeObject[] {
    return msgs?.map((msg) => {
      const grantMsg = MsgGrant.fromPartial({
        granter,
        grantee,
        grant: {
          authorization: {
            typeUrl: GrantTypes.GenericAuthorization,
            value: GenericAuthorization.encode(GenericAuthorization.fromPartial({
              msg,
            })).finish(),
          },
          expiration: expiry,
        },
      })
      return {
        typeUrl: CarbonTx.Types.MsgGrant, value: grantMsg,
      }
    })
  }

  public getMsgExecAllowanceMsg(granter: string, grantee: string, expiry: Date | undefined): EncodeObject {
    return {
      typeUrl: CarbonTx.Types.MsgGrantAllowance,
      value: MsgGrantAllowance.fromPartial({
        granter,
        grantee,
        allowance: {
          typeUrl: GrantTypes.AllowedMsgAllowance,
          value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
            allowance: {
              typeUrl: GrantTypes.BasicAllowance,
              value: BasicAllowance.encode(BasicAllowance.fromPartial({
                expiration: expiry,
              })).finish(),
            },
            allowedMessages: [CarbonTx.Types.MsgExec],
          })).finish(),
        },
      }),
    }
  }


  public getRevokeGrantMsg(granter: string, grantee: string, msgs: string[]): EncodeObject[] {
    return msgs.map((msg: string) => {
      const revokeMsg = MsgRevoke.fromPartial({
        granter,
        grantee,
        msgTypeUrl: msg,
      })
      return {
        typeUrl: CarbonTx.Types.MsgRevoke,
        value: revokeMsg,
      }
    })
  }

  public getRevokeAllowanceMsg(granter: string, grantee: string): EncodeObject {
    return {
      typeUrl: CarbonTx.Types.MsgRevokeAllowance,
      value: MsgRevokeAllowance.fromPartial({
        granter,
        grantee,
      }),
    }
  }

  public async grantAuthAndAllowance(params: GrantModule.GrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []

    const granter = params.granter ?? wallet.bech32Address
    const { grantee, expiry, existingGrantee } = params

    let messages: GrantMessages[] = this.getGenericAuthorizationMsg(granter, grantee, expiry, authorizedSignlessMsgs)

    // can only have one existing grant between granter and grantee
    // to 'extend' have to revoke existing fee-grant and approve new fee-grant with new expiration
    if (existingGrantee) messages = messages.concat(this.getRevokeAllowanceMsg(granter, grantee))

    const encodedAllowanceMsg = this.getMsgExecAllowanceMsg(granter, grantee, expiry)
    messages = messages.concat(encodedAllowanceMsg)

    const result = await wallet.sendTxs(messages, opts)

    return result
  }


  public async revokeAuthAndAllowance(params: GrantModule.RevokeGrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const authorizedSignlessMsgs = wallet.authorizedMsgs ?? []

    const granter = params.granter ?? wallet.bech32Address
    const grantee = params.grantee

    const encodedRevokeGrantMsgs = this.getRevokeGrantMsg(granter, grantee, authorizedSignlessMsgs)

    let messages: RevokeMessages[] = encodedRevokeGrantMsgs


    messages = messages.concat(this.getRevokeAllowanceMsg(granter, params.grantee))

    const result = await wallet.sendTxs(messages, opts)

    return result
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