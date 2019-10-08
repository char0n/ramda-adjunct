import { map, length, equals } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

import resolveP from './resolveP';

/**
 * Returns a promise that is fulfilled by the first of given promises to be fulfilled,
 * or rejected with an array of rejection reasons if all of the given promises are rejected.
 *
 * @func firstP
 * @memberOf RA
 * @category Function
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @sig [Promise a] -> Promise a
 * @aliases headP
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} Returns a promise that is fulfilled by the first of given promises to be fulfilled,
 * or rejected when all of given promises to be rejected.
 * @see {@link RA.anyP|anyP}
 * @example
 *
 * RA.firstP([
 *   Promise.resolve(1),
 *   2,
 *   Promise.reject(3),
 * ]); //=> Promise(1)
 */
const firstP = iterable => {
  const errors = [];
  const isEqualsIterableLength = equals(length(iterable));

  return new Promise((resolve, reject) => {
    const onReject = e => {
      errors.push(e);

      if (isEqualsIterableLength(length(errors))) {
        reject(errors);
      }
    };

    map(
      p =>
        resolveP(p)
          .then(resolve)
          .catch(onReject),
      iterable
    );
  });
};

const curriedFirstP = curry1(firstP);

export default curriedFirstP;
