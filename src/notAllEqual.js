import { complement } from 'ramda';

import allEqual from './allEqual';

/**
 * Returns true if the list is not empty,
 * and not all items in the list are equivalent using `R.equals` for equality comparisons.
 *
 * @func notAllEqual
 * @category List
 * @sig [a] -> Boolean
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allEqual|allEqual}
 * @example
 *
 * RA.notAllEqual([ 1, 2, 3, 4 ]); //=> true
 * RA.notAllEqual([ 1, 1, 1, 1 ]); //=> false
 * RA.notAllEqual([]); //=> false
 *
 */
const notAllEqual = complement(allEqual);

export default notAllEqual;
