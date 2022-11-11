import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
mongoose
  .connect(
    'mongodb+srv://helga_shum:wwwww@cluster0.oot8vjh.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('server OK'))
  .catch((err) => console.log('error', err));
const app = express();
app.use(express.json());
app.use(cors());

app.listen(1111, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
});
