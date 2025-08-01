import {catchAsync, sendResponse} from'../common/utils.common.js';
import * as vehicleService from './vehicles.service.js';

export const getVehicles= catchAsync(async (req, res) =>
     {
        const vehicles = vehicleService.getVehicles();
        sendResponse(res, 200, true, "fetched all vehicles", vehicles);
        });
export const getVehicleById = catchAsync(async (req, res) => 
    {
        const { id } = req.params;
        const todo = vehicleService.getVehicleById(id);
       
        sendResponse(res, 200, true, "Fetched vehicle by ID", todo);
    })

export const createVehicle = catchAsync(async (req, res) =>
    {
        const vehicle = vehicleService.createTodo(req.body);
        sendResponse(res, 201, true, "Vehicle created successfully", vehicle);
    })

export const updateVehicle = catchAsync(async (req, res) =>
    {
        const { id } = req.params;
        const updatedVehicle = vehicleService.updateVehicle(id, plate_number, make, model, year, status);
        vehicleService.updateVehicle(plate_number, make, model, year, status);
        sendResponse(res, 200,true, "Vehicle updated successfully", todo.service.getTodoById[id]);
    })
export const deleteVehicle = catchAsync(async (req, res) => 
    {
        const { id } = req.params;
        vehicleService.deleteVehicle(id);
        
        sendResponse(res, 200, true, "Vehicle deleted successfully", null);
    })