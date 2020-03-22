import { bind, last, map, curryN } from 'ramda';

import allP from './allP';
import lengthEq from './lengthEq';
import lengthGte from './lengthGte';
import rejectP from './rejectP';
import resolveP from './resolveP';

/**
 * Returns a promise that is fulfilled by the last given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func lastP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.23.0|v2.23.0}
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A promise that is fulfilled by the last given promise to be fulfilled, or rejected with an array of rejection reasons if all of the given promises are rejected.
 * @see {@link RA.anyP|anyP}
 * @example
 *
 * const delayP = timeout => new Promise(resolve => setTimeout(() => resolve(timeout), timeout));
 * delayP.reject = timeout => new Promise((resolve, reject) => setTimeout(() => reject(timeout), timeout));
 * RA.lastP([
 *   1,
 *   delayP(10),
 *   delayP(100),
 *   delayP.reject(1000),
 * ]); //=> Promise(100)
 */
const lastP = curryN(1, (iterable) => {
  const fulfilled = [];
  const rejected = [];
  const onFulfill = bind(fulfilled.push, fulfilled);
  const onReject = bind(rejected.push, rejected);

  const listOfPromises = map(
    (p) => resolveP(p).then(onFulfill).catch(onReject),
    [...iterable]
  );

  return allP(listOfPromises).then(() => {
    if (lengthEq(0, fulfilled) && lengthEq(0, rejected)) {
      return undefined;
    }
    if (lengthGte(1, fulfilled)) {
      return last(fulfilled);
    }
    return rejectP(rejected);
  });
});

export default lastP;
