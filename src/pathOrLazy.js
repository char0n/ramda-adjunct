import { curryN, isNil, nAry, pathOr, when } from 'ramda';

/**
 * If the given, non-null object has a value at the given path, returns the value at that path.
 * Otherwise returns the result of invoking the provided function.
 *
 * @func pathOrLazy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Object
 * @typedefn Idx = String | Int
 * @sig (() -> a) -> [Idx] -> {a} -> a
 * @param {Function} fd The function that will return the default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 * RA.pathOrLazy(() => 'N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"\
 */
const pathOrLazy = curryN(3, function pathOrLazy(fd, p, obj) {
  return when(isNil, nAry(0, fd), pathOr(null, p, obj));
});

export default pathOrLazy;
