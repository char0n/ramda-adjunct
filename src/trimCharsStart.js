import { curry, dropWhile, join, pipe, split } from 'ramda';

import contained from './contained';

/**
 * Removes specified characters from the beginning of a string.
 *
 * @func trimCharsStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.24.0|v2.24.0}
 * @category String
 * @sig String -> String
 * @param {string} value String that contains all characters to be removed from the begining of the string provided in the second argument
 * @param {string} value String value which will have the characters specified by the first argument removed from its beginning
 * @return {string} A new string representing the second argument with the specified characters removed from its beginning (left end).
 * @example
 *
 * RA.trimCharsStart('_-', '-_-abc-_-'); //=> 'abc-_-'
 */

const trimCharsStart = curry((chars, value) =>
  pipe(split(''), dropWhile(contained(chars)), join(''))(value)
);

export default trimCharsStart;
