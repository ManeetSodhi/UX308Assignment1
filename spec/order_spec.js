import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of an order", function () {
    beforeEach(function () {
        clearInput();
    });
    it("test hello", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Maneet Hortons.");
    });
    it("test yes", function () {
        handleInput("hello");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Great!");
    });
    it("test no", function () {
        handleInput("hello");
        handleInput("yes");
        const aResults = handleInput("iced");
        expect(aResults[0]).toBe("What size would you like? (S/M/L)");
    });
});

