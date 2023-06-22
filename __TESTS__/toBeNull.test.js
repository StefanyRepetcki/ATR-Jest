const PersonFactory = require('../modulo-2/aula1/person_factory');

const factory = new PersonFactory()

describe("Factory of person", () => {
    test("not passing the parameter should return null", () => {
        expect(factory.getPerson()).toBeNull();
    });
    test("passed the invalid parameter admin should return null", () => {
        expect(factory.getPerson("admin")).toBeNull();
    });
})