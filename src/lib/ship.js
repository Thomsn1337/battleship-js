export default class Ship {
    /** @type {number} */
    #length;

    /**
     * @constructor
     * @param {number} length
     */
    constructor(length) {
        this.#length = length;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
    }

    get length() {
        return this.#length;
    }
}
