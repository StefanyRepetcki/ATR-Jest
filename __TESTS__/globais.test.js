// https://jestjs.io/pt-BR/docs/api#m%C3%A9todos

const average = require("../modulo-3-4/aula1/grade")

let gradeOne;
let gradeTwo;
let gradeThree;

// antes dos testes
beforeAll(() => {
    gradeOne = 4
    gradeTwo = 8
    gradeThree = 7
})

// após cada teste
afterEach(() => {
    gradeOne = 3
    gradeTwo = 5
    gradeThree = 4
});

// depois de todos os testes
afterAll(() => {
    gradeOne = null
    gradeTwo = null
    gradeThree = null
});

describe("Checking student grades", () => {
    test("should check if the average of the grades 4, 8 and 7 is greater than 7 is greater or equal than 6", () => {
        expect(average(gradeOne, gradeTwo, gradeThree)).toBeGreaterThanOrEqual(6);
    });
    test("should check if the average of the grades 3, 5 and 4 is less or equal than 6", () => {
        expect(average(gradeOne, gradeTwo, gradeThree)).toBeLessThanOrEqual(6);
    });
});
