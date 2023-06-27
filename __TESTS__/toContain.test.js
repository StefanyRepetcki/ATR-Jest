// https://jestjs.io/pt-BR/docs/expect#tocontainitem

const users = require("../modulo-3-4/aula2/users");

describe("Checking users exists", () => {
    test("should check if the array contains the user thomas ", () => {
        expect(users).toContain("Thomas");
    });
    test("should check if the array does not contain the user Stefany", () => {
        expect(users).not.toContain("Stefany");
    });
});
