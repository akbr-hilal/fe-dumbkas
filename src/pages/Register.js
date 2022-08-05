import React from 'react'
import {Form, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavGuest from '../components/navbar/NavGuest'

function Register() {
  let navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
  return (
    <div>
      <NavGuest />
      <Container className="mt-3">
      <div className=" d-flex justify-content-center align-items-center">
          <Form
            className="rounded p-4 w-50 border"
            // onSubmit={e => handleSubmit.mutate(e)}
          >
            {/* {mss && mss} */}
            <h3 className="fw-bold mb-3 text-center">Register</h3>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your fullname"
                id="name"
                name="name"
                // value={name}
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                // value={email}
                // onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label htmlFor="password">Your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                // value={password}
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="confirmPassword">Your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                id="confirmPassword"
                name="confirmPassword"
                // value={password}
                // onChange={handleChange}
              />
            </Form.Group>
            <button className="btn btn-danger col-12">Register</button>
            <div className='mt-2 text-center'>
              You have already account ? <span className="fw-bold regis" onClick={handleLogin}>Login Now</span>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default Register