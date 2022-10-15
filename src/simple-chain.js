const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],

  getLength() {
   return this.link.length;
  },
  addLink(value = ' ') {
    this.link.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !this.link[position - 1]) {
      this.link = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.link.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.link.reverse();

    return this;
  },
  finishChain() {
    const result = this.link.join('~~');
    this.link = [];
    return result;
  }
};

module.exports = {
  chainMaker
};