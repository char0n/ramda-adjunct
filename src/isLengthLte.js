import { lte } from 'ramda';

import compareLength from './internal/compareLength';

/**
 * Returns `true` if the supplied list or string has a length less than or equal to `valueLength`.
 *
 * @func isLengthLte
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> [*] -> Boolean
 * @param Number valueLength The length of the list or string
 * @param Number value The list or string
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#lte|lte}, {@link http://ramdajs.com/docs/#length|length}
 * @example
 *
 * RA.isLengthLte(3, [1,2]); //=> true
 * RA.isLengthLte(3, [1,2,3]); //=> true
 * RA.isLengthLte(3, [1,2,3,4]); //=> false
 */
const isLengthLte = compareLength(lte);

export default isLengthLte;
