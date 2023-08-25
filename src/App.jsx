import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Policy from './pages/Register/Policy'
import CreateAccount from './pages/Register/CreateAccount'
import SendOtp from './pages/Register/SendOtp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Policy/>}/>
      <Route path='/create' element={<CreateAccount/>}/>
      <Route path='/otp' element={<SendOtp/>}/>
    </Routes>

  )
}

export default App
