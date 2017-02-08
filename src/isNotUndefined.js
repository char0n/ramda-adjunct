'use strict';

const { complement } = require('ramda');

const isUndefined = require('./isUndefined');


/**
 * Checks if input `value` is not `undefined`
 *
 * @func isNotUndefined
 * @memberOf RA
 * @since v0.0.1
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isUndefined|isUndefined}
 * @example
 *
 * RA.isNotUndefined(1); //=> true
 * RA.isNotUndefined(undefined); //=> false
 * RA.isNotUndefined(null): //=> true
 */
module.exports = complement(isUndefined);
