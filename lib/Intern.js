const Employee = require('./Employee')

class Intern extends Employee {
    #school = '';
    constructor({name, email, school}) {
        super({name, email});
        this.#school = school
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.#school
    }
}

module.exports = Intern