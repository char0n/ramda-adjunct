'use strict';

const { both, anyPass } = require('ramda');

const isNotNull = require('./isNotNull');
const isFunction = require('./isFunction');
const isOfTypeObject = require('./internal/isOfTypeObject');


/* eslint-disable max-len */
/**
 * Checks if input value is language type of `Object`
 *
 * @func isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObject|isNotObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObject({}); //=> true
 * RA.isObject([]); //=> true
 * RA.isObject(() => {}); //=> true
 * RA.isObject(null); //=> false
 * RA.isObject(undefined); //=> false
 */
/* eslint-enable max-len */

module.exports = both(isNotNull, anyPass([isOfTypeObject, isFunction]));
