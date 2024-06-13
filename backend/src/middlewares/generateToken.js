import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = async (user) =>{
try {
    const token = jwt.sign((user), process.env.SECRET_KEY, {expiresIn: '24h'})
    return token
} catch (error) {
    return res.status(404).json({message: 'Error', error})
}
}

