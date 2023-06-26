//imports

const inquirer = require("inquirer");
const { makeQuery } = require("./util/makeQuery.js");
const { question } = require("./util/question.js");

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
