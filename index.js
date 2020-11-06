const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');

const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Open team array:
const team = [];
// Prompts for manager data:
const addManager = () => {
    console.log("Let's build your team.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's emmployee id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's id to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
                validate: emailInput => {
                    if (emailInput.match(emailValidator)) {
                        return true;
                    } else {
                        console.log("Please enter a valid email address to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the manager's office number?",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number to continue.");
                        return false;
                    }
                }
            },
        ])
        .then(data => {
            const data = { name, id, email, office };
            const manager = new Manager(name, id, email, office);
            const managerData = {
                name: manager.getRole(),
                id: manager.getId(),
                email: manager.getEmail(),
                office: manager.getOffice(),
                role: manager.getRole()
            }
            team.push(managerData);
            addEmployee();
        })
}

// Prompts to include another team member:



// Prompts to add an engineer:



// Prompts to add an intern:



// Write to file:



// Call to begin questions:
// addManager();