import { when, of } from 'ramda';
import { isNotArray } from './index';

/**
 * If the argument is already an Array, return it,
 * otherwise return a new Array with the argument as its only element.
 *
 * @func ensureArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category List
 * @sig a | [a] -> [a]
 * @param {*|Array.<*>} val the value ensure as Array
 * @return {Array<*>}
 * @see {@link http://ramdajs.com/docs/#of|R.of}
 * @example
 *
 * RA.ensureArray(42); //=> [42]
 * RA.ensureArray([42]); //=> [42]
 */
const ensureArray = when(isNotArray, of);

export default ensureArray;
