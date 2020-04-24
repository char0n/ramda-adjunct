import { type, pipe, identical, curryN } from 'ramda';

/**
 * Checks if value is a BigInt.
 *
 * @func isBigInt
 * @memberOf RA
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @example
 *
 * RA.isBigInt(5); // => false
 * RA.isBigInt(Number.MAX_VALUE); // => false
 * RA.isBigInt(-Infinity); // => false
 * RA.isBigInt(10); // => false
 * RA.isBigInt(10n); // => true
 * RA.isBigInt(BitInt(9007199254740991)); // => true
 */
const isBigInt = curryN(1, pipe(type, identical('BigInt')));

export default isBigInt;
