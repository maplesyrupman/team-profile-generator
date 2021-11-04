const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHtml = require('./lib/generateHTML')
const {promptManager, promptEngineer, promptIntern} = require('./lib/prompts')


async function getTeamData() {
    const teamData = await promptManager()
                            .then(promptEngineer)
                            .then(promptIntern)
                            .then(data => data)
    return teamData;
}

function createEmployeeObjs(teamData) {
    const employeeObjs = {
        engineers: [],
        interns: []
    };
    const engineers = teamData.engineers;
    const interns = teamData.interns;

    employeeObjs.manager = new Manager(teamData.manager)
    
    for (let i = 0; i < engineers.length; i++) {
        employeeObjs.engineers.push(new Engineer(engineers[i]))
    }

    for (let i = 0; i < interns.length; i++) {
        employeeObjs.interns.push(new Intern(interns[i]))
    }

    return employeeObjs;
}

function writeFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    });
};

const mockData = {
    manager: { name: 'Matthew', email: 'matt@email.com', officeNum: '123' },
    engineers: [
      {
        name: 'William',
        email: 'will@email.com',
        github: 'willGH',
        addEngineer: true
      },
      {
        name: 'Chris',
        email: 'chris@email.com',
        github: 'chrisGH',
        addEngineer: false
      }
    ],
    interns: [
      {
        name: 'Sam',
        email: 'sam@email.com',
        school: 'some school',
        addIntern: true
      },
      {
        name: 'sam the man',
        email: 'samtm@email.com',
        school: 'a different school',
        addIntern: false
      }
    ]
  }

getTeamData()
.then(createEmployeeObjs)
.then(generateHtml)
.then(writeFile)
.then(resolution => {
    console.log(resolution)
})
