import { curry, dropWhile, join, pipe, split } from 'ramda';

import included from './included';

/**
 * Removes specified characters from the beginning of a string.
 *
 * @func trimCharsStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.24.0|v2.24.0}
 * @category String
 * @sig String -> String
 * @param {string} chars The characters to trim
 * @param {string} value The string to trim
 * @return {string} Returns the trimmed string.
 * @example
 *
 * RA.trimCharsStart('_-', '-_-abc-_-'); //=> 'abc-_-'
 */

const trimCharsStart = curry((chars, value) =>
  pipe(split(''), dropWhile(included(chars)), join(''))(value)
);

export default trimCharsStart;
