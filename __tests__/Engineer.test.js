const Engineer = require('../lib/Engineer');

describe ("Engineer", () => {
    describe("name", () => {
        it('return the name of Engineer', () => {
            const empName = "Spongebob";
            const empObj = new Engineer(empName);
            expect(empObj.getName()).toEqual(empName);
        })
    })
    describe("id", () => {
        it('return the ID of Engineer', () => {
            const empId = "007";
            const empObj = new Engineer('', empId);
            expect(empObj.getId()).toEqual(empId);
        })
    })
    describe("email", () => {
        it('return the email of Engineer', () => {
            const empEmail = "spongebob@spy.com";
            const empObj = new Engineer('', '', empEmail);
            expect(empObj.getEmail()).toEqual(empEmail);
        })
    })
    describe("github", () => {
        it('return the github of Engineer', () => {
            const empGit = "spongebob007";
            const empObj = new Engineer('', '', '', empGit);
            expect(empObj.getGithub()).toEqual(empGit);
        })
    })
    describe("role", () => {
        it('return the role of Engineer', () => {
            const empObj = new Engineer();
            expect(empObj.getRole()).toEqual("Engineer");
        })
    })
})