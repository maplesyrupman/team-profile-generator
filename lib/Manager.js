const Employee = require('./Employee')

class Manager extends Employee {
    #officeNumber = '';
    constructor({name, email, officeNumber}) {
        super({name, email});
        this.#officeNumber = officeNumber;
    }

    getRole() {
        return 'Manger'
    }

    getOfficeNum() {
        return this.#officeNumber
    }

}

module.exports = Manager