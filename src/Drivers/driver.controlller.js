import * as driverService from "./driver.service.js";
import { catchAsync, sendResponse } from '../common/utils.common.js';

export const getAllDrivers = catchAsync(async (req, res) =>
     {
        const drivers = driverService.getAllDrivers();
        sendResponse(res, 200, true, "fetched all drivers", drivers);
        });
export const getDriverById = catchAsync(async (req, res) => 
    {
        const { id } = req.params;
        const driver = driverService.getDriverById(id);

        sendResponse(res, 200, true, "Fetched driver by ID", driver);
    })

export const createDriver = catchAsync(async (req, res) =>
    {
        const driver = driverService.createDriver(req.body);
        sendResponse(res, 201, true, "Driver created successfully", driver);
    })

export const updateDriver = catchAsync(async (req, res) =>
    {
        const { id } = req.params;
        const updatedDriver = driverService.updateDriver(id, req.body);
        sendResponse(res, 200,true, "Driver updated successfully", updatedDriver);
    })
export const deleteDriver = catchAsync(async (req, res) => 
    {
        const { id } = req.params;
        driverService.deleteDriver(id);

        sendResponse(res, 200, true, "Driver deleted successfully", null);
    })