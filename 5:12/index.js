/*const fs = require('fs');
const Bluebird = require("bluebird");
const R = require('ramda');

Bluebird.promisifyAll(fs);

fs.readFileAsync("5:12/data.txt", "utf8")
  .then(data => data.split('\n'))
  .filter(item => item != "")
  .map(item => parseInt(item))
  .tap(data => {
    let itterations = 0;
    let currentIndex = 0;
    while(currentIndex < data.length){
      itterations ++;
      const newIndex = currentIndex + data[currentIndex];
      data[currentIndex] = data[currentIndex] + 1;
      currentIndex = newIndex;
    }
    console.log(`Number of itterations: ${itterations}`);
  });*/


//Part 2
const fs = require('fs');
const Bluebird = require("bluebird");
const R = require('ramda');

Bluebird.promisifyAll(fs);

fs.readFileAsync("5:12/data.txt", "utf8")
  .then(data => data.split('\n'))
  .filter(item => item != "")
  .map(item => parseInt(item))
  .tap(data => {
    let itterations = 0;
    let currentIndex = 0;
    while(currentIndex < data.length){
      itterations ++;
      const newIndex = currentIndex + data[currentIndex];
      let numberToAdd = 1;
      if(data[currentIndex] >= 3){
        numberToAdd = -1
      }
      data[currentIndex] = data[currentIndex] + numberToAdd;
      currentIndex = newIndex;
    }
    console.log(`Number of itterations: ${itterations}`);
  });
  