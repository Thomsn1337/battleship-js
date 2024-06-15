import "./style.css";
import Player from "./lib/player";
import {
    attackRandom,
    createGrid,
    placeRandom,
} from "./lib/gameUtils";

const buttonContainer = document.querySelector(".start-buttons");
const restartContainer = document.querySelector(".restart-button");

const randomButton = document.querySelector("#random-place");
const startButton = document.querySelector("#start-game");
const restartButton = document.querySelector("#restart");

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

randomButton.addEventListener("click", placeShips);
startButton.addEventListener("click", () => {
    npcGrid.classList.add("started");
    buttonContainer.classList.add("hidden");
    restartContainer.classList.remove("hidden");

    startGame();
});

restartButton.addEventListener("click", () => {
    npcGrid.classList.remove("started");
    buttonContainer.classList.remove("hidden");
    restartContainer.classList.add("hidden");

    placeShips();
});
