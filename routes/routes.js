import { Router } from "express";
import ConfigInitController from "../controllers/controllerConfigInit.js";
import DataController from "../controllers/controllerData.js";

const router = Router();




//ARDUINO
//ConfigInit
router.get("/vehicle-state", ConfigInitController.getAll);
router.put("/vehicle-state", ConfigInitController.update);

//Data
router.get("/data",DataController.getAll);
router.post("/data",DataController.create);


export default router;
