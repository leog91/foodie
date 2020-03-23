const express = require("express");

const cors = require("cors");
const app = express();
const port = 3000;

require("dotenv").config();
const Recipe = require("./schemas/recipe");

app.use(cors());

var mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI_LOCAL, { useNewUrlParser: true });

//mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.get("/recipe-create", async (req, res) => {
  const recipe = new Recipe({
    name: "r_name",
    ingredients: ["r_1", "r_2"],
    description: "r_desc",
    image: "r_img"
  });

  await recipe.save().then(() => console.log("recipe created"));

  res.send("Recipe created \n");
});

app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();

  res.json(recipes);
});

app.get("/", (req, res) => {
  res.send("Hello there!");
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("success ?Mongo");
  // we're connected!
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.listen(port, function() {
  console.log(`Listening on ${port}`);
  /*
  connectDb().then(() => {
    console.log("MongoDb connected");
  });
  */
});
