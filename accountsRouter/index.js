const express = require("express");

const { insert, get, getById, update, remove } = require("../data/helpers");

const router = express.Router();

router.post("/", validateBody, async ({ body }, res, next) => {
  try {
    const [accountId] = await insert(body);
    const [addedAccount] = await getById(accountId);

    res.status(201).json(addedAccount);
  } catch (err) {
    next({
      error: `The account could not be added at this moment.`,
      reason: err.message,
    });
  }
});

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

router.get("/:id", validateId, async ({ account }, res) => {
  res.status(200).json(account);
});

////////////////////////////////////////
async function validateId(req, res, next) {
  try {
    const { id } = req.params;
    const [account] = await getById(id);

    if (account) {
      req.account = account;
      next();
    } else {
      next({
        status: 404,
        message: `The account with the specified ID does not exist.`,
      });
    }
  } catch (err) {
    next({
      error: `The account info could not be retrieved at this moment.`,
      reason: err.message,
    });
  }
}

function validateBody(req, res, next) {
  const { body } = req;

  if (typeof body === undefined) {
    res.status(400).json({ message: `Request body is missing.` });
  } else if (!body.hasOwnProperty("name") || !body.hasOwnProperty("budget")) {
    res.status(400).json({
      message: `Some info in the body is missing or incorrectly defined.`,
    });
  } else {
    next();
  }
}

module.exports = router;
