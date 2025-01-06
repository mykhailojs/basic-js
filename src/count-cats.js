const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
  // throw new NotImplementedError('Not implemented');
  let result = 0;
  for (const item of matrix) {
    result += item.filter(el => el === '^^').length;
  }
  return result;
  }

module.exports = {
  countCats
};
