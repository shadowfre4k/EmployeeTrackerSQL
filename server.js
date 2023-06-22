//imports
const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

//connnect to port
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "1234",
    database: "courses_db",
  },
  console.log(`Connected to the courses_db database.`)
);

//boiler plate response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
