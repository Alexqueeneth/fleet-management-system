import { Vehicle } from "./vehicles.models.js";



export const getVehicles =  async () => {
    return await Vehicle.findAll();
}

export const getVehicleById = async (id) => {

    return await Vehicle.findByPk(id);
}


export const createVehicle =  async (Vehicle) => {
    const newVehicle = await Vehicle.create(Vehicle)

     return newVehicle;
}

export const updateVehicle = async (id, Vehicle) => {
    const updatedVehicle = await Vehicle.update(Vehicle, {where:{id}})
     return updatedVehicle
}

export const deleteVehicle = async (id) => {
    await Vehicle.destroy({where:{id}})
    return true
}