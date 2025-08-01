import { formatZodErrors } from "./utils.common.js";

export class BaseError extends Error
{
    constructor(message)
    {
         super(message);
         this.statusCode = 500;
    }

}

export class NotFoundError extends BaseError
{
    constructor( message )
    {
        super(message);
        this.statusCode = 404;
    }
}

export class BadRequestError extends BaseError
{
    constructor( message )
    {
        super(message);
        this.statusCode = 400;
    }
}

export class UnprocessableEntityError extends BaseError
{
    constructor( message, errrors )
    {
        super(message);
        this.statusCode = 422;
        this.errors= formatZodErrors (errrors);
    }
}


export class UnauthorisedError extends BaseError
{
    constructor( message )
    {
        super(message);
        this.statusCode = 401;
    }
}
export class UnauthenticatedError extends BaseError
{
    constructor( message )
    {
        super(message);
        this.statusCode = 403;
    }
}

export class ConflictError extends BaseError
{
    constructor( message )
    {
        super(message);
        this.statusCode = 409;
    }
}

