# Cosmos wallet dependency migration audit

Date: 2026-07-15
Updated: 2026-07-16 after sequential merge and Dependabot reprocessing
Target branch: `staging`
Status: three implementation PRs merged sequentially; final audit PR pending

## Recommendation and verdict

**Verdict: MERGED AND VALIDATED.** The implementation preserves Carbon's existing public `Chain`, `AssetList`, `Leap`, and `Key` contracts, fixes an independently discovered uint64 signing bug, removes the legacy SecretJS/Axios ownership path, and GitHub confirms closure of all 22 Axios alerts.

Executed merge order:

1. [#643](https://github.com/Switcheo/carbon-js-sdk/pull/643) — compatibility characterization, squash `79ec60da508801a3d6c87c62d29b5ec36fed95e9`, Node 24 run `29408649781`
2. [#645](https://github.com/Switcheo/carbon-js-sdk/pull/645) — exact uint64 Leap account-number conversion, squash `a969090f657b09d908d57325b11006c8578b34bb`, fresh Node 24 run `29465558448`
3. [#644](https://github.com/Switcheo/carbon-js-sdk/pull/644) — dependency migration and Carbon-owned compatibility types, squash `e3bdedab97715e80482db734e5779405d34e2ecf`, fresh Node 24 run `29465804873`
4. [#646](https://github.com/Switcheo/carbon-js-sdk/pull/646) — this final audit

After each implementation squash merge, only the next layer's base-relative commit was replayed onto updated `staging`, retargeted, validated locally, and required to pass fresh GitHub CI before merging.

## Feasibility questions

| Question | Result | Evidence |
|---|---|---|
| Can the current Cosmos Kit/Leap majors be used without changing Carbon runtime behavior? | Yes | Public connection, signer, ChainInfo, runtime, package, and full-suite tests pass. |
| Can Carbon preserve its existing public wallet/registry types? | Yes | Legacy consumer fixtures compile through the packed package; Carbon now owns the compatibility declarations instead of re-exporting changed upstream shapes. |
| Does the modern path remove SecretJS and legacy Axios? | Yes | `secretjs@0.17.7`, Axios `0.21.1`/`0.27.2`, and old Keplr roots disappear from the exact lock. |
| Does the migration fully close Protobuf.js or Elliptic? | No | Protobuf.js `6.11.2`/`6.11.4`, Elliptic, and exact Ethers `ws` paths remain and require separate owner migrations. |

## Version and API selection

| Root | Before | Selected | Rationale |
|---|---:|---:|---|
| `@cosmos-kit/core` | `1.8.0` | `2.18.1` | Current official stable core and required by the selected Leap extension. |
| `@cosmos-kit/leap-extension` | `0.18.0` | `2.17.1` | Current official stable Leap extension; depends on core `^2.18.1`. |
| direct `@chain-registry/types` | `0.13.0` | removed | Its only source use was a public type re-export. Carbon now owns compatible `Chain`/`AssetList` declarations, avoiding both public API breaks and obsolete Keplr `0.11.x` runtime dependencies. |

Key resolved internal transitives:

- `@chain-registry/types@0.46.15` for Cosmos Kit's `^0.46.11` contract
- `@chain-registry/types@0.50.392` for modern Chain Registry client/Keplr internals
- `@chain-registry/client@1.53.392`
- `@chain-registry/keplr@1.74.641`
- `@keplr-wallet/cosmos@0.12.28`
- CosmJS `0.36.2` internally, while Carbon's direct public CosmJS contracts remain at `0.32.4`

Zero-major caret ranges do not cross minor boundaries, so `^0.46.11` does not accept `0.50.392`; forcing one Chain Registry Types version would violate upstream contracts.

The direct `@keplr-wallet/types@0.12.207` contract is unchanged. Its pre-existing unmet, non-optional `starknet@^6` peer dependency warning remains; Carbon does not add Starknet.

### Public compatibility strategy

Upgraded upstream types are structurally breaking:

- modern Chain Registry requires/narrows fields such as `chain_type` and `type_asset`;
- modern Leap adds required `defaultOptions` and `suggestCW20Token` fields.

Carbon therefore no longer re-exports those changing upstream interfaces. It owns declarations equivalent to its prior public `Chain`, `AssetList`, `Leap`, and `Key` contracts. A compiled legacy fixture intentionally omits the new upstream-only required fields and passes through both the repository build and installed packed package.

## Independent bugfix discovered during review

PR #645 fixes an existing direct-signing bug unrelated to dependency versions. Carbon previously converted CosmJS `bigint` account numbers with `new Long(Number(accountNumber))`, truncating values above 32 bits. The fix uses exact unsigned conversion:

```ts
Long.fromString(accountNumber.toString(), true)
```

A RED-GREEN test covers account number `2^40 + 123` and verifies exact unsigned forwarding.

## Graph change

Exact package/version comparison between #645 and #644:

| Metric | #645 | #644 | Delta |
|---|---:|---:|---:|
| Raw Yarn lock stanzas | 564 | 553 | -11 |
| Yarn lock lines | 4,174 | 4,084 | -90 |
| Added package/version artifacts | — | 41 | — |
| Removed package/version artifacts | — | 52 | — |

Important removed roots and slices:

- `secretjs@0.17.7`
- Axios `0.21.1` and `0.27.2`
- Protobuf.js `6.11.3`
- `@chain-registry/keplr@1.8.0`
- Keplr Wallet `0.11.16` and `0.11.64` families
- direct `@chain-registry/types@0.13.0`
- SemVer `7.6.2`
- obsolete IOV, libsodium, Miscreant, and SecretJS crypto utility paths

Important additions are the modern Cosmos Kit, Chain Registry, Keplr `0.12.28`, Noble, WalletConnect, and internal CosmJS `0.36.2` families.

## Alert projection

The lock-aware projection matched each known alert's vulnerable SemVer range against versions present in the exact Yarn lockfile. It first reproduced the existing audited 44-alert baseline and projected 22 after #644. After the merge, GitHub reprocessed the default `staging` branch and confirmed closure of all 22 Axios alerts, but also created one new transitive `uuid` alert that could not appear in the baseline-derived input because `uuid` was absent from the baseline lock.

| Metric | Before migration | Live after #644 | Delta |
|---|---:|---:|---:|
| Open alerts | 44 | 23 | -21 |
| Critical | 3 | 3 | 0 |
| High | 19 | 8 | -11 |
| Medium | 15 | 6 | -9 |
| Low | 7 | 6 | -1 |

GitHub confirms all 22 Axios alerts closed. Remaining live ownership:

- Protobuf.js: 13
- Elliptic: 7
- exact Ethers `ws`: 2
- `uuid`: 1

The post-merge 23-alert inventory is GitHub-confirmed. The `uuid` alert is GHSA-w5hq-g745-h8pq / CVE-2026-41907: `uuid@9.0.1` is affected by a missing buffer-bounds check in v3/v5/v6 when callers provide a buffer; the first patched supported line is `11.1.1`.

## Compatibility and validation evidence

Across the stack, focused contracts cover:

1. Leap account retrieval, direct signing, Amino signing, arbitrary signing, chain IDs, addresses, complete forwarded sign documents, and sign options.
2. Complete Carbon `ChainInfo`: endpoints, BIP44, currencies, fee currencies, gas steps, Bech32 prefixes, and feature membership.
3. Public `connectWithLeap` orchestration for direct and Ledger accounts: suggestion, key retrieval, enablement, provider agent, public key, and signer selection.
4. Leap extension metadata loading.
5. Legacy `Chain`, `AssetList`, `Leap`, `Key`, `Keplr`, and `ChainInfo` consumer type compilation through the public package entrypoint.
6. Exact coherent direct/transitive targets and continued absence of SecretJS, legacy Axios/Protobuf, and old Keplr roots.
7. Exact unsigned uint64 account-number forwarding.

Final local validation through #644:

- focused wallet/migration/uint64 contracts: 8/8 passed
- full Node test suite: 112/112 passed
- dependency hygiene: 40/40 passed
- lifecycle-enabled frozen Yarn install: passed
- Yarn integrity: passed
- lint and TypeScript build: passed
- package dry-run: passed
- isolated lifecycle-enabled packed consumer runtime imports: passed
- packed legacy public-type consumer compilation: passed
- `git diff --check` and focused credential scan: passed

## Supply-chain review

- 576 installed packages have verified registry signatures.
- 41 packages have verified attestations.
- No newly added package has `preinstall`, `install`, or `postinstall` hooks.
- Added artifacts use MIT, Apache-2.0, ISC, or Clear BSD/BSD-3-Clause-Clear licenses; packages declaring `SEE LICENSE IN LICENSE` were checked against their bundled license files.
- Direct roots and key resolved transitives were checked for registry identity, integrity, shasum, repository linkage, license, scripts, peers, engines, and deprecation metadata.

Observed upstream caveats:

- Cosmos Kit core declares `nock@13.5.4` as a runtime dependency. It is official, MIT-licensed, signature-verified, and lifecycle-hook-free; no override is applied.
- Cosmos Kit brings `uuid@9.0.1`. GitHub now reports GHSA-w5hq-g745-h8pq against versions below `11.1.1`; this is one medium transitive alert. No incompatible major override is applied without upstream compatibility evidence.
- Carbon's pre-existing direct `@keplr-wallet/types@0.12.207` has an unmet, non-optional `starknet@^6` peer. Carbon still does not declare Starknet directly.
- Carbon's direct `@cosmjs/crypto@0.32.4` remains and emits an upstream deprecation warning that its Elliptic-backed cryptography contains security-relevant bugs and that private keys might still be at risk. This stack does not remediate that path.

## Non-goals and remaining work

This stack does not:

- upgrade Carbon's direct CosmJS `0.32.4` family;
- move all Protobuf.js owners to 7.x;
- migrate Ethers 5 to 6;
- force Cosmos Kit's `uuid` dependency from 9.x to 11.x without compatibility evidence;
- force Elliptic, Protobuf.js, Chain Registry Types, or other incompatible ranges through resolutions;
- dismiss Dependabot alerts manually.

Remaining Protobuf work must address direct `protobufjs@6.11.4`, `@confio/ics23` through direct CosmJS `0.32.4` (`protobufjs@6.11.2`), and `@keplr-wallet/cosmos@0.12.28` (`protobufjs@6.11.4`). Remaining cryptography work includes the direct CosmJS/Elliptic private-key path and exact Ethers 5 `ws`/Elliptic owners. The new `uuid` alert should be remediated through a Cosmos Kit-compatible upstream upgrade or a separately proven compatible dependency change, not an untested major resolution. Prioritize follow-up according to private-key exposure rather than alert count alone.
