import { curryN, identical, partial, pathOr, unary, when } from 'ramda';

/**
 * If the given, non-null object has a value at the given path, returns the value at that path.
 * Otherwise returns the result of invoking the provided function with the object.
 *
 * @func pathOrLazy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Object
 * @typedef Idx = String | Int
 * @sig ({a} -> a) -> [Idx] -> {a} -> a
 * @param {Function} defaultFn The function that will return the default value.
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
const pathOrLazy = curryN(3, (defaultFn, path, obj) =>
  when(
    identical(defaultFn),
    partial(unary(defaultFn), [obj]),
    pathOr(defaultFn, path, obj)
  )
);

export default pathOrLazy;
