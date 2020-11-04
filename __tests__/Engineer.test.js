const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// Test to create an engineer:
test('creates an Engineer object', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// Test to get an engineers name:
test('gets engineer name', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.getName()).toEqual(expect.any(String));
    
});

// Test to get an engineers id:
test('gets engineer id', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

// Test to get an engineers email:
test ('gets engineer email', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

// Test to get an engineers github:
test ('gets engineer github', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// Test to get an engineers role:
test ('gets engineer role', () => {
    const engineer = new Engineer('Joseph', 2001, 'joseph@email.com', 'jpac');

    expect(engineer.getRole()).toBe('Engineer');
});