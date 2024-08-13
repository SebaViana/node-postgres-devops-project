require('dotenv').config();

const {
  DB_DIALECT = 'postgres',
  DB_HOST = '127.0.0.1',
  DB_PORT = 5432,
  DB_USERNAME = 'postgres',
  DB_PASSWORD = 'yourpassword',
  DB_DEV_NAME,
  DB_TEST_NAME,
  DB_PROD_NAME
} = process.env;

const config = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
};

const dbConfig = {
  development: { ...config, database: DB_DEV_NAME },
  test: { ...config, database: DB_TEST_NAME },
  production: { ...config, database: DB_PROD_NAME },
};

module.exports = dbConfig;

