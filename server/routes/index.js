module.exports = app => {
  app.use("/", require("./auth.routes"));
  app.use("/reviews", require("./review.routes"))
  app.use("/games", require("./game.routes"));
  app.use("/user", require("./user.routes"))
}