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
  if (req.headers["user-agent"].includes("Instagram")) {
    res.contentType("application/force-download");
    res.set("Content-Disposition", "attachment; filename='breakout'");
    res.set("Content-Transfer-Encoding", "binary");
    res.set("Accept-Ranges", "bytes");
    res.end(Buffer.from(new Uint8Array(50)));
  } else {
    res.render("breakout", { title: "instabreakout" });
  }
});

module.exports = router;
