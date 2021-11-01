const Employee = require('./Employee')

class Manager extends Employee {
    #officeNumber = '';
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
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