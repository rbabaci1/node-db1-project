const express = require("express");

const { get, getById, insert, update, remove } = require("../data/helpers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await get();

    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
