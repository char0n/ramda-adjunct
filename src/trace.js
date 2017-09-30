import { curryN } from 'ramda';

/**
 * Prints message with subject to console and returns subject
 *
 * @func trace
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Function
 * @sig String -> a -> a
 * @param {!String} message The string used to distinguish traces
 * @param {!a} subj Some value that would be printed using console.log
 * @return {!a} subj Second passed value
 * @see {@link https://gist.github.com/jaysoo/7b1298bcc98ef9ac71e6dd0383a07dc3|original}
 * @example
 *
 * const performComplexCalc = R.compose(
 *   RA.trace('after'),
 *   R.subtract(__, 2),
 *   R.divide(__, 4),
 *   RA.trace('middle'),
 *   R.multiply(10),
 *   R.add(10),
 *   RA.trace('before')
 * )
 */

// https://stackoverflow.com/a/24279593/3574379
const isNode =
  typeof process === 'object' &&
  Object.prototype.toString.call(process) === '[object process]';

let logger = null;
if (isNode) {
  // eslint-disable-next-line global-require
  const util = require('util');
  const options = { showHidden: true, depth: 40 };
  logger = (message, subj) => {
    // eslint-disable-next-line no-console
    console.log(message, util.inspect(subj, options));
  };
} else {
  // eslint-disable-next-line no-console
  logger = console.log;
}

const trace = curryN(2, (message, subject) => {
  logger(message, subject);
  return subject;
});

export default trace;
