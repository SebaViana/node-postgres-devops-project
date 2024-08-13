#!/bin/sh

echo "Starting start.sh"

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
