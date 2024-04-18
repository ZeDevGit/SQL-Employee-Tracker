const inquirer = require('inquirer');
const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    user: '',
    password: '',
    host: 'localhost',
    database: 'movies_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

app.use((req, res) => {
  res.status(404).end();
});

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
                'Exit'
            ]
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'View all roles':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'View all employees':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'Add a department':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'Add a role':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'Add an employee':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'Update an employee role':
                    pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
                        console.log(rows);
                      });
                    break;

                case 'Exit':
                    db.end();
                    break;
            }
        });
}

start();

// You will need to create the functions viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole
// Each of these functions will use the `db.query` method to execute the appropriate SQL command