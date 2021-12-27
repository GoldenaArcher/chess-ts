import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

const { PORT, DATABASE, DATABASE_PASSWORD } = process.env;

let DB = '';

if (DATABASE && DATABASE_PASSWORD)
  DB = DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection successful'));

import app from './app';

const port = PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
