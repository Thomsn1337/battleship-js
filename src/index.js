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

document.addEventListener("DOMContentLoaded", placeShips);
