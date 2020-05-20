import { complement, equals, curryN } from 'ramda';

/**
 * Returns `true` if its arguments are not equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * RA.notEqual(1, 1); //=> false
 * RA.notEqual(1, '1'); //=> true
 * RA.notEqual([1, 2, 3], [1, 2, 3]); //=> false
 *
 * const a = {}; a.v = a;
 * const b = {}; b.v = b;
 * RA.notEqual(a, b); //=> false
 */
const notEqual = curryN(2, complement(equals));

export default notEqual;
