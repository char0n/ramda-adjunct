import { curryN, pipe, equals, reduceRight, length, concat } from 'ramda';

import isUndefined from './isUndefined';
import resolveP from './resolveP';
import allP from './allP';

// in older ramda versions the order of the arguments is flipped
const flipArgs = pipe(reduceRight(concat, ''), equals('ba'))(['a', 'b']);

/* eslint-disable max-len */
/**
 * Given an `Iterable`(arrays are `Iterable`), or a promise of an `Iterable`,
 * which produces promises (or a mix of promises and values),
 * iterate over all the values in the `Iterable` into an array and
 * reduce the array to a value using the given iterator function.
 *
 * Similar to {@link RA.reduceP|reduceP} except moves through the input list from the right to the left.
 * The iterator function receives two values: (value, acc),
 * while the arguments' order of reduceP's iterator function is (acc, value).
 *
 * @func reduceRightP
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|v1.13.0}
 * @category List
 * @typedef MaybePromise = Promise.<*> | *
 * @sig ((MaybePromise b, Promise a) -> Promise a) -> MaybePromise a -> MaybePromise [MaybePromise b] -> Promise a
 * @param {Function} fn The iterator function. Receives two values, the current element from the list and the accumulator
 * @param {*|Promise.<*>} acc The accumulator value
 * @param {Array.<*>|Promise.<Array<*|Promise.<*>>>} list The list to iterate over
 * @return {Promise} The final, accumulated value
 * @see {@link RA.reduceP|reduceP}, {@link http://bluebirdjs.com/docs/api/promise.reduce.html|bluebird.reduce}
 * @example
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   Promise.resolve(0),
 *   ['file1.txt', 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   [Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt']
 * ); // => Promise(10)
 *
 * RA.reduceRightP(
 *   (fileName, total) => fs
 *     .readFileAsync(fileName, 'utf8')
 *     .then(contents => total + parseInt(contents, 10)),
 *   0,
 *   Promise.resolve([Promise.resolve('file1.txt'), 'file2.txt', 'file3.txt'])
 * ); // => Promise(10)
 *
 */
/* esline-enable max-len */
const reduceRightP = curryN(3, (fn, acc, list) =>
  resolveP(list).then((iterable) => {
    const listLength = length(iterable);

    if (listLength === 0) {
      return acc;
    }

    const reducer = reduceRight((arg1, arg2) => {
      let accP;
      let currentValueP;

      if (flipArgs) {
        [accP, currentValueP] = [arg1, arg2];
      } else {
        [accP, currentValueP] = [arg2, arg1];
      }

      return accP
        .then((previousValue) => allP([previousValue, currentValueP]))
        .then(([previousValue, currentValue]) => {
          if (isUndefined(previousValue) && listLength === 1) {
            return currentValue;
          }

          return fn(currentValue, previousValue);
        });
    });

    return reducer(resolveP(acc), iterable);
  })
);

export default reduceRightP;
