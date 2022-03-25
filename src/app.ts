/* 
 * Types added:
 * @type/node
 * @type/express
 */

// We are using TS import instead of the default require() from node, so it's compiled by tsc
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
const app = express();

// Routes
import postRoutes from './routes/post';

// Middleware
app.use('/post', postRoutes);
app.use(json());

// Basic error handler using express
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: error.message
  });
});

// Listening to port
app.listen(3000);