import { concat, curry } from 'ramda';

import createPadding from './internal/createPadding';

/**
 * Returns passed string or array with enough padding prepended to reach targetLength.
 * Dispatches to `padStart` method of the third argument, if present.
 *
 * @func padStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category String
 * @sig String -> Number -> String -> String
 * @sig [a] -> Number -> [a] -> [a]
 * @param {String|Array} padding non-empty string on array used as padding
 * @param {Number} targetLength minimal length of returned string or array
 * @param {String|Array} toPad string on array to prepend pading to
 * @return {String|Array} `toPad` with enough `padding` to reach `targetLength`
 * @see {@link RA.padEnd|padEnd}
 *
 * @example
 *
 * RA.padStart('.-', 6, 'foo'); //=> '.-.foo'
 * RA.padStart([0, 1], 6, [4, 5, 6]); //=> [0, 1, 0, 4, 5, 6]
 * RA.padStart('.-', 5, 'foobar'); //=> 'foobar'
 */
const padStart = curry(
  (padding, targetLength, toPad) =>
    typeof toPad.padStart === 'function'
      ? toPad.padStart(targetLength, padding)
      : concat(createPadding(padding, targetLength - toPad.length), toPad)
);

export default padStart;
