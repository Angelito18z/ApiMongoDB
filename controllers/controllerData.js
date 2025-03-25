import Data from "../models/modelData.js"; // Importamos el modelo

class DataController {
    
    // Obtener todos los registros
    static async getAll(req, res) {
        try {
            const respuesta = await Data
            .find({},{_id:0,sensor:1,unidad:1,valor:1,createdAt:1}).sort({createdAt:-1}).limit(6);
            
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al obtener los datos", error });
        }
    }

 // Crear múltiples registros
static async create(req, res) {
    const body = req.body;  // body debe ser un array de objetos
    try {
        // Asegúrate de que el cuerpo de la solicitud sea un array
        if (!Array.isArray(body)) {
            return res.status(400).send({ message: "El cuerpo de la solicitud debe ser un array de documentos" });
        }

        // Insertar múltiples documentos
        const respuesta = await Data.insertMany(body);

        // Responder con los documentos creados
        res.send(respuesta);
    } catch (error) {
        res.status(500).send({ message: "Error al crear los registros", error });
    }
}

}

export default DataController;
