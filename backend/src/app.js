import express from "express"
import authRoutes from '../src/routes/authentication.routes.js'
import useragent from 'express-useragent'

const app = express()

app.use(express.json())
app.use(useragent.express())

app.use('/api', authRoutes)

export default app