import { curry } from 'ramda';

import concatAll from './concatAll';
import sliceFrom from './sliceFrom';
import sliceTo from './sliceTo';

/**
 * Returns target with given slice replaced using passed replacement.
 *
 * @func updateSlice
 * @memberOf RA
 * @category List
 * @sig Number -> Number -> [a] -> [a] -> [a]
 * @sig Number -> Number -> String -> String -> String
 * @param {number} fromIndex
 * @param {number} toIndex
 * @param {string|any[]} replacement
 * @param {string|any[]} target
 * @returns {string|any[]} target with given slice replaced using passed replacement
 * @example
 *
 * RA.updateSlice(1, 3, 'DDDD', 'ABBCCC') //=> 'ADDDDCCC'
 * RA.updateSlice(1, 3, Array.from('DDDD'), Array.from('ABBCCC')) //=> [ 'A', 'D', 'D', 'D', 'D', 'C', 'C', 'C' ]
 * RA.updateSlice(-5, -3, 'DDDD', 'ABBCCC') //=> 'ADDDDCCC'
 * RA.updateSlice(3, 1, 'DDDD', 'ABBCCC') //=> 'ABBDDDDBBCCC'
 */
const updateSlice = curry((fromIndex, toIndex, replacement, target) =>
  concatAll([
    sliceTo(fromIndex, target),
    replacement,
    sliceFrom(toIndex, target),
  ])
);

export default updateSlice;
