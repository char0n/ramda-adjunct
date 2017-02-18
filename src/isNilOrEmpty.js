'use strict';

const { anyPass, isEmpty, isNil } = require('ramda');

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`
 *
 * @func isNilOrEmpty
 * @memberOf RA
 * @since v0.4.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}, {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNilOrEmpty([1, 2, 3]); //=> false
 * RA.isNilOrEmpty([]); //=> true
 * RA.isNilOrEmpty(''); //=> true
 * RA.isNilOrEmpty(null); //=> true
 * RA.isNilOrEmpty(undefined): //=> true
 * RA.isNilOrEmpty({}); //=> true
 * RA.isNilOrEmpty({length: 0}); //=> false
 */

module.exports = anyPass([isNil, isEmpty]);
