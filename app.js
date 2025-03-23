import express from "express";
import dbconnect from "./config.js";
import routes from "./routes/routes.js";  // Importamos las rutas

const app = express();

app.use(express.json());
app.use("/arduino", routes); // Usa las rutas bajo el prefijo "/arduino"

dbconnect(); // Conectar a la base de datos

app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
});
