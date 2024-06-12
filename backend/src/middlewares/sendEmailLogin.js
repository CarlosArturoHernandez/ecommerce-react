import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const sendEmailLogin = async ( Email, plataform, browser) =>{

try {
    
    const config = {
        host: process.env.HOSTEMAIL,
        port: process.env.PORTEMAIL,
        secure: false,
        auth:{
            user: process.env.USEREMAIL,
            pass: process.env.USERCONTRASENA
        }
    }

    const transport = nodemailer.createTransport(config)

    const mensaje = {
        from: process.env.USEREMAIL,
        to: Email,
        subject: ` Hola` ,
        text:`<p> Has inciado sesión </p>
        <p>Enviado desde la plataforma ${plataform}</p>
         <p>Enviado desde el navegador ${browser}</p>
        ` 

    }
     const info = await transport.sendMail(mensaje)
     console.log(info)
} catch (error) {
   console.log(error)
}

}