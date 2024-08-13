#!/bin/bash

if [ -z "$POSTGRES_DB" ]; then
  echo "Error: POSTGRES_DB environment variable is required."
  exit 1
fi

if [ -z "$POSTGRES_USER" ]; then
  echo "Error: POSTGRES_USER environment variable is required."
  exit 1
fi

if [ -z "$POSTGRES_PASSWORD" ]; then
  echo "Error: POSTGRES_PASSWORD environment variable is required."
  exit 1
fi
if [ -z "$POSTGRES_PORT" ]; then
  echo "Error: POSTGRES_PORT environment variable is required."
  exit 1
fi

exec /usr/local/bin/docker-entrypoint.sh postgres
