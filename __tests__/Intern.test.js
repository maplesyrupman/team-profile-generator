const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const intern = new Intern('Ian', '3', 'ian@email.com', 'some school')

    expect(intern.getName()).toEqual('Ian');
    expect(intern.getId()).toEqual('3');
    expect(intern.getEmail()).toEqual('ian@email.com');
    expect(intern.getSchool()).toEqual('some school');
})