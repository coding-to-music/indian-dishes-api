import { config } from 'dotenv';
import mongoose from 'mongoose';

// load env config
config();

export const setupConnection = async () => {
  const connectionString = process.env.MONGO_URI;
  try {
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
