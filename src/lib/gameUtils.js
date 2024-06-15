import Player from "./player";

/**
 * @param {Element} container
 * @param {Player} player
 */
export function createGrid(container, player) {
    const { board } = player.gameboard;

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (player.type === "human" && board[i][j])
                cell.classList.add("ship");

            cell.dataset.x = i.toString();
            cell.dataset.y = j.toString();

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}
