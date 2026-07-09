# Agent Notes

- Prefer the smaller, simpler final codebase when fixing unsupported or obsolete behavior. The completed change should remove obsolete branches, helpers, flags, states, fixtures, tests, and docs where practical.
- Prefer cleanup over compatibility layers when practical. Remove dead paths, old flags, and superseded code instead of preserving both implementations by default.
- Do not add backward-compatibility shims unless they are clearly needed for deployed/shared environments, external consumers, or an explicit user request.
- If backward compatibility might be needed and you are not sure, pause and ask before preserving old behavior.
- Treat proper cleanup as end-to-end work when needed: schema changes, data backfills, migrations, caller updates, docs, and removal of stale operational scripts should be considered together.
- Strongly prefer adapting tests, stubs, fixtures, and helpers to real production interfaces rather than changing core/runtime code to satisfy tests.
- If a test appears to require production complexity mainly for the test harness, pause and check with the user unless there is a strong production-facing reason for the change.

## Recommendation Discipline

- Do not optimize for agreement. When asked for design, architecture, API shape, product, or tradeoff advice, give an independent recommendation first.
- Separate the recommendation from the user's proposed framing. If the framing is partly wrong, incomplete, or conflates separate decisions, say so clearly.
- Prefer this structure for non-trivial recommendations:
  - Recommendation
  - Why
  - What I would not do
  - When I would change my mind
- Do not reverse or soften a recommendation just because the user pushes back. Update it only when new facts, constraints, or goals materially change the tradeoff.
- If the conversation reveals that you agreed too quickly, call that out and restate the stable recommendation.

## Semantic Fix Discipline

- For runtime, state-machine, reconciliation, ranking, freshness, lifecycle, security-sensitive, financial, or safety-critical changes, do not implement the first minimal patch that satisfies one failing scenario. First identify the invariant being preserved, all producers of the relevant field/event/status, and the consumers that depend on it.
- Treat shared enum values, serialized fields, config keys, and status labels as potentially overloaded until proven otherwise. If a value can come from multiple producers with different meanings, do not assign one global behavior, rank, or policy without checking each producer.
- When responding to review findings, answer with production semantics first: why the issue is or is not real, what side effects a fix could introduce, and what counterexample the fix must not break.
- Prefer context-aware fixes over blanket fixes when semantics differ by source, event type, lifecycle phase, caller, or environment.
- For fixes in ranking, terminality, freshness, lifecycle state, or safety logic, add regression tests for both the reported failure case and a counterexample proving the fix does not regress another valid path.
- Performance optimizations must not change correctness, API semantics, or reporting meaning. When replacing an expensive derivation with a faster materialized, cached, batched, or scoped path, first identify every field the old path produced and preserve semantics or explicitly document and get approval for a contract change.
- If the correct fix requires changing an event, schema, or API contract, say that clearly instead of hiding the contract issue behind a local conditional.

## Data vs Code Fix Discipline

- If incorrect historical rows, events, or artifacts are the only reason a screen/API/report looks wrong, fix the data with a migration, backfill, repair script, or documented runbook. Do not add read-time code that makes bad stored state appear correct.
- Code changes should prevent future bad writes or make future state transitions correct. They should not reinterpret, mask, or silently normalize existing bad data unless explicitly approved.
- Before adding fallback logic for stale or malformed stored state, identify whether the issue is a live writer bug, a one-time data problem, or both.
- Read models should report stored lifecycle/status fields literally unless they are explicitly documented as derived fields. If a derived field is needed, expose it separately instead of overwriting the canonical stored value.
- When old data needs correction, prefer an auditable repair with a preflight query, expected row count, and post-check. If the repair is risky or irreversible, ask before running it and include rollback/stamping guidance where relevant.
- Regression tests for historical-data bugs should prove the future writer no longer creates bad rows. Do not make tests pass by teaching production code to hide fixtures that represent corrupt old data.

## Configuration And API Contracts

- When removing a request field, config key, serialized flag, or public option, do not keep feature-specific rejection or deprecation branches for the old name by default. Delete the old path entirely unless the user asks for a compatibility period.
- Invalid input for removed fields should usually fail through ordinary generic schema validation.
- Do not keep docs or tests that mention removed fields or flags by name, except in migrations, backfills, or release notes that must touch historical state.
- For schema or API removals, backend work is not complete until known callers are updated too, unless the user explicitly approves a temporary shim or phased rollout.
- When adding, removing, or renaming configuration keys, update the relevant configuration docs and schema/options surfaces in the same change where practical.

## Git And PR Workflow

- Preserve unrelated user changes. Do not revert or overwrite work you did not make unless explicitly asked.
- Avoid destructive git commands unless the user clearly requested them.
- Respect the repository's branch conventions. If the target base branch is unclear, ask or inspect recent PRs and docs.
- Treat shared or protected branches such as `main`, `master`, `staging`, `develop`, and release branches carefully. Do not automatically push directly to them unless the user explicitly asks.
- On feature branches, backward compatibility between intermediate commits is usually not required. Prefer cleaning up to the intended end state unless the user explicitly asks otherwise.
- When work is complete on a feature branch, commit focused changes and push the branch unless the diff contains secrets/sensitive data or the user explicitly says not to.
- After pushing a completed feature branch, open a draft PR against the intended base branch and verify the PR exists unless the user explicitly asks not to.
- If `gh` auth/status checks look broken or the first PR command errors, still try the concrete `gh pr create` or `gh pr view` flow with explicit repo, base, and head after pushing before giving up.
- In PR descriptions, the "What changed" section should explain why each meaningful change exists, not just list files or mechanics. Include the motivation, root cause, risk being addressed, or user/runtime impact inline with each non-trivial bullet.

## Documentation Discipline

- Before material runtime, architectural, or workflow changes, inspect relevant docs in the repo.
- Prefer aligning code with documented decisions and architecture, or explicitly update the docs in the same change when the code should move in a new direction.
- Treat docs as current guidance, not permanent law. If a doc is outdated or a better approach is chosen, update it when practical.
- When a change materially affects runtime behavior, error-handling policy, service boundaries, configuration, or operator workflows, update relevant docs in the same change where practical.

## Migrations And Data Changes

- Use the repository's canonical migration generator or documented migration workflow. Do not hand-pick migration identifiers when the tooling can generate them.
- On shared or deployed branches, do not edit migrations that may already be merged or applied. Add a new migration or merge migration instead of rewriting shared history.
- On feature branches, migration history may be rewritten, squashed, renumbered, or replaced if that produces the clean intended final chain before merge.
- When rewriting feature-branch migration history, inspect the current migration tree first and give the user explicit downgrade/upgrade guidance if they may already have applied old revisions locally.
- If replacing or rewriting a migration that a user may already have applied locally, ask them to downgrade first so they can rerun the new migration chain cleanly.
- Before proposing rollback, stamp, or repair plans for staging/production, inspect migration state and actual schema/data state.
