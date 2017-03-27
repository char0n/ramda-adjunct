import { complement } from 'ramda';

import isObjectLike from './isObjectLike';


/* eslint-disable max-len */
/**
 * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isNotObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObjectLike({}); //=> false
 * RA.isNotObjectLike([]); //=> false
 * RA.isNotObjectLike(() => {}); //=> true
 * RA.isNotObjectLike(null); //=> true
 * RA.isNotObjectLike(undefined); //=> true
 */
/* eslint-enable max-len */
export default complement(isObjectLike);
