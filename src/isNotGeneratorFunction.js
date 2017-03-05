'use strict';

const { complement } = require('ramda');

const isGeneratorFunction = require('./isGeneratorFunction');

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Generator Function`
 *
 * @func isNotGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotGeneratorFunction(function* test() { }); //=> false
 * RA.isNotGeneratorFunction(null); //=> true
 * RA.isNotGeneratorFunction(function test() { }); //=> true
 * RA.isNotGeneratorFunction(() => {}); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isGeneratorFunction);
