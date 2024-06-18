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
    const [loginErrors, setLoginErrors ] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [stateRequest, setStateRequest] = useState(false)

    const requestFormData = async(data) => {
        try {
            const request = await loginRequest(data)
            setIsAuthenticated(true)
            setSuccessMessage(request.data.message)
            setStateRequest(true)
            setTimeout(() => {
                setStateRequest(false)
            }, 1000);
        } catch (error) {
            console.log(error.response.data.message)
            setErrorMessage(error.response.data.message)
            setLoginErrors(true)
            setTimeout(() => {
                setLoginErrors(false)
            }, 1000);
        }
    }
    return (
        <AuthContext.Provider
            value={{
                requestFormData, 
                isAuthenticated, 
                successMessage, 
                stateRequest, 
                loginErrors, 
                errorMessage
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

