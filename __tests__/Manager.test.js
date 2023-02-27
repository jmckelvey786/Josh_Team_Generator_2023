const Manager = require('../lib/Manager');

describe ("Manager", () => {
    describe("name", () => {
        it('return the name of Manager', () => {
            const manName = "Spongebob";
            const manObj = new Manager(manName);
            expect(manObj.getName()).toEqual(manName);
        })
    })
    describe("id", () => {
        it('return the ID of Manager', () => {
            const manId = "007";
            const manObj = new Manager('', manId);
            expect(manObj.getId()).toEqual(manId);
        })
    })
    describe("email", () => {
        it('return the email of Manager', () => {
            const manEmail = "spongebob@spy.com";
            const manObj = new Manager('', '', manEmail);
            expect(manObj.getEmail()).toEqual(manEmail);
        })
    })
    describe("officeNumber", () => {
        it('return the office Number of Manager', () => {
            const manOfficeNum = "Pineapple Under the Sea";
            const manObj = new Manager('', '', '', manOfficeNum);
            expect(manObj.getOfficeNumber()).toEqual(manOfficeNum);
        })
    })
    describe("role", () => {
        it('return the role of Manager', () => {
            const manObj = new Manager();
            expect(manObj.getRole()).toEqual("Manager");
        })
    })
})