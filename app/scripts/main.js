const gridHeight = 7;
const gridWidth = 12;

let cells = '';

for (let i = 0; i < gridWidth * gridHeight; i++) {
    cells = cells + '<div></div>\n';
}

const grid = document.getElementById('grid');
grid.style.gridTemplateColumns = `repeat(${gridWidth}, 30px)`;
grid.style.gridTemplateRows = `repeat(${gridHeight}, 30px)`;

grid.innerHTML = cells;
