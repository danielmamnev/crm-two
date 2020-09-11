import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateCustomer() {
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    addressone: '',
    addresstwo: '',
    city: '',
    stateaddress: '',
    zip: '',
  });
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/new', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        firstname: customer.firstname,
        lastname: customer.lastname,
        phone: customer.phone,
        email: customer.email,
        addressone: customer.addressone,
        addresstwo: customer.addresstwo,
        city: customer.city,
        stateaddress: customer.stateaddress,
        zip: customer.zip,
      }),
    });

    const json = await response.json();
    toast.success('Customer Created!', {});
    console.log(json);
    setCustomer({
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      addressone: '',
      addresstwo: '',
      city: '',
      stateaddress: '',
      zip: '',
    });
  };

  const onChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <ToastContainer />

      <Card>
        <Card.Body>
          <a href="../">
            <Button style={{ display: 'flex' }} variant="secondary">
              Back
            </Button>
          </a>
          <Card.Title>Create New Customer</Card.Title>
          <Form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstname"
                    onChange={onChange}
                    value={customer.firstname}
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={customer.lastname}
                    onChange={onChange}
                    type="name"
                    name="lastname"
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    value={customer.phone}
                    type="tel"
                    onChange={onChange}
                    name="phone"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={customer.email}
                    type="email"
                    onChange={onChange}
                    name="email"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    value={customer.addressone}
                    type="text"
                    onChange={onChange}
                    name="addressone"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    value={customer.addresstwo}
                    type="text"
                    onChange={onChange}
                    name="addresstwo"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={customer.city}
                    type="text"
                    onChange={onChange}
                    name="city"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    value={customer.stateaddress}
                    as="select"
                    onChange={onChange}
                    name="stateaddress"
                    multiple
                  >
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </Form.Control>
                </Form.Group>
                <p>
                  State Selected: <strong>{customer.stateaddress}</strong>
                </p>
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    value={customer.zip}
                    type="number"
                    onChange={onChange}
                    name="zip"
                  />
                </Form.Group>
              </div>
            </div>
            <Button variant="success" type="submit">
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCustomer;
