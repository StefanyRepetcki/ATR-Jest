// https://jestjs.io/pt-BR/docs/expect#tobeclosetonumber-numdigits

const average = require("../modulo-3-4/aula1/grade");

describe("Checking student grades", () => {
    test("should check if the average of the grades 4,3 and 6 is 4.33" , () => {
        expect(average(4,3,6)).toBeCloseTo(4.33)
    })
    test("should check if the average of the grades 5, 5 and 6 is 5.3" , () => {
        expect(average(5,5,6)).toBeCloseTo(5.33, 1)
    })
})