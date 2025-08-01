import { BaseError} from "../common/errors.common.js";
export const errorMiddleware= (err, req, res, next) =>{

    if (err instanceof BaseError)
    {
         res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }
}