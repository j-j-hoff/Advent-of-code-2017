const input = 265149;

let i = 1;
while(i*i < input) {
  i += 2
}

const intervalUpper= i*i;
const rightCol = [(intervalUpper - (i-1)*4), intervalUpper - (i-1)*3]
const topCol = [intervalUpper - (i-1)*3, intervalUpper - (i-1)*2]
const leftCol = [intervalUpper - (i-1)*2, intervalUpper - (i-1)]
const bottomCol = [intervalUpper - (i-1), intervalUpper]


if (input >= bottomCol[0] && input <= bottomCol[1]){
  countStep(bottomCol)
} else if (input >= leftCol[0] && input <= leftCol[1]) {
  countStep(leftCol)
} else if (input >= topCol[0] && input <= topCol[1]){
  countStep(topCol)
} else{
  countStep(rightCol)
}

function countStep (column) {
  const columnCenter = (column[0] + column[1])/2;
  let colSteps = columnCenter - input;
  if(colSteps < 0){
    colSteps = colSteps * -1;
  }
  const numberOfInts = (intervalUpper - (intervalUpper - (i-1)*4))/8;
  const numbersOfSteps = (colSteps + numberOfInts);
  console.log(`Number of steps: ${numbersOfSteps}`);
}
