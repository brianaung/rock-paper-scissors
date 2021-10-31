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

console.log(comPlay());
