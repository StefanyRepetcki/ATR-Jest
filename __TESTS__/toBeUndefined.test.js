// https://jestjs.io/pt-BR/docs/expect#tobeundefined
// https://jestjs.io/pt-BR/docs/expect#tobedefined

const Product = require('../modulo-2/aula2/Product');

const newProduct = new Product();
newProduct.description = "Biscoito";

describe("Test on product information", () => {
    test("should return that the stock property is undefined", () => {
        expect(newProduct.stock).toBeUndefined();
    })
    test("should return that the description property is defined", () => {
        expect(newProduct.description).toBeDefined();
    })
})
