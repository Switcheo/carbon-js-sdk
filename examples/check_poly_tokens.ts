import polyTokens from "./poly_tokens.json"

export interface SimpleMap<T = unknown> {
  [index: string]: T;
}

(async () => {
  const totalCount = polyTokens.length
  let count = 0
  const chainIdCounter: SimpleMap<number> = {}
  for (const token of polyTokens) {
    if (token.axelar_chain_id) {
      count++
      if (!chainIdCounter[token.chain_id]) {
        chainIdCounter[token.chain_id] = 1
      } else {
        chainIdCounter[token.chain_id]++
      }
    }
  }

  console.log(`${count}/${totalCount}`)
  console.log(chainIdCounter)

})().catch((e) => {
  console.log({ e })
}).finally(() => process.exit(0));
