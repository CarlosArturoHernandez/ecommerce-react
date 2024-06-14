import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  port: process.env.MARIADB_PORT,
});

export async function getConnection() {
  connection.connect((err) => {
    if (err)
      return console.error("¡Error al conectarse a la base de datos!", err);
    console.log("Conexión exitosa a la base de datos.");
  });
}
