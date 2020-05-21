const express = require("express");

const { get, getById, insert, update, remove } = require("../data/helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const accounts = await get();

    res.status(200).json(accounts);
  } catch (err) {
    next({
      error: `The accounts could not be retrieved at this moment.`,
      reason: err.message,
    });
  }
});

module.exports = router;
