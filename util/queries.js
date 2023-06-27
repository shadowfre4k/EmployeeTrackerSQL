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
const viewAllemployees = () =>
  db
    .query(`SELECT first_name,last_name FROM employee;`)
    .then(([res]) => console.table(res));

//add a department
const addDepartment = () => {
  const departmentRequest = {
    type: "input",
    name: "requestedName",
    message: "What is the name of the new department?",
  };

  inquirer.prompt(departmentRequest).then((response) => {
    const sql = `INSERT INTO department (names) VALUES ("${response.requestedName}");`;

    db.query(sql).then(() => viewAllDepartments());
  });
};

//add a role
const addRole = (role) => {
  db.query(
    `INSERT INTO departments (title, salaray, department_id) VALUES (${role.requestedName}, ${role.requestedSalary},${role.requestedDepartment});`,
    function (err, results) {
      console.log(results);
    }
  );
};

// add an employee
const addEmployee = (employee) => {
  db.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${employee.requestedFirstName},${employee.requestedLastName},${employee.requestRole},${employee.requestManagerId})`,
    function (err, results) {
      console.log(results);
    }
  );
};

//update an employee role
const updateEmployeeRole = (employee) => {
  db.query(
    //add queries
    ` VALUES (${employee.updateEmployee},${employee.updatedRole}`,
    function (err, results) {
      console.log(results);
    }
  );
};
//exit program

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllemployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
