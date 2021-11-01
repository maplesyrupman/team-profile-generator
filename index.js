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

function createTeamArray(teamData) {
    const teamArray = [];

    teamArray.push(new Manager())
}

getTeamData()
.then(teamData => {

})



