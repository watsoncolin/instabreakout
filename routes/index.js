var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const viewOptions = {
    title: "instabreakout",
    user_agent: req.headers["user-agent"],
  };
  res.render("index", viewOptions);
});

module.exports = router;
