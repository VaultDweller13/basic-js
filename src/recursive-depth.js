const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;

    arr.forEach(item => {
      if (Array.isArray(item)) {
        const newDepth = this.calculateDepth(item);
        maxDepth = newDepth > maxDepth ? newDepth : maxDepth;
      }
    });

    return ++maxDepth;
  }
}

module.exports = {
  DepthCalculator
};