const Manager = require('../lib/Manager')

test('create new manager object', () => {
    const managerInfo = {
        name: 'Mike',
        email: 'mike@email.com',
        officeNumber: '123'
    }
    const manager = new Manager(managerInfo)

    expect(manager.getName()).toEqual('Mike');
    expect(manager.getId()).toEqual(0);
    expect(manager.getEmail()).toEqual('mike@email.com');
    expect(manager.getOfficeNum()).toEqual('123');
})