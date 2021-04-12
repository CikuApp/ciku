const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const { registrationValidation, loginValidation } = require("../validation");

// Register
router.post("/register", async (req, res) => {
  try {
    const { error } = registrationValidation(req.body);

    // handle validation error
    if (error) {
      throw error.details[0].message;
    }

    // check for user in DB
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      throw "Email already registered, please log in!";
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save to DB
    await user.save();

    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { error } = loginValidation(req.body);

    if (error) {
      // * change to vague error message
      throw error.details[0].message;
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw "Email does not exist, please register!";
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      throw "Invalid password.";
    }

    // JWT
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    // * change sent info exclude password
    res.header("authToken", token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
