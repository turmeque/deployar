require("dotenv").config();

module.exports = {
  development: {
    
    
    
    password: process.env.DB_PASSWORD || "JOHAN",
   // database: process.env.DB_NAME || "animes",
    //host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
  
    dialect: "postgres",
    logging: false,
  }

};
