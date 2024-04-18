DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments (
  department_id SERIAL PRIMARY KEY,
  department_name VARCHAR(50)
);

CREATE TABLE roles (
  role_id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  salary DECIMAL(10, 2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments (department_id)
);

CREATE TABLE employees (
  employee_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (role_id),
  FOREIGN KEY (manager_id) REFERENCES employees (employee_id)
);