#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/opt/vorontsov-studio}"

cd "${REPO_DIR}"
docker compose up -d --build
