var container = document.getElementById("grid");
const r = document.querySelector(":root");
var hue = 50;

for (i = 0; i <= 50; i++) {
  for (j = 0; j <= 50; j++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    container.appendChild(cell);
  }
}

function changeColor() {
  this.style.backgroundColor = `hsl(${hue},100%,50%)`;
  hue++;
}

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("mouseover", changeColor));
