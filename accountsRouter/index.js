const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await db("accounts");

    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
