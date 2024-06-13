import express from "express"
import authRoutes from '../src/routes/authentication.routes.js'
import useragent from 'express-useragent'
import dotenv from "dotenv"
import cors from 'cors'

dotenv.config()
const reactPort = process.env.REACTPORT

const app = express()

app.use(express.json())
app.use(useragent.express())

app.use(cors({
    origin: `http://localhost:${reactPort}`,
    credentials: true
    }))
    app.use(express.static('public'))
    app.use(useragent.express())
    app.use(express.urlencoded({extended: true}))

app.use('/api', authRoutes)

export default app