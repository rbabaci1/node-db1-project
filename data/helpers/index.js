const db = require("../dbConfig");

const get = () => db("accounts");
const getById = id => db("accounts").where({ id });
const insert = post => db("accounts").insert(post);
const update = (id, post) => db("accounts").update(post).where({ id });
const remove = id => db("accounts").delete().where({ id });

module.exports = { get, getById, insert, update, remove };
