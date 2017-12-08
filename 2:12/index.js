const fs = require('fs');
const Bluebird = require("bluebird");

Bluebird.promisifyAll(fs);

fs.readFileAsync("2:12/data.txt", "utf8")
  .then(data => data.split('\n'))
  .then(data => data.map(item => item.split('\t')))
  .then(data => data.filter(item => item.length > 2))
  .then(data => {
    return data.reduce((prev, curr) => {
      const intArray = curr.map(item => parseInt(item));
      const max = Math.max.apply(Math, intArray);
      const min = Math.min.apply(Math, intArray);
      const diff = max - min;
      const sum = prev += diff;
      return sum;
    }, 0)
  })
  .tap(console.log);

//Part 2
fs.readFileAsync("2:12/data.txt", "utf8")
.then(data => data.split('\n'))
.then(data => data.map(item => item.split('\t')))
.then(data => data.filter(item => item.length > 2))
.then(data => {
  return data.reduce((prev, curr) => {
    const number = curr.find(item => {
      let int = parseInt(item);
      R.any(R.modulo(R.__, 0))(curr);
      return number
    });

  
    const sum = prev += number;
    return sum;
  }, 0)
})
.tap(console.log);


return n % 2 == 0;
