#!/usr/bin/env sh
set -e
corepack enable pnpm
pnpm install --no-frozen-lockfile
pnpm run build
