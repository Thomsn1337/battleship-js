import GameBoard from "../lib/gameboard";

describe("Ship placement on board", () => {
    const board = new GameBoard();

    test("Valid horizontal placement", () => {
        expect(board.placeShip([1, 2], 5, "h")).toBe(true);

        expect(board.board[1][2]).toBeTruthy();
        expect(board.board[1][3]).toBeTruthy();
        expect(board.board[1][4]).toBeTruthy();
        expect(board.board[1][5]).toBeTruthy();
        expect(board.board[1][6]).toBeTruthy();
    });

    test("Valid vertical placement", () => {
        expect(board.placeShip([3, 5], 4, "v")).toBe(true);

        expect(board.board[3][5]).toBeTruthy();
        expect(board.board[4][5]).toBeTruthy();
        expect(board.board[5][5]).toBeTruthy();
        expect(board.board[6][5]).toBeTruthy();
    });

    test("Out of bounds placement", () => {
        expect(board.placeShip([-1, 2], 5, "v")).toBe(false);
        expect(board.placeShip([10, 2], 5, "v")).toBe(false);

        expect(board.placeShip([2, -1], 5, "h")).toBe(false);
        expect(board.placeShip([2, 10], 5, "h")).toBe(false);

        expect(board.placeShip([0, 6], 5, "h")).toBe(false);
        expect(board.placeShip([6, 0], 5, "v")).toBe(false);
    });

    test("Overlapping ships", () => {
        expect(board.placeShip([0, 3], 5, "v")).toBe(false);
        expect(board.placeShip([4, 4], 3, "h")).toBe(false);
    });
});

describe("Receive attacks", () => {
    const board = new GameBoard();
    board.placeShip([1, 2], 4, "v");

    test("Attack hits ship", () => {
        expect(board.receiveAttack([1, 2])).toBe(true);
        expect(board.receiveAttack([3, 2])).toBe(true);
    });

    test("Attack misses", () => {
        expect(board.receiveAttack([5, 5])).toBe(false);
        expect(board.receiveAttack([8, 3])).toBe(false);
    });

    test("Attacking an already attacked cell", () => {
        expect(board.receiveAttack([3, 2])).toBe(null);
        expect(board.receiveAttack([8, 3])).toBe(null);
    });

    test("Invalid attack coordinates", () => {
        expect(board.receiveAttack([-1, 2])).toBe(null);
        expect(board.receiveAttack([1, -2])).toBe(null);

        expect(board.receiveAttack([10, 2])).toBe(null);
        expect(board.receiveAttack([3, 10])).toBe(null);
    });
});
