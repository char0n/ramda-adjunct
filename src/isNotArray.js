'use strict';

const { complement } = require('ramda');

const isArray = require('./isArray');

/**
 * Checks if input `value` is complement of Array
 *
 * @func isNotArray
 * @memberOf RA
 * @since v0.3.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isArray|isArray}
 * @example
 *
 * RA.isNotArray([1, 2, 3]);  // false
 * RA.isNotArray({foo: 123}); // true
 * RA.isNotArray('foobar');   // true
 * RA.isNotArray(undefined);  // true
 */

module.exports = complement(isArray);
