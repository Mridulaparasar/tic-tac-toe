const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
let currentPlayer = "X";
 statusText.innerText = "Player X Turn";
 let gameOver = false;


cells.forEach(cell => {
  cell.addEventListener("click",() => {
    if (cell.innerText===""&& !gameOver){
      cell.innerText = currentPlayer;
        checkWinner();
        if (!gameOver){
      currentPlayer = currentPlayer==="X" ? "O" : "X";
    statusText.innerText = "Player " + currentPlayer + " Turn"  }  } 
  })
  
})


const winPatterns = [
  [0,1,2],[3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],   
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
 function checkWinner(){
  for(let pattern of winPatterns){
    let a = cells[pattern[0]].innerText;
    let b = cells[pattern[1]].innerText;
    let c = cells[pattern[2]].innerText;

if (a && a === b && b === c){
      statusText.innerText = a + " Wins 🎉";
            gameOver = true; 



}
  }
 }
const resetbtn = document.getElementById("reset");
  cells.forEach(cell => {
     resetbtn .addEventListener("click",()=>{    if(cell.innerText = ""){
      
     };
    cell.style.pointerEvents = "auto";
})
  });
 document.getElementById("reset").addEventListener("click", () => {
  cells.forEach(cell => {
    cell.innerText = "";
    cell.style.pointerEvents = "auto";
  });

  currentPlayer = "X";
              gameOver = false; 

  statusText.innerText = "Player X Turn";
});

