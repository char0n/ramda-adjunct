import { always } from 'ramda';

/**
 * A function that returns empty string.
 *
 * @func stubString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> String
 * @return {string} The empty string
 * @example
 *
 * RA.stubString(); //=> ''
 * RA.stubString(1, 2, 3); //=> ''
 */
const stubString = always('');

export default stubString;
