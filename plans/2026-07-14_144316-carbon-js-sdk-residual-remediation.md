# Carbon JS SDK Residual Remediation Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Establish a real Node 24 test/CI foundation, correct dependency contracts, eliminate avoidable tooling warnings, and remediate the 113 open dependency alerts in controlled, auditable waves.

**Architecture:** Treat this as a program of focused PRs rather than one large dependency rewrite. First make regressions observable with deterministic tests and CI. Then correct manifest/peer contracts, apply direct safe security patches, and finally remediate transitive advisories by upgrading or removing the direct dependency roots that introduce them. Major ecosystem migrations remain isolated behind explicit compatibility gates.

**Tech Stack:** Node.js 24.18.0, TypeScript 5.8, Yarn Classic 1.22.22, Node's built-in `node:test`, ESLint 9, GitHub Actions, GitHub Dependabot alerts.

---

## Current Evidence and Baseline

- PR #626 was squash-merged to `staging` as `a4cbb0825a8f385e7deb2be438fd0d2d2a24ec61`.
- No `.github/workflows/` CI exists; only `.github/dependabot.yml` exists.
- `package.json` defines `"test": "tsc && node lib/test.js"`, but no tracked `test.ts`, `src/test.ts`, or generated `lib/test.js` exists in the available checkout history.
- Six files under `examples/` contain `test` in their names, but they are network/integration examples, not deterministic unit tests.
- Yarn emits peer warnings because SDK source directly imports `@cosmjs/amino` and `@cosmjs/proto-signing` without declaring them directly.
- `@improbable-eng/grpc-web@0.15.0` declares `google-protobuf@^3.14.0` as a peer, but it is absent.
- `@cosmos-kit/core@1.8.0` peers on `@cosmjs/amino`, `@cosmjs/proto-signing`, `@cosmjs/stargate`, `@cosmjs/cosmwasm-stargate`, and `cosmjs-types`.
- `@keplr-wallet/types@0.12.207` peers on `starknet@^6`; its current latest version, 0.13.40, still peers on `starknet` (now `^8`). Adding Starknet merely to silence a type-package warning is not approved by this plan.
- Nested `npm run` calls invoked by Yarn 1 pass legacy `npm_config_*` variables to npm 11, producing warnings even though commands succeed.
- Current open Dependabot alert inventory: 113 total — 10 critical, 52 high, 43 medium, 8 low.
- Alert relationship: 6 direct, 107 transitive. Scope: 111 runtime, 2 development. 111 alerts report patched versions.
- Direct vulnerable packages are `lodash`, `secp256k1`, `semver`, and `node-fetch` (six alerts because Lodash has three advisories).
- Three stale/conflicting Dependabot PRs remain open: #270, #220, and #211. PR #220 is already operationally superseded by merged PR #624. Closing PRs remains a separate remote action.

## Program Rules

1. One focused branch and draft PR per workstream below.
2. Start every branch from the latest `origin/staging`; never rewrite or clean an existing branch destructively.
3. Verify Git identity as `DaedalusCoder <daedaluscoder@gmail.com>` before commits.
4. Verify GitHub API login as `daedaluscoder` before every push or PR creation.
5. Dependency changes follow the Safe Dependency Updates workflow: registry metadata, release notes, source/tarball diff, lifecycle scripts, transitive graph, advisories, and fresh-install validation.
6. Do not use blanket Yarn `resolutions` merely to suppress alerts. A resolution is allowed only when the direct parent accepts the patched version and behavior is validated.
7. Do not group major upgrades with routine patch/minor remediation.
8. Do not add `starknet` solely to silence `@keplr-wallet/types` peer output.
9. Every PR must pass a fresh Node 24 frozen install with lifecycle scripts enabled, not just reuse `node_modules`.
10. Record the before/after GitHub alert count for each security PR.

---

## PR 1 — Testing, CI, and Script Foundation

**Branch:** `test/node24-ci-foundation`

**Objective:** Replace the nonexistent test entrypoint with a deterministic Node 24 test harness, eliminate nested npm/Yarn warning paths, and enforce the checks in GitHub Actions.

**Files:**
- Modify: `package.json`
- Create: `tests/package-smoke.test.cjs`
- Create: `scripts/sync-reset.sh`
- Modify: `scripts/update-proto.sh`
- Create: `.github/workflows/node24.yml`
- Modify: `.github/dependabot.yml`
- Modify: `README.md`

### Task 1.1: Reproduce and lock the test baseline

1. From a fresh Node 24 clone, run `yarn test`.
2. Expected RED result: `MODULE_NOT_FOUND` for `lib/test.js`.
3. Record the command and failure in the PR body.

