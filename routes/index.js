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

router.get("/breakout", function (req, res, next) {
  const viewOptions = {
    title: "instabreakout",
    user_agent: req.headers["user-agent"],
  };
  if (req.headers["user-agent"].includes("Instagram")) {
    res.contentType("application/pdf");
  }
  res.render("breakout", viewOptions);
});

module.exports = router;
