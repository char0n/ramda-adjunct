import { when, of } from 'ramda';
import { isNotArray } from './index';


/**
 * Returns an array, even if not, wrap it in a singleton one.
 *
 * @func ensureArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category List
 * @sig a | [a] -> [a]
 * @param {*|Array.<*>} val the value to wrap when is not an array
 * @return {Array<*>}
 * @see {@link http://ramdajs.com/docs/#of|R.of}
 * @example
 *
 * RA.ensureArray(42); //=> [42]
 * RA.ensureArray([42]); //=> [42]
 */
const ensureArray = when(isNotArray, of);

export default ensureArray;
