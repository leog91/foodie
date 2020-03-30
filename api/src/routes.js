const Recipe = require("../schemas/recipe");

const asd = () => console.log("ASD");

const qwe = () => console.log("qwe");

const attachPublicRoutes = app => {
  if (process.env.NODE_ENV === "test") {
    //app.delete("/test/reset-database", test.resetDatabase);
    //app.post("/test/create-account", test.createAccount);
  }

  console.log("attatching . . .");

  app.get("/", (req, res) => {
    res.send("Hello there!");
  });

  app.get("/users/:userId", function(req, res) {
    res.send(req.params);
  });

  app.get("/recipe/:recipeId", async (req, res) => {
    try {
      const recipes = await Recipe.findById(req.params.recipeId);
      recipes
        ? res.json(recipes)
        : res.status(404).send("<h1>Opps !not_FoundOnDB</h1>");
    } catch {
      res.status(404).send("<h1>Opps !not_Found</h1>");
    }
  });

  app.get("/reciperemove/:recipeId", async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.recipeId);
      recipe.remove();

      res.json(recipe);
    } catch {
      res.status(404).send("<h1>Opps  remove</h1>");
    }
  });

  app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find()
      .limit(10)
      .sort("-createdOnwww");
    res.json(recipes.map(r => r._id));
  });

  app.get("/authorized", function(req, res) {
    res.send("Secured Resource");
  });

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
};

module.exports = {
  qwe,
  attachPublicRoutes,
  asd
};
