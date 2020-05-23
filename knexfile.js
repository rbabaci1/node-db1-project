module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/budget.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost", // if the server is not running on your computer provide the network address
      database: "northwind",
      user: "postgres",
      password: "212139bob",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