### Task 1.2: Add the first deterministic smoke test

Create `tests/package-smoke.test.cjs`:

```js
const assert = require("node:assert/strict");
const test = require("node:test");

const sdk = require("../lib/index.js");

test("the compiled package entrypoint loads", () => {
  assert.equal(typeof sdk.CarbonSDK, "function");
});
```

Run after compilation:

```bash
node --test tests/*.test.cjs
```

Expected GREEN result: one passing test, zero failures.

### Task 1.3: Remove nested package-manager calls

Update `package.json` scripts so normal build/lint/package lifecycle paths invoke local binaries directly rather than launching npm from Yarn:

```json
{
  "build": "eslint . && tsc && tsc-alias",
  "test": "tsc && tsc-alias && node --test tests/*.test.cjs",
  "lint": "eslint .",
  "prepare": "rm -rf ./lib && eslint . && tsc && tsc-alias",
  "prepublishOnly": "eslint .",
  "preversion": "eslint .",
  "version": "prettier --write \"src/**/*.ts\" && git add -A src"
}
```

Before changing `watch`, verify `nodemon` quoting on Linux. Prefer:

```json
"watch": "nodemon --exec \"eslint . && tsc && tsc-alias\""
```

Create `scripts/sync-reset.sh` containing the existing reset operations, and call that script from both `sync-register` and `scripts/update-proto.sh`. This avoids duplicating destructive generated-code cleanup while removing nested `npm run sync-reset` calls.

### Task 1.4: Add Node 24 CI

Create `.github/workflows/node24.yml` with:

- triggers: pull requests targeting `staging`, and pushes to `staging`
- `actions/checkout@v4`
- `actions/setup-node@v4` using `.nvmrc` and Yarn cache
- `corepack enable`
- `corepack prepare yarn@1.22.22 --activate`
- `yarn install --frozen-lockfile --non-interactive`
- `yarn lint`
- `yarn test`
- `npm pack --dry-run --json`
- pack the actual tarball, install it without lifecycle scripts into an isolated consumer under `$RUNNER_TEMP`, and run `tests/package-smoke.test.cjs` against the installed package

Use least privileges:

```yaml
permissions:
  contents: read
```

### Task 1.5: Extend Dependabot to GitHub Actions

Add a second `.github/dependabot.yml` update entry for `github-actions`, weekly on Monday in `Asia/Singapore`, with the same cooldown policy and a `github-actions` label only if that label exists or is created deliberately.

### Task 1.6: Validate PR 1

Run in a fresh Node 24 clone:

```bash
yarn install --frozen-lockfile --non-interactive
yarn check --integrity
yarn lint
yarn test
yarn build
npm pack --dry-run --json
git diff --check
```

Acceptance criteria:

- no `lib/test.js` missing-file failure
- no npm 11 `Unknown env config` warnings on normal build/test/pack paths
- the packed artifact contains its declared JavaScript and TypeScript entrypoints and imports successfully after a clean consumer install
- CI runs on the draft PR and passes
- repository packages successfully

After merge, configure the Node 24 workflow check as a required branch-protection status check. This settings change is separate from the code PR and requires explicit confirmation at execution time.

---

## PR 2 — Dependency Contract and Peer Correctness

**Branch:** `fix/dependency-contracts`

**Objective:** Declare packages that SDK source or direct runtime dependencies actually require, without hiding peer warnings through unrelated large installs.

**Files:**
- Modify: `package.json`
- Modify: `yarn.lock`
- Modify: `README.md`
- Tests: `tests/dependency-contracts.test.cjs` and focused installed-package imports in `tests/package-smoke.test.cjs`

### Task 2.1: Add true direct CosmJS dependencies

Because SDK source imports these packages directly, declare them at the same tested family version as `@cosmjs/stargate@0.32.4`:

```json
"@cosmjs/amino": "0.32.4",
"@cosmjs/proto-signing": "0.32.4"
```

Test representative wallet/signing module imports.

### Task 2.2: Resolve Cosmos Kit's remaining peer contract

Test adding:

```json
"@cosmjs/cosmwasm-stargate": "0.32.4"
```

Keep it only if required by the current `@cosmos-kit/core@1.8.0` runtime path or needed to produce a clean supported peer graph. Measure installed/runtime graph impact. Do not upgrade `@cosmos-kit/leap` from 0.x to 2.x in this PR.

Implemented decision: keep `@cosmjs/cosmwasm-stargate@0.32.4`. It satisfies `@cosmos-kit/core@1.8.0`'s declared peer and adds only the matching CosmJS package plus `pako@2.2.0`; the latter was separately audited as a canonical, signed, lifecycle-hook-free JavaScript artifact.

