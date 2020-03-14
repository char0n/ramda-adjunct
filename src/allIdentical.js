import { uniqWith, identical, pipe, curryN } from 'ramda';

import lengthLte from './lengthLte';

/**
 * Returns true if all items in the list are equivalent using `R.identical` for equality comparisons.
 *
 * @func allIdentical
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link https://ramdajs.com/docs/#identical|identical}
 * @example
 *
 * RA.allIdentical([ 1, 2, 3, 4 ]); //=> false
 * RA.allIdentical([ 1, 1, 1, 1 ]); //=> true
 * RA.allIdentical([]); //=> true
 * RA.allIdentical([ {}, {} ]); //=> false
 * RA.allIdentical([ () => {}, () => {} ]); //=> false
 */
const allIdentical = curryN(1, pipe(uniqWith(identical), lengthLte(1)));

export default allIdentical;
