import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function SearchCustomer() {
  return (
    <div className="pt-3 pb-3">
       <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><img src="https://img.icons8.com/android/24/000000/search.png"/></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      
    />
  </InputGroup>
    </div>
  )
}

export default SearchCustomer
