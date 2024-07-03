import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "C:/Users/Carlos/my-projects/ecommerce-react/.env" });

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function getConnection() {
  try {
    await connection.promise().connect();
    console.log("Conexión exitosa a la base de datos.");
  } catch (err) {
    console.error("¡Error al conectarse a la base de datos!", err);
  }
}

export default connection;
