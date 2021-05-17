import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import postRouter from './routes/post.router.js';

const app = express();

app.use('/api/v1/posts', postRouter);

app.use(cors());
app.use(express.json());

const dbUrl = process.env.DB_CONNECTION_URL;
const port = process.env.PORT;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((err) => console.error(err.message));

// mongoose.set('useFindAndModify', false);
