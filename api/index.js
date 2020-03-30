const express = require("express");
const cors = require("cors");
var mongoose = require("mongoose");

require("dotenv").config();

const routes = require("./src/routes");
const auth = require("./src/auth");

const app = express();
const port = 3000;

app.use(cors());

mongoose.connect(process.env.DB_URI_LOCAL, { useNewUrlParser: true });

auth(app);

routes.attachPublicRoutes(app);

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
