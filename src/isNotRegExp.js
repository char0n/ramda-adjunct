import { complement } from 'ramda';

import isRegExp from './isRegExp';

/**
 * Checks if value is complement of `RegExp` object.
 *
 * @func isNotRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isRegExp|isRegExp}
 * @example
 *
 * RA.isNotRegExp(1); //=> true
 * RA.isNotRegExp(/(?:)/); //=> false
 * RA.isNotRegExp(new RegExp()); //=> false
 */
const isNotRegExp = complement(isRegExp);

export default isNotRegExp;
