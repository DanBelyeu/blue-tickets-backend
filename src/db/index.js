require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
  });

const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}

module.exports = { query }