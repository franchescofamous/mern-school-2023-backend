const mysql = require("mysql2");
const dataBase = mysql.createConnection({
  user: "mern-school-user",
  host: "localhost",
  password: "12345678",
  database: "mern_school",
});

dataBase.connect((error) => {
  if (error) throw error;

  console.log("database connected successfully");
});

module.exports = dataBase;
