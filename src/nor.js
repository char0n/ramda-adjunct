import { or, complement } from 'ramda';

/**
 * Returns true if both arguments are falsy; false otherwise.
 *
 * @func nor
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.20.0|v2.20.0}
 * @category Logic
 * @sig a -> b -> a ⊽ b
 * @param {*} a
 * @param {*} b
 * @return {boolean} true if both arguments are falsy
 * @see {@link RA.neither|neither}
 * @example
 *
 * RA.nor(true, true); //=> false
 * RA.nor(false, true); //=> false
 * RA.nor(true, false); //=> false
 * RA.nor(false, false); //=> true
 * RA.nor(1, 1); //=> false
 * RA.nor(1, 0); //=> false
 * RA.nor(0, 1); //=> false
 * RA.nor(0, 0); //=> true
 */
const nor = complement(or); // eslint-disable-line ramda/complement-simplification

export default nor;
