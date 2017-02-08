'use strict';

/**
 * Checks if input `value` is `undefined`
 *
 * @func
 * @memberOf RA
 * @since v0.0.1
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */
const isUndefined = val => typeof val === 'undefined';

module.exports = isUndefined;
