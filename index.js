import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { getPortfolio } from './controllers/PortfolioCotroller.js';
import { addClient } from './controllers/ClientController.js';
mongoose
  .connect(
    'https://nails-backend.vercel.app/',
  )
  .then(() => console.log('server OK'))
  .catch((err) => console.log('error', err));
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', getPortfolio);
app.post('/', addClient);
app.listen(1111, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
});
