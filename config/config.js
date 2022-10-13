require('dotenv').config();

module.exports ={
  "development": {
    "username": "postgres",
    "host": "containers-us-west-86.railway.app",
    "port": 5644,
    "database": "railway",
    "dialect": "postgres",
    "password" : "N2QqmXufh4JCE9GtmcR5" 
    //"logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "railway",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

