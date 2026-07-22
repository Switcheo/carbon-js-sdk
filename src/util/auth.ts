import { Network } from '@carbon-sdk/constant'

import dayjs from 'dayjs'
import { jwtDecode } from 'jwt-decode'

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

export const JwtAuthMode = {
  Challenge: 'challenge',
  Legacy: 'legacy',
} as const
export type JwtAuthMode = (typeof JwtAuthMode)[keyof typeof JwtAuthMode]

export type ChallengeResponse = {
  challenge_id: string
  message: string
  expires_at: string
  metadata: {
    grant_type: GrantType.SignatureCosmos | GrantType.SignatureEth
    wallet_address: string
    domain: string
    uri: string
    environment: string
    network: string
    chain_id: string | number
    purpose: string
  }
}

export class WalletAuthenticationError extends Error {
  constructor(
    public readonly code: 'challenge_expired' | 'challenge_rejected' | 'challenge_unavailable',
    public readonly status?: number,
  ) {
    super(code === 'challenge_expired'
      ? 'Wallet login challenge expired. Please sign the new challenge.'
      : code === 'challenge_rejected'
        ? 'Wallet login challenge was rejected.'
        : 'Wallet login challenge service is unavailable.')
    this.name = 'WalletAuthenticationError'
  }
}

export const validateChallengeResponse = (
  input: unknown,
  grantType: GrantType.SignatureCosmos | GrantType.SignatureEth,
  walletAddress: string,
): ChallengeResponse => {
  const challenge = input as Partial<ChallengeResponse> | undefined
  const metadata = challenge?.metadata as Partial<ChallengeResponse['metadata']> | undefined
  const chainIdIsValid = typeof metadata?.chain_id === 'string' || typeof metadata?.chain_id === 'number'
  if (!challenge || typeof challenge.challenge_id !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(challenge.challenge_id)
    || typeof challenge.message !== 'string' || challenge.message.length === 0
    || typeof challenge.expires_at !== 'string' || !Number.isFinite(Date.parse(challenge.expires_at))
    || !metadata || metadata.grant_type !== grantType
    || typeof metadata.wallet_address !== 'string' || metadata.wallet_address.toLowerCase() !== walletAddress.toLowerCase()
    || typeof metadata.domain !== 'string' || metadata.domain.length === 0
    || typeof metadata.uri !== 'string' || metadata.uri.length === 0
    || typeof metadata.environment !== 'string' || metadata.environment.length === 0
    || typeof metadata.network !== 'string' || metadata.network.length === 0
    || !chainIdIsValid
    || typeof metadata.purpose !== 'string' || metadata.purpose.length === 0)
    throw new WalletAuthenticationError('challenge_rejected')
  return challenge as ChallengeResponse
}

export const JWT_ACCESS_TOKEN_USE = 'accessToken'
export const JWT_REFRESH_TOKEN_USE = 'refreshToken'
export type JwtTokenUse = typeof JWT_ACCESS_TOKEN_USE | typeof JWT_REFRESH_TOKEN_USE

type SessionTokenHeader = {
  alg?: unknown
  typ?: unknown
}

type SessionTokenClaims = {
  iss?: unknown
  aud?: unknown
  sub?: unknown
  iat?: unknown
  exp?: unknown
  token_use?: unknown
}

function getTokenHeaderType(tokenUse: JwtTokenUse): string {
  return tokenUse === JWT_ACCESS_TOKEN_USE ? 'at+jwt' : 'rt+jwt'
}

export type RefreshGrantRequest = {
  grant_type: GrantType.RefreshToken
  refresh_token: string
}

export type LegacySignatureGrantRequest = {
  grant_type: GrantType.SignatureCosmos | GrantType.SignatureEth
  message: string
  public_key: string
  signature: string
}

export type ChallengeGrantRequest = {
  grant_type: GrantType.SignatureCosmos | GrantType.SignatureEth
  challenge_id: string
  public_key: string
  signature: string
}

export type GrantRequest = RefreshGrantRequest | LegacySignatureGrantRequest | ChallengeGrantRequest

export const challengeUrlFromAccessTokenUrl = (authUrl: string) => {
  const parsed = new URL(authUrl)
  parsed.pathname = parsed.pathname.replace(/\/access_token$/, '/challenge')
  return parsed.toString()
}

type ChallengeHttpError = {
  isAxiosError?: boolean
  response?: {
    status?: number
    data?: { error?: { errors?: { reason?: string } } }
  }
}

const asChallengeHttpError = (error: unknown): ChallengeHttpError | undefined =>
  error !== null && typeof error === 'object' && (error as ChallengeHttpError).isAxiosError === true
    ? error as ChallengeHttpError
    : undefined

export const challengeErrorReason = (error: unknown): string | undefined =>
  asChallengeHttpError(error)?.response?.data?.error?.errors?.reason

export const isExpiredChallengeError = (error: unknown) =>
  asChallengeHttpError(error)?.response?.status === 401 && challengeErrorReason(error) === 'expired'

