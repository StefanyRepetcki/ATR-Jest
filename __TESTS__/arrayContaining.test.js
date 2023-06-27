// https://jestjs.io/pt-BR/docs/expect#expectarraycontainingarray

const users = require("../modulo-3-4/aula2/users");
const usersAnotherArray = ["José", "Maria"];

describe("Checking items of array", () => {
    test("should check if the array contains all the items in another array", () => {
        expect(users).toEqual(expect.arrayContaining(usersAnotherArray));
    });
});