const Employee = require('../lib/Employee');

describe ("Employee", () => {
    describe("name", () => {
        it('return the name of Employee', () => {
            const empName = "Spongebob";
            const empObj = new Employee(empName);
            expect(empObj.getName()).toEqual(empName);
        })
    })
    describe("id", () => {
        it('return the ID of Employee', () => {
            const empId = "007";
            const empObj = new Employee('', empId);
            expect(empObj.getId()).toEqual(empId);
        })
    })
    describe("email", () => {
        it('return the email of Employee', () => {
            const empEmail = "spongebob@spy.com";
            const empObj = new Employee('', '', empEmail);
            expect(empObj.getEmail()).toEqual(empEmail);
        })
    })
    describe("role", () => {
        it('return the role of Employee', () => {
            const empObj = new Employee();
            expect(empObj.getRole()).toEqual("Employee");
        })
    })
})