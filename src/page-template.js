const fs = require("fs");

// Move cards into a function to create all cards
const buildTeam = team => {
    // Create manager card:
    const createManager = manager => {
        return `
            <div class="card">
                <div class="card-header bg-primary">
                    <h3 class="card-title">${manager.getName()}</h3>
                    <h5 class="card-title">${manager.getRole()}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;${manager.getId()}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;<a href="mailto:${manager.getEmail}">${manager.getEmail()}</li>
                        <li class="list-group-item">Office #:&nbsp;&nbsp;${manager.getOffice()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Create engineer card:
    const createEngineer = engineer => {
        return `
            <div class="card">
                <div class="card-header bg-secondary">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <h5 class="card-title">${engineer.getRole()}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;${engineer.getId()}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;<a href="mailto:${engineer.getEmail}">${engineer.getEmail()}</li>
                        <li class="list-group-item">GitHub Username:&nbsp;&nbsp;${engineer.getGithub()}}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Create intern card:
    const createIntern = intern => {
        return `
            <div class="card">
                <div class="card-header bg-success">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h5 class="card-title">${intern.getName()}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;${intern.getId()}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;<a href="mailto:${intern.getEmail}">${intern.getEmail()}</li>
                        <li class="list-group-item">School:&nbsp;&nbsp;${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Create cards array:
    const cards = [];

    cards.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    cards.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    cards.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return cards.join("");
};

// Generate entire page:
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

        </head>
        <body>
            <header class="bg-info sticky-top text-light mb-4 py-3">
                <h1 class="text-center ">My Team</h1>
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center flex-wrap">
                        <!-- Cards go here -->
                        ${buildTeam(team)}
                    </div>
                </div>
            <div>

        </body>
    </html>
    `

}