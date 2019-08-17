import { or, complement } from 'ramda';

/**
 * Returns true if both arguments are falsy; false otherwise.
 *
 * @func nor
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean} true if both arguments are falsy
 * @example
 *
 * RA.nor(true, true); //=> false
 * RA.nor(false, true); //=> false
 * RA.nor(true, false); //=> false
 * RA.nor(false, false); //=> true
 * RA.nor(1.0, 1.0); //=> false
 * RA.nor(1.0, 0); //=> false
 * RA.nor(0, 1.0); //=> false
 * RA.nor(0, 0); //=> true
 */
const nor = complement(or); // eslint-disable-line ramda/complement-simplification

export default nor;
