import React from 'react'
import { Navigate, Oulet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

function ProtectedRoute() {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated) return <Navigate to = '/' replace/>
  return (
    <Oulet />
  )
}

export default ProtectedRoute