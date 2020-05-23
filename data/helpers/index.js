const db = require("../dbConfig");

const get = ({ limit = null, sort_by = "id", sort_dir = "asc" }) => {
  return db("accounts").limit(limit).orderBy(sort_by, sort_dir);
};
const getById = id => db("accounts").where({ id });
const insert = account => db("accounts").insert(account);
const update = (id, account) => db("accounts").update(account).where({ id });
const remove = id => db("accounts").delete().where({ id });

module.exports = { get, getById, insert, update, remove };
