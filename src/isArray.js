'use strict';

const isArrayPolyfill = val => Object.prototype.toString.call(val) === '[object Array]';

/**
 * Checks if input `value` is Array
 *
 * @func isArray
 * @memberOf RA
 * @since v0.3.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([1, 2, 3]);  // true
 * RA.isArray({foo: 123}); // false
 * RA.isArray('foobar');   // false
 * RA.isArray(undefined);  // false
 */

module.exports = Array.isArray || isArrayPolyfill;
