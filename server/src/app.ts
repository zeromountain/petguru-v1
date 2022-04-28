import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import connectDB from '../config/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

connectDB();

// @route /GET
// @desc Test Base API
// @access Public
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
