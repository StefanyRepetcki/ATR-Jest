// https://jestjs.io/pt-BR/docs/expect#toequalvalue

const Person = require('../modulo-1/aula2/index.js');

const stefany = new Person(
    "Stefany Repetcki",
    "stefany@hotmail.com",
    new Date(1999, 8, 23)
);

const objTest = new Person(
    "Stefany Repetcki",
    "stefany@hotmail.com",
    new Date(1999, 8, 23)
);

test("should check if the object stefany equal the properties of object objTest", () => {
    expect(stefany).toEqual(objTest);
    expect(stefany).toMatchSnapshot();
});