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

    get board() {
        return this.#board;
    }
}
