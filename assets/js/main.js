const gameboard = document.getElementById("gameboard");

const player = ["X", "O"];
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

createBoard();
refreshUI();

function createBoard() {
    const countCell = document.querySelectorAll(".cell");

    if (countCell.length >= board.length) {
        console.log("Ya has creado 9 casillas");
        return;
    }

    for (let i = 0; i < board.length; i++) {

        const cell = document.createElement("div");
        cell.dataset.index = i;

        cell.classList.add("cell", "w-70", "h-70","flex","justify-center","items-center","text-9xl","font-bold", "border-2", "border-black", "cursor-pointer", "hover:bg-mauve-200");

        cell.addEventListener("click", function () {
            makeMove(cell.dataset.index);
        });

        gameboard.appendChild(cell);
    }
}

function makeMove(move) {
    console.log(move);

    if (gameOver) return;
    if (!board[move]) board[move] = currentPlayer;
    checkCell();
    refreshUI();







}

function checkCell() {

    /* Funcion para comprobar si hay ganador y si no comprobaremos las casillas y si estan todas daremos el empate */


}

function refreshUI() {
    const cells = document.querySelectorAll(".cell");
    console.log(cells);

    cells.forEach((cell, i) => {
        if (board[i] === "X")  cell.textContent = "❌"
        if (board[i] === "O")  cell.textContent = "⭕"
        if (board[i] === "")  cell.textContent = ""
    });
}







/*
makeMove()


comprobamos ganador
checkWinner()


*/

