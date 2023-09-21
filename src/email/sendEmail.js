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

// import sgMail from "@sendgrid/mail";
// import { config } from "dotenv";

// // Carga las variables de entorno desde el archivo .env
// config();

// // Obtiene la clave de API de SendGrid desde las variables de entorno
// const sendgridApiKey = process.env.SENDGRID_API_KEY;

// // Establece la clave de API de SendGrid
// sgMail.setApiKey(sendgridApiKey);

// async function sendEmail(recipient, sender, subject, name, email, message) {
//   // Construye el contenido HTML personalizado
//   const correoHTML = `
//     <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     /* Estilos globales */
//     body {
//       background-color: #000;
//       color: #fff;
//       font-family: Arial, sans-serif;
//       z-index: 100;
//     }
//     /* Estilos del contenedor principal */
//     .container {
//       background: url('https://images5.alphacoders.com/695/695933.jpg');
//       background-repeat: no-repeat;
//       background-attachment: fixed;
//       background-position: center;
//       background-size: cover;
//       border-radius: 20px;
//       padding: 50px;
//       z-index: 50;
//       position: relative;
//       text-align: right;
//     }
//     /* Estilos del logo */
//     .logo {
//       max-width: 30rem;
//       display: block;
//       margin-bottom: -150px;
//       z-index: 2;
//       border-radius: 20px;
//       box-shadow: 0 0 10px rgba(201, 199, 199, 0.5);

//     }
//     /* Estilos del texto */
//     .text {
//       background-color: #0000008e;
//       border: none;
//       resize: none;
//       width: 50%;
//       height: 200px;
//       color: #fff;
//       font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//       font-size: 20px;
//       text-align: center;
//       z-index: 2;
//       text-shadow: 0 0 10px rgba(186, 180, 180, 0.5);
//     }
//     /* Estilos del overlay */
//     .overlay {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.246);
//       z-index: 1;
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="overlay"></div>
//     <img class="logo"
//       src="https://th.bing.com/th/id/R.830c8c7b8d801cbd98c7cb7331e18a97?rik=axkhRvBDkvfQdQ&riu=http%3a%2f%2fninjadolinux.com.br%2fwp-content%2fuploads%2f2019%2f08%2fnodejs.jpg&ehk=G3eZzt1jDzp7VjrxxjPn0GvFSowUPKiaOEurSKS1%2fxM%3d&risl=&pid=ImgRaw&r=0"
//       alt="Logo">
//     <h1 style="font-size: 60px; color: #fff; text-shadow: 0 0 10px rgba(186, 180, 180, 0.5); z-index: 900;">NodeJs
//       Project</h1>
//     <h2 style="font-size: 30px; color: #fff; text-shadow: 0 0 10px rgba(186, 180, 180, 0.5); z-index: 900;">Confirmación de contacto</h2>
//     <p style="font-size: 16px; color: #fff; text-shadow: 0 0 10px rgba(186, 180, 180, 0.5);">Me llamo <span style="color: #fff; font-weight: bold z-index: 900">${name}</span></p>
//     <p style="font-size: 16px; color: #fff; text-shadow: 0 0 10px rgba(186, 180, 180, 0.5);">y es es mi email <span style="font-size: 16px ; z-index: 900">${email}</span></p>
//     <div class="message-box">
//       <textarea class="text"
//         style="box-shadow: 0 0 10px rgba(201, 199, 199, 0.5); text-align: center;">${message}</textarea>
//     </div>
//   </div>
// </body>
// </html>
//   `;

//   // Configura el objeto de mensaje con HTML personalizado
//   const msg = {
//     to: recipient,
//     from: sender,
//     subject: `Proyecto NodeJS (Mensaje de ${name})`, // Asunto del mensaje
//     html: correoHTML, // Utiliza el HTML personalizado en lugar del texto plano
//   };

//   try {
//     await sgMail.send(msg);
//     console.log("Email sent successfully from SendGrid");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// }

// export default sendEmail;

//=================================
// email/sendgrid.js

// import sgMail from "@sendgrid/mail";
// import { config } from "dotenv";

// // Carga las variables de entorno desde el archivo .env
// config();

// // Obtiene la clave de API de SendGrid desde las variables de entorno
// const sendgridApiKey = process.env.SENDGRID_API_KEY;

// // Establece la clave de API de SendGrid
// sgMail.setApiKey(sendgridApiKey);

// async function sendEmail(recipient, sender, subject, name, email, message) {
//   // Construye el contenido HTML personalizado
//   const correoHTML = `
//     <html>
//       <head>
//         <style>
//           /* Estilos CSS para centrar el contenido */
//           body {
//             text-align: center;
//             background-color: #f0f0f0;
//             font-family: Arial, sans-serif;
//           }
//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//             background-color: #ffffff;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//           }
//           h1 {
//             color: #333;
//           }
//           p {
//             color: #666;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <h1>NodeJS Proyect3</h1>
//           <h2>¡Hola! Armando</h2>
//           <h3>Soy ${name}!</h3>
//           <p>${message}</p>
//           <br>
//           <p>Y este es mi correo ${email}:</p>
//         </div>
//       </body>
//     </html>
//   `;

//   // Configura el objeto de mensaje con HTML personalizado
//   const msg = {
//     to: recipient,
//     from: sender,
//     subject: `Proyecto NodeJS (Mensaje de ${name})`, // Asunto del mensaje
//     html: correoHTML, // Utiliza el HTML personalizado en lugar del texto plano
//   };

//   try {
//     await sgMail.send(msg);
//     console.log("Email sent successfully from SendGrid");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// }

// export default sendEmail;
