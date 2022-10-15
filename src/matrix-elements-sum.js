const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let prev = [];

  return matrix.reduce((sum, line) => {
    sum += line.reduce((lineSum, item, index) => {
      if (prev[index] !== 0) lineSum += item;    

      return lineSum;
    }, 0);
    
    prev = line;
    return sum;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
