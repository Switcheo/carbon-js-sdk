#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/.." && pwd)"
cd "$repo_root"

rm -rf ./src/codec
mkdir ./src/codec
tar -zxvf proto-ts.tar.gz --directory ./src/codec
mv src/codec/protobuf-def.json ./scripts/


# Remove unnecessary codec files
rm -rf \
  src/codec/collateralizeddebtposition/ \
  src/codec/autodeleverage/ \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ 

bash "$script_dir/sync-reset.sh"
bash "$script_dir/generate-registry.sh"
