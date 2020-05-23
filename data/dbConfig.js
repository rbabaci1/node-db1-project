const knex = require("knex");

const knexFile = require("../knexFile.js");

// change to "production" and update knexfile.js to use postgres.
// module.exports = knex(knexFile.production);
module.exports = knex(knexFile.development);
