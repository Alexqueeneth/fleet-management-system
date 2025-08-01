import { Admin } from './admin.model.js';

export const createAdmin = async ( user ) => 
{
const newAdmin = await Admin.create(user);
return newAdmin;
}

export const getAdminById = async (id) =>
{
    const admin =await Admin.findByPk(id);
    return admin;
    
}

export const getAdminByEmail = async (email) =>
{
    const admin = await Admin.findOne({ where: { email } });
    return admin;
}  

export const getAdminByUsername = async (username) =>
{
    const admin = await Admin.findOne({ where: { username } });
    return admin;
}