/*const fs = require('fs');
const Bluebird = require("bluebird");
const R = require('ramda');

Bluebird.promisifyAll(fs);

fs.readFileAsync("4:12/data.txt", "utf8")
  .then(data => data.split('\n'))
  .then(data => data.map(item => item.split(' ')))
  .then(data => data.filter(item => item.length > 2))
  .then(data => data.filter(item => {
    const lengthBefore = item.length;
    const uniq = R.uniq(item);
    const lengthAfter = uniq.length;
    return lengthAfter == lengthBefore;
  }))
  .tap(res => console.log(res.length));
*/

//Part 2
const fs = require('fs');
const Bluebird = require("bluebird");
const R = require('ramda');

Bluebird.promisifyAll(fs);

fs.readFileAsync("4:12/data.txt", "utf8")
.then(data => data.split('\n'))
.then(data => data.map(item => item.split(' ')))
.then(data => data.filter(item => item.length > 2))
.then(data => data.filter(item => {
  const sortedItem = item.map(listItem => {
    const splitted = listItem.split('');
    const sorted = splitted.sort();
    return sorted.join('');   
  });
  const lengthBefore = sortedItem.length;
  const uniq = R.uniq(sortedItem);
  const lengthAfter = uniq.length;
  return lengthAfter == lengthBefore;
}))
.tap(res => console.log(res.length));
