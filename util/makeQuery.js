const { question } = require("./question.js");
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllemployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./queries.js");

const makeQuery = (selected) => {
  let answer = selected.selections;

  switch (answer) {
    case question[0]:
      viewAllDepartments().then(() => init());

      break;

    case question[1]:
      viewAllRoles();
      break;

    case question[2]:
      viewAllemployees();
      break;

    case question[3]:
      addDepartment();

      break;

    case question[4]:
      const roleRequest = [
        {
          type: "input",
          name: "requestedName",
          message: "What is the name of the new role?",
        },
        {
          type: "input",
          name: "requestedSalary",
          message: "How much is the salary of that role",
        },
        {
          type: "list",
          name: "requestedDepartment",
          message: "which department does this role belong to?",

          //insert  all departments
          choices: [],
        },
      ];
      inquirer.prompt(roleRequest).then((response) => {
        addRole(response);
      });

      break;

    case question[5]:
      const employeeRequest = [
        {
          type: "input",
          name: "requestedFirstName",
          message: "What is the  first name of the new employee?",
        },
        {
          type: "input",
          name: "requestedLastName",
          message: "What is the  last name of the new employee?",
        },
        {
          type: "list",
          name: "requestRole",
          message: "What is the employees role?",
          //insert  all roles
          choices: [],
        },
        {
          type: "list",
          name: "requestManagerId",
          message: "Who is the employees manager?",
          //insert  all managers
          choices: [],
        },
      ];
      inquirer.prompt(employeeRequest).then((response) => {
        addEmployee(response);
      });
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
