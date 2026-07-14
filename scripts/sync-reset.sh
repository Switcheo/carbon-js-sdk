#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
codec_dir="$repo_root/src/codec"

find "$codec_dir" -type f -name 'export.ts' -delete
rm -f "$codec_dir"/*-models.ts
