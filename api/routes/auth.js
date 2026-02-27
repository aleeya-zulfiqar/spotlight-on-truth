const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax", // use 'strict' in prod
  secure: false, // true only with HTTPS
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// Signup
router.post(
  "/signup",
  [
    body("name").trim().notEmpty(),
    body("email").isEmail(),
    body("password")
      .isLength({ min: 8 })
      .matches(/[0-9]/)
      .matches(/[!@#$%^&*]/),
  ],
  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Basic validation
      if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required." });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters." });
      }

      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(400).json({ error: "Email already registered" });

      const salt = await bcrypt.genSalt(12);
      const hashed = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        name,
        email,
        password: hashed,
      });

      // Create JWT
      const token = jwt.sign(
        { userId: newUser._id, roles: newUser.roles },
        process.env.JWT_SECRET,
        { expiresIn: "7d" },
      );

      res.cookie("auth_token", token, COOKIE_OPTIONS);

      res.status(201).json({
        message: "Signup successful",
        newUser,
      });
    } catch (err) {
      console.log("Signup Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, roles: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("auth_token", token, COOKIE_OPTIONS);
    return res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
