import { complement } from 'ramda';

import allUnique from './allUnique';

/**
 * Returns true if at least one item of the list is repeated. `R.equals` is used to determine equality.
 *
 * @func notAllUnique
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allUnique|allUnique}, {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.notAllUnique([ 1, 1, 2, 3 ]); //=> true
 * RA.notAllUnique([ 1, 2, 3, 4 ]); //=> false
 * RA.notAllUnique([]); //=> false
 *
 */
const notAllUnique = complement(allUnique);

export default notAllUnique;
