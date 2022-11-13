import * as FoodControllers from '../controllers/FoodControllers.js';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .get(FoodControllers.getAllFoods)
  .post(FoodControllers.createFood);

router
  .route('/:id')
  .get(FoodControllers.getFoodById)
  .put(FoodControllers.updateFood)
  .delete(FoodControllers.deleteFoodById);

export default router;
