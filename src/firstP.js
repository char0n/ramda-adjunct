import { map } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import resolveP from './resolveP';

/**
 * Returns a promise that is fulfilled by the first of given promises to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func firstP
 * @memberOf RA
 * @category Function
 * @sig [Promise a] -> Promise a
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} Returns a promise that is fulfilled by the first of given promises to be fulfilled,
 * or rejected by the first of given promises to be rejected.
 * @example
 *
 * RA.firstP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise(1)
 */
const firstP = iterable => {
  const [head, ...rest] = iterable;

  return new Promise((resolve, reject) => {
    resolveP(head)
      .then(resolve)
      .catch(reject);

    map(p => resolveP(p).catch(() => {}), rest);
  });
};

export default curry1(firstP);
