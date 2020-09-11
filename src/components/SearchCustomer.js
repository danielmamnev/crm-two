import React, { useRef, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';
import { filterCustomers, clearFilter } from '../redux/customerActions';


function SearchCustomer({ filterCustomers, clearFilter, filtered }) {

const text = useRef("")

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterCustomers(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="pt-3 pb-3">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <img src="https://img.icons8.com/android/24/000000/search.png" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          ref={text}
          type="text"
          placeholder="Search By Name"
          onChange={onChange}

        />
      </InputGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state.contact,
});

export default connect(mapStateToProps, {filterCustomers, clearFilter})(SearchCustomer);
