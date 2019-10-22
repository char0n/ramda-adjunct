import padCharsEnd from './padCharsEnd';

/**
 * The function pads the current string with an empty string
 * so that the resulting string reaches a given length.
 * The padding is applied from the end of the current string.
 *
 * @func padEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category String
 * @sig Number -> String -> String
 * @param {number} targetLength The length of the resulting string once
 * the current string has been padded
 * @param {string} value String value to be padded
 * @return {string} A new string of the specified length with the pad string
 * applied at the end of the current string
 * @see {@link RA.padCharsEnd|padCharsEnd}, {@link RA.padCharsStart|padCharsStart}, {@link RA.padStart|padStart}
 * @example
 *
 * RA.padEnd(3, 'a'); // => 'a  '
 */
const padEnd = padCharsEnd(' ');

export default padEnd;
