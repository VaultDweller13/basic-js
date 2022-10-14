const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const getCharaterCount = (str, char) => {
    return [...str].reduce((count, ch) => ch === char ? ++count : count, 0);
  }
  const checkedChars = [];

  return [...s1].reduce((count, char) => {
    let firstArrayCount = 0;
    let secondArrayCount = 0;

    if (!checkedChars.includes(char)) {
      firstArrayCount = getCharaterCount(s1, char);
      secondArrayCount = getCharaterCount(s2, char);
      checkedChars.push(char);
    }

    return  count + Math.min(firstArrayCount, secondArrayCount);
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};