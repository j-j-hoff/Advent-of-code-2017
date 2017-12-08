const { data } = require('./data') 

const solution_1 = () => {
  const numberArray = data.split('');
  const res = numberArray.reduce((prev, curr, index) => {
    let compareTo = index == numberArray.length -1 
      ? numberArray[0]
      : numberArray[index + 1];
    if (curr == compareTo) {
      prev += parseInt(curr);
    }
    return prev;
  }, 0); 
}

const numberArray = data.split('');
const res = numberArray.reduce((prev, curr, index) => {
  let compareTo = index == numberArray.length -1 
    ? numberArray[0]
    : numberArray[index + 1];
  if (curr == compareTo) {
    prev += parseInt(curr);
  }
  return prev;
}, 0); 

console.log(res);
