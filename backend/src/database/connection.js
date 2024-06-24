import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({path: '../../../.env'});

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_DOCKER_PORT,
    database: process.env.DB_DATABASE
});

export async function getConnection() {
    connection.connect((err) => {
        if (err) return console.error('¡Error al conectarse a la base de datos!', err);
        console.log('Conexión exitosa a la base de datos.');
    });
}
