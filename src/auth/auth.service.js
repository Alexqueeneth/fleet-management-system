import * as adminService from '../admin/admin.service.js';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../common/utils.common.js';
import { ConflictError, UnauthenticatedError } from '../common/errors.common.js';

export const register=async(admin )=>{

    const existingAdminwithUsername = await adminService.getadminByUsername(user.username);
    if (existingUserwithUsername) {
        throw new Error('Username already exists');
    }

    const existingUserWithEmail = await userService.getUserByEmail(user.email);
    if (existingUserWithEmail) {
        throw new ConflictError ('this email already exists');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await userService.createUser({
        ...user,
        password: hashedPassword
    });
    return{
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username
    }}

     export const login = async (user) => {
        const existingUser = await userService.getUserByUsername(user.username);
        if (!existingUser) {
            throw new UnauthenticatedError ('Invalid credentials, check your inputs and try again');
         }  
         if (! await bcrypt.compare(user.password, existingUser.password)) {
            throw new UnauthenticatedError ('Invalid credentials, check your inputs and try again');
            }
         const payload = {
           sub : existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            username: existingUser.username
         }
         const accessToken = generateAccessToken(payload);
         return { accessToken }
        }