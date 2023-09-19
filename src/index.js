import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
//importar routes
import indexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(join(__dirname, "views"));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(indexRoutes);
app.use(express.static(join(__dirname, "public")));

app.listen(3000);
console.log("Servidor corriendo en el puerto 3000");
