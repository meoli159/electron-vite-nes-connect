import mongoose from 'mongoose';
mongoose
  .connect(import.meta.env.VITE_MONGODB_URI, {maxPoolSize: 10})
  .then(() => console.log('DB is connected!!!'))
  .catch(err => console.log(err));
