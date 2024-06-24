import axios from 'axios'

const nodePort = import.meta.env.NODEJS_PORT || 4000

const instance = axios.create({
    baseURL: `http://localhost:${nodePort}/api`,
    withCredentials: true // <-- Establecer cockies aquí
})

export default instance