import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
  prep_time: {
    type: Number,
    required: true,
  },
  cook_time: {
    type: Number,
    required: true,
  },
  flavor_profile: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

export const IndianFoods = mongoose.model('indian-foods', foodSchema);
