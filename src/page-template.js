// Move cards into a function to create all cards
const buildTeam = team => {
    // Create manager card:
    const createManager = manager => {
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Manager Name Goes Here</h2>
                    <h3 class="card-title">Manager Role Goes Here</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;{Manager ID}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;{Manager email}</li>
                        <li class="list-group-item">Office #:&nbsp;&nbsp;{Manager office}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Create engineer card:
    const createEngineer = engineer => {
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Engineer Name Goes Here</h2>
                    <h3 class="card-title">Engineer Role Goes Here</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;{Engineer ID}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;{Engineer email}</li>
                        <li class="list-group-item">GitHub Username:&nbsp;&nbsp;{Engineer github}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    // Create intern card:
    const createIntern = intern => {
        return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Intern Name Goes Here</h2>
                    <h3 class="card-title">Intern Role Goes Here</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:&nbsp;&nbsp;{Intern ID}</li>
                        <li class="list-group-item">Email:&nbsp;&nbsp;{Intern email}</li>
                        <li class="list-group-item">School:&nbsp;&nbsp;{Intern github}</li>
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
        .filter(intern => createIntern.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return cards.join("");
};

// Generate entire page:
module.exports = team => {

    return `
        
    `

}