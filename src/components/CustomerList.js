import React, { useEffect, useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SearchCustomer from './SearchCustomer';
import { getCustomers } from '../redux/customerActions';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomerList({ customers, filtered, dispatch }) {
  useEffect(() => {
    dispatch(getCustomers);
  }, []);

  const [viewCust, setViewCust] = useState(false);
  const [whichCust, setWhichCust] = useState({
    id: '',
  });
  const [viewingCust, setViewingCust] = useState({
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

  const ViewCustHandler = (e) => {
    setWhichCust({ id: e.target.value });
    setViewCust(true);

    fetch(`http://localhost:3001/customer/${e.target.value}`)
      .then((response) => response.json())
      .then(
        (results) => {
          setViewingCust(results.customer.rows[0]);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const onChange = (e) =>
    setViewingCust({ ...viewingCust, [e.target.name]: e.target.value });

  const editButtonHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3001/edit/${viewingCust.id}`,
      {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(viewingCust),
      }
    );
    const json = await response.json();
    toast.success('Customer Updated! Refresh the page for updates', {});
    console.log(json);
    dispatch(getCustomers);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3001/delete/${viewingCust.id}`,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(viewingCust),
      }
    );
    const json = await response.json();
    toast.dark('Deleted! Refresh to Show Update', {});
    console.log(json);
    setViewCust(false);
  };

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <SearchCustomer />
            {filtered.length !== 0
              ? filtered.map((fcustomer) => (
                  <Card key={fcustomer.id}>
                    <Card.Header>
                      {fcustomer.firstname} {fcustomer.lastname}
                    </Card.Header>
                    <Card.Body>
                      {fcustomer.phone} | {fcustomer.email}
                      <br></br>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={ViewCustHandler}
                        value={fcustomer.id}
                      >
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              : customers.map((customer) => (
                  <Card key={customer.id}>
                    <Card.Header>
                      {customer.firstname} {customer.lastname}
                    </Card.Header>
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-4">{customer.phone}</div>{' '}
                        <div className="col-md-6">{customer.email}</div>
                        <br></br>
                        <Button
                          variant="outline-primary"
                          onClick={ViewCustHandler}
                          value={customer.id}
                        >
                          View
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
          </div>

          {!viewCust ? (
            <p></p>
          ) : (
            <div className="col-md-6 pt-3">
              <Card>
                <Card.Header>
                  {viewingCust.firstname} {viewingCust.lastname}
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="firstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        className="text-center"
                        name="firstname"
                        defaultValue={viewingCust.firstname}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>

                      <Form.Control
                        type="name"
                        name="lastname"
                        className="text-center"
                        defaultValue={viewingCust.lastname}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="phone"
                        name="phone"
                        className="text-center"
                        defaultValue={viewingCust.phone}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        className="text-center"
                        name="email"
                        defaultValue={viewingCust.email}
                        onChange={onChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control
                        type="text"
                        className="text-center"
                        name="addressone"
                        defaultValue={viewingCust.addressone}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                        type="text"
                        className="text-center"
                        name="addresstwo"
                        defaultValue={viewingCust.addresstwo}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        className="text-center"
                        name="city"
                        defaultValue={viewingCust.city}
                        onChange={onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as="select"
                        name="stateaddress"
                        defaultValue={viewingCust.stateaddress}
                        onChange={onChange}
                        className="text-center"
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
                    <p>State Selected:{viewingCust.stateaddress}</p>
                    <Form.Group controlId="zipCode">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        type="number"
                        className="text-center"
                        name="zip"
                        defaultValue={viewingCust.zip}
                        onChange={onChange}
                      />
                    </Form.Group>

                    <Button
                      variant="success"
                      type="submit"
                      onClick={editButtonHandler}
                      className="mr-3"
                    >
                      Submit Changes
                    </Button>
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={deleteHandler}
                    >
                      Delete
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  customers: state.customer.customers,
  filtered: state.customer.filtered,
});

export default connect(mapStateToProps)(CustomerList);
