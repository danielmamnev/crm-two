var psql = require(
'./dbconfig');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://crmtwo:crmtwo@127.0.0.1:5432/crmtwo')


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());

// insert customer into Postgres DB

app.post('/insert', function(req, res) {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const email = req.body.email;
  const addressone = req.body.addressone;
  const addresstwo = req.body.addresstwo;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

db.query(
`INSERT INTO crmtwo(firstname, lastname, phone, email, addressone, addresstwo, city, state, zip)
  VALUES (value1, value2,)`;

}) )













