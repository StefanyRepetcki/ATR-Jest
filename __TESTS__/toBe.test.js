// https://jestjs.io/pt-BR/docs/expect#tobevalue

const areaOfSquare = require('../modulo-1/aula1/index.js');

describe("Calculate area of square", () => {
    test("passed the valeu 3, it should return 9 ", () => {
        expect(areaOfSquare(3)).toBe(9);
    })
    test("passed the valeu 17, it should return 289", () => {
        expect(areaOfSquare(17)).toBe(289);
    });
    test("passed the valeu 4, it should return 16", () => {
        expect(areaOfSquare(4)).toBe(16);
    });
})
