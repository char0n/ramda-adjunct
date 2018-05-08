import { complement } from 'ramda';

import isObjLike from './isObjLike';

/* eslint-disable max-len */
/**
 * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isNotObjLike
 * @aliases isNotObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isNotObjLike({}); //=> false
 * RA.isNotObjLike([]); //=> false
 * RA.isNotObjLike(() => {}); //=> true
 * RA.isNotObjLike(null); //=> true
 * RA.isNotObjLike(undefined); //=> true
 */
/* eslint-enable max-len */
const isNotObjLike = complement(isObjLike);

export default isNotObjLike;
