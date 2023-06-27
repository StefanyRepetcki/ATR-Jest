// https://jestjs.io/pt-BR/docs/expect#tothrowerror

const division = require('../modulo-5');

describe("Checking exceptions", () => {
    test("should throw an exception", () => {
        expect(() => {
            division(4, 0)
        }).toThrow()
    });
    test("should not throw an exception", () => {
        expect(() => {
            division(4, 2)
        }).not.toThrow()
    });
});
