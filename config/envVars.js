const dotenv = require('dotenv');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config();

module.exports.getEnvVars = () => ({
  pg_host: process.env.PG_HOST,
  pg_db: process.env.PG_DB,
  pg_port: process.env.PG_PORT,
  pg_user: process.env.PG_USER,
  pg_password: process.env.PG_PASSWORD
});