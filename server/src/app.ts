import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';

import messageRouter from './routes/messageRouter';
import reviewsRouter from './routes/reviewsRouter';
import confirmRouter from './routes/confirmRouter';

const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT'], 
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));



app.use('/api/message', messageRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/confirm', confirmRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

export default app;