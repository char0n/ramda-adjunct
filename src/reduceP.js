import { curryN, reduce, length } from 'ramda';

import isUndefined from './isUndefined';
import resolveP from './resolveP';
import allP from './allP';

/* eslint-disable max-len */
/**
 * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
 * which produces promises (or a mix of promises and values),
 * iterate over all the values in the `Iterable` into an array and
 * reduce the array to a value using the given iterator function.
 *
 * If the iterator function returns a promise, then the result of the promise is awaited,
 * before continuing with next iteration. If any promise in the array is rejected or a promise
 * returned by the iterator function is rejected, the result is rejected as well.
 *
 * If `initialValue` is `undefined` (or a promise that resolves to `undefined`) and
 * the `Iterable` contains only 1 item, the callback will not be called and
 * the `Iterable's` single item is returned. If the `Iterable` is empty, the callback
 * will not be called and `initialValue` is returned (which may be undefined).
 *
 * This function is basically equivalent to {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}.
 *
 * @func reduceP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|v1.13.0}
 * @category List
 * @typedef MaybePromise = Promise.<*> | *
 * @sig ((Promise a, MaybePromise b) -> Promise a) -> MaybePromise a -> MaybePromise [MaybePromise b] -> Promise a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the current element from the list
 * @param {*|Promise.<*>} acc The accumulator value
 * @param {Array.<*>|Promise.<Array<*|Promise.<*>>>} list The list to iterate over
 * @return {Promise} The final, accumulated value
 * @see {@link http://ramdajs.com/docs/#reduce|R.reduce}, {@link RA.reduceRightP|reduceRightP}, {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}
 * @example
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   Promise.resolve(0),
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   [Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceP(
 *   (total, fileName) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   Promise.resolve([Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt'])
 * ); // => Promise(10)
 *
 */
/* esline-enable max-len */
const reduceP = curryN(3, (fn, acc, list) =>
  resolveP(list).then(iterable => {
    const listLength = length(iterable);

    if (listLength === 0) {
      return acc;
    }

    const reducer = reduce((accP, currentValueP) =>
      accP
        .then(previousValue => allP([previousValue, currentValueP]))
        .then(([previousValue, currentValue]) => {
          if (isUndefined(previousValue) && listLength === 1) {
            return currentValue;
          }

          return fn(previousValue, currentValue);
        })
    );

    return reducer(resolveP(acc), iterable);
  })
);

export default reduceP;
