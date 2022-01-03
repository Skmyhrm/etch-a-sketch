const container = document.querySelector(".container");
const height = window.innerHeight;
const width = window.innerWidth;

for (j = 0; j <= 16; j++) {
  const secContainer = document.createElement("div");
  secContainer.style.display = "inline";

  container.appendChild(secContainer);
  for (i = 0; i <= 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = `${i}`;
    newDiv.style.display = "inline";
    newDiv.style.flex = "1";
    // newDiv.style.border = "solid black";
    secContainer.appendChild(newDiv);
  }
}
