import { curry } from 'ramda';

import concatAll from './concatAll';
import sliceFrom from './sliceFrom';
import sliceTo from './sliceTo';

/**
 * Returns a new copy of the list or string
 * with slice from fromIndex (inclusive) to toIndex (exclusive)
 * replaced by the provided value.
 *
 * @func updateSlice
 * @memberOf RA
 * @category List
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @sig Number -> Number -> [a] -> [a] -> [a]
 * @sig Number -> Number -> String -> String -> String
 * @param {number} fromIndex
 * @param {number} toIndex
 * @param {string|Array} replacement
 * @param {string|Array} list
 * @returns {string|Array} list with given slice replaced using passed replacement
 * @example
 *
 * RA.updateSlice(1, 3, 'DDDD', 'ABBCCC'); //=> 'ADDDDCCC'
 * RA.updateSlice(1, 3, Array.from('DDDD'), Array.from('ABBCCC')); //=> [ 'A', 'D', 'D', 'D', 'D', 'C', 'C', 'C' ]
 * RA.updateSlice(-5, -3, 'DDDD', 'ABBCCC'); //=> 'ADDDDCCC'
 * RA.updateSlice(3, 1, 'DDDD', 'ABBCCC'); //=> 'ABBDDDDBBCCC'
 */
const updateSlice = curry((fromIndex, toIndex, replacement, list) =>
  concatAll([sliceTo(fromIndex, list), replacement, sliceFrom(toIndex, list)])
);

export default updateSlice;
