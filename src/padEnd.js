import { concat, curry } from 'ramda';

import createPadding from './internal/createPadding';

/**
 * Returns passed string or array  with enough padding appended to reach targetLength.
 * Dispatches to `padEnd` method of the third argument, if present.
 *
 * @func padEnd
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category String
 * @sig String -> Number -> String -> String
 * @sig [a] -> Number -> [a] -> [a]
 * @param {String|Array} padding non-empty string on array used as padding
 * @param {Number} targetLength minimal length of returned string or array
 * @param {String|Array} toPad string on array to prepend pading to
 * @return {String|Array} `toPad` with enough `padding` to reach `targetLength`
 * @see {@link RA.padStart|padStart}
 *
 * @example
 *
 * RA.padEnd('.-', 6, 'foo'); //=> 'foo.-.'
 * RA.padEnd([0, 1], 6, [4, 5, 6]); //=> [4, 5, 6, 0, 1, 0]
 * RA.padEnd('.-', 5, 'foobar'); //=> 'foobar'
 */
const padEnd = curry(
  (padding, targetLength, toPad) =>
    typeof toPad.padEnd === 'function'
      ? toPad.padEnd(targetLength, padding)
      : concat(toPad, createPadding(padding, targetLength - toPad.length))
);

export default padEnd;
