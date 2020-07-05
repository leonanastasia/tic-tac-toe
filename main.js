const player1 = "cross";
const player2 = "zero";
let currentPlayer = player1
const playerTurnTitle = document.querySelector(".player-turn")
const cells = document.querySelectorAll(".game-cell");
const cellsValues = [0,0,0,0,0,0,0,0,0];

console.log('cells', cells);

const makeMove = function(e){
    const currentCellIndex = e.target.classList[1].split('').reverse()[0] - 1;
    console.log(currentCellIndex);
    cells[currentCellIndex].classList.toggle(currentPlayer);
    cellsValues[currentCellIndex]=currentPlayer;
   changePlayer()
    console.log('cellsValues', cellsValues);
}
const changePlayer = function(){
    if(currentPlayer === player1){
        currentPlayer = player2;
        playerTurnTitle.innerHTML="Player's 2 turn!"
    }
    else{currentPlayer = player1; playerTurnTitle.innerHTML="Player's 1 turn!"}
}

for(var i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", makeMove)
}

