// https://jestjs.io/pt-BR/docs/expect#tobelessthannumber--bigint

const average = require('../modulo-3-4/aula1/grade');

describe("Checking student grades", () => {
    test("should check if the average of the grades 4, 3 and 8 is less than 6", () => {
        expect(average(4, 3, 8)).toBeLessThan(6)
    })
    test("should check if the avarage of the grades 6, 6 and 5 is less than or equal to 6", () => {
        expect(average(6, 6, 5)).toBeLessThanOrEqual(6)
    })
})
