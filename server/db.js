

const Pool = require("pg").Pool;

const pool = new Pool ({
user: 'crmtwo',
password: 'crmtwo',
host: 'localhost',
port: 5432,
database: 'postgres',
})

module.exports = pool;