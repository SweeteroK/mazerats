export const gridHeight = 29;
export const gridWidth = 19;

let cells = '';

for (let y = 0; y < gridHeight; y++) {
  for (let x = 0; x < gridWidth; x++) {
    const id = 'x' + x + 'y' + y;
    cells = cells + `<div id="${id}"></div>\n`;
  }
}

const grid = document.getElementById('grid');
if (grid) {
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 30px)`;
  grid.style.gridTemplateRows = `repeat(${gridHeight}, 30px)`;
  grid.innerHTML = cells;
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {string} material 
 */
export function setCell(x, y, material) {
  const id = 'x' + x + 'y' + y;
  const cellElement = document.getElementById(id);
  if (cellElement) {
    cellElement.className = material;
  }
}

export function createWalls() {
  for (let y = 1; y < gridHeight - 1; y = y + 2) {
    for (let x = 1; x < gridWidth - 1; x++) {
      setCell(x, y, 'dirt');
    }
  }
  for (let x = 1; x < gridWidth - 1; x = x + 2) {
    for (let y = 1; y < gridHeight - 1; y++) {
      setCell(x, y, 'dirt');
    }
  }
}

export function getCell(x, y) {
  const id = 'x' + x + 'y' + y;
  const cellElement = document.getElementById(id);
  return cellElement?.className;
}


export function fillArea(x1, y1, x2, y2, material) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      setCell(x, y, material);
    }
  }
}

export function fill(material) {
  fillArea(0, 0, gridWidth - 1, gridHeight - 1, material);
}
