import { complement } from 'ramda';

import isPlainObject from './isPlainObject';

/* eslint-disable max-len */
/**
 * Check to see if an object is a not plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isNotPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isPlainObject|isPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isNotPlainObject(new Bar()); //=> true
 * RA.isNotPlainObject({ prop: 'value' }); //=> false
 * RA.isNotPlainObject(['a', 'b', 'c']); //=> true
 * RA.isNotPlainObject(Object.create(null); //=> false
 * RA.isNotPlainObject(new Object()); //=> false
 */
/* eslint-enable max-len */
export default complement(isPlainObject);
