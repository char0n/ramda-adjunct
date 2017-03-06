'use strict';

const _isObject = require('ramda/src/internal/_isObject');
const { pipe, both, equals, toString, pathSatisfies } = require('ramda');

const isNull = require('./isNull');
const isObjectLike = require('./isObjectLike');
const isFunction = require('./isFunction');


const isObjectConstructor = pipe(toString, equals(toString(Object)));
const hasObjectConstructor = pathSatisfies(both(isFunction, isObjectConstructor), ['constructor']);

/* eslint-disable max-len */
/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`)
 *
 * @func isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotPlainObject|isNotPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObject(new Bar()); //=> false
 * RA.isPlainObject({ prop: 'value' }); //=> true
 * RA.isPlainObject(['a', 'b', 'c']); //=> false
 * RA.isPlainObject(Object.create(null); //=> true
 * RA.isPlainObject(new Object()); //=> true
 */
/* eslint-enable max-len */

module.exports = (val) => {
  if (!isObjectLike(val) || !_isObject(val)) { return false }

  const proto = Object.getPrototypeOf(val);

  if (isNull(proto)) { return true }

  return hasObjectConstructor(proto);
};
