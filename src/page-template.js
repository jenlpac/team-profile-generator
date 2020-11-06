// Create manager card:
const generateManager = manager => {
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
const generateEngineer = engineer => {
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
                    <li class="list-group-item">GitHub Username:&nbsp;&nbsp;{Engineer username}</li>
                    <li class="list-group-item">GitHub Site:&nbsp;&nbsp;{Engineer github}</li>
                </ul>
            </div>
        </div>
    `;
};


// Create intern card:
  


// Generate entire page: