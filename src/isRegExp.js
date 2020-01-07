import { type, identical, pipe } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

/**
 * Checks if value is `RegExp` object.
 *
 * @func isRegExp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotRegExp|isNotRegExp}
 * @example
 *
 * RA.isRegExp(new RegExp()); //=> true
 * RA.isRegExp(/(?:)/); //=> true
 * RA.isRegExp(1); //=> false
 */
const isRegExp = curry1(pipe(type, identical('RegExp')));

export default isRegExp;
