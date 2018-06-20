module.exports = {
  "development": {
    "username": process.env.USER,
    "password": null,
    "database": "any-consolation",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USER,
    "password": null,
    "database": "any-consolation-test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.USER,
    "password": null,
    "database": "any-consolation",
    "host": "localhost",
    "dialect": "postgres"
  }
}
