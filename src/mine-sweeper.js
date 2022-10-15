const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((line, lineIndex) => {
    const prevLine = matrix[lineIndex - 1] || [];
    const nextLine = matrix[lineIndex + 1] || [];

    return line.map((cell, cellIndex) => {
      const prevCell = line[cellIndex - 1] || false;
      const nextCell = line[cellIndex + 1] || false;
      const minesNumber = +prevCell + +nextCell;

      return minesNumber + [prevLine, nextLine].reduce((sum, currentLine) => {
        return sum + currentLine.reduce((sum, value, index) => {
            return (index <= cellIndex + 1) && 
                   (index >= cellIndex - 1) ? sum + +value : sum; 
          }, 0);
      }, 0)
    })
  });
}

module.exports = {
  minesweeper
};