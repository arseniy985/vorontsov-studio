#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-/opt/vorontsov-studio}"
ENV_FILE="${REPO_DIR}/.env.production"

if [ ! -f "${ENV_FILE}" ]; then
  echo ".env.production not found at ${ENV_FILE}" >&2
  exit 1
fi

set -a
. "${ENV_FILE}"
set +a

: "${DOMAIN:?DOMAIN is required}"
: "${WWW_DOMAIN:?WWW_DOMAIN is required}"
: "${CERTBOT_EMAIL:?CERTBOT_EMAIL is required}"

if [ -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]; then
  echo "Certificate already exists for ${DOMAIN}"
  exit 0
fi

certbot certonly \
  --standalone \
  --preferred-challenges http \
  --non-interactive \
  --agree-tos \
  --keep-until-expiring \
  -m "${CERTBOT_EMAIL}" \
  -d "${DOMAIN}" \
  -d "${WWW_DOMAIN}"
