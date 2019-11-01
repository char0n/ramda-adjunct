import { converge, length, uniq } from 'ramda';

import lengthEq from './lengthEq';

/**
 * Returns true if all items in the list are unique. `R.equals` is used to determine equality.
 *
 * @func allUnique
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.notAllUnique|notAllUnique},  {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.allUnique([ 1, 2, 3, 4 ]); //=> true
 * RA.allUnique([ 1, 1, 2, 3 ]); //=> false
 * RA.allUnique([]); //=> true
 *
 */
const allUnique = converge(lengthEq, [length, uniq]);

export default allUnique;
