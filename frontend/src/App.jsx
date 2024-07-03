import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
//import ProtectedRoute from './ProtectedRoute.jsx'

function App() {

  return (
    <> 

    <AuthProvider>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  
    </AuthProvider>
    </>
  )
}

export default App
