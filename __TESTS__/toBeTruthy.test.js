// https://jestjs.io/pt-BR/docs/expect#tobetruthy

const average = require("../modulo-2/aula3/grade");

describe("Checking student grades", () => {
    test("should return true for grades 6, 7 and 5", () => {
        expect(average(6, 7, 5)).toBeTruthy();
    })
    test("should return false for grades 0, 2 and 3", () => {
        expect(average(0, 2, 3)).toBeFalsy();
    })
})