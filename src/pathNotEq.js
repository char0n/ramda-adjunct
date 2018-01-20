import { pathEq, complement } from 'ramda';


/**
 * Determines whether a nested path on an object has not a specific value,
 * in R.equals terms. Most likely used to filter a list.
 *
 * @func pathNotEq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Relation
 * @sig  [k] → a → {a} → Boolean
 * @param {Array} path The property paths to fetch
 * @param {a} val The value to compare to
 * @param {Object} object The object, that presumably contains value under the path
 * @return {Boolean} Comparison result
 * @see {@link http://ramdajs.com/docs/#pathEq|pathEq}
 * @example
 *
 * const user1 = { address: { zipCode: 90210 } };
 * const user2 = { address: { zipCode: 55555 } };
 * const user3 = { name: 'Bob' };
 * const users = [ user1, user2, user3 ];
 * const isFamous = R.pathNotEq(['address', 'zipCode'], 90210);
 * R.filter(isFamous, users); //=> [ user2, user3 ]
 */
const pathNotEq = complement(pathEq);

export default pathNotEq;
