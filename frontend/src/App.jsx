import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {

  return (
    <> 
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
