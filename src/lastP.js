import { bind, curryN, ifElse, last, map, pipe } from 'ramda';

import allP from './allP';
import rejectP from './rejectP';
import resolveP from './resolveP';
import isEmptyArray from './isEmptyArray';

/**
 * Returns a promise that is fulfilled by the last given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func lastP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} Returns a promise that is fulfilled by the last given promise to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}
 * @example
 *
 * RA.lastP([
 *   1,
 *   Promise.resolve('2-slow-promise-result'),
 *   Promise.reject('3-very-slow-promise-result'),
 *   Promise.resolve('4-fast-promise-result'),
 * ]); //=> Promise('2-slow-promise-result')
 */
const lastP = curryN(1, iterable => {
  const resolved = [];
  const rejected = [];

  const onResolve = bind(resolved.push, resolved);
  const onReject = bind(rejected.push, rejected);
  const toResolvedAndRejected = p =>
    resolveP(p)
      .then(onResolve)
      .catch(onReject);

  return ifElse(
    isEmptyArray,
    () => resolveP(),
    pipe(
      map(toResolvedAndRejected),
      allP,
      p =>
        p.then(() =>
          ifElse(isEmptyArray, () => rejectP(rejected), last)(resolved)
        )
    )
  )(iterable);
});

export default lastP;
