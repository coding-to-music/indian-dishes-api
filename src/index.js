import { config } from 'dotenv';
import express from 'express';
import { setupConnection } from './connection.js';
import foodRouter from './routes/FoodRoutes.js';

// load env config
config();

// setup the connection
await setupConnection();

const app = express();

//middleware
app.use(express.json());

app.use('/api/foods', foodRouter);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

export default app;
