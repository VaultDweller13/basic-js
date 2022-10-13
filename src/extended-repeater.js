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
  let addition = ('addition' in options) ? String(options.addition) : '';
  let baseString;
  const strArr = []

  if (addition && options.additionRepeatTimes > 1) {
    const additionArr = [];

    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(addition)
    }

    addition = additionArr.join(options.additionSeparator || '|');
  }

  baseString = `${str}${addition}`;

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    strArr.push(baseString)
  }

  return strArr.join(options.separator || '+');
}

module.exports = {
  repeater
};