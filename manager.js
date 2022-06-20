const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, salary, manager) {
        super(name, title, salary, manager)
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
    calculateBonus(multiplier) {
        return (this._totalSubSalary(this.employees) + this.salary) * multiplier;
    }
    _totalSubSalary(employeeArr, sum = 0) {

        if(employeeArr.length == 0 ) {
            return 0;
        }
        if(employeeArr[0] instanceof Manager) {
            sum = employeeArr[0].salary + this._totalSubSalary(employeeArr[0].employees, sum);
            return sum;
        }
        sum = employeeArr[0].salary + this._totalSubSalary(employeeArr.slice(1),sum);
        return sum;
    }
}


module.exports = Manager;
