# Carbon JS SDK Dependency Remediation Report

The compatible dependency-remediation and maintenance-policy layers were sequentially squash-merged into `staging` after explicit authorization. Every feature branch was restacked one delta at a time, validated locally, updated with explicit force-with-lease, retargeted to `staging`, and required to pass fresh CI before merge. **Nothing was pushed directly to `staging`.** This report is the final documentation layer.

## Merged implementation stack

| Order | PR | Staging squash commit | Purpose |
|---:|---|---|---|
| 1 | [#630](https://github.com/Switcheo/carbon-js-sdk/pull/630) | `6f85e87` | Remove 9 unused roots and 76 artifacts |
| 2 | [#631](https://github.com/Switcheo/carbon-js-sdk/pull/631) | `abef113` | Declare exact direct-import contracts and add an AST guard |
| 3 | [#632](https://github.com/Switcheo/carbon-js-sdk/pull/632) | `6d112fa` | Compatible crypto leaves |
| 4 | [#633](https://github.com/Switcheo/carbon-js-sdk/pull/633) | `d111616` | Compatible Axios/HTTP patches |
| 5 | [#634](https://github.com/Switcheo/carbon-js-sdk/pull/634) | `baf2678` | Wallet and utility leaves |
| 6 | [#635](https://github.com/Switcheo/carbon-js-sdk/pull/635) | `8ac82bd` | Babel runtime and SemVer |
| 7 | [#636](https://github.com/Switcheo/carbon-js-sdk/pull/636) | `9242568` | Protobuf UTF-8 leaf |
| 8 | [#638](https://github.com/Switcheo/carbon-js-sdk/pull/638) | `9c1f505` | Remaining compatible Elliptic/ws selectors |
| 9 | [#637](https://github.com/Switcheo/carbon-js-sdk/pull/637) | `0dea525` | Dependabot, CI, and maintenance policy |
| 10 | [#639](https://github.com/Switcheo/carbon-js-sdk/pull/639) | assigned by GitHub on merge | Final audit and merge record |

The active GitHub account at every push and merge gate was `daedaluscoder`; author and committer identity was `DaedalusCoder <daedaluscoder@gmail.com>`.

## Remediation included

### #630 — unused roots

- Removed nine unused direct runtime roots and 76 resolved artifacts.
- Replaced the unused Leap umbrella with exact imported packages.
- Removed stale ambient declarations.
- Removed vulnerable dead copies of Lodash, node-fetch, ws, and related artifacts.

### #631 — direct import contracts

- Declared 14 packages imported directly by source or public declarations instead of relying on accidental transitive ownership.
- Added a TypeScript-AST guard requiring external source imports to be declared runtime dependencies.
- Kept the graph neutral: 538 artifacts before and after.

### #632 — crypto leaves

- `base-x` `3.0.8 → 3.0.11`
- `bn.js` `4.12.0 → 4.12.3` and `5.2.1 → 5.2.3`
- `cipher-base` `1.0.4 → 1.0.5`
- `pbkdf2` `3.1.2 → 3.1.3`
- `sha.js` `2.4.11 → 2.4.12`
- `tiny-secp256k1` `1.1.6 → 1.1.7`
- Compatible `secp256k1` selectors → audited `4.0.4`

Known-answer crypto tests cover PBKDF2, SHA, base58, signing, verification, and direct native secp256k1 prebuild loading.

### #633 — HTTP

- Direct Axios `0.27.2 → 0.33.0`; `0.33.0` was selected as the audited current safe 0.x target.
- Compatible Axios 1.x selector → `1.18.1`.
- Compatible `follow-redirects` selectors → `1.16.0`.
- Runtime `form-data` → `4.0.6`; development copy → `3.0.5`.

Tests cover local POST/response behavior, interceptors, structured errors, redirect credential stripping, and multipart CRLF handling.

### #634 — wallet and utility leaves

- `braces` → `3.0.3`
- `cross-spawn` → `7.0.6`
- `defu` → `6.1.5`
- `h3` → `1.15.9`
- `micromatch` → `4.0.8`
- `node-forge` → `1.4.0`
- Compatible Picomatch 2.x selectors → `2.3.2`

Wallet, Leap, glob, subprocess-argument, safe-merge, H3, and SHA behavior were exercised.

### #635 — Ledger/runtime

- Both compatible `@babel/runtime` selectors → `7.26.10`.
- Vulnerable `semver@^7.3.5` coalesced to audited `7.8.5`.
- Safe `semver@7.6.2` path retained.
- Removed obsolete `regenerator-runtime@0.13`, `lru-cache@6`, and `yallist@4` artifacts reachable only from superseded copies.

### #636 — Protobuf UTF-8 leaf

- `@protobufjs/utf8` `1.1.0 → 1.1.1`.
- Regression proves malformed overlong bytes `C0 80` decode to U+FFFD rather than U+0000.
- This layer explicitly does not claim Protobuf.js 6.x family closure.

### #638 — residual compatible selectors

- Compatible Elliptic selectors coalesced at existing audited `elliptic@6.6.1`.
- Compatible `ws@^7` selectors coalesced at existing audited `ws@7.5.11`.
- Exact Ethers 5 blockers remain visible: `elliptic@6.5.4` and `ws@7.4.6`.
- Selector-only movement: 564 artifacts before and after; no artifact-body changes.

## Alert inventory

GitHub's Dependabot API still reported the pre-remediation default-branch inventory immediately after the final implementation merge: 113 open — 10 critical, 52 high, 43 medium, and 8 low. `staging` is the default branch, but GitHub had not yet reprocessed the newly merged lock graph when this report was finalized.

| Through PR | Lockfile-projected open | Projected closed | Newly closed |
|---|---:|---:|---:|
| Pre-remediation `staging` | 113 | 0 | — |
| #630 | 106 | 7 | 7 |
| #631 | 106 | 7 | 0 |
| #632 | 96 | 17 | 10 |
| #633 | 65 | 48 | 31 |
| #634 | 47 | 66 | 18 |
| #635 | 45 | 68 | 2 |
| #636 | 44 | 69 | 1 |
| #638 | 44 | 69 | 0 |
| #637 | **44** | **69** | 0 |

Projected remaining severity: **3 critical, 19 high, 15 medium, 7 low**. The projection normalizes comma-separated GitHub vulnerable ranges and was calculated from the exact final lock graph; it is not presented as GitHub-confirmed closure.

## Genuine blockers not overridden

### Legacy Axios roots — 22 projected alerts

- `secretjs@0.17.7` pins exact `axios@0.21.1`.
- Keplr/chain-registry paths constrain `axios@0.27.2`.
- Full closure requires focused SecretJS and Keplr/chain-registry root migrations.

### Protobuf.js 6.x — 13 projected alerts

- SDK direct `protobufjs@6.11.4`.
- `secretjs@0.17.7` pins exact `6.11.3`.
- `@confio/ics23@0.6.8` and Keplr/Cosmos paths constrain 6.x.
- Full closure requires Protobuf.js `7.6.3` and root upgrades. A blanket resolution would violate published parent contracts.

### Elliptic — 7 projected alerts

- `elliptic@6.6.1` still has unpatched GHSA-848j-6mx2-7j84.
- Exact `elliptic@6.5.4` remains under Ethers 5 signing-key.
- Owners include CosmJS crypto, Ethers 5, BIP32, Ethereum utilities, Keplr, and Cosmos paths.
- Required migrations include CosmJS `>=0.34`, Ethers 6, and modern BIP32/Ethereum utilities. No available Elliptic release fully closes the family.

### ws — 2 projected alerts

- Exact `ws@7.4.6` remains under `@ethersproject/providers@5.7.2`.
- Compatible `^7` paths are at `7.5.11`.
- Full closure requires an Ethers/provider root migration.

## Supply-chain and validation evidence

Every dependency layer received fail-closed review of canonical identity, registry integrity and shasum, repository linkage, license, engines, deprecation status, lifecycle scripts, dependency changes, signatures, parent ranges, and lock-graph scope. Findings were fixed and re-reviewed before publication.

Latest complete stack validation used Node `24.18.0` and Yarn `1.22.22`:

- frozen install with scripts disabled — passed
- matching `yarn check --integrity --ignore-scripts` — passed
- clean frozen lifecycle-enabled install — passed
- `yarn check --integrity` and `yarn check --verify-tree` — passed
- `yarn lint` — passed
- `yarn test` — **103/103 passed**
- standalone dependency-hygiene suite — **40/40 passed**
- `yarn build` — passed
- `npm pack --dry-run --json` — passed; 1,324 files
- lifecycle-enabled isolated packed consumer — passed
- package smoke tests — **6/6 passed**
- native secp256k1 probe — passed; audited prebuild loaded
- `npm audit signatures` — 590 installed packages verified; 42 attestations
- `git diff --check` and focused credential-pattern scans — passed
- independent final reviews — no blockers

`gitleaks` and `actionlint` were unavailable. Focused credential scans were used; GitHub YAML parsed successfully and received independent manual review.

Each implementation and policy PR (#630–#637, with #638 before #637 in stack order) received fresh normal GitHub CI after it was restacked and retargeted to `staging`; every run passed before merge. Full local Node 24 validation was also run at every layer. This final documentation PR is likewise required to pass fresh CI before merge.

## Policy layer (#637)

- Dependabot explicitly targets `staging`, keeps majors separate, and groups runtime/development patch-minor updates independently.
- Weekly cadence and cooldown are retained.
- Actions remain immutable-SHA pinned with read-only permissions, `persist-credentials: false`, Yarn cache, public `ubuntu-latest`, concurrency cancellation, and timeout.
- CI performs scripts-disabled acquisition before a lifecycle-enabled install, verifies the dependency tree, installs the packed consumer with lifecycle scripts, and checks native secp256k1 loading.
- `yarn test:dependency-hygiene` uses existing source-import, contract, and unused-root tests; no new analyzer dependency is introduced.
- `DEPENDENCY_MAINTENANCE.md` documents the maintenance and stacked-merge workflow.
- No GitHub settings were changed remotely.

## Executed review and merge order

The implementation and policy layers were reviewed and merged in this exact order:

1. #630
2. #631
3. #632
4. #633
5. #634
6. #635
7. #636
8. #638
9. #637
10. #639 as the final documentation layer

For each implementation/policy layer, the process was:

1. squash-merge the lowest green PR with exact head-SHA matching;
2. fetch updated `staging`;
3. rebase only the next PR's delta onto new `staging`;
4. update that remote branch with an explicit force-with-lease;
5. retarget it to `staging`;
6. run local Node 24 validation and fresh free GitHub CI;
7. squash-merge only after all gates passed;
8. repeat.

The repository-specific review bypass was used only after explicit merge authorization. No direct push to `staging`, blanket dependency resolution, destructive reset, or skipped test/CI gate was used.
