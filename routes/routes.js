import { Router } from "express";
import PersonController from "../controllers/controllerPerson.js"; // Importamos la clase
import ConfigInitController from "../controllers/controllerConfigInit.js";
import DataController from "../controllers/controllerData.js";

const router = Router();

// Definir las rutas y asociarlas con los métodos de la clase
// router.get("/", PersonController.getAllPeople);
// router.get("/:id", PersonController.getPersonById);
// router.post("/", PersonController.createPerson);
// router.put("/:id", PersonController.updatePerson);
// router.delete("/:id", PersonController.deletePerson);


//ARDUINO
//ConfigInit
router.get("/configInit",ConfigInitController.getAll);
router.put("/configInit",ConfigInitController.update);

//Data
router.get("/data",DataController.getAll);
router.post("/data",DataController.create);


export default router;
