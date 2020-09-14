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
  const {
    firstname,
    lastname,
    phone,
    email,
    addressone,
    addresstwo,
    city,
    stateaddress,
    zip,
  } = req.body;
  try {
    const newCustomer = await pool.query(
      'INSERT INTO customer (firstname, lastname, phone, email, addressone, addresstwo, city, stateaddress, zip) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [
        firstname,
        lastname,
        phone,
        email,
        addressone,
        addresstwo,
        city,
        stateaddress,
        zip,
      ]
    );
    res.json(newCustomer);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/customers/:offset/:limit', function (req, res) {
  const limit = req.params.limit;
const offset = req.params.offset;

  // const resultCustomers = customers.slice(startIndex, endIndex)

  pool.query('SELECT * FROM customer ORDER BY id OFFSET $1 LIMIT $2', [offset, limit], function (err, data) {
    console.log(err, data);
  res.json({ customers: data.rows });
  });
});

app.get('/customer/:id', function (req, res) {
  var id = req.params.id;
  pool.query('SELECT * FROM customer WHERE id = $1', [id], function (
    err,
    data
  ) {
    console.log(err, data);
    res.json({ customer: data });
  });
});

app.put('/edit/:id', function (req, res) {
  var id = req.body.id;
  var psql = `UPDATE customer SET firstname = $1, lastname = $2, phone = $3, email = $4, addressone = $5, addresstwo = $6, city = $7, stateaddress = $8, zip = $9 WHERE id = $10`;
  var values = [
    req.body.firstname,
    req.body.lastname,
    req.body.phone,
    req.body.email,
    req.body.addressone,
    req.body.addresstwo,
    req.body.city,
    req.body.stateaddress,
    req.body.zip,
    id,
  ];
  pool.query(psql, values, function (err, data) {
    console.log(err, data);
    res.json({ message: 'Succesful Update!' });
  });
});

app.delete('/delete/:id', (req, res) => {
  var id = req.body.id;
  var psql = `DELETE FROM customer WHERE id = ${id}`;
  pool.query(psql, function (err, data) {
    console.log(err, data);
    res.json({ message: 'Succesfully Deleted!' });
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
