import * as grid from './grid.js';

grid.fill('stone');
grid.createWalls();


const player = {
  x: -1,
  y: -1,
};

for (let i = 0; i < 1; i++) {
  do {
    player.x = Math.floor(Math.random() * grid.gridWidth);
    player.y = Math.floor(Math.random() * grid.gridHeight);
  } while (grid.getCell(player.x, player.y) === 'stone'); 
  
  grid.setCell(player.x, player.y, 'player')
}

function keyHandler(evt) {
  
  let newPlayerX = player.x;
  let newPlayerY = player.y;

  if (evt.key === 'ArrowUp') {
    newPlayerY--;
  }
  if (evt.key === 'ArrowDown') {
    newPlayerY++;
  }
  if (evt.key === 'ArrowLeft') {
    newPlayerX--;
  }
  if (evt.key === 'ArrowRight') {
    newPlayerX++;
  }

  let nextCellMaterial = grid.getCell(newPlayerX, newPlayerY)
  console.log(nextCellMaterial);

  if (nextCellMaterial === 'stone') {
    return;
  }
  grid.setCell(player.x, player.y, 'dirt');
  grid.setCell(newPlayerX, newPlayerY, 'player');
  player.x = newPlayerX;
  player.y = newPlayerY;
}

window.addEventListener('keydown', keyHandler)