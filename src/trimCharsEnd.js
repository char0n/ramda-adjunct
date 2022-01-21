import { curry, dropLastWhile, join, pipe, split } from 'ramda';

import included from './included';

/**
 * Removes specified characters from the end of a string.
 *
 * @func trimCharsEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.25.0|v2.25.0}
 * @category String
 * @sig String -> String
 * @param {string} chars The characters to trim
 * @param {string} value The string to trim
 * @return {string} Returns the trimmed string.
 * @example
 *
 * RA.trimCharsEnd('_-', '-_-abc-_-'); //=> '-_-abc'
 */

const trimCharsEnd = curry((chars, value) =>
  pipe(split(''), dropLastWhile(included(chars)), join(''))(value)
);

export default trimCharsEnd;
