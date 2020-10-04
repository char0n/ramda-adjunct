import { any, curry, isEmpty } from 'ramda';

import isObject from './isObj';

/**
 * Takes a specification object and a test object; returns true if any of the test satisfies the spec.
 * Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the test object.
 *
 * @func whereAny
 * @memberOf RA
 * @category Object
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @sig  (v, k) => [k, v] -> { k: v } -> [[k], [v]]
 * @param {Function} spec The specification object
 * @param {Object} obj Object to test
 * @return {boolean} true if any predicates of specification returns true
 * @see {@link https://ramdajs.com/docs/#whereAny|whereAny}, {@link RA.whereAnyWith|whereAnyWith}
 * @example
 *
 * RA.whereAny((spec, obj) => {
 *  a: equals('foo'),
 *  b: complement(equals('bar')),
 *  x: gt(__, 10),
 *  y: lt(__, 20),
 * }, { a: 'foo', b: 42, x: 'bar' });
 */
const whereAny = curry((spec, testObj) => {
  if (!isObject(testObj)) return false;
  if (isEmpty(Object.keys(spec))) return true;

  return any(([key, fn]) => fn(testObj[key]), Object.entries(spec));
});

export default whereAny;
