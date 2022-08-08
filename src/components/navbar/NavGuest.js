import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Login from '../modal/Login'
import Register from '../modal/Register'

function NavGuest() {
  const [showLogin, setShowLogin] = useState(false)
  const handleShowLogin = () => setShowLogin(true)

  const handleLogin = () => {
    handleShowLogin()
  }
  const handleCloseLogin = () => setShowLogin(false)

  const [showRegister, setShowRegister] = useState(false)
  const handleShowRegister = () => setShowRegister(true)

  const handleRegister = () => {
    handleShowRegister()
  }
  const handleCloseRegister = () => setShowRegister(false)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top shadow">
        <Container>
          <Navbar.Brand>
              <Link to='/' className='text-decoration-none'>
                <div className='fs-5 fw-bold text-dark'>DumbCash</div>
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="bg-collapse pt-lg-0 pt-md-1">
                  <button className='me-0 me-lg-3 btn-login' onClick={handleLogin}>Login</button> 
              </Nav>
              <Nav className="bg-collapse pt-lg-0 pt-md-1">
                <button className='btn-register mt-2 mt-lg-0' onClick={handleRegister}>Register</button> 
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={showLogin} handleClose={handleCloseLogin} />
      <Register show={showRegister} handleClose={handleCloseRegister} />
    </>
  )
}

export default NavGuest