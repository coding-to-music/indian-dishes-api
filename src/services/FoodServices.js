import { IndianFoods as FoodModel } from '../schema/food.js';

export const getAllFoods = async () => {
  return await FoodModel.find();
};

export const createFood = async (blog) => {
  return await FoodModel.create(blog);
};
export const getFoodById = async (id) => {
  return await FoodModel.findById(id);
};

export const updateFood = async (id, blog) => {
  return await FoodModel.findByIdAndUpdate(id, blog);
};

export const deleteFoodById = async (id) => {
  return await FoodModel.findByIdAndDelete(id);
};
