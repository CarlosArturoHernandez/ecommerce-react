import instance from "./axios.js"

export const loginRequest = (data) =>  instance.post('/login', data)