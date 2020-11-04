const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// Test to create an intern:
test('creates an Intern object', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// Test to get an interns name:
test('gets intern name', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.getName()).toEqual(expect.any(String));
    
});

// Test to get an interns id:
test('gets intern id', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.getId()).toEqual(expect.any(Number));
});

// Test to get an interns email:
test ('gets intern email', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.getEmail()).toEqual(expect.any(String));
});

// Test to get an interns school:
test ('gets intern school', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// Test to get an interns role:
test ('gets intern role', () => {
    const intern = new Intern('Tiffany', 2003, 'tiffany@email.com', 'Texas Tech');

    expect(intern.getRole()).toBe('Intern');
});