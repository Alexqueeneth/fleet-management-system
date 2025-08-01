import {catchAsync, sendResponse} from '../common/utils.common.js';
import * as authService from './auth.service.js';
import  {registerSchema, loginSchema} from './auth.schema.js';
import { UnprocessableEntityError } from '../common/errors.common.js';


export const register = catchAsync(async (req, res, next) => {
    const result = registerSchema.safeParse(req.body);
    if (result.error) {
        throw new UnprocessableEntityError(
            "The request failed with the following errors",
            result.error.issues
        );
    }
    const user = await authService.register(result.data);
    sendResponse(res, 201, true, "Admin registered successfully", user);
});

export const login = catchAsync(async (req, res, next) => {
    const result = loginSchema.safeParse(req.body);

    if (result.error) {
        throw new UnprocessableEntityError(
            "The request failed with the following errors",
            result.error.issues
        );
    }
    const { accessToken } = await authService.login(result.data);

    return res.status(200).json({
        success: true,
        messsage: "Admin logged in succcessfully",
        authorization: {
            token: accessToken,
            type: "Bearer",
        }
    });
});
export const getAuthUser = catchAsync (async (req, res) => {
    sendResponse(res, 200, true, "Admin fetched successfully", req.user);
});