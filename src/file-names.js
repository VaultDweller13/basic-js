const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let k = 1;
  const duplicates = {};
  const result = [];
  
  for (let i = 0; i < names.length; i++) {
    const currentFile = names[i];

    if (duplicates[currentFile]) {
      const newFile = `${currentFile}(${duplicates[currentFile]})`;
      result.push(newFile);
      duplicates[currentFile]++;
      duplicates[newFile] = 1;
    } else {
      duplicates[currentFile] = 1;
      result.push(currentFile);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};

console.log(renameFiles([]));

// assert.deepEqual(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
//     assert.deepEqual(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
//     assert.deepEqual(renameFiles([]), []);