// https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber

const users = require("../modulo-3-4/aula2/users");

describe("Checking length of items of array", () => {
    test("should check if array has 3 items", () => {
        expect(users).toHaveLength(3);
    })
    test("should check if index item 2 is 4 characters", () => {
        expect(users[2]).toHaveLength(4);
    })
});
