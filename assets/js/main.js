const gameboard = document.getElementById("gameboard");

let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameOver = false;

createboard();

function createboard() {

    for (let i = 0; i < board.length; i++) {     
        
        const cell = document.createElement("div");
        cell.dataset.index = i;
        
        cell.classList.add("w-70","h-70","border-2","border-black");
        
        gameboard.appendChild(cell);
        
        
    }

  

}

function refreshUI() {

}





/*
handleClick()


comprobamos ganador
checkWinner()


*/