### Task 2.3: Resolve gRPC Web's declared peer

Audit and, if package/source evidence confirms the peer is required, add a compatible `google-protobuf` 3.x release. Add an import/package smoke test that exercises `GrpcQueryClient` module loading without making a network call.

Implemented decision: add `google-protobuf@3.21.4`, the latest compatible 3.x release for `@improbable-eng/grpc-web@0.15.0`, and test the gRPC client module from both the worktree and packed consumer install.

### Task 2.4: Decide Keplr/Starknet policy without adding dead weight

Do not add Starknet automatically. Produce a short decision note with these options:

1. keep the Keplr peer warning documented temporarily;
2. replace external Keplr type imports with SDK-owned structural interfaces in a dedicated API-contract PR;
3. upgrade Keplr types and add Starknet only if SDK runtime functionality actually needs it.

Default recommendation: option 1 now, option 2 later if API compatibility analysis shows no consumer break. Treat option 3 as rejected unless runtime evidence changes.

Implemented decision: option 1. The README documents why Starknet is not a direct Carbon dependency and makes the package-manager behavior explicit: Yarn 1 leaves the non-optional Keplr type-package peer unresolved and warns, while npm 7+ can auto-install Starknet in consumer projects. Baseline comparison confirmed npm 11 already did this before PR 2. Eliminating the transitive npm install remains a separate Keplr API-contract change under option 2.

### Task 2.5: Validate PR 2

- fresh frozen Node 24 install with lifecycle scripts
- capture peer warnings before and after
- lint, test, build, package
- representative Keplr, Leap, signing, and gRPC module import tests
- dependency tree diff showing every added runtime package

---

## PR 3 — Direct Security Patches

**Branch:** `security/direct-runtime-patches`

**Objective:** Resolve the six direct alerts using audited, non-major targets where compatible.

**Candidate targets to audit, not blindly apply:**

| Package | Current declaration | Minimum patched target | Notes |
|---|---:|---:|---|
| `node-fetch` | `^2.6.1` | `2.6.7` | Prefer latest maintained 2.x after source/advisory review; avoid v3 ESM migration here. |
| `secp256k1` | `^4.0.2` | `4.0.4` | Security-sensitive crypto update; add ECDH/sign/verify regression tests before bump. |
| `semver` | `^7.3.7` | `7.5.2` | Audit latest compatible 7.x. |
| `lodash` | `^4.17.21` | `4.18.0` | New minor with multiple advisory fixes; inspect release/source diff and affected SDK usage carefully. |

### Task 3.1: Add focused tests before crypto/util updates

Add deterministic tests for the actual SDK paths that use:

- `secp256k1` key/signature or ECDH behavior
- `semver` comparisons
- Lodash helpers used by the SDK
- redirected request/header behavior around `node-fetch`, if the SDK wrapper exposes it without external network dependence

Tests must fail if the relevant behavior changes incorrectly, not merely assert package versions.

### Task 3.2: Audit each published target

For each package:

- verify registry metadata, maintainers, repository, license, engines, publish time
- inspect release notes and source/tarball diff
- inspect lifecycle scripts and new dependencies
- confirm advisory closure at the exact resolved version
- compare transitive lockfile changes

### Task 3.3: Apply one package at a time

After each update, run focused tests. Consolidate into one PR only if all four remain routine and independently auditable. Split Lodash or secp256k1 into separate PRs if their source diff or behavior risk is materially larger.

### Task 3.4: Validate alert delta

Record Dependabot alerts before and after. Expected direct-alert result: all six direct alerts closed, unless a candidate is deliberately split or rejected with evidence.

---

## PR 4+ — Transitive Security Remediation by Root Cause

**Branching:** one branch per root dependency family, e.g. `security/protobufjs-chain`, `security/axios-chain`.

**Objective:** Eliminate the 107 transitive alerts by changing the direct roots that introduce them, not by blindly overriding leaf packages.

### Task 4.1: Generate a machine-readable advisory inventory

Create a local audit artifact under `.hermes/audits/` (do not publish credentials or raw private API responses) containing:

- alert number and severity
- vulnerable package/range and first patched version
- runtime/development scope
- direct/transitive relationship
- every `yarn why <package>` root path
- whether the parent range accepts the patched leaf
- proposed remediation type: lock refresh, safe resolution, direct-root patch/minor, direct-root major, or remove unused root

Prioritize packages currently dominating the alerts:

- `axios` — 46 alerts
- `protobufjs` — 13
- `node-forge` — 7
- `elliptic` — 7
- `h3` — 5
- `form-data` — 4
- `ws` — 3
- `follow-redirects` — 3

### Task 4.2: Remove unused direct roots before upgrading them

