import sql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

const dbConnection = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbConnection)
        console.log('Conectado a la base de datos')
        return pool
    } catch (error) {
        console.log(`Error al conectarse a la base de datos: ${error.message}`)
    }
}
