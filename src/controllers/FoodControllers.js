import * as foodService from '../services/FoodServices.js';

export const getAllFoods = async (req, res) => {
  try {
    const { foods, currentPage, totalPages } = await foodService.getAllFoods(
      req.query
    );

    res.json({
      data: foods,
      status: 'success',
      pagination: { currentPage, totalPages },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const food = await foodService.createFood(req.body);

    res.json({ data: food, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await foodService.getFoodById(req.params.id);

    res.json({ data: food, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateFood = async (req, res) => {
  try {
    const food = await foodService.updateFood(req.params.id, req.body);

    res.json({ data: food, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteFoodById = async (req, res) => {
  try {
    const food = await foodService.deleteFoodById(req.params.id);

    res.json({ data: food, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
