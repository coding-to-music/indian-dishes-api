import { config } from 'dotenv';
import express from 'express';
import { setupConnection } from './connection.js';

// load env config
config();

// setup the connection
await setupConnection();

const app = express();

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

export default app;
