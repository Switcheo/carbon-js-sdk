export interface MetamaskError {
    code: string;
    message: string;
    stack: string;
}


const isNonceMismatchError = (error: MetamaskError) => {
    return error.message.includes('invalid nonce')
}

export const parseError = (error: MetamaskError) => {
    if (isNonceMismatchError(error))
        return new Error('Please clear the activity data in your wallet. On your MetaMask Settings > Advanced > Clear activity tab data.')
    return error
}

