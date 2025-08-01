import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { createServer } from 'http';
import router from './routes/index.js'
import appRouter from './routes/index.js'
import { sendResponse } from './common/utils.common.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import { NotFoundError } from './common/errors.common.js';


const App = express();
const server = createServer(App);
App.use(cors());
App.use(helmet());
App.use(compression());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));



App.use( "/api", appRouter);

App.use( (req, res) => {
    const message=`the requested URL ${req.originalUrl} does not exist for the ${req.method.TolowerCase()} method on this server`;
 throw new NotFoundError(message);


// sendResponse(res, 404, false, message, null);
});

App.use(errorMiddleware);

export {App, server};