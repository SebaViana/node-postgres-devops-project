#!/bin/bash

# Function to check if a required environment variable is set
check_required_env_var() {
  if [ -z "$1" ]; then
    echo "Error: $2 environment variable is required."
    exit 1
  fi
}

# Check all required environment variables
check_required_env_var "$POSTGRES_DB" "POSTGRES_DB"
check_required_env_var "$POSTGRES_USER" "POSTGRES_USER"
check_required_env_var "$POSTGRES_PASSWORD" "POSTGRES_PASSWORD"
check_required_env_var "$POSTGRESS_INTERNAL_PORT" "POSTGRESS_INTERNAL_PORT"

exec /usr/local/bin/docker-entrypoint.sh postgres
