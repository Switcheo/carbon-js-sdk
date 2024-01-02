import { QueryGrantsRequest } from "@carbon-sdk/codec/cosmos/authz/v1beta1/query";
import { MsgGrant } from "@carbon-sdk/codec/cosmos/authz/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";

import { GenericAuthorization } from "@carbon-sdk/codec/cosmos/authz/v1beta1/authz";
import { AllowedMsgAllowance, BasicAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/feegrant";
import { MsgGrantAllowance } from "@carbon-sdk/codec/cosmos/feegrant/v1beta1/tx";
import { AuthorizedSignlessMsgs } from "@carbon-sdk/constant/signless";
import BaseModule from "./base";
import dayjs from "dayjs";

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
    const expired = dayjs(params.expiry).unix() < dayjs().unix()
    if (expired) {
      const encodedAllowanceMsg = [{
        typeUrl: CarbonTx.Types.MsgGrantAllowance,
        value: MsgGrantAllowance.fromPartial({
          granter: params.granter ?? wallet.bech32Address,
          grantee: params.grantee,
          allowance: {
            typeUrl: '/cosmos.feegrant.v1beta1.AllowedMsgAllowance',
            value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
              allowance: {
                typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
                value: BasicAllowance.encode(BasicAllowance.fromPartial({
                  expiration: params.expiry,
                })).finish(),
              },
              allowedMessages: ["/cosmos.authz.v1beta1.MsgExec"],
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
    expiry: Date,
  }
  export interface QueryGrantParams {
    grantee?: string,
    granter?: string,
    msgTypeUrl?: string,
  }
}