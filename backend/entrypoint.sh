#!/bin/sh
#
# Function to check if a required environment variable is set
check_required_env_var() {
  if [ -z "$1" ]; then
    echo "Error: $2 environment variable is required."
    exit 1
  fi
}

# Check all required environment variables
check_required_env_var "$DB_DIALECT" "DB_DIALECT"
check_required_env_var "$DB_HOST" "DB_HOST"
check_required_env_var "$DB_PORT" "DB_PORT"
check_required_env_var "$DB_USERNAME" "DB_USERNAME"
check_required_env_var "$DB_PASSWORD" "DB_PASSWORD"
check_required_env_var "$BACKEND_INTERNAL_PORT" "BACKEND_PORT"

# Wait for PostgreSQL to be available
until nc -z -v -w30 "$DB_HOST" "$DB_PORT"
do
  echo "Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
  sleep 1
done

echo "PostgreSQL is up and running"

# Run migrations
echo "Running migrations..."
npx sequelize-cli db:migrate
if [ $? -ne 0 ]; then
  echo "Migrations failed"
  exit 1
fi

echo "Migrations succeeded"

# Start the application
echo "Starting the app..."
exec node app.js
