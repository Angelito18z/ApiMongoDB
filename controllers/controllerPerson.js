import ModelPerson from "../models/modelPerson.js"; // Importamos el modelo

class PersonController {
    // Obtener todas las personas no eliminadas
    static async getAllPeople(req, res) {
        try {
            const respuesta = await ModelPerson.find({ deletedAt: null });
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al obtener las personas", error });
        }
    }

    // Obtener una persona por ID
    static async getPersonById(req, res) {
        const id = req.params.id;
        try {
            const respuesta = await ModelPerson.findOne({ _id: id, deletedAt: null });
            if (!respuesta) {
                return res.status(404).send({ message: "Persona no encontrada o eliminada" });
            }
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al obtener la persona", error });
        }
    }

    // Crear una nueva persona
    static async createPerson(req, res) {
        const body = req.body;
        try {
            const respuesta = await ModelPerson.create(body);
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al crear la persona", error });
        }
    }

    // Actualizar una persona por ID
    static async updatePerson(req, res) {
        const body = req.body;
        const id = req.params.id;
        try {
            const respuesta = await ModelPerson.findOneAndUpdate(
                { _id: id, deletedAt: null },
                body,
                { new: true }
            );
            if (!respuesta) {
                return res.status(404).send({ message: "Persona no encontrada o eliminada" });
            }
            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al actualizar la persona", error });
        }
    }

    // Borrado lógico de una persona por ID
    static async deletePerson(req, res) {
        const id = req.params.id;
        try {
            const respuesta = await ModelPerson.findByIdAndUpdate(
                id,
                { deletedAt: new Date() },
                { new: true }
            );

            if (!respuesta) {
                return res.status(404).send({ message: "Persona no encontrada" });
            }

            res.send(respuesta);
        } catch (error) {
            res.status(500).send({ message: "Error al eliminar la persona", error });
        }
    }
}

export default PersonController; // Exportamos la clase
