import Ship from "../lib/ship";

describe("Test ship class", () => {
    test("Ship is created with correct length", () => {
        const ship1 = new Ship(5);
        const ship2 = new Ship(2);

        expect(ship1.length).toBe(5);
        expect(ship2.length).toBe(2);
    });

    test("Ship hits increase when calling hit()", () => {
        const ship = new Ship(5);
        expect(ship.hits).toBe(0);

        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(2);
    });

    test("Check if ship is sunk", () => {
        const ship = new Ship(3);
        expect(ship.isSunk()).toBe(false)

        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
});
