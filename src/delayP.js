import { curry, propOr, partial, nth } from 'ramda';

import isPlainObj from './isPlainObj';
/**
 *
 * @func delayP
 * @memberOf RA
 * @category Function
 * @sig a -> Promise a
 * @param {Number|Object} Argument to be resolved after a certain timeout and returns value if provided.
 * @return {Promise} A Promise that is resolved with the given value if provided after certain delay.
 * @see {@link RA.delayP|delayP}
 * @example
 *
 * RA.delayP(200); //=> Returns Promise(undefined) after 200ms
 * RA.delayP({ timeout: 1000, value: 'hello world' }); //=> Returns Promise('hello world') after 1000ms
 * RA.delayP.reject(100); //=> rejects after 100 milliseconds with `undefined` value
 * RA.delayP.reject({ timeout: 100, value: new Error('error') }); //=> rejects after 100 milliseconds with `Error('error')` value
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
