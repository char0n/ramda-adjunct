import { all, equals, curry } from 'ramda';

/**
 * Returns true if all items in the list are equivalent to user provided value using `R.equals` for equality comparisons.
 *
 * @func allEqualTo
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.11.0|v2.11.0}
 * @category List
 * @sig a -> [b] -> Boolean
 * @param {*} val User provided value to check the `list` against
 * @param {Array} list The list of values
 * @return {boolean}
 * @see {@link RA.allEqual|allEqual}, {@link https://ramdajs.com/docs/#equals|equals}
 * @example
 *
 * RA.allEqualTo(1, [ 1, 2, 3, 4 ]); //=> false
 * RA.allEqualTo(1, [ 1, 1, 1, 1 ]); //=> true
 * RA.allEqualTo({}, [ {}, {} ]); //=> true
 * RA.allEqualTo(1, []); //=> true
 *
 */
const allEqualTo = curry((val, list) => all(equals(val), list));

export default allEqualTo;
