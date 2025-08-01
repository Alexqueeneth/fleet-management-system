import * as adminService from '../admin/admin.service.js';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../common/utils.common.js';
import { ConflictError, UnauthenticatedError } from '../common/errors.common.js';

export const register=async(admin)=>{

    const existingUserwithAdminename = await adminService.getAdminByUsername(admin.username);
    if (existingUserwithUsername) {
        throw new Error('Adminname already exists');
    }

    const existingAdminWithEmail = await adminService.getUserByEmail(admin.email);
    if (existingAdminWithEmail) {
        throw new ConflictError ('this email already exists');
    }

    const hashedPassword = await bcrypt.hash(admin.password, 10);
    const newAdmin = await adminService.createAdmin({
        ...admin,
        password: hashedPassword
    });
    return{
        id: newAdmin.id,
        name: newAdmin.name,
        email: newAdmin.email,
        adminname: newAdmin.adminname
    }}

     export const login = async (admin) => {
        const existingAdmin = await adminService.getAdminByAdminname(admin.adminname);
        if (!existingAdmin) {
            throw new UnauthenticatedError ('Invalid credentials, check your inputs and try again');
         }  
         if (! await bcrypt.compare(admin.password, existingAdmin.password)) {
            throw new UnauthenticatedError ('Invalid credentials, check your inputs and try again');
            }
         const payload = {
           sub : existingAdmin.id,
            name: existingAdmin.name,
            email: existingAdmin.email,
            adminname: existingAdmin.adminname
         }
         const accessToken = generateAccessToken(payload);
         return { accessToken }
        }