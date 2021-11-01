const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const internInfo = {
        name: 'Ian',
        email: 'ian@email.com',
        school: 'some school'
    }
    const intern = new Intern(internInfo)

    expect(intern.getName()).toEqual('Ian');
    expect(intern.getId()).toEqual(0);
    expect(intern.getEmail()).toEqual('ian@email.com');
    expect(intern.getSchool()).toEqual('some school');
    expect(intern.getRole()).toEqual('Intern');
})