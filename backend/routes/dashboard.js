const router = require("express").Router();
const verify = require("./verifyToken");

router.use(verify);

router.get("/", (req, res) => {
  // * get user info from DB
  res.json("dashboard");
});

module.exports = router;
