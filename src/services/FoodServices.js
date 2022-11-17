import { IndianFoods as FoodModel } from '../schema/food.js';

export const getAllFoods = async (props = {}) => {
  const { page = 1, limit = 10 } = props;

  // execute query with page and limit values
  const foods = await FoodModel.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  // get total documents in the Posts collection
  const count = await FoodModel.countDocuments();

  return {
    foods,
    totalPages: Math.ceil(count / limit),
    currentPage: Number(page),
  };
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
