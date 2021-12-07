// const router = require("express").Router();

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

// // You put the next routes here 👇
// // example: router.use("/auth", authRoutes)

// module.exports = app => {
//   app.use("/reviews", require("./review.routes"))
//   app.use("/games", require("./game.routes"));
//   app.use("/", require("./auth.routes"));
// }




// module.exports = router;


module.exports = app => {
  app.use("/", require("./auth.routes"));
  app.use("/reviews", require("./review.routes"))
  app.use("/games", require("./game.routes"));
  app.use("/user", require("./user.routes"))
}