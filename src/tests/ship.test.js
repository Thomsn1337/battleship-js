import Ship from "../lib/ship";

describe("Test ship class", () => {
    test("Ship is created with correct length", () => {
        const ship1 = new Ship(5);
        const ship2 = new Ship(2);

        expect(ship1.length).toBe(5);
        expect(ship2.length).toBe(2);
    });
});
