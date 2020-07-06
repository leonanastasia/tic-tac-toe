const player1 = "cross";
const player2 = "zero";
let currentPlayer = player1
const playerTurnTitle = document.querySelector(".player-turn")
const cells = document.querySelectorAll(".game-cell");
let cellsValues = [0,0,0,0,0,0,0,0,0];
const button = document.querySelector("button");

const makeMove = function(e){
    const currentCellIndex = e.target.classList[1].split('').reverse()[0] - 1;
    console.log(currentCellIndex);
    cells[currentCellIndex].classList.toggle(currentPlayer);
    cellsValues[currentCellIndex]=currentPlayer;
    if(checkWin()){
        let winner = currentPlayer === player1 ? 'Player1':'Player2';
        playerTurnTitle.innerHTML = winner+"WIN!"
    }
    else{changePlayer()}
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

const checkWin = function(){
    if(cellsValues[0] === currentPlayer && cellsValues[1] === currentPlayer && cellsValues[2] === currentPlayer){
        return true
    }
    if(cellsValues[3] === currentPlayer && cellsValues[4] === currentPlayer && cellsValues[5] === currentPlayer){
        return true
    }
    if(cellsValues[6] === currentPlayer && cellsValues[7] === currentPlayer && cellsValues[8] === currentPlayer){
        return true
    }
    if(cellsValues[0] === currentPlayer && cellsValues[3] === currentPlayer && cellsValues[6] === currentPlayer){
        return true
    }
    if(cellsValues[1] === currentPlayer && cellsValues[4] === currentPlayer && cellsValues[7] === currentPlayer){
        return true
    }
    if(cellsValues[2] === currentPlayer && cellsValues[5] === currentPlayer && cellsValues[8] === currentPlayer){
        return true
    }
    if(cellsValues[0] === currentPlayer && cellsValues[4] === currentPlayer && cellsValues[8] === currentPlayer){
        return true
    }
    if(cellsValues[6] === currentPlayer && cellsValues[4] === currentPlayer && cellsValues[2] === currentPlayer){
        return true
    }else return false
}
const restart = function() {
    for(var i = 0; i < cells.length; i++){
        cells[i].classList.remove("cross");
        cells[i].classList.remove("zero");
    }
        currentPlayer = player1;
        playerTurnTitle.innerHTML="Player's 1 turn!"

}
button.addEventListener("click", restart)