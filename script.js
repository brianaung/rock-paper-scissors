var playerScore = 0;
var comScore = 0;

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

  let res = getResult(pSelect, cSelect);
  if (res === 'player won') {
    pSelectImg.style.backgroundColor = '#a3be8c';
    cSelectImg.style.backgroundColor = '#bf616a';
  } else if (res === 'computer won') {
    pSelectImg.style.backgroundColor = '#bf616a';
    cSelectImg.style.backgroundColor = '#a3be8c';
  } else if (res === 'draw') {
    pSelectImg.style.backgroundColor = '#d8dee9';
    cSelectImg.style.backgroundColor = '#d8dee9';
  }


  // load img of items played by player and computer
  pSelectImg.style.backgroundImage = `url(img/${pSelect}.png)`;
  cSelectImg.style.backgroundImage = `url(img/${cSelect}.png)`;

  // add play animation to the selection buttons
  e.target.classList.add('playing');
  

  // display the current scores
  pScore.textContent = playerScore;
  cScore.textContent = comScore;
}


/* adding events */
const selections = Array.from(document.querySelectorAll('.rps img'));
selections.forEach(s => s.addEventListener('click', playRound));
selections.forEach(s => s.addEventListener('transitionend', removeTransition));
