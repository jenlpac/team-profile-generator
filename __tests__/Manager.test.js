const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Test to create a manager:
test('creates a Manager object', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});

// Test to get a managers name:
test('gets manager name', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.getName()).toEqual(expect.any(String));
    
});

// Test to get a managers id:
test('gets manager id', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.getId()).toEqual(expect.any(Number));
});

// Test to get a managers email:
test ('gets manager email', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

// Test to get a managers office number:
test ('gets manager number', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.getOffice()).toEqual(expect.any(Number));
});

// Test to get a managers role:
test ('gets manager role', () => {
    const manager = new Manager('Matthew', 2002, 'matthew@email.com', 414);

    expect(manager.getRole()).toBe('Manager');
});