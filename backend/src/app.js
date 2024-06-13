import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const reactPort = process.env.REACTPORT
const app = express()

app.use(cors({
origin: `https://localhost:${reactPort}`,
credentials: true
}))
app.use(express.static('public'))
app.use(useragent.express())
app.use(express.urlencoded({extended: true}))

export default app