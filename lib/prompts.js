const inquirer = require('inquirer')

async function promptManager() {
    const team = {};
    team.manager = await inquirer.prompt([
        {
            type: 'input',
            message: 'Manager name: ',
            name: 'name',
            validate: name => {
                if (name) return true;
                console.log('Please enter a name for the Manager')
                return false
            }
        },
        {
            type: 'input',
            message: 'Manager email: ',
            name: 'email', 
            validate: email => {
                if (email) return true;
                console.log('Please enter the managers email')
                return false;
            }
        },
        {
            type: 'input', 
            message: 'Manager office number: ',
            name: 'officeNum',
            validate: officeNum => {
                if(officeNum) return true
                console.log('Please enter the managers office number')
                return false;
            }
        }
    ])

    return team;
}

const promptEngineer = (team) => {
    if (!team.engineers) {
        team.engineers = [];
    }
    return inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'Engineer name: ',
            validate: name => {
                if (name) return true;
                console.log('Please enter the engineer\'s name');
                return false;
            }
        },
        {
            name: 'email', 
            type: 'input',
            message: 'Engineer email: ',
            validate: email => {
                if (email) return true;
                console.log('Please enter the Engineer\'s email')
                return false;
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'Engineer Github: ',
            validate: github => {
                if (github) return true;
                console.log('Please enter the Engineer\'s Github');
                return false
            }
        },
        {
            name: 'addEngineer',
            type: 'confirm', 
            message: 'Add another Engineer?'
        }
    ])
    .then(engineerData => {
        team.engineers.push(engineerData);
        if (engineerData.addEngineer) {
            return promptEngineer(team)
        } else {
            return team
        }
    })
}

const promptIntern = (team) => {
    if (!team.interns) {
        team.interns = [];
    }

    return inquirer.prompt([
        {
            name: 'name', 
            type: 'input',
            message: 'Intern name: ',
            validate: name => {
                if (name) return true;
                console.log('Please enter the Intern\'s name')
                return false
            }
        },
        {
            name: 'email',
            type: 'input', 
            message: 'Intern email: ',
            validate: email => {
                if (email) return true;
                console.log('Please enter the Intern\'s email')
                return false
            }
        },
        {
            name: 'school',
            type: 'input', 
            message: 'Intern school: ',
            validate: school => {
                if (school) return true;
                console.log('Please enter the Intern\'s school')
                return false
            }
        },
        {
            name: 'addIntern', 
            type: 'confirm',
            message: 'Add another Intern?'
        }
    ])
    .then(internData => {
        team.interns.push(internData);
        if (internData.addIntern) {
            return promptIntern(team)
        } else {
            return team
        }
    })
}

module.exports = {
    promptManager,
    promptEngineer,
    promptIntern
}