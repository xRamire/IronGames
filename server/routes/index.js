module.exports = app => {
  app.use("/api", require("./auth.routes"));
  app.use("/api/reviews", require("./review.routes"))
  app.use("/api/games", require("./game.routes"));
  app.use("/api/user", require("./user.routes"))
  app.use("/api/upload", require("./uploads.routes"));
}