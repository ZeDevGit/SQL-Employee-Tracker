-- Removes the database if it exists and creates employee_db
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

-- Creates the departments, roles, and employees tables
CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  department_name VARCHAR(50)
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  FOREIGN KEY (manager_id) REFERENCES employees (id)
);
