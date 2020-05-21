const db = require("../dbConfig");

const get = () => db("accounts");
const getById = id => db("accounts").where({ id });
const insert = account => db("accounts").insert(account);
const update = (id, account) => db("accounts").update(account).where({ id });
const remove = id => db("accounts").delete().where({ id });

module.exports = { get, getById, insert, update, remove };
