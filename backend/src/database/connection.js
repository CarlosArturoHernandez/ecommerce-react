import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()


export const connection = mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQLDB_PASSWORD,
database: process.env.MYSQL_DATABASE
})


export async function getConnection(){
    connection.connect((err)=>{
        if(err) return console.error('¡Error al conectarse a la base de datos!', err)
        console.log('Conexión exitosa a la base de datos.')
    })
}