Run a static import/require/export scan and package-packing analysis for every direct dependency. Confirm dynamically loaded or type-only uses manually. Candidate observations from the Node 24 audit, such as unused `secp256r1`, must be revalidated before removal.

Remove genuinely unused roots in a dedicated PR. Recompute the alert count afterward; removal is preferable to maintaining vulnerable dead code.

### Task 4.3: Apply compatible leaf patches only when parent ranges permit

For patched transitive versions already allowed by parent semver ranges:

1. regenerate the lockfile deliberately;
2. verify only expected selectors moved;
3. avoid permanent `resolutions` unless normal resolution cannot select the safe release;
4. test affected SDK features.

### Task 4.4: Upgrade direct roots in separate families

Likely root families include Neon/City of Zion, Cosmos Kit/WalletConnect, Ledger, Ethers/Ethereum utilities, and protobuf tooling. Do not assume these mappings; prove them with `yarn why`.

Each family PR must include:

- old/new root versions
- all advisories closed
- API migration notes
- runtime and package-size impact
- focused behavior tests
- fresh Node 24 install/build/package

### Task 4.5: Isolate major migrations

Keep these potential majors separate unless evidence proves no behavioral/API break:

- `@cosmos-kit/leap` 0.x → 2.x
- CosmJS 0.32 → 0.36 family
- Ethers 5 → 6
- legacy Neon packages
- `bip32` and crypto-stack majors
- Keplr type/API replacement

Each major needs a dedicated design note, consumer-facing compatibility assessment, and regression tests for both Node and browser-facing exports.

---

## PR 5 — Dependency Hygiene and Ongoing Policy

**Branch:** `chore/dependency-hygiene`

**Objective:** Prevent the alert backlog and stale automation state from rebuilding.

**Files:**
- Modify: `.github/dependabot.yml` if audit findings require better grouping/ignore policy
- Modify/create: dependency-maintenance documentation
- Potential GitHub settings changes after explicit approval

### Tasks

1. Verify Dependabot opens fresh PRs after the lockfile/security waves.
2. Audit stale PRs #270, #220, and #211 against current `staging`.
3. Close only PRs proven superseded or irrelevant, and only with explicit user approval at execution time.
4. Require the Node 24 CI check in branch protection.
5. Add a recurring advisory review cadence: critical/high weekly, medium/low monthly.
6. Keep major Dependabot updates ungrouped; group only audited patch/minor updates.
7. Define a release gate: zero known critical/high direct alerts and no new critical runtime alerts unless a documented exception exists.

---

## Validation Matrix for Every PR

Run using official Node 24.18.0:

```bash
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install --frozen-lockfile --non-interactive
yarn check --integrity
yarn lint
yarn test
yarn build
npm pack --dry-run --json
git diff --check
```

Also run:

- runtime imports for changed dependency families
- dependency engine-range scan
- before/after `yarn why` for affected packages
- before/after Dependabot alert counts for security PRs
- independent code/security review before push

## Risks and Tradeoffs

- The SDK currently lacks behavioral tests for signing, wallets, providers, and network clients. Major dependency work before PR 1 would be difficult to validate safely.
- A smoke test proves package integrity, not protocol correctness. Add focused pure-unit tests incrementally before each risky upgrade.
- Peer-warning elimination can increase runtime bundle size. Do not optimize for a warning-free install at the expense of dead dependencies.
- Yarn Classic has limited peer and override ergonomics. Migrating package managers is explicitly out of scope until the security backlog is controlled; combining both would obscure lockfile causality.
- Browser compatibility is not proven by Node import tests. Wallet, WebHID/WebUSB, and bundler-sensitive changes need browser/bundler validation in their own major-family PRs.
- The checkout is shallow. Historical claims about when test files disappeared require GitHub API or a fresh full-history audit before attributing responsibility.

## Recommended Execution Order

1. PR 1 — test/CI/script foundation
2. PR 2 — dependency contract and peer correctness
3. PR 3 — direct security patches
4. PR 4a — unused dependency removal
5. PR 4b+ — transitive alert families, highest severity first
6. PR 5 — automation and branch-protection policy
7. Major ecosystem migrations only after the above gates are green

## Completion Criteria

- required Node 24 CI runs and passes on every PR
- `yarn test` executes real deterministic tests
- normal build/test/package paths emit no nested npm/Yarn config warnings
- direct imports are directly declared or intentionally exposed as documented peers
- no unexamined peer warning is silenced by unrelated dependency bloat
- zero critical/high direct dependency alerts
- every remaining transitive alert has an owner/root dependency and documented remediation or exception
- stale Dependabot PRs are audited and resolved
- all changes land through focused, squash-merged PRs
