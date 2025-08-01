
import { Router } from "express";
import { getServerHealthStatus, sayHello } from "../app.controller.js";
import {
  getVehicleById, getVehicles, createVehicle, updateVehicle, deleteVehicle} from "../vehicles/vehicles.service.js";
import { getAuthUser, login, register } from "../auth/auth.controller.js";
import { checkAuthentication } from "../middleware/auth.middleware.js";
import { getDrivers, getDriverById, createDriver, updateDriver } from "../Drivers/driver.service.js";
const router = Router();

// Define your routes here
router.get("/health", getServerHealthStatus);
router.get("/", sayHello);
router.post( "/auth/register", register);
router.post("/auth/login", login);
router.get ("/auth/me", checkAuthentication, getAuthUser)

router.get("/vehicles", getVehicles);
router.get("/vehicles/:id", getVehicleById);
router.put("/Vehicles", createVehicle);
router.post("/vehicles/:id", updateVehicle);
router.delete("/vehicles/:id", deleteVehicle);

router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriverById);
router.post("/drivers", createDriver);
router.put("/drivers/:id", updateDriver);   
router

export default router;
