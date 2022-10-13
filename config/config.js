require("dotenv").config();

module.exports = {
  development: {
    password: process.env.DB_PASSWORD || "JOHAN",
    database: process.env.DB_NAME || "animes",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    "port": 5432,
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
