import { gte, flip } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length greater than or equal to
 * `valueLength`.
 *
 * @func lengthGte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param {Number} valueLength The length of the list or string
 * @param {Number} value The list or string
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#gte|gte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.lengthGte(3, [1,2,3,4]); //=> true
 * RA.lengthGte(3, [1,2,3]); //=> true
 * RA.lengthGte(3, [1,2,3]); //=> false
 */
const lengthGte = compareLength(flip(gte));

export default lengthGte;
