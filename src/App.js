import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import { API, setAuthToken } from './config/api';
import { UserContext } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  let navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  console.log(state)

  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }

    if(state.isLogin === false) {
      navigate('/')
    } else {
      navigate('/dashboard')
    }
  }, [state])

  let checkUser = async () => {
    try {
      const res = await API.get("/user-info")
      console.log(res)

      if(res.status === 404) {
        return dispatch({
          type: "AUTH_ERROR"
        })
      }

      let payload = res.data.userData
      payload.token = localStorage.token

      dispatch({
        type: "USER_SUCCESS",
        payload,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(localStorage.token){
      checkUser()
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
