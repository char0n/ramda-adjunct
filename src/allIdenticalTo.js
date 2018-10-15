import { curry, identical, all } from 'ramda';

/**
 * Returns true if all items in the list are equivalent to user provided value using `R.identical` for equality comparisons.
 *
 * @func allIdenticalTo
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig a -> [b] -> Boolean
 * @param {*} val User provided value to check the `list` against
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allIdentical|allIdentical}, {@link http://ramdajs.com/docs/#identical|R.identical}
 * @example
 *
 * RA.allIdenticalTo(1, [ 1, 2, 3, 4 ]); //=> false
 * RA.allIdenticalTo(1, [ 1, 1, 1, 1 ]); //=> true
 * RA.allIdenticalTo(1, []); //=> true
 * RA.allIdenticalTo({}, [ {}, {} ]); //=> false
 *
 */
const allIdenticalTo = curry((val, list) => all(identical(val), list));

export default allIdenticalTo;
