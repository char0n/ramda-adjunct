import { merge, flip } from 'ramda';

/**
 * Create a new object with the own properties of the second object merged with
 * the own properties of the first object. If a key exists in both objects,
 * the value from the first object will be used.
 *
 * @func mergeRight
 * @alias resetToDefault
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.6.0|v1.6.0}
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l Source
 * @param {Object} r Destination
 * @return {Object}
 * @see {@link http://ramdajs.com/docs/#merge|merge}
 * @example
 *
 * RA.mergeRight({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 * //=> { 'name': 'fred', 'age': 40 }
 */
const mergeRight = flip(merge);

export default mergeRight;
