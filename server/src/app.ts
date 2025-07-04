import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';

import messageRoutes from './routes/messageRoutes';
import reviewsRoutes from './routes/messageRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/message', messageRoutes );
app.use('/api/reviews', reviewsRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

export default app;