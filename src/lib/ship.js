export default class Ship {
    /** @type {number} */
    #length;

    /**
     * @constructor
     * @param {number} length
     */
    constructor(length) {
        this.#length = length;
    }

    get length() {
        return this.#length;
    }
}
