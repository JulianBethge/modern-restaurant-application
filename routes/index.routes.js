const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.session.user);
  res.render("index", {user: req.session.user});
});

module.exports = router;
