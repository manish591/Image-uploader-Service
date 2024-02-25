import express, {NextFunction, Request, Response} from 'express';
import createError from 'http-errors';
const app = express();

app.get('/upload', function(req, res) {
  res.end('File uploaded successfully');
});

// 404 route handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404, '404 not found'));
});

// global error handler
app.use(function(err: Error, req: Request, res: Response) {
  res.status(500).json({
    message: err.message,
  });
});

export default app;