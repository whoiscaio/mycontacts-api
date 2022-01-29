const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  post: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

async function query(myQuery, values) {
  const res = await client.query(myQuery, values);

  return res.rows;
}

exports.query = query;
