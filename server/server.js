const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('server started');
});

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'crmtwo',
  password: 'crmtwo',
  host: 'localhost',
  port: 5433,
  database: 'postgres',
});

module.exports = pool;

app.post('/new', async (req, res) => {
  try {
    const newCustomer = await pool.query(
      'INSERT INTO customer (firstname, lastname, phone, email, addressone, addresstwo, city, stateaddress, zip) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        req.body.firstname,
        req.body.lastname,
        req.body.phone,
        req.body.email,
        req.body.addressone,
        req.body.addresstwo,
        req.body.city,
        req.body.stateaddress,
        req.body.zip,
      ]
    );
    res.json(newCustomer);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/customers', function (req, res) {
  pool.query('SELECT * FROM customer', function (err, data) {
    console.log(err, data);
    res.json({ customers: data });

  });
});

app.get('/customer/:id', function (req, res) {
var id = req.params.id;
  pool.query('SELECT * FROM customer WHERE id = $1', [id], function (err, data) {
    console.log(err, data);
    res.json({ customer: data });

  });
});

// var dotenv = require('dotenv');
// var cors = require('cors');
// const app = express();
// app.use(cors());
// const bodyParser = require('body-parser');
// app.use(bodyParser());
// const result = dotenv.config()

// app.listen(process.env.PORT || 3001, () => {
//   console.log('Server started...');
// });

// const { Pool } = require('pg')
// // pools will use environment variables
// // for connection information
// const pool = new Pool()
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
