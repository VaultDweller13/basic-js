const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  const result = [];
  let resultIndex = 0;

  for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch(arr[i]) {
        case(`--discard-next`):
          if (arr[i + 1]) i += 2;
          break;
        case(`--discard-prev`):
          if (arr[i - 1]) resultIndex--;
          break;
        case(`--double-next`):
          if (arr[i + 1]) {
            result[resultIndex] = arr[i + 1];
            resultIndex++;
          }
          break;
        case(`--double-prev`):
          if (arr[i - 1]) {
            result[resultIndex] = result[resultIndex - 1];
            resultIndex++;
          }
          break;
        default:
          result[resultIndex] = arr[i];
          resultIndex++;
      }
    } else {
      result[resultIndex] = arr[i];
      resultIndex++;
    }
  }
  
  console.log(result);
  return result;
}

module.exports = {
  transform
};