const Employee = require("../lib/Employee");

// Test to create an employee:
test('creates an employee object', () => {
    const employee = new Employee('Joseph', 2001, 'joseph@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test to get an employees name:
test('gets employee name', () => {
    const employee = new Employee('Joseph', 2001, 'joseph@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Test to get an employees id:
test('gets employee id', () => {
    const employee = new Employee('Joseph', 2001, 'joseph@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Test to get an employees email:
test ('gets employee email', () => {
    const employee = new Employee('Joseph', 2001, 'joseph@email.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Test to get an employees role:
test ('gets employee role', () => {
    const employee = new Employee('Joseph', 2001, 'joseph@email.com');

    expect(employee.getRole()).toBe('Employee');
});