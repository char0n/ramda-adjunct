import { curryN, map, pipe } from 'ramda';

import allP from './allP';
import rejectP from './rejectP';
import resolveP from './resolveP';

/**
 * Returns a Promise that is resolved with an array of reasons when all of the provided Promises reject, or rejected when any Promise is resolved.
 * This pattern is like allP, but fulfillments and rejections are transposed - rejections become the fulfillment values and vice versa.
 *
 * @func noneP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Function
 * @sig [Promise a] -> Promise [a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A Promise that is resolved with a list of rejection reasons if all Promises are rejected, or a Promise that is rejected with the fulfillment value of the first Promise that resolves.
 * @see {@link RA.allP|allP}
 * @example
 *
 * RA.noneP([Promise.reject('hello'), Promise.reject('world')]); //=> Promise(['hello', 'world'])
 * RA.noneP([]); //=> Promise([])
 * RA.noneP([Promise.reject(), Promise.resolve('hello world')]); //=> Promise('hello world')
 * RA.noneP([Promise.reject(), 'hello world']); //=> Promise('hello world')
 */
const noneP = curryN(
  1,
  pipe(
    map(resolveP),
    map((p) => p.then(rejectP, resolveP)),
    allP
  )
);

export default noneP;
