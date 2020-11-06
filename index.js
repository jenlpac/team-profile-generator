const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeFile = require('./utils/generate-site');
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
                name: 'managerName',
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
                name: 'managerId',
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
                name: 'managerEmail',
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
                name: 'managerOffice',
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
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
            
            team.push(manager);
            addEmployee();
        })
}

// Prompts to include another team member:
const addEmployee = () => {
    console.log("-----------------------");
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'nextEmployee',
                message: "Please select your next team member, or complete your team.",
                choices: ['Engineer', 'Intern', 'Build Team']
            },
        ])
        .then(data => {
            if(data.nextEmployee === 'Engineer') {
                addEngineer();
            }
            else if(data.nextEmployee === 'Intern') {
                addIntern();
            }
            else {
                const pageHTML = generatePage(team);

                return writeFile(pageHTML)
                    .then(writeFileResponse => {
                        console.log(writeFileResponse);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
            
        })
}


// Prompts to add an engineer:
const addEngineer = () => {
    console.log("-----------------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the this engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is this engineer's emmployee id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's id to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is this engineer's email address?",
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
                name: 'engineerGithub',
                message: "What is this engineer's Github username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github username to continue.");
                        return false;
                    }
                }
            },
        ])
        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            
            team.push(engineer);
            addEmployee();
        })
}


// Prompts to add an intern:
const addIntern = () => {
    console.log("----------------------");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the this intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is this intern's emmployee id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's id to continue.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is this intern's email address?",
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
                name: 'internSchool',
                message: "What school is this intern attending?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school to continue.");
                        return false;
                    }
                }
            },
        ])
        .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            
            team.push(intern);
            addEmployee();
        })
}



// Call to begin questions:
addManager();