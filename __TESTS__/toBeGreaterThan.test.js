// https://jestjs.io/pt-BR/docs/expect#tobegreaterthannumber--bigint

const average = require("../modulo-3-4/aula1/grade");

describe("Checking student grades", () => {
    test("should check if the average of the grades 7,8 and 7 is greater than 6", () => {
        expect(average(7,8,7)).toBeGreaterThan(6);
    })
    test("should check if the evarage of the grades 6,6 and 6 is greater than or equal to 6", () => {
        expect(average(6,6,6)).toBeGreaterThanOrEqual(6);
    })
})
