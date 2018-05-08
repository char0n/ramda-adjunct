import { pathEq, complement } from 'ramda';

/* eslint-disable max-len */
/**
 * Determines whether a nested path on an object doesn't have a specific value,
 * in R.equals terms. Most likely used to filter a list.
 *
 * @func pathNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Relation
 * @sig [Idx] => a => {a} => Boolean
 * @sig Idx = String | Int
 * @param {Array} path The path of the nested property to use
 * @param {a} val The value to compare the nested property with
 * @param {Object} object The object to check the nested property in
 * @return {boolean} Returns Boolean `false` if the value equals the nested object property, `true` otherwise
 * @see {@link http://ramdajs.com/docs/#pathEq|R.pathEq}
 * @example
 *
 * const user1 = { address: { zipCode: 90210 } };
 * const user2 = { address: { zipCode: 55555 } };
 * const user3 = { name: 'Bob' };
 * const users = [ user1, user2, user3 ];
 * const isFamous = R.pathNotEq(['address', 'zipCode'], 90210);
 * R.filter(isFamous, users); //=> [ user2, user3 ]
 */
/* eslint-enable max-len */
const pathNotEq = complement(pathEq);

export default pathNotEq;
