const Employee = require('../lib/Employee')

test('creates a new employee', () => {
    const employeeInfo = {
        name: 'Dave',
        email: 'dave@email.com'
    }
    const employee2Info = {
        name: 'Mike',
        email: 'mike@email.com'
    }
    const employee = new Employee(employeeInfo)
    const employee2 = new Employee(employee2Info);

    expect(employee.getName()).toEqual('Dave')
    expect(employee.getId()).toEqual(0)
    expect(employee.getRole()).toEqual('Employee');
    expect(employee.getEmail()).toEqual('dave@email.com')

    expect(employee2.getId()).toEqual(1);
})