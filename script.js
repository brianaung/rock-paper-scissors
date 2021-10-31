const MAX_ROUND = 5;

let shapeArr = [
  'rock',
  'paper',
  'scissors'
]

/* return the shape that comp is going to play */
function comPlay() {
  let randomNum = Math.floor(Math.random() * shapeArr.length);

  return shapeArr[randomNum];
}

/* play a game of rock, paper, scissors */
function playRound(pSelect, cSelect) {
  let res = '';
  pSelect = pSelect.toLowerCase();
  cSelect = cSelect.toLowerCase();

  /* compare the shapes played by player and computer and 
   * decide the winner */
  if (pSelect === cSelect) {
    res = 'Draw!';
  } else if (pSelect === 'rock' && cSelect === 'paper' ||
            pSelect === 'paper' && cSelect === 'scissors' ||
            pSelect === 'scissors' && cSelect === 'rock') {
    res = `You lost! You played ${pSelect} and the computer played ${cSelect}.`;
  } else {
    res = `You won! You played ${pSelect} and the computer played ${cSelect}.`;
  }
  return res;
}

/* get player input, randomise comp input, and call play function */
function game() {
  for (let round = 0; round < MAX_ROUND; round++) {
    const pSelect = prompt('Choose what you want to play (rock, paper, scissors): ');
    const cSelect = comPlay();
    console.log(`Round ${round+1}: ${playRound(pSelect, cSelect)}`);
  }
}

game();
