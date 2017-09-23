import { curry, mergeAll, props } from 'ramda';

/**
 * Functional equivalent of merging object properties with object spread operator.
 *
 * @func mergeProps
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.17.0|v1.17.0}
 * @category Object
 * @sig [k] -> {k: {a}} -> {a}
 * @see {@link RA.mergePaths|mergePaths}
 * @param {!Array} ps The property names to merge
 * @param {!Object} obj The object to query
 * @return {!Object} The object composed of merged properties of obj
 * @example
 *
 * const obj = {
 *   foo: { fooInner: 1 },
 *   bar: { barInner: 2 }
 * };
 *
 * const withSpread = { ...obj.foo, ...obj.bar }; //=> { fooInner: 1, barInner: 2 }
 * const withFunc = R.mergeProps(['foo', 'bar'], obj); //=> { fooInner: 1, barInner: 2 }
 */
const mergeProps = curry((ps, object) => mergeAll(props(ps, object)));

export default mergeProps;
