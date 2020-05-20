const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "API is up!" });
});

module.exports = router;
