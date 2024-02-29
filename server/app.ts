import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import cors from 'cors';
import { MulterError } from 'multer';
import appRouter from './routes';

const app = express();
app.use(cors({
  origin: '*'
}));

app.use('/', appRouter);

// 404 route handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404, '404 not found'));
});

// global error handler
app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  if(err instanceof MulterError) {
    res.status(500).json({
      message: 'multer error occured',
      err: err.message,
    });
  } else {
    res.status(404).json({
      message: err.message,
    });
  }

  next();
});

export default app;