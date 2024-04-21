-- Creates seed data for the departments, roles, and employees tables
INSERT INTO departments (department_name)
VALUES ('Engineering'),
       ('Sales'),
       ('Software'),
       ('HR'),
       ('Marketing'),
       ('Interns'),
       ('Management'),
       ('Finance'),
       ('Recruiting'),
       ('Admin');

INSERT INTO roles (title, salary, department_id)
VALUES ('Manager', 100000, 1),
       ('Lead Engineer', 80000, 2),
       ('Software Engineer', 60000, 3),
       ('Sales Manager', 90000, 4),
       ('Salesperson', 50000, 5),
       ('Intern', 30000, 6),
       ('HR Manager', 70000, 7),
       ('HR Specialist', 50000, 8),
       ('Recruiter', 40000, 9),
       ('Admin Assistant', 35000, 10);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 3),
       ('Jane', 'Doe', 2, 1),
       ('Alice', 'Smith', 3, 1),
       ('Bob', 'Smith', 4, 2),
       ('Charlie', 'Brown', 5, 2),
       ('David', 'Brown', 6, 3),
       ('Eve', 'Johnson', 7, 3),
       ('Frank', 'Johnson', 8, 4),
       ('Grace', 'Williams', 9, 4),
       ('Heidi', 'Williams', 10, 5);