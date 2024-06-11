import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()


const connection = mysql.createConnection({
host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.DATABASE
})


export async function getConnection(){
    connection.connect((err)=>{
        if(err) return console.error('¡Error al conectarse a la base de datos!', err)
        console.log('Conexión exitosa a la base de datos.')
    })
}


