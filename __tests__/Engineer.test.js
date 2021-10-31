const Engineer = require('../lib/Engineer');

test('creates new engineer', () => {
    const engineer = new Engineer('Ethan', '2', 'ethan@email.com', 'ethanGH')

    expect(engineer.getName()).toEqual('Ethan');
    expect(engineer.getId()).toEqual('2')
    expect(engineer.getEmail()).toEqual('ethan@email.com')
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual('ethanGH');
})