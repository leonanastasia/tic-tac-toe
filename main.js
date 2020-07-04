const player1 = "x";
const player2 = "o";

const cells = document.querySelectorAll(".game-cell");
const cellsValues = [0,0,0,0,0,0,0,0,0];


console.log('cells', cells);

const toggleCell = function(e){
    const currentCellIndex = e.target.classList[1].split('').reverse()[0] - 1;
    console.log(currentCellIndex);
    cells[currentCellIndex].classList.toggle("cross");
    cellsValues[currentCellIndex]='cross';

    console.log('cellsValues', cellsValues);
}

for(var i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", toggleCell)
}
