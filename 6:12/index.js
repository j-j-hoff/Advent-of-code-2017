
const fs = require('fs');
const Bluebird = require("bluebird");
const R = require('ramda');

Bluebird.promisifyAll(fs);

fs.readFileAsync("6:12/data.txt", "utf8")
  .then(data => data.split(' '))
  .map(item => parseInt(item))
  .then(data => {
    let itterations = 0;
    let previousPatterns = [data.join('')];
    let matchFound = false;
    while(!matchFound) {
      itterations ++;
      let startFromIndex = data.findIndex((item) => Math.max.apply(Math, data) == item);
      console.log(startFromIndex);
      for (let i = 0; i < data[startFromIndex]; i++) {
        data[startFromIndex] = 0;
        if(startFromIndex + i <= data.length){
          startFromIndex = 0;
        }
        let nextIndex = startFromIndex + i
        console.log(data)
        data[nextIndex] = data[nextIndex] + 1;
        console.log(data);
      }
      const newString = data.join('');
      if(R.contains(newString, previousPatterns)){
        matchFound = true;
      } else {
        previousPatterns.push(newString);
      }
    }
    console.log(`Number of itterations: ${itterations}`);
  });
