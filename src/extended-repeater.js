const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = `${options.addition}${options.additionSeparator || ''}`.repeat(options.additionRepeatTimes) || options.addition;
  const baseString = `${str}${addition}`;
  const strArr = []

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    strArr.push(baseString)
  }

  return strArr.join(options.separator || '+');
}

module.exports = {
  repeater
};