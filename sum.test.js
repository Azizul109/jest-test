const sum = require('./sum');


// Normal test case for JEST
// it("it should add 1 + 2 to give result 3", () => {
//     const result = sum(1, 2);
//     expect(result).toBe(3);
// })

describe("example tests", () => {
    it("it should add 1 + 2 to give result 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
})


describe("truthy or falsey", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
    })
})

describe("numbers", () => {
    it("two plus two should be 4", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(2);
        expect(value).toBeGreaterThanOrEqual(4);
    })
})

describe("equal", () => {
    it('it is greater than 4', function () {
        const value = 2 + 6;
        expect(value).toBeGreaterThan(4);
        expect(value).toBeLessThan(12);
        expect(value).toBeLessThanOrEqual(8);
    });

    it('adding floats', () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.2999999);
    })
})

describe("string chaeck", () => {
    it('there is no I in team', function () {
        expect("team").not.toMatch(/I/)
    });
})