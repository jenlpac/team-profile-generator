const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username, github) {
        super(name, id, email);

        this.username = username;
        this.github = github;
    }

    getUsername() {
        return this.username;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;