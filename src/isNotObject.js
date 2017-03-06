'use strict';

const { complement } = require('ramda');

const isObject = require('./isObject');


/* eslint-disable max-len */
/**
 * Checks if input value is complement of language type of `Object`
 *
 * @func isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObject|isObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObject({}); //=> false
 * RA.isNotObject([]); //=> false
 * RA.isNotObject(() => {}); //=> false
 * RA.isNotObject(null); //=> true
 * RA.isNotObject(undefined); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isObject);
