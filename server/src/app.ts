import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import connectDB from '../config/database';

import auth from './routes/auth.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// @route /GET
// @desc Test Base API
// @access Public
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// routes

app.use('/api/auth', auth);
// app.use('/api/user', user);
// app.use('/api/post', post);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
