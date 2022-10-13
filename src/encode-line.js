const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [...str];
  let result = '';
  let curr = '';
  let count = 1;

  arr.forEach(item => {
    if(item === curr) {
     count++;
    } else if (curr) {
      result += `${count === 1 ? '' : count}${curr}`;
      count = 1;
    }
    curr = item;

  })

  return result + `${count === 1 ? '' : count}${curr}`;
}

module.exports = {
  encodeLine
};