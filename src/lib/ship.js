export default class Ship {
    /** @type {number} */
    #length;

    /** @type {number} */
    #hits;

    /**
     * @constructor
     * @param {number} length
     */
    constructor(length) {
        this.#length = length;
        this.#hits = 0;
    }

    hit() {
        this.#hits += 1;
    }

    /** @returns {number} */
    get length() {
        return this.#length;
    }

    /** @returns {number} */
    get hits() {
        return this.#hits;
    }
}
