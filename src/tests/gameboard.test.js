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
