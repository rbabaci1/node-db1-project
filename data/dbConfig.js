const knex = require("knex");

const knexFile = require("../knexFile.js");

// change to "production" and update knexfile.js to use postgres.
const database = "production";

module.exports = knex(knexFile[database]);
