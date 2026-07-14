const playerTurn = document.getElementById("playerTurn");
const gameboard = document.getElementById("gameboard");
const statusGame = document.getElementById("statusGame");
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function(){
    restartGame();
});

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

createBoard();
playersTurn();
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

        cell.classList.add("cell", "w-70", "h-70", "flex", "justify-center", "items-center", "text-9xl", "font-bold", "border-2", "border-black", "cursor-pointer", "hover:bg-mauve-200");

        cell.addEventListener("click", function () {
            makeMove(cell.dataset.index);
        });

        gameboard.appendChild(cell);
    }
}

function makeMove(move) {

    if (gameOver) return;
    if (board[move]) return;
    board[move] = currentPlayer;
    
    console.log(board);
    refreshUI();
    if (checkWinning()){
        winGame();
        return;
    }
    if (checkDraw()){
        drawGame();
        return;
    }
    changePlayer();
    playersTurn();
}

function checkDraw(){
    return board.every(function(position){
        return position !== "";
    });
}

function checkWinning() {
   return winningCombinations.some(function (combination) {
        const position0 = board[combination[0]];
        const position1 = board[combination[1]];
        const position2 = board[combination[2]];

        return position0 === currentPlayer &&
            position1 === currentPlayer &&
            position2 === currentPlayer
    });
}

function changePlayer() {
    if (currentPlayer === "X") return currentPlayer = "O";
    if (currentPlayer === "O") return currentPlayer = "X";
}

function refreshUI() {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell, i) => {
        if (board[i] === "X") cell.textContent = "❌";
        if (board[i] === "O") cell.textContent = "⭕";
        if (board[i] === "") cell.textContent = "";
    });
}

function winGame(){
    statusGame.textContent = "El ganador es el jugador " + currentPlayer;
    gameOver = true;
    resetBtn.classList.remove("hidden");
    return;
}

function drawGame(){
    statusGame.textContent = "El juego es un empate";
    gameOver = true;
    return;
}

function playersTurn(){
    return playerTurn.textContent = "Turno del jugador " + currentPlayer;
}

function restartGame(){
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    resetBtn.classList.add("hidden");
statusGame.textContent = "";

    refreshUI();
}




