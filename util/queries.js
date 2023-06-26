const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "1234",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

//view all departments
let viewAllDepartments = () =>
  db.query(`SELECT * FROM department;`, function (err, results) {
    console.table(results);
    if (err) {
      console.log(err);
    }
  });

//view all roles
let viewAllRoles = () =>
  db.query(`SELECT title FROM roles;`, function (err, results) {
    console.table(results);
    if (err) {
      console.log(err);
    }
  });

// view all employees
let viewAllemployees = () =>
  db.query(
    `SELECT first_name, last_name FROM employee;`,
    function (err, results) {
      console.table(results);
      if (err) {
        console.log(err);
      }
    }
  );

//add a department
let addDepartment = () => {
  const departmentRequest = {
    type: "input",
    name: "requestedName",
    message: "What is the name of the new department?",
  };

  inquirer.prompt(departmentRequest).then((response) => {
    const sql = `INSERT INTO department (names) VALUES ("${response.requestedName}");`;

    db.query(sql, function (err, res) {
      viewAllRoles();
      console.log("successfully added");
      init();
    });
  });
};

//add a role
let addRole = (role) => {
  db.query(
    `INSERT INTO role (title, salaray, department_id) VALUES (${role.requestedName}, ${role.requestedSalary},${role.requestedDepartment})`,
    function (err, results) {
      console.log(results);
    }
  );
};

// add an employee
let addEmployee = (employee) => {
  db.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${employee.requestedFirstName},${employee.requestedLastName},${employee.requestRole},${employee.requestManagerId})`,
    function (err, results) {
      console.log(results);
    }
  );
};

//update an employee role
let updateEmployeeRole = (employee) => {
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
