#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/arseniy985/vorontsov-studio.git}"
REPO_DIR="${REPO_DIR:-/opt/vorontsov-studio}"
BRANCH="${BRANCH:-main}"

if [ ! -d "${REPO_DIR}/.git" ]; then
  git clone --branch "${BRANCH}" "${REPO_URL}" "${REPO_DIR}"
else
  git -C "${REPO_DIR}" fetch origin
  git -C "${REPO_DIR}" checkout "${BRANCH}"
  git -C "${REPO_DIR}" pull --ff-only origin "${BRANCH}"
fi

cd "${REPO_DIR}"

if [ ! -f .env.production ]; then
  cp .env.production.example .env.production
fi
