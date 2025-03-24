import express from "express";
import dbconnect from "./config.js";
import routes from "./routes/routes.js";  // Importamos las rutas
import cors from 'cors';  // Importa cors


const app = express();

// Usa el middleware CORS para permitir solicitudes desde localhost:4200
app.use(cors({
    origin: 'http://localhost:4200',  // Permite solo solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Ajustar los métodos permitidos si lo deseas
    allowedHeaders: ['Content-Type', 'Authorization'], //  Agregar más encabezados si es necesario
}));


app.use(express.json());
app.use("/arduino", routes); // Usa las rutas bajo el prefijo "/arduino"

dbconnect(); // Conectar a la base de datos

app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
});
