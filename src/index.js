import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import contactRouter from "./routes/contactRouter.js"; // Importa el router de contacto
import { config } from "dotenv"; // Importa el módulo dotenv

config(); // Carga las variables de entorno desde el archivo .env

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Definir las variables de entorno después de cargarlas
const recipientEmail = process.env.RECIPIENT_EMAIL;
const senderEmail = process.env.SENDER_EMAIL;

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Utiliza el router de contacto para la ruta "/contactRouter"
app.use("/contact", contactRouter);

// Define otras rutas aquí utilizando routers similares

app.get("/", (req, res) => res.render("index", { title: "Home" }));
app.get("/about", (req, res) => res.render("about", { title: "About" }));
app.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact", recipientEmail, senderEmail })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// import express from "express";
// import { dirname, join } from "path";
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

// import contactRouter from "./routes/contactRouter.js"; // Importa el router de contacto

// const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.set("views", join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.use(express.static(join(__dirname, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Utiliza el router de contacto para la ruta "/contactRouter"
// app.use("/contact", contactRouter);

// // Define otras rutas aquí utilizando routers similares

// app.get("/", (req, res) => res.render("index", { title: "Home" }));
// app.get("/about", (req, res) => res.render("about", { title: "About" }));
// //app.get("/contact", (req, res) => res.render("contact", { title: "Contact" }));
// app.get("/contact", (req, res) => res.render("contact", { title: "Contact", recipientEmail, senderEmail }));

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
