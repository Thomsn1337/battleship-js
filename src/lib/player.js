import GameBoard from "./gameboard";

export default class Player {
    /** @type {GameBoard} */
    #board;

    /** @type {string} */
    #type;

    /**
     * @constructor
     * @param {string} type
     */
    constructor(type) {
        this.#board = new GameBoard();
        this.#type = type;
    }

    /** @returns {GameBoard} */
    get board() {
        return this.#board;
    }

    /** @returns {string} */
    get type() {
        return this.#type;
    }
}
