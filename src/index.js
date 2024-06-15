import "./style.css";
import Player from "./lib/player";
import {
    createGrid,
    placeRandom,
} from "./lib/gameUtils";

const playerGrid = document.querySelector("#player-grid");
const npcGrid = document.querySelector("#npc-grid");

let humanPlayer;
let npcPlayer;

function placeShips() {
    humanPlayer = new Player("human");
    npcPlayer = new Player("computer");

    placeRandom(humanPlayer);
    placeRandom(npcPlayer);

    playerGrid.innerHTML = "";
    npcGrid.innerHTML = "";

    createGrid(playerGrid, humanPlayer);
    createGrid(npcGrid, npcPlayer);
}

function startGame() {
    const npcCells = document.querySelectorAll("#npc-grid .cell");
    npcCells.forEach((cell) => {
        cell.addEventListener("click", () => {
            const x = Number(cell.dataset.x);
            const y = Number(cell.dataset.y);

            const attackResult = npcPlayer.gameboard.receiveAttack([x, y]);

            if (attackResult === null) return;

            if (attackResult) {
                cell.classList.add("hit");
            } else {
                cell.classList.add("miss");
            }

            if (npcPlayer.gameboard.allShipsSunk()) {
                displayWinner("Player", winnerDialog);
            }
            
            attackRandom(humanPlayer);
            if (humanPlayer.gameboard.allShipsSunk()) {
                displayWinner("Computer", winnerDialog);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", placeShips);
