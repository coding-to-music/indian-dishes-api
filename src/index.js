import { config } from 'dotenv';
// import cors from 'cors';
import express from 'express';
import foodRouter from './routes/FoodRoutes.js';
import { setupConnection } from './connection.js';

const originsList = process.env.ALLOWED_ORGINS 
console.log('originsList', originsList)

// const corsObject = cors({
//   origin: originsList
// });

// console.log('corsObject ', corsObject)

// origin: ['http://localhost:3000', 'https://indian-dishes.netlify.app'],

const Port = process.env.PORT || 3000;

// load env config
config();

// setup the connection
await setupConnection();

const app = express();

//middleware
app.use(express.json());
// app.use(corsObject);

app.use('/api', foodRouter);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

export default app;
