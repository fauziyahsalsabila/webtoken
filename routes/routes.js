const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "your_default_secret_key";  // Menggunakan environment variable jika tersedia

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password!" });
  }
});

module.exports = router;
