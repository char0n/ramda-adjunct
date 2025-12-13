import { complement } from 'ramda';

import isObj from './isObj.js';

/**
 * Checks if input value is complement of language type of `Object`.
 *
 * @func isNotObj
 * @aliases isNotObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isObj|isObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isNotObj({}); //=> false
 * RA.isNotObj([]); //=> false
 * RA.isNotObj(() => {}); //=> false
 * RA.isNotObj(null); //=> true
 * RA.isNotObj(undefined); //=> true
 */

const isNotObj = complement(isObj);

export default isNotObj;
