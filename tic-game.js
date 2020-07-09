var tSize = 3,
  cellIdInit = 0,
  turn = "O",
  round = 1;
const tictactoe = document.querySelectorAll(".cell");
const tictactoeContainer = document.querySelector("#tictactoe");
const board = document.createElement("table");
const WINNING_COMB = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*
 * Initializes the Tic Tac Toe board and starts the game.
 */
function init() {
  //board.style.textAlign = "center";   -- for later
  for (var i = 0; i < tSize; i++) {
    const boardrow = document.createElement("tr");
    for (var j = 0; j < tSize; j++) {
      const cell = document.createElement("td");
      cell.classList.add("cell");
      cell.style.background = "black";
      cell.style.width = "50px";
      cell.style.height = "50px";
      cell.style.color = "white";
      cell.setAttribute("id", cellIdInit);
      cell.setAttribute("class", "cell"); // initiate cell with ID number
      // cell.addEventListener("click", function (event) {
      //   console.log(event.target.id);
      // }); // assign function later
      boardrow.appendChild(cell);
      cell.addEventListener("click", handleClick, { once: true });
      cellIdInit++;
    }
    board.appendChild(boardrow);
  }
  tictactoeContainer.appendChild(board);
}
function gitStatus() {
  WINNING_COMB.forEach((checkWinningCondition) => {
    const tictactoeCells = document.querySelectorAll(".cell");
    let cell1 = checkWinningCondition[0];
    let cell2 = checkWinningCondition[1];
    let cell3 = checkWinningCondition[2];

    if (
      tictactoeCells[cell1].textContent === "X" &&
      tictactoeCells[cell2].textContent === "X" &&
      tictactoeCells[cell3].textContent === "X"
    ) {
      alert("X` Wins");
      round = 1;
    } else if (
      tictactoeCells[cell1].textContent === "O" &&
      tictactoeCells[cell2].textContent === "O" &&
      tictactoeCells[cell3].textContent === "O"
    ) {
      alert("O` Wins");
      round = 1;
    } else if (round === 10) {
      alert("Draw");
      round = 1;
    }
  });
}
function handleClick(e) {
  const cell = e.target;
  round++;
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }

  placeMark(cell, turn);
  gitStatus();
}
function placeMark(cell, currenClass) {
  // cell.classList.add(currenClass)
  cell.textContent = currenClass;
}

/*
 * New game
 */
function startNewGame() {
  document
    .getElementsByClassName("cell")
    .addEventListener("click", displayDate);
}

/*
 * Check if a win or not
 */
function win(clicked) {}
/*
 * Sets clicked square and also updates the turn.
 */
function set() {}
init();
