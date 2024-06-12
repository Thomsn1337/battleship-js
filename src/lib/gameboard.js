export default class GameBoard {
    /** @type {Ship[][]} */
    #board;


    /** @constructor */
    constructor() {
        this.#board = Array.from({ length: 10 }, () =>
            Array.from({ length: 10 }, () => null),
        );
    }

    get board() {
        return this.#board;
    }
}
