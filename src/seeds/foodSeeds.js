import mongoose from 'mongoose';
import { IndianFoods } from '../schema/food.js';
import { setupConnection } from '../connection.js';
import { FOOD_SEED_DATA } from './foodSeedData.js';

// setup the connection
await setupConnection();

const seedFoodData = async () => {
  try {
    // delete the existing data
    await IndianFoods.deleteMany({});
    console.log('Old Data Deleted Successfully');

    await IndianFoods.insertMany(FOOD_SEED_DATA);
    console.log('Seed data loaded successfully');
  } catch (error) {
    console.log(error);
  }
};

await seedFoodData();
mongoose.connection.close();

console.log('Connection is closed successfully');
