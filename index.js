const inquirer = require('inquirer');
const express = require('express');
const logo = require('asciiart-logo');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database (you will need to use your own personal postgres username and password)
const pool = new Pool(
  {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
)

pool.connect();

console.log(
  logo({
      name: 'Employee Tracker',
      font: 'Speed',
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: 'grey',
      logoColor: 'bold-green',
      textColor: 'green',
  })
  .render()
);

// Prompt user for what action they want to do next on the database
function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    // Switch case to handle the user's choice between View all deparements, roles, employees
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          pool.query(`SELECT * FROM departments`, (err, result) => {
            if (err) throw err;
            console.log("Viewing All Departments: ");
            console.table(result.rows);
            start();
          });
          break;
        case 'View all roles':
          pool.query(`SELECT * FROM roles`, (err, result) => {
            if (err) throw err;
            console.log("Viewing All Roles: ");
            console.table(result.rows);
            start();
          });
          break;

        case 'View all employees':
          pool.query(`SELECT * FROM employees`, (err, result) => {
            if (err) throw err;
            console.log("Viewing All Employees: ");
            console.table(result.rows);
            start();
          });
          break;

          // Adds a department to the database from the user's input
        case 'Add a department':
          inquirer.prompt([{
            // Adding a Department
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?',
            validate: departmentInput => {
              if (departmentInput) {
                return true;
              } else {
                console.log('Please Add A Department!');
                return false;
              }
            }
          }]).then((answers) => {
            pool.query(`INSERT INTO departments (department_name) VALUES ($1)`, [answers.department], (err, result) => {
              if (err) throw err;
              console.log(`Added ${answers.departments} to the database.`)
              start();
            });
          });
          break;

          // Adds a role to the database from the user's input
        case 'Add a role':
          inquirer.prompt([{
            // Adding a Role
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please Add A Title!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            validate: salaryInput => {
              if (salaryInput) {
                return true;
              } else {
                console.log('Please Add A Salary!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'department_id',
            message: 'What is the department id of the role?',
            validate: departmentIdInput => {
              if (departmentIdInput) {
                return true;
              } else {
                console.log('Please Add A Department Id!');
                return false;
              }
            }
          }]).then((answers) => {
            pool.query(`INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`, [answers.title, answers.salary, answers.department_id], (err, result) => {
              if (err) throw err;
              console.log(`Added ${answers.title} to the database.`)
              start();
            });
          });
          break;

          // Adds an employee to the database from the user's input
        case 'Add an employee':
          pool.query(`SELECT * FROM employees`, (err, result) => {
            if (err) throw err;
            inquirer.prompt([{
              // Adding an Employee
              type: 'input',
              name: 'first_name',
              message: 'What is the first name of the employee?',
              validate: firstNameInput => {
                if (firstNameInput) {
                  return true;
                } else {
                  console.log('Please Add A First Name!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'last_name',
              message: 'What is the last name of the employee?',
              validate: lastNameInput => {
                if (lastNameInput) {
                  return true;
                } else {
                  console.log('Please Add A Last Name!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'role_id',
              message: 'What is the role id of the employee?',
              validate: roleIdInput => {
                if (roleIdInput) {
                  return true;
                } else {
                  console.log('Please Add A Role Id!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'manager_id',
              message: 'What is the manager id of the employee?',
              validate: managerIdInput => {
                if (managerIdInput) {
                  return true;
                } else {
                  console.log('Please Add A Manager Id!');
                  return false;
                }
              }
            }]).then((answers) => {
              pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [answers.first_name, answers.last_name, answers.role_id, answers.manager_id], (err, result) => {
                if (err) throw err;
                console.log(`Added ${answers.first_name} ${answers.last_name} to the database.`)
                start();
              });
            });
          });
          break;

          // Updates an employee role in the database from the user's input
        case 'Update an employee role':
          pool.query(`SELECT * FROM employees, roles`, (err, result) => {
            if (err) throw err;
            inquirer.prompt([{
              // Updating an Employee Role
              type: 'input',
              name: 'employee_id',
              message: 'What is the employee id?',
              validate: employeeIdInput => {
                if (employeeIdInput) {
                  return true;
                } else {
                  console.log('Please Add An Employee Id!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'role_id',
              message: 'What is the role id?',
              validate: roleIdInput => {
                if (roleIdInput) {
                  return true;
                } else {
                  console.log('Please Add A Role Id!');
                  return false;
                }
              }
            }]).then((answers) => {
              pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [answers.role_id, answers.employee_id], (err, result) => {
                if (err) throw err;
                console.log(`Updated employee role to ${answers.role_id}.`)
              });
            });
          });
          break;

        case 'Exit':
          pool.end();
          console.log('Goodbye!');
          break;
        default:
          console.log(`Invalid action: ${answer.action}`);
          start();
      }
    });
}

// Start the application after connecting to the database
start();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});