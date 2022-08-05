import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavGuest() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand>
              <Link to='/' className='text-decoration-none'>
                <div className='text-light fs-4'>DumbKas</div>
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="bg-collapse pt-lg-0 pt-md-1">
                <Link to='/login'>
                  <button className='btn btn-dark me-0 me-lg-3'>Login</button> 
                </Link>
              </Nav>
              <Nav className="bg-collapse pt-lg-0 pt-md-1">
                <Link to='/register'>
                  <button className='btn btn-danger mt-2 mt-lg-0'>Register</button> 
                </Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavGuest