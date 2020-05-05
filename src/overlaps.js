import { pipe, intersection, complement, isEmpty, curryN } from 'ramda';

/**
 * Checks if two lists have elements in common.
 *
 * @func overlaps
 * @memberOf RA
 * @category Relation
 * @sig [a] -> [a] -> Boolean
 * @param {Array} The first list.
 * @param {Array} The second list.
 * @return {boolean} true if both lists have any element in common
 * @example
 *
 * RA.overlaps(['-v', '--verbose'], ['node', 'script.js', '-v']); //=> true
 * RA.overlaps(['-v', '--verbose'], []); //=> false
 * RA.overlaps([1, 2, 3], [3, 4, 5]); //=> true
 * RA.overlaps([1, 2, 3], [4, 5]); //=> false
 */

const overlaps = curryN(2, pipe(intersection, complement(isEmpty)));

export default overlaps;
