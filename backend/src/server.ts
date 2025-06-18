import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from '../config/mongodb';
import usersRouter from './routes/users';
import todosRouter from './routes/todos';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true              
  }));
connectDB();

const PORT: number = Number.parseInt(process.env.PORT || "4000");

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express!');
});

app.use('/api/users', usersRouter);
app.use('/api/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
