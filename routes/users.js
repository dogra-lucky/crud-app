var express = require("express");
var router = express.Router();
const controller = require("./../controllers/userController");

/* GET users listing. */
router.get("/signUp", controller.getSignUp);
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
