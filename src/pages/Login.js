import React from 'react'
import {Form, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavGuest from '../components/navbar/NavGuest'


function Login() {
  let navigate = useNavigate()

  const handleRegis = () => {
    navigate("/register")
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
            <h3 className="fw-bold mb-3 text-center">Login</h3>
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
            <button className="btn btn-danger col-12">Login</button>
            <div className='mt-2 text-center'>
              You don't have account ? <span className="fw-bold regis" onClick={handleRegis}>Register Now</span>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default Login