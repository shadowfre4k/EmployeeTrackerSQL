const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const cTable = require("console.table");

let db;

async function main() {
  db = await mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "1234",
    database: "employees_db",
  });
}

main();
//view all departments
const viewAllDepartments = () =>
  db.query(`SELECT * FROM department;`).then(([res]) => console.table(res));

//view all roles
const viewAllRoles = () =>
  db.query(`SELECT title FROM roles;`).then(([res]) => console.table(res));

// view all employees
const viewAllEmployees = () =>
  db
    .query(`SELECT first_name, last_name FROM employee;`)
    .then(([res]) => console.table(res));

//add a department
const addDepartment = async () => {
  const departmentRequest = {
    type: "input",
    name: "requestedName",
    message: "What is the name of the new department?",
  };

  await inquirer.prompt(departmentRequest).then((response) => {
    const sql = `INSERT INTO department (names) VALUES ("${response.requestedName}");`;

    return db.query(sql).then(() => viewAllDepartments());
  });
};

//add a role
const addRole = async () => {
  const [departments] = await db.query("SELECT * FROM department;");
  const roleRequest = [
    {
      type: "input",
      name: "requestedRole",
      message: "What is the name of the new role",
    },
    {
      type: "input",
      name: "requestedSalary",
      message: "What is the salary of the new role",
    },
    {
      type: "list",
      name: "requestedDepartment",
      message: "Which department does this new role belong too?",
      choices: departments.map((departmentId) => {
        return {
          value: departmentId.id,
          name: departmentId.names,
        };
      }),
    },
  ];

  await inquirer.prompt(roleRequest).then((response) => {
    const sql = `INSERT INTO  roles (title, salary, department_id) VALUES ("${response.requestedRole}","${response.requestedSalary}","${response.requestedDepartment}");`;

    return db.query(sql).then(() => viewAllRoles());
  });
};

// add an employee
const addEmployee = async () => {
  const [roles] = await db.query("SELECT * FROM roles ;");

  const employeeRequest = [
    {
      type: "input",
      name: "requestedFirst",
      message: "What is the first name of the new employee?",
    },
    {
      type: "input",
      name: "requestedLast",
      message: "What is the last name of the new employee?",
    },
    {
      type: "list",
      name: "requestedRole",
      message: "What is the new employee's role?",
      choices: roles.map((rolesId) => {
        return {
          value: rolesId.id,
          title: rolesId.title,
        };
      }),
    },

    // {
    //   type: "list",
    //   name: "requestedManager",
    //   message: "Which is this employees manager?",
    //   choices: managers.map((managerId) => {
    //     return {
    //       id: managerId.id,
    //       value: managerId.first_name,
    //       lastName: managerId.last_name,
    //     };
    //   }),
    // },
  ];

  await inquirer.prompt(employeeRequest).then((response) => {
    console.log();
    const sql = `INSERT INTO  employee (first_name,last_name,role_id,manager_id) VALUES ("${response.requestedFirst}","${response.requestedLast}","${response.requestedRole}","${response.requestedManager}");`;

    return db.query(sql).then(() => viewAllEmployees());
  });
};

//update an employee role
// const updateEmployeeRole = async () => {
//   //add queries
// };
//exit program

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  // updateEmployeeRole,
};
