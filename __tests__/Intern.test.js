const Intern = require('../lib/Intern');

describe ("Intern", () => {
    describe("name", () => {
        it('return the name of Intern', () => {
            const empName = "Spongebob";
            const empObj = new Intern(empName);
            expect(empObj.getName()).toEqual(empName);
        })
    })
    describe("id", () => {
        it('return the ID of Intern', () => {
            const empId = "007";
            const empObj = new Intern('', empId);
            expect(empObj.getId()).toEqual(empId);
        })
    })
    describe("email", () => {
        it('return the email of Intern', () => {
            const empEmail = "spongebob@spy.com";
            const empObj = new Intern('', '', empEmail);
            expect(empObj.getEmail()).toEqual(empEmail);
        })
    })
    describe("schook", () => {
        it('return the school of Intern', () => {
            const empSchool = "School of Hard Knocks";
            const empObj = new Intern('', '', '', empSchool);
            expect(empObj.getSchool()).toEqual(empSchool);
        })
    })
    describe("role", () => {
        it('return the role of Engineer', () => {
            const empObj = new Intern();
            expect(empObj.getRole()).toEqual("Intern");
        })
    })
})