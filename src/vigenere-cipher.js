const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    return this.processData(message, key);
  }

  decrypt(encryptedMessage, key) {
    return this.processData(encryptedMessage, key, true);
  }

  processData(message, key, decrypt) {
    if (!message || !key) throw Error(`Incorrect arguments!`);

    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    const plainText = message.split('').filter(ch => this.ALPHABET.includes(ch));
    const keyword = key
      .repeat(Math.ceil(plainText.length / key.length))
      .slice(0, plainText.length);
    let keywordIndex = 0;

    message.split('').forEach(char => {
      let value = char;
      
      if (this.ALPHABET.includes(char)) {
        const charIndex = this.ALPHABET.indexOf(char);
        const keyIndex = this.ALPHABET.indexOf(keyword[keywordIndex]);
        let cipherIndex;
        if (decrypt) {
          cipherIndex = (26 + charIndex - keyIndex) % 26;
        } else {
          cipherIndex = (charIndex + keyIndex) % 26;
        }

        value = this.ALPHABET[cipherIndex];
        keywordIndex++;
      }  

      result.push(value);
    });  

    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};