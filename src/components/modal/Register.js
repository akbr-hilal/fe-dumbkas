import React, { useState } from 'react'
import {Modal, Alert} from "react-bootstrap"
import { useMutation } from '@tanstack/react-query'
import { API } from '../../config/api'

function Register({show, handleClose}) {

  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  })

  const { firstName, lastName, username, email, password } = form;

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      }

      const body = JSON.stringify(form)
      
      const res = await API.post("/register", body, config)
      console.log(res)

      if(res?.status === 201){
        const alert = (
            <Alert variant="success" className="p-2">
                Success
            </Alert>
        )
        setErrorMessage(alert)
        setForm({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: ""
        })
    } 
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message)
      const alert = (
          <Alert variant="danger" className="p-2">
              {error.response.data.message || error.response.data.error.message}
          </Alert>
      );
      setErrorMessage(alert);
    }
  })
  return (
    <div>
      <Modal className="modal-auth" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>
                <div className="fs-2">Register</div>
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <div className="text-center">Please Register to continue</div>
            {errorMessage && errorMessage}
            <div>
                <form 
                  onSubmit={(e) => handleSubmit.mutate(e)}
                >
                    <div className="form text-center">
                      <div className='row'>
                        <div className='col'>
                          <div className="text-start">First Name </div>
                          <input type="text" placeholder="First Name" name="firstName" className="px-3 py-2 col-12 inputAuth" 
                            value={firstName} 
                            onChange={handleChange}
                          />
                        </div>
                        <div className='col'>
                          <div className="text-start">Last Name</div>
                          <input type="text" placeholder="Last Name" name="lastName" className="px-3 py-2 col-12 inputAuth" 
                            value={lastName} 
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="text-start mt-3">Username</div>
                      <input type="text" placeholder="Username" name="username" className="px-3 py-2 col-12 inputAuth" 
                        value={username} 
                        onChange={handleChange}
                      />
                      <div className="text-start mt-3">Email</div>
                      <input type="email" placeholder="Email" name="email" className="px-3 py-2 col-12 inputAuth" 
                        value={email} 
                        onChange={handleChange}
                      />
                      <div className="text-start mt-2">Password</div>
                      <input type="password" placeholder="Password" name="password" className="px-3 py-2 col-12 inputAuth" 
                        value={password} 
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-3 text-end">
                        <button className="btn-input col-12">Register</button>
                    </div>
                    <div className="mt-2 text-center">
                    </div>
                </form>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Register