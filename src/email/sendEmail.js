// email/sendgrid.js
import sgMail from "@sendgrid/mail";
import {config} from "dotenv";

// Carga las variables de entorno desde el archivo .env
config();

// Obtiene la clave de API de SendGrid desde las variables de entorno
const sendgridApiKey = process.env.SENDGRID_API_KEY;

// Establece la clave de API de SendGrid
sgMail.setApiKey(sendgridApiKey);

async function sendEmail(recipient, sender, subject, body) {
  const msg = {
    to: recipient,
    from: sender,
    subject: subject,
    text: body, // Puedes utilizar cuerpo en formato texto plano
    // html: '<p>Cuerpo del correo en formato HTML</p>', // Si deseas formato HTML
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully from SendGrid");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendEmail;
