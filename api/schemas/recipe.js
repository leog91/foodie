const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  description: String,
  image: String
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
