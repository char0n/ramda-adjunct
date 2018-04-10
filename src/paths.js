import { curry, ap, path, __ } from 'ramda';

/**
 * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
 *
 * @func paths
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category List
 * @sig  [[k]] -> {k: v} - [v]
 * @param {Array} ps The property paths to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields|Ramda Cookbook}, {@link http://ramdajs.com/docs/#props|R.props}
 * @example
 *
 * const obj = {
 *   a: { b: { c: 1 } },
 *   x: 2,
 * };
 *
 * RA.paths([['a', 'b', 'c'], ['x']], obj); //=> [1, 2]
 */
const paths = curry((ps, obj) => ap([path(__, obj)], ps));

export default paths;
