var container = document.getElementById("grid");
const button = document.querySelector("button");
var hue = 50;
var gridNum = 15;
var newGridNum;

for (i = 0; i <= gridNum; i++) {
  for (j = 0; j <= gridNum; j++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    container.appendChild(cell);
  }
}

function changeColor() {
  this.style.backgroundColor = `hsl(${hue},100%,50%)`;
  hue++;
}

function ReAssignStuff() {
  var cells = Array.from(document.querySelectorAll(".cell"));
  cells.forEach((cell) => cell.addEventListener("mouseover", changeColor));
}

function Reset() {
  console.log("hey");
  cells.forEach((cell) => cell.remove());
  newGridNum = prompt("How many squares per side would you like?");
  newGridNumInt = parseInt(newGridNum);
  cells = [];
  for (i = 0; i <= newGridNumInt - 1; i++) {
    for (j = 0; j <= newGridNumInt - 1; j++) {
      var newCell = document.createElement("div");
      newCell.className = "cell";
      container.style.gridTemplateColumns = `repeat(${newGridNum},auto)`;
      container.appendChild(newCell);
      cells.push(newCell);
    }
  }
  ReAssignStuff();
}

var cells = Array.from(document.querySelectorAll(".cell"));
cells.forEach((cell) => cell.addEventListener("mouseover", changeColor));
button.addEventListener("click", Reset);
