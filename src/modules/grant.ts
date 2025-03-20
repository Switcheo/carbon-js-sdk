import { MsgGrant, MsgRevoke } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryClientImpl as FeeGrantQueryClient } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
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

  public static getGenericAuthorizationMsg(granter: string, grantee: string, expiry: Date | undefined, msgs: string[]): EncodeObject[] {
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

  public static getMsgExecAllowanceMsg(granter: string, grantee: string, expiry: Date | undefined): EncodeObject {
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


  public static getRevokeGrantMsg(granter: string, grantee: string, msgs: string[]): EncodeObject[] {
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

  public static getRevokeAllowanceMsg(granter: string, grantee: string): EncodeObject {
    return {
      typeUrl: CarbonTx.Types.MsgRevokeAllowance,
      value: MsgRevokeAllowance.fromPartial({
        granter,
        grantee,
      }),
    }
  }


  public static async getGrantMsgs(params: GrantModule.GrantParams, client: FeeGrantQueryClient) {
    const { msgs = [], granter, grantee, expiry } = params
    let messages: GrantMessages[] = this.getGenericAuthorizationMsg(granter, grantee, expiry, msgs)
    const existingGrantee = await client.Allowance({ granter, grantee })

    // can only have one existing grant between granter and grantee
    // to 'extend' have to revoke existing fee-grant and approve new fee-grant with new expiration
    if (!!existingGrantee) messages = messages.concat(this.getRevokeAllowanceMsg(granter, grantee))

    const encodedAllowanceMsg = this.getMsgExecAllowanceMsg(granter, grantee, expiry)
    messages = messages.concat(encodedAllowanceMsg)

    return messages
  }

  public static getRevokeMsgs(params: GrantModule.RevokeGrantParams) {
    const { msgs = [], granter, grantee } = params
    const encodedRevokeGrantMsgs = this.getRevokeGrantMsg(granter, grantee, msgs)
    let messages: RevokeMessages[] = encodedRevokeGrantMsgs

    return messages.concat(this.getRevokeAllowanceMsg(granter, params.grantee))
  }

  public async grantAuthAndAllowance(params: GrantModule.GrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const messages = await GrantModule.getGrantMsgs(params, this.sdkProvider.query.feegrant)
    return await wallet.sendTxs(messages, opts)
  }

  public async revokeAuthAndAllowance(params: GrantModule.RevokeGrantParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const messages = GrantModule.getRevokeMsgs(params)
    return await wallet.sendTxs(messages, opts)
  }
}

export namespace GrantModule {
  export interface GrantParams {
    grantee: string,
    granter: string,
    expiry?: Date,
    msgs?: string[]
  }
  export interface RevokeGrantParams {
    grantee: string,
    granter: string,
    msgs?: string[]
  }
}