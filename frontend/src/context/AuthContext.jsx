import { createContext, useContext, useState } from "react";
import { loginRequest } from "../api/auth";


export const AuthContext = createContext()
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('Debe utilizar useAuth dentro de authProvider')
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors ] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [stateRequest, setStateRequest] = useState(false)

    const requestFormData = async(data) => {
        try {
            const request = await loginRequest(data)
            console.log(request.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider
            value={{requestFormData}}
        >
            {children}
        </AuthContext.Provider>
    )
}

