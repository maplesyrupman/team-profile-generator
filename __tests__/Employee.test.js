const Employee = require('../lib/Employee')

test('creates a new employee', () => {
    const employee = new Employee('Dave', '1', 'dave@email.com')

    expect(employee.getName()).toEqual('Dave')
    expect(employee.getId()).toEqual('1')
    expect(employee.getRole()).toEqual('Employee');
    expect(employee.getEmail()).toEqual('dave@email.com')
})