const Employee = require('./Employee')

class Engineer extends Employee {
    #github = ''
    constructor({name, email, github}) {
        super({name, email})
        this.#github = github
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return this.#github
    }
}


module.exports = Engineer