export const sanitizeChallengeError = (error: unknown): WalletAuthenticationError => {
  if (error instanceof WalletAuthenticationError) return error
  const status = asChallengeHttpError(error)?.response?.status
  const reason = challengeErrorReason(error)
  if (status === 401 && reason === 'expired') return new WalletAuthenticationError('challenge_expired', status)
  if (status === 400 || status === 401 || status === 403) return new WalletAuthenticationError('challenge_rejected', status)
  return new WalletAuthenticationError('challenge_unavailable', status)
}

export const getAuthMessage = (message: string): string => {
  const timestamp = dayjs().format('YYYY/MM/DD HH:mm:ss Z')
  return `${message}\n[${timestamp}]`
}

export const hasExpired = (exp: number = 0): boolean => {
  const currentUnix = dayjs().unix()
  return (currentUnix + expirybufferSeconds) >= exp
}

export const isOpaqueRefreshToken = (refreshToken: string): boolean =>
  typeof refreshToken === 'string'
  && /^[A-Za-z0-9_-]{42}[AEIMQUYcgkosw048]$/.test(refreshToken)

export const hasRefreshTokenExpired = (refreshToken: string) => {
  if (isOpaqueRefreshToken(refreshToken)) return false
  try {
    const { exp } = jwtDecode<SessionTokenClaims>(refreshToken)
    return !Number.isSafeInteger(exp) || hasExpired(exp as number)
  } catch {
    return true
  }
}

export const getExpectedTokenIssuer = (network: Network): string => {
  switch (network) {
    case Network.MainNet:
      return 'demex-auth'
    case Network.DevNet:
      return 'demex-auth-dev'
    case Network.TestNet:
      return 'demex-auth-test'
    default:
      return 'demex-auth-local'
  }
}

export const isValidIssuer = (iss: string = '', network: Network) =>
  iss === getExpectedTokenIssuer(network)

const isCanonicalBase64UrlSegment = (segment: string): boolean => {
  if (!/^[A-Za-z0-9_-]+$/.test(segment) || segment.length % 4 === 1) return false

  const remainder = segment.length % 4
  if (remainder === 0) return true

  const finalSextet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.indexOf(segment[segment.length - 1])
  // Unpadded Base64URL must have zero-valued discarded padding bits. This is
  // equivalent to decode/re-encode equality without a Node Buffer dependency.
  return remainder === 2 ? finalSextet % 16 === 0 : finalSextet % 4 === 0
}

/**
 * Checks whether an unverified JWT envelope is suitable for local session reuse.
 * Resource servers remain responsible for signature verification and authorization.
 */
const isJwtSessionTokenUsable = (
  token: string,
  network: Network,
  expectedTokenUse: JwtTokenUse,
  expectedSubject: string,
  requireUnexpired: boolean,
): boolean => {
  if (typeof token !== 'string' || token.length === 0
    || typeof expectedSubject !== 'string' || expectedSubject.length === 0) return false
  const segments = token.split('.')
  if (segments.length !== 3 || segments.some((segment) => !isCanonicalBase64UrlSegment(segment))) return false

  try {
    const header = jwtDecode<SessionTokenHeader>(token, { header: true })
    const claims = jwtDecode<SessionTokenClaims>(token)
    const expectedIssuer = getExpectedTokenIssuer(network)
    const now = dayjs().unix()

    return header.alg === 'ES256'
      && header.typ === getTokenHeaderType(expectedTokenUse)
      && claims.iss === expectedIssuer
      && claims.aud === expectedIssuer
      && claims.sub === expectedSubject
      && claims.token_use === expectedTokenUse
      && Number.isSafeInteger(claims.iat)
      && Number.isSafeInteger(claims.exp)
      && (claims.iat as number) > 0
      && (claims.iat as number) <= now + expirybufferSeconds
      && (claims.exp as number) > (claims.iat as number)
      && (!requireUnexpired || !hasExpired(claims.exp as number))
  } catch {
    return false
  }
}

export const isSessionTokenUsable = (
  token: string,
  network: Network,
  expectedTokenUse: JwtTokenUse,
  expectedSubject: string,
): boolean => isJwtSessionTokenUsable(token, network, expectedTokenUse, expectedSubject, true)

/**
 * Opaque refresh credentials carry no client-readable wallet or environment
 * claims. Bind them to the strict access-token envelope returned alongside the
 * credential, while allowing that access token itself to have expired.
 */
export const isRefreshSessionUsable = (
  refreshToken: string,
  accessToken: string,
  network: Network,
  expectedSubject: string,
): boolean => isOpaqueRefreshToken(refreshToken)
  ? isJwtSessionTokenUsable(accessToken, network, JWT_ACCESS_TOKEN_USE, expectedSubject, false)
  : isSessionTokenUsable(refreshToken, network, JWT_REFRESH_TOKEN_USE, expectedSubject)
