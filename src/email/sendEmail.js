import sgMail from "@sendgrid/mail";
import { config } from "dotenv";
import fs from "fs"; // Importa el módulo fs para trabajar con archivos

// Carga las variables de entorno desde el archivo .env
config();

// Obtiene la clave de API de SendGrid desde las variables de entorno
const sendgridApiKey = process.env.SENDGRID_API_KEY;

// Establece la clave de API de SendGrid
sgMail.setApiKey(sendgridApiKey);

async function sendEmail(recipient, sender, subject, name, email, message) {
  // Lee el contenido del archivo HTML de plantilla
  const emailTemplate = fs.readFileSync(
    "src/template/emailTemplate.html",
    "utf-8"
  );

  // Reemplaza los marcadores de posición con los valores reales
  const correoHTML = emailTemplate
    .replace("[NAME]", name)
    .replace("[EMAIL]", email)
    .replace("[MESSAGE]", message);

  // Configura el objeto de mensaje con HTML personalizado
  const msg = {
    to: recipient,
    from: sender,
    subject: `Proyecto NodeJS (Mensaje de ${name})`, // Asunto del mensaje
    html: correoHTML, // Utiliza el HTML personalizado en lugar del texto plano
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

