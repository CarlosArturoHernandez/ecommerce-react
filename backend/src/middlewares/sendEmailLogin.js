import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const sendEmailLogin = async ( email, plataform, browser) =>{

try {
    
    const config = {
        host: process.env.HOST_EMAIL,
        port: process.env.PORT_EMAIL,
        secure: false,
        auth:{
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    }

    const transport = nodemailer.createTransport(config)

    const mensaje = {
        from: process.env.USER_EMAIL,
        to: email,
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