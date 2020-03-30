var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

const pucblicRoutes = ["/recispes", "/"];

const auth = app => {
  var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://leog91.auth0.com/.well-known/jwks.json"
    }),
    audience: "https://api.foodie-api-leog.dev",
    issuer: "https://leog91.auth0.com/",
    algorithms: ["RS256"]
  }).unless({ path: pucblicRoutes });
  app.use(jwtCheck);

  app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send("invalid token...");
    }
  });
};

module.exports = auth;
