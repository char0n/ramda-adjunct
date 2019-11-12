import { curry, propOr, partial, nth } from 'ramda';

import isNonNegative from './isNonNegative';
import isInteger from './isInteger';

/**
 * Creates a promise which resolves/rejects after the specified milliseconds.
 *
 * @func delayP
 * @memberOf RA
 * @category Function
 * @sig Number -> Promise Undefined
 * @sig {timeout: Number, value: a} -> Promise a
 * @param {number|Object} milliseconds number of milliseconds or options object
 * @return {Promise} A Promise that is resolved/rejected with the given value (if provided) after the specified delay
 * @example
 *
 * RA.delayP(200); //=> Promise(undefined)
 * RA.delayP({ timeout: 1000, value: 'hello world' }); //=> Promise('hello world')
 * RA.delayP.reject(100); //=> Promise(undefined)
 * RA.delayP.reject({ timeout: 100, value: new Error('error') }); //=> Promise(Error('error'))
 */

const makeDelay = curry((settleFnPicker, opts) => {
  let timeout;
  let value;

  if (isInteger(opts) && isNonNegative(opts)) {
    timeout = opts;
  } else {
    timeout = propOr(0, 'timeout', opts);
    value = propOr(value, 'value', opts);
  }

  return new Promise((...args) => {
    const settleFn = settleFnPicker(args);

    setTimeout(partial(settleFn, [value]), timeout);
  });
});

const delayP = makeDelay(nth(0));
delayP.reject = makeDelay(nth(1));

export default delayP;
