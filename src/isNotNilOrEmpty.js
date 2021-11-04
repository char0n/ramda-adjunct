import { complement } from 'ramda';

import isNilOrEmpty from './isNilOrEmpty';

/**
 * Returns `false` if the given value is its type's empty value, `null` or `undefined`.
 *
 * @func isNotNilOrEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.18.0|v2.18.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNilOrEmpty|isNilOrEmpty}
 * @example
 *
 * RA.isNotNilOrEmpty([1, 2, 3]); //=> true
 * RA.isNotNilOrEmpty([]); //=> false
 * RA.isNotNilOrEmpty(''); //=> false
 * RA.isNotNilOrEmpty(null); //=> false
 * RA.isNotNilOrEmpty(undefined): //=> false
 * RA.isNotNilOrEmpty({}); //=> false
 * RA.isNotNilOrEmpty({length: 0}); //=> true
 */
const isNotNilOrEmpty = complement(isNilOrEmpty);

export default isNotNilOrEmpty;
