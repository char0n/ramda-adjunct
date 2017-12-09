import { pipe, equals } from 'ramda';


/**
 * In JavaScript, a `truthy` value is a value that is considered true
 * when evaluated in a Boolean context. All values are truthy unless
 * they are defined as falsy (i.e., except for `false`, `0`, `""`, `null`, `undefined`, and `NaN`).
 *
 * @func isTruthy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.2.0|v2.2..0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.isTruthy({}); // => true
 * RA.isTruthy([]); // => true
 * RA.isTruthy(42); // => true
 * RA.isTruthy(3.14); // => true
 * RA.isTruthy('foo'); // => true
 * RA.isTruthy(new Date()); // => true
 * RA.isTruthy(Infinity); // => true
 */
const isTruthy = pipe(Boolean, equals(true));

export default isTruthy;
