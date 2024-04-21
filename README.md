# SQL-Employee-Tracker
An application using Command Line to track and manage a company's employee database

## Table of Contents
- [Description](#description)

- [User Story](#user-story)

- [Usage](#usage)

- [Features](#features)

- [Demonstration](#demonstration)

- [Questions](#questions)


## Description 
A project built using Postgres for a command-line based application to manage a company's employee database

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Usage
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Features
- User can navigate through a command-line based interface to manage company records
- User can view, add or remove various roles/departments through the interface
- Database is updated through queries based on user's input

## Demonstration


https://github.com/ZeDevGit/SQL-Employee-Tracker/assets/42353819/2ed644e2-59b9-4411-bd8e-2006c33d7507



## License
 ![Empty Badge](https://img.shields.io/badge/MIT-License-blue)

## Questions
 [ZeDevGit](https://github.com/ZeDevGit)
