import { MsgExec, MsgGrant, MsgRevoke } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { registry } from "@carbon-sdk/codec";
import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryClientImpl as FeeGrantQueryClient } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { GrantTypes } from "@carbon-sdk/provider/amino/types/grant";
import { EncodeObject } from "@cosmjs/proto-signing";
import BaseModule from "./base";
export class GrantModule extends BaseModule {

  public static wrapInMsgExec(grantee: string, msgs: readonly EncodeObject[]): EncodeObject[] {
    return [{
      typeUrl: CarbonTx.Types.MsgExec,
      value: MsgExec.fromPartial({
        grantee,
        msgs: msgs.map((m) => registry.encodeAsAny({ ...m })),
      }),
    }]
  }

  public static getGenericAuthorizationMsg(granter: string, grantee: string, expiry: Date | undefined, msgs: string[]): EncodeObject[] {
    return msgs.map((msg) => {
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
    const { msgs, granter, grantee, expiry } = params
    const messages = this.getGenericAuthorizationMsg(granter, grantee, expiry, msgs)
    const existingGrantee = await client.Allowance({ granter, grantee })

    // can only have one existing grant between granter and grantee
    // to 'extend' have to revoke existing fee-grant and approve new fee-grant with new expiration
    if (existingGrantee) messages.push(this.getRevokeAllowanceMsg(granter, grantee))

    const allowanceMsg = this.getMsgExecAllowanceMsg(granter, grantee, expiry)
    messages.push(allowanceMsg)

    return messages
  }

  public static getRevokeMsgs(params: GrantModule.RevokeGrantParams) {
    const { msgs = [], granter, grantee } = params
    return this.getRevokeGrantMsg(granter, grantee, msgs)
      .concat(this.getRevokeAllowanceMsg(granter, params.grantee))
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

  public async execute(msgs: EncodeObject[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const execMsgs = GrantModule.wrapInMsgExec(wallet.bech32Address, msgs)
    return await wallet.sendTxs(execMsgs, opts)
  }

}

export namespace GrantModule {
  export interface GrantParams {
    grantee: string,
    granter: string,
    expiry?: Date,
    msgs: string[]
  }
  export interface RevokeGrantParams {
    grantee: string,
    granter: string,
    msgs?: string[]
  }
}