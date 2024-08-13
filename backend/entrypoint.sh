#!/bin/sh

if [ -z "$DB_DIALECT" ]; then
  echo "Error: DB_DIALECT environment variable is required."
  exit 1
fi

if [ -z "$DB_HOST" ]; then
  echo "Error: DB_HOST environment variable is required."
  exit 1
fi

if [ -z "$DB_PORT" ]; then
  echo "Error: DB_PORT environment variable is required."
  exit 1
fi

if [ -z "$DB_USERNAME" ]; then
  echo "Error: DB_USERNAME environment variable is required."
  exit 1
fi

if [ -z "$DB_PASSWORD" ]; then
  echo "Error: DB_PASSWORD environment variable is required."
  exit 1
fi

if [ -z "$BACKEND_PORT" ]; then
  echo "Error: BACKEND_PORT environment variable is required."
  exit 1
fi

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
