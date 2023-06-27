// https://jestjs.io/pt-BR/docs/expect#tobeinstanceofclass

const { Client, Employee } = require('../modulo-2/aula1/person');
const PersonFactory = require('../modulo-2/aula1/person_factory');

const factory = new PersonFactory();

describe('Factory of Persons', () => {
    test("passed a string with the client value, it should return a new client object", () => {
        expect(factory.getPerson('client')).toBeInstanceOf(Client);
    })
    test("passed a string with the employee value, it should return a new employee object", () => {
        expect(factory.getPerson("employee")).toBeInstanceOf(Employee);
    })
});
