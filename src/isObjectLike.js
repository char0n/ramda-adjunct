import { both } from 'ramda';

import isNotNull from './isNotNull';
import isOfTypeObject from './internal/isOfTypeObject';


/* eslint-disable max-len */
/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObjectLike|isNotObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObjectLike({}); //=> true
 * RA.isObjectLike([]); //=> true
 * RA.isObjectLike(() => {}); //=> false
 * RA.isObjectLike(null); //=> false
 * RA.isObjectLike(undefined); //=> false
 */
/* eslint-enable max-len */
export default both(isNotNull, isOfTypeObject);
