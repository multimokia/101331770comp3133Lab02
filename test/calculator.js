import { assert } from "chai";
import { add, div, mul, sub } from "../app/calculator.js";

describe("Test addition", () => {
    it("add(5,2) expected result 7", () => {
        assert.equal(add(5, 2), 7);
    });

    it("add(5,2) expected result 8 (failure)", () => {
        assert.equal(add(5, 2), 8);
    });
});

describe("Test subtraction", () => {
    it("sub(5,2) expected result 3", () => {
        assert.equal(sub(5, 2), 3);
    });

    it("sub(5,2) (failure)", () => {
        assert.equal(sub(5, 2), 4);
    });
});

describe("Test multiplication", () => {
    it("mul(5,2) expected result 10", () => {
        assert.equal(mul(5, 2), 10);
    });

    it("mul(5,2) (failure)", () => {
        assert.equal(mul(5, 2), 11);
    });
});


describe("Test division", () => {
    it("div(10,2) expected result 5", () => {
        assert.equal(div(10, 2), 5);
    });

    it("div(10,2) (failure)", () => {
        assert.equal(add(5, 2), 6);
    });
});
