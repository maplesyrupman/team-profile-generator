const Engineer = require('../lib/Engineer');

test('creates new engineer', () => {
    const engineerInfo = {
        name: 'Ethan',
        email: 'ethan@email.com',
        github: 'ethanGH'
    }
    const engineer = new Engineer(engineerInfo)

    expect(engineer.getName()).toEqual('Ethan');
    expect(engineer.getId()).toEqual(0)
    expect(engineer.getEmail()).toEqual('ethan@email.com')
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual('ethanGH');
})