import { connection } from "../database/connection.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/generateToken.js";
import { sendEmailLogin } from "../middlewares/sendEmailLogin.js";

// Funcion para loguearse
export const login = async (req, res) => {
  const { email, contrasena } = req.body;
  const { plataform, browser } = req.useragent;

  try {
    connection.query("CALL sp_login(?)", [email], async (error, result) => {
      if (error) {
        console.error("Error en la consulta de login:", error);
        return res
          .status(500)
          .json({ message: "Error en la consulta de login", error });
      }

      if (!result || !result[0] || result[0].length === 0) {
        console.log("Resultado de la consulta de login:", result);
        return res.status(400).json({ message: "Credenciales incorrectas" });
      }

      const contrasenaSinValidar = result[0][0].contrasena;
      const validacionContrasena = await bcrypt.compare(
        contrasena,
        contrasenaSinValidar
      );

      if (!validacionContrasena) {
        return res.status(400).json({ message: "Credenciales incorrectas" });
      }

      const user = {
        nombre: result[0][0].nombre,
        apellido: result[0][0].apellido,
        email: result[0][0].email,
      };

      const obtenerToken = await generateToken(user);
      res.cookie("Token", obtenerToken);

      sendEmailLogin(email, plataform, browser);
      return res
        .status(200)
        .json({ message: "Usuario logueado", Token: obtenerToken });
    });
  } catch (error) {
    console.error("Error en el proceso de login:", error);
    return res.status(500).json({ error });
  }
};

// Funcion para registro en la parte del login
export const signUp = async (req, res) => {
  try {
    const { nombre, apellido, email, contrasena } = req.body;
    const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);

    connection.query(
      "CALL sp_verificar_correo_existente(?)",
      [email],
      (error, result) => {
        if (error) {
          console.error(
            "Error en la consulta de verificación de correo:",
            error
          );
          return res.status(500).json({
            message: "Error en la consulta de verificación de correo",
            error,
          });
        }

        if (result && result[0] && result[0].length > 0) {
          return res
            .status(400)
            .json({ message: "Este correo ya está asociado a una cuenta" });
        }

        connection.query(
          "CALL sp_registro_login_usuario(?,?,?,?)",
          [nombre, apellido, email, contrasenaEncriptada],
          (error, result2) => {
            if (error) {
              console.error("Error al registrar usuario:", error);
              return res
                .status(500)
                .json({ message: "Error al registrar usuario", error });
            }

            if (result2.affectedRows > 0) {
              return res.status(201).json({ message: "Usuario registrado" });
            } else {
              return res
                .status(400)
                .json({ message: "No se registró el usuario" });
            }
          }
        );
      }
    );
  } catch (error) {
    console.error("Error en signUp:", error);
    return res.status(500).json({ message: "Error en el registro", error });
  }
};
