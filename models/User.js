require("dotenv").config();
const { Sequelize } = require("sequelize");

// connect to db
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.", err);
  })
  .finally();

// ORM (Object Relational Mapping)
// user table in the test db

// modelName, attribute, options
sequelize.define(
  "user",
  {
    // attributes
  },
  {
    // options
  }
);
