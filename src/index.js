import { config } from 'dotenv';
import express from 'express';
import { setupConnection } from './connection.js';
import foodRouter from './routes/FoodRoutes.js';

const Port = process.env.PORT || 3000;

// load env config
config();

// setup the connection
await setupConnection();

const app = express();

//middleware
app.use(express.json());

app.use('/', foodRouter);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

export default app;
