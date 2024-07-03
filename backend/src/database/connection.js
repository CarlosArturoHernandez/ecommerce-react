import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_LOCAL_PORT)
console.log(process.env.DB_DATABASE)

export const connection = mysql.createConnection({
    host: 'localhost',  // Host de la base de datos
    user: 'dani', // Usuario de la base de datos
    password: '123', // Contraseña de la base de datos
    database: 'ecommercedb' // Nombre de la base de datos a la que te conectas
})


export async function getConnection() {
    try {
        await connection.promise().connect();
        console.log('Conexión exitosa a la base de datos.');
    } catch (err) {
        console.error('¡Error al conectarse a la base de datos!', err);
    }
}

export default connection;
