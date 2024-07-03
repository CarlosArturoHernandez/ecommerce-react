import mysql from 'mysql2';
import dotenv from 'dotenv';
import { exec } from 'child_process';
dotenv.config({ path: '../../../.env' });

function iniciarServidorDeDesarrollo() {
    exec('npm run dev', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error ejecutando npm run dev: ${error}`);
            return;
        }
        console.log(`Servidor de desarrollo iniciado.`);
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_DOCKER_PORT,
    database: process.env.DB_DATABASE
});

export async function getConnection(intentos = 5) {
    let intentosActuales = 0;
    let conectado = false

    while (intentosActuales < intentos && !conectado) {
        try {
            await new Promise((resolve, reject) => {
                connection.connect((err) => {
                    if (err) {
                        console.log(`¡Error al conectarse a la base de datos, reintentando conexión... Intento ${intentosActuales + 1}/${intentos}`);
                        intentosActuales++;
                        if (intentosActuales === intentos) {
                           
                            iniciarServidorDeDesarrollo();
                            reject(new Error('No se pudo conectar a la base de datos después de varios intentos.  Reiniciando servidor'));
                        } else {
                            setTimeout(resolve, 2000); // Esperar 2 segundos antes de reintentar
                        }
                    } else {
                        conectado = true
                        console.log('Conexión exitosa a la base de datos.');
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error('¡Error al conectarse a la base de datos después de varios intentos!', error);
            throw error;
        }
    }
}
