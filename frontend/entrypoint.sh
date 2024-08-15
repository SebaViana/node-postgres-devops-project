#!/bin/bash

# Function to check if a required environment variable is set
check_required_env_var() {
  if [ -z "$1" ]; then
    echo "Error: $2 environment variable is required."
    exit 1
  fi
}

# Check all required environment variables
check_required_env_var "$FRONTEND_INTERNAL_PORT" "FRONTEND_INTERNAL_PORT"
check_required_env_var "$REACT_APP_BACKEND_API_URL" "REACT_APP_BACKEND_API_URL"


exec nginx -g "daemon off;"
