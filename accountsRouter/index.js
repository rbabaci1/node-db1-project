const express = require("express");

const { get } = require("../data/helpers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await get("accounts");

    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
