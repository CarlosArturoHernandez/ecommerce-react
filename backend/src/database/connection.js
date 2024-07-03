import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });

console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_HOST)
console.log(process.env.DB_DATABASE)

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,  // Host de la base de datos
    user: process.env.DB_USER, // Usuario de la base de datos
    password: process.env.PASSWORD, // Contraseña de la base de datos
    database: process.env.DB_DATABASE // Nombre de la base de datos a la que te conectas
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
