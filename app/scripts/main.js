import * as grid from './grid.js';

grid.fill('stone');
grid.createWalls();
grid.fillArea(1, 10, 15, 20, 'grass');


const player = {
  x: -1,
  y: -1,
};

for (let i = 0; i < 10; i++) {
  do {
    player.x = Math.floor(Math.random() * grid.gridWidth);
    player.y = Math.floor(Math.random() * grid.gridHeight);
  } while (grid.getCell(player.x, player.y) === 'stone'); 
  
  grid.setCell(player.x, player.y, 'player')
}

