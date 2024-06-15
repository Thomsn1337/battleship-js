import Player from "./player";

function getRandomOrientation() {
    const index = Math.floor(Math.random() * 2);

    return index === 0 ? "h" : "v";
}

/**
 * @param {Player} player
 */
export function placeRandom(player) {
    for (let i = 2; i < 7; i++) {
        let x = Math.floor(Math.random() * 10) + 1;
        let y = Math.floor(Math.random() * 10) + 1;
        let orientation = getRandomOrientation();

        let placementResult = player.gameboard.placeShip(
            [x, y],
            i,
            orientation,
        );

        while (!placementResult) {
            x = Math.floor(Math.random() * 10) + 1;
            y = Math.floor(Math.random() * 10) + 1;
            orientation = getRandomOrientation();

            placementResult = player.gameboard.placeShip(
                [x, y],
                i,
                orientation,
            );
        }
    }
}

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
