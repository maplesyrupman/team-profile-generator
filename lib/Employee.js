class Employee {
    #name = '';
    #email = '';
    static idCount = 0;
    static getNewId() {
        return this.idCount++
    }
    #id = Employee.getNewId()
    constructor ({name, email}) {
        this.#name = name;
        this.#email = email
    }

    getName() {
        return this.#name;
    }

    getId() {
        return this.#id
    }

    getEmail() {
        return this.#email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee