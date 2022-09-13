require('dotenv').config();

const {
  MYSQL_HOST, MYSQL_PORT, MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD,
} = process.env;

const options = {
  host: MYSQL_HOST || 'localhost',
  port: MYSQL_PORT || '3306',
  database: MYSQL_DB_NAME,
  username: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || '1234',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
