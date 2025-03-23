import Data from "../models/modelData.js"; // Importamos el modelo

class DataController {
    
    // Obtener todos los registros
    static async getAll(req, res) {
        try {
            const respuesta = await Data
            .find({},{_id:0,sensor:1,unidad:1,valor:1,createdAt:1})
            .sort({createdAt:-1})
            .limit(4);
            
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al obtener los datos", error });
        }
    }

    // Crear un nuevo registro
    static async create(req, res) {
        const body = req.body;
        try {
            const respuesta = await Data.create(body);
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al crear el registro", error });
        }
    }
}

export default DataController;
