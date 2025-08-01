import { Driver } from "./driver.model.js";

export const getDrivers =  async () => {
    return await Driver.findAll();
}

export const getDriverById = async (id) => {

    return await Driver.findByPk(id);
}


export const createDriver =  async (Driver) => {
    const newDriver = await Driver.create(Driver)

     return newDriver;
}

export const updateDriver = async (id, Driver) => {
    const updatedDriver = await Driver.update(Driver, {where:{id}})
     return updatedDriver
}

export const deleteDriver = async (id) => {
    await Driver.destroy({where:{id}})
    return true
}