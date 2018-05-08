import { complement } from 'ramda';

import isPlainObj from './isPlainObj';

/* eslint-disable max-len */
/**
 * Check to see if an object is a not plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isNotPlainObj
 * @aliases isNotPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isPlainObj|isPlainObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isNotPlainObj(new Bar()); //=> true
 * RA.isNotPlainObj({ prop: 'value' }); //=> false
 * RA.isNotPlainObj(['a', 'b', 'c']); //=> true
 * RA.isNotPlainObj(Object.create(null); //=> false
 * RA.isNotPlainObj(new Object()); //=> false
 */
/* eslint-enable max-len */
const isNotPlainObj = complement(isPlainObj);

export default isNotPlainObj;
