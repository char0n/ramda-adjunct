import { type, identical, pipe, curryN } from 'ramda';

/**
 * Checks if value is an `Error` object.
 *
 * @func isError
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isError|isError}
 * @example
 *
 * RA.isError(new Error()); //=> true
 * RA.isError(true); //=> false
 * RA.isError(1); //=> false
 */
const isError = curryN(1, pipe(type, identical('Error')));

export default isError;
