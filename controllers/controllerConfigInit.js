import ConfigInit from "../models/modelConfigInit.js"; // Importamos el modelo

class ConfigInitController {
    // Obtener todos los registros
    static async getAll(req, res) {
        try {
            const respuesta = await ConfigInit.findOne({},{_id:0,createdAt:0,updatedAt:0});
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al obtener los datos", error });
        }
    }

    // Actualizar un registro 
    static async update(req, res) {
        const body = req.body;
        try {
            const respuesta = await ConfigInit.findOneAndUpdate(
                {},  
                { $set: body }, 
                { new: true, upsert: true }
            );
            if (!respuesta) {
                return res.status(404).send({ message: "No hay documentos" });
            }
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al actualizar el registro", error });
        }
    }
}

export default ConfigInitController;