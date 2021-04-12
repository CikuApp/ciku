const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).send("Invalid token");
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = verifyToken;
