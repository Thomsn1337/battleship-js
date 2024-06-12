export default class GameBoard {
    /** @type {Ship[][]} */
    #board;

    /** @type {Ship[]} */
    #ships;

    /** @constructor */
    constructor() {
        this.#board = Array.from({ length: 10 }, () =>
            Array.from({ length: 10 }, () => null),
        );

        this.#ships = [];
    }

    /**
     * @param {number[]} coordinates
     * @param {number} length
     * @param {string} orientation
     * @returns {boolean}
     */
    placeShip(coordinates, length, orientation) {
        if (!this.#isValidPlacement(coordinates, length, orientation))
            return false;

        const [x, y] = coordinates;
        const ship = new Ship(length);
        this.#ships.push(ship);

        if (orientation === "h") {
            for (let i = 0; i < length; i++) {
                this.#board[x][y + i] = ship;
            }
        }

        if (orientation === "v") {
            for (let i = 0; i < length; i++) {
                this.#board[x + i][y] = ship;
            }
        }

        return true;
    }

    /**
     * @param {number[]} coordinates
     * @param {number} length
     * @param {string} orientation
     * @returns {boolean}
     */
    #isValidPlacement(coordinates, length, orientation) {
        const [x, y] = coordinates;

        // If starting coordinates are out of gameboard bounds
        if (x < 0 || x > 9 || y < 0 || y > 9) return false;

        if (orientation === "h") {
            // If ship would exceed horizontal bounds
            if (y + length - 1 > 9) return false;
        }

        if (orientation === "v") {
            if (x + length - 1 > 9) return false;
        }

        return true;
    }

    get board() {
        return this.#board;
    }
}
