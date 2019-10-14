import { curry, propOr, partial, nth } from 'ramda';

import isPlainObj from './isPlainObj';
/**
 * Create a promise which resolves/rejects after
 * the specified milliseconds.
 *
 * @func delayP
 * @memberOf RA
 * @category Function
 * @sig a -> Promise a
 * @sig () -> Promise Undefined
 * @param {number|Object}  milliseconds number of milliseconds or options object.
 * @return {Promise} A Promise that is resolved/rejected with the given value if provided after certain delay.
 * @example
 *
 * RA.delayP(200); //=> Promise(undefined)
 * RA.delayP({ timeout: 1000, value: 'hello world' }); //=> Promise('hello world')
 * RA.delayP.reject(100); //=> Promise(undefined)
 * RA.delayP.reject({ timeout: 100, value: new Error('error') }); //=> Promise(Error('error'))
 */

const makeDelay = curry((settleFnPicker, opts) => {
  let timeout = opts;
  let value;

  if (isPlainObj(opts)) {
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
