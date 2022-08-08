import React, { useContext, useState } from 'react';
import {Modal, Alert} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { UserContext } from '../../context/UserContext';
import { API } from '../../config/api';
import Register from './Register';

function Login({show, handleClose}) {
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  console.log(state)

  const { email, password } = form;

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      const body = JSON.stringify(form)

      const res = await API.post("/login", body, config)
      console.log(res)

      if(res?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.userData
        })

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        )
        setErrorMessage(alert)

        navigate("/dashboard")

      }
    } catch (error) {
      console.log(error)
    }
  })
  const [showRegister, setShowRegister] = useState(false)
  const handleShowRegister = () =>  setShowRegister(true)
  const handleRegister = () => {
    handleShowRegister()
  }
  const handleCloseRegister = () =>  setShowRegister(false)
  return (
    <div>
      <Modal className="modal-auth" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>
                <div className="fs-2" style={{ color: '#22577A' }}>Login</div>
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <div className="text-center">Please login to continue</div>
            {errorMessage && errorMessage}
            <div>
                <form 
                onSubmit={(e) => handleSubmit.mutate(e)}
              >
                <div className="form text-center">
                  <div className="text-start mt-3" style={{ color: '#22577A' }}>Email</div>
                  <input type="email" placeholder="Email" name="email" className="px-3 py-2 col-12 inputAuth" 
                    value={email} 
                    onChange={handleChange}
                  />
                  <div className="text-start mt-2" style={{ color: '#22577A' }}>Password</div>
                  <input type="password" placeholder="Password" name="password" className="px-3 py-2 col-12 inputAuth" 
                    value={password} 
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3 text-end">
                  <button className="btn-input col-12">Login</button>
                </div>
                <div className="mt-2 text-center">
                  <p>Dont'have an account? <span className="fw-bold" onClick={handleRegister}>Register Now</span> </p>
                </div>
              </form>
            </div>
        </Modal.Body>
      </Modal>
      <Register show={showRegister} handleClose={handleCloseRegister} />
    </div>
  )
}

export default Login