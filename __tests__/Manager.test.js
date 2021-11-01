const Manager = require('../lib/Manager')

test('create new manager object', () => {
    const manager = new Manager('Mike', '1', 'mike@email.com', '123')

    expect(manager.getName()).toEqual('Mike');
    expect(manager.getId()).toEqual('1');
    expect(manager.getEmail()).toEqual('mike@email.com');
    expect(manager.getOfficeNum()).toEqual('123');
})