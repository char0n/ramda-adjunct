import { propEq, complement, curryN } from 'ramda';

/**
 * Returns true if the specified object property is not equal,
 * in R.equals terms, to the given value; false otherwise.
 *
 * @func propNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.1.0|v1.1.0}
 * @category Relation
 * @sig  String → a → Object → Boolean
 * @param {String} prop The prop to pick
 * @param {a} value The value to compare to
 * @param {Object} object The object, that presumably contains value under the prop
 * @return {Boolean} Comparison result
 * @see {@link http://ramdajs.com/docs/#propEq|propEq}
 * @example
 *
 * RA.propNotEq('Not you!', 'a', { a: 'foo', b: 'bar' }); //=> true
 */
const propNotEq = curryN(3, complement(propEq));

export default propNotEq;
