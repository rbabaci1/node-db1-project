const express = require("express");

const accountsRouter = require("./accountsRouter");

const server = express();

server.use(express.json());
server.use("/api/categories", accountsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is up!" });
});

function errorHandler(error, req, res, next) {
  const code = error.status || error.statusCode || 500;

  res.status(code).json(error);
}

server.use(errorHandler);

module.exports = server;
