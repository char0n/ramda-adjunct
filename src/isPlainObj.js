import _isObject from 'ramda/src/internal/_isObject';
import { pipe, both, equals, toString, pathSatisfies } from 'ramda';

import isNull from './isNull';
import isObjLike from './isObjLike';
import isFunction from './isFunction';

const isObjectConstructor = pipe(
  toString,
  equals(toString(Object))
);
const hasObjectConstructor = pathSatisfies(
  both(isFunction, isObjectConstructor),
  ['constructor']
);

/* eslint-disable max-len */
/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isPlainObj
 * @aliases isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotPlainObj|isNotPlainObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObj(new Bar()); //=> false
 * RA.isPlainObj({ prop: 'value' }); //=> true
 * RA.isPlainObj(['a', 'b', 'c']); //=> false
 * RA.isPlainObj(Object.create(null); //=> true
 * RA.isPlainObj(new Object()); //=> true
 */
/* eslint-enable max-len */
const isPlainObj = val => {
  if (!isObjLike(val) || !_isObject(val)) {
    return false;
  }

  const proto = Object.getPrototypeOf(val);

  if (isNull(proto)) {
    return true;
  }

  return hasObjectConstructor(proto);
};

export default isPlainObj;
