DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE  employess (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR(50) NOT NULL, 
    employee_last_name VARCHAR(50) NOT NULL, 
    employee_job_title VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    employee_salary INT NOT NULL,
    employee_direct_manager VARCHAR(50)
    );