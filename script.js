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


/* return the shape that COM is going to play */
function comPlay() {
  let shapes = [ 'rock', 'paper', 'scissors' ];
  let randomNum = Math.floor(Math.random() * shapes.length);

  return shapes[randomNum];
}


/* remove the button click animation */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}


/* play a round of rps using player selection and randomised COM selection */
function game(e) {

  const pSelect = e.target.className;
  const cSelect = comPlay();

  e.target.classList.add('playing');

  console.log(`${playRound(pSelect, cSelect)}`);
}


/* adding events */
const selections = Array.from(document.querySelectorAll('.rps img'));
selections.forEach(s => s.addEventListener('click', game));
selections.forEach(s => s.addEventListener('transitionend', removeTransition));
