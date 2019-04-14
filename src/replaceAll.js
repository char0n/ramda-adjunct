import { curryN, split, join, pipe } from 'ramda';

import isRegExp from './isRegExp';

/**
 * Replaces all substring matches in a string with a replacement.
 *
 * @func replaceAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.17.0|v2.17.0}
 * @category String
 * @sig String -> String -> String -> String
 * @param {string} searchValue The substring to match
 * @param {string} replaceValue The string to replace the matches with
 * @param {string} str The String to do the search and replacement in
 * @return {string} A new string containing all the `searchValue` replaced with the `replaceValue`
 * @throws {Error} When `searchValue` is RegExp
 * @see {@link http://ramdajs.com/docs/#replace|R.replace}, {@link https://github.com/tc39/proposal-string-replaceall|TC39 proposal}
 * @example
 *
 * RA.replaceAll('ac', 'ef', 'ac ab ac ab'); //=> 'ef ab ef ab'
 */
const replaceAll = curryN(3, (searchValue, replaceValue, str) => {
  if (isRegExp(searchValue)) {
    throw new Error('searchValue must be a String, not a RegExp.');
  }

  return pipe(
    split(String(searchValue)),
    join(String(replaceValue))
  )(str);
});

export default replaceAll;
