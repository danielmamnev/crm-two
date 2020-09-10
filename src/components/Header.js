import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
function Header() {
  return (
   <Navbar bg="primary"variant="dark">
  <Navbar.Brand  className="palanquin">spinspire</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content">
    <Navbar.Text className="palanquin">
      CRM
    </Navbar.Text>
</Navbar.Collapse>

  <Navbar.Text className="justify-content-end">
       <a href="/edit">
            <Button variant="outline-light">Create </Button>
          </a>
    </Navbar.Text>
 
</Navbar>
  )
}

export default Header
