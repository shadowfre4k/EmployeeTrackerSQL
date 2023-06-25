//imports
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { makeQuery } = require("./util/makeQuery.js");
const { question } = require("./util/question.js");

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
console.log(question);
//Menu selections
const selections = {
  type: "list",
  name: "selections",
  message: "Please choose one of the following options",
  choices: question,
};

//init function
init = () => {
  inquirer.prompt(selections).then((response) => makeQuery(response));
};

//envoke init
init();
