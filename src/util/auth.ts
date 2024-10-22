import dayjs from 'dayjs'

export const expirybufferSeconds = 30

export type AccessTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
  expires_at: number
  refresh_token: string
}

export enum GrantType {
  SignatureCosmos = 'signature_cosmos',
  SignatureEth = 'signature_eth',
  RefreshToken = 'refresh_token',
}

export type GrantRequest = {
  grant_type: GrantType
} & ({
  message?: string
  public_key?: string
  signature?: string
  refresh_token: string
} | {
  message: string
  public_key: string
  signature: string
  refresh_token?: string
})

export const getAuthMessage = (): string => {
  const timestamp = dayjs().format('YYYY/MM/DD HH:mm:ss Z')
  return `By signing, I confirm that I am the owner of this wallet on Demex.\nI confirm that I have read and agreed to the terms and conditions outlined here (https://guide.dem.exchange/technical/terms-and-conditions).\nAdditionally, I verify that I am not a citizen of any of the following countries: Afghanistan, Angola, Central African Republic, China (Mainland), Côte d'Ivoire, Crimea, Cuba, Democratic Republic of Congo, Ethiopia, Guinea-Bissau, Haiti, Iran, Kuwait, Lebanon, Liberia, Libya, Mali, North Korea, Rwanda, Sevastopol, Sierra Leone, Singapore, Somalia, South Africa, Sudan, South Sudan, Syria, Quebec (Canada), U.S, Yemen, Zimbabwe.\n[${timestamp}]`
}

export const hasExpired = (exp: number = 0): boolean => {
  const currentUnix = dayjs().unix()
  return (currentUnix + expirybufferSeconds) >= exp
}