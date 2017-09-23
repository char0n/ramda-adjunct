import { curry, mergeAll, props } from 'ramda';

/**
 * Functional equivalent of merging object properties with object spread.
 *
 * @func
 * @memberOf RA
 * @since {@link 1.16.0}
 * @category Object
 * @sig [k] -> {k: {a}} -> {a}
 * @param {!Array} ps The property names to fetch
 * @param {!Object} obj The object to query
 * @return {!Object} A merged properties of object
 * @see {@link http://ramdajs.com/docs/#mergeAll|mergeAll} {@link http://ramdajs.com/docs/#props|props}
 * @example
 *
 * const obj = {
 *   foo: { fooinner: 1 },
 *   bar: { barinner: 2 }
 * };
 * // this statements are equal
 * const expected   = { fooinner: 1, barinner: 2 };
 * const withSpread = { ...obj.foo, ...obj.bar }
 * const withFunc   = R.mergeProps(['foo', 'bar'], obj)
 */
const mergeProps = curry((ps, object) => mergeAll(props(ps, object)));

export default mergeProps;
