#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/opt/vorontsov-studio}"

cd "${REPO_DIR}"
docker compose down
certbot renew --standalone --preferred-challenges http
docker compose up -d
