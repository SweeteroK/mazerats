const gridHeight = 30;
const gridWidth = 20;

let cells = '';

for (let y = 0; y < gridHeight; y++) {
  for (let x = 0; x < gridWidth; x++) {
    const id = 'x' + x + 'y' + y;
    cells = cells + `<div id="${id}"></div>\n`;
  }
}

const grid = document.getElementById('grid');
grid.style.gridTemplateColumns = `repeat(${gridWidth}, 30px)`;
grid.style.gridTemplateRows = `repeat(${gridHeight}, 30px)`;

grid.innerHTML = cells;

function setCell(x, y, material) {
  const id = 'x' + x + 'y' + y;
  const cellElement = document.getElementById(id);
  cellElement.className = material;
}



setCell(0, 12, 'grass');
setCell(10, 15, 'dirt');
