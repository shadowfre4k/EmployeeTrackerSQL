const { question } = require("./question.js");
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  // updateEmployeeRole,
} = require("./queries.js");

const makeQuery = (selected) => {
  let answer = selected.selections;

  switch (answer) {
    case question[0]:
      viewAllDepartments().then(() => init());

      break;

    case question[1]:
      viewAllRoles().then(() => init());
      break;

    case question[2]:
      viewAllEmployees().then(() => init());
      break;

    case question[3]:
      addDepartment().then(() => init());

      break;

    case question[4]:
      addRole().then(() => init());

      break;

    case question[5]:
      addEmployee().then(() => init());
      break;

    case question[6]:
      const updateRequest = [
        {
          type: "list",
          name: "updateEmployee",
          message: "Which employee's role do you want to update?",
          //insert  all employees
          choices: [],
        },
        {
          type: "list",
          name: "updateRole",
          message: "Which role would you like to update it to?",
          //insert  all roles
          choices: [],
        },
      ];
      inquirer.prompt(updateRequest).then((response) => {
        updateEmployeeRole(response);
      });
      break;

    case question[7]:
      break;
  }
};

module.exports = { makeQuery };
