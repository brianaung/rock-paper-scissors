const MAX_SCORE = 5;

var playerScore;
var comScore;

/* return the shape that COM is going to play */
function comSelection() {
  let shapes = [ 'rock', 'paper', 'scissors' ];
  let randomNum = Math.floor(Math.random() * shapes.length);

  return shapes[randomNum];
}


/* find the winner between player and com selection */
function getResult(pSelect, cSelect) {
  let res = '';

  /* find winner using rps game logic */
  if (pSelect === cSelect) {
    res = 'draw';
  } else if (pSelect === 'rock' && cSelect === 'paper' ||
            pSelect === 'paper' && cSelect === 'scissors' ||
            pSelect === 'scissors' && cSelect === 'rock') {
    res = 'computer won';
    comScore++;
  } else {
    res = 'player won';
    playerScore++;
  }
  return res;
}


/* remove the button click animation */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}


/* play a round of rps using player selection and randomised COM selection */
function playRound(e) {

  const pSelect = e.target.className;
  const cSelect = comSelection();

  const pSelectImg = document.querySelector('.player-img');
  const cSelectImg = document.querySelector('.computer-img');

  const pScore = document.querySelector('.p-score');
  const cScore = document.querySelector('.c-score');


  // load img of items played by player and computer
  pSelectImg.style.backgroundImage = `url(img/${pSelect}.png)`;
  cSelectImg.style.backgroundImage = `url(img/${cSelect}.png)`;

  let res = getResult(pSelect, cSelect);

  // coloring the backgorund of selections (red for lose, green for win)
  if (res === 'player won') {
    pSelectImg.style.backgroundColor = '#a3be8c';
    cSelectImg.style.backgroundColor = '#bf616a';
  } else if (res === 'computer won') {
    pSelectImg.style.backgroundColor = '#bf616a';
    cSelectImg.style.backgroundColor = '#a3be8c';
  } else if (res === 'draw') {
    pSelectImg.style.backgroundColor = '#88c0d0';
    cSelectImg.style.backgroundColor = '#88c0d0';
  }

  // add play animation to the selection buttons
  e.target.classList.add('playing');

  // display the current scores
  pScore.textContent = playerScore;
  cScore.textContent = comScore;

  const gameOver = document.querySelector('#game-over h3');
  if (playerScore === MAX_SCORE) {
    gameOver.textContent = "YOU WON!!!"; 
    endGame(e);
  } else if (comScore === MAX_SCORE) {
    gameOver.textContent = "BETTER LUCK NEXT TIME =(";
    endGame(e);
  }
}


// TODO: clean up redundant variables from playRound func
/* add event listeners when the game starts */
function startGame() {
  
  // remove events
  const rps = Array.from(document.querySelectorAll('.rps button'));
  rps.forEach(s => s.addEventListener('click', playRound));
  rps.forEach(s => s.addEventListener('transitionend', removeTransition));

  // reset the scores
  playerScore = 0;
  comScore = 0;
  const pScore = document.querySelector('.p-score');
  const cScore = document.querySelector('.c-score');
  pScore.textContent = playerScore;
  cScore.textContent = comScore;

  // remove the game over message
  const gameOver = document.querySelector('#game-over h3');
  gameOver.textContent = '';
}

/* remove event listeners when the game ends */
function endGame(e) {
  const rps = Array.from(document.querySelectorAll('.rps button')); 
  rps.forEach(s => s.removeEventListener('click', playRound));
  rps.forEach(s => s.removeEventListener('transitionend', removeTransition));
  e.target.classList.remove('playing');
}

/* restart game when button is pressed */
const restartBtn = document.querySelector('.restart-btn');
restartBtn.addEventListener('click', () => {
  startGame();
});

/* call the game */
startGame();
