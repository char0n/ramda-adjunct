import { xor, complement } from 'ramda';

/**
 * Complement of xor; returns true if both arguments are falsy; false otherwise.
 *
 * @func xnor
 * @category Logic
 * @sig a - > b - > ¬(a ⊻ b)
 * @param {*} a
 * @param {*} b
 * @return {boolean} true if both arguments are falsy or truthy
 * @see {@link R.xor|xor}
 * @example
 *
 * RA.nor(true, true); //=> true
 * RA.nor(false, true); //=> false
 * RA.nor(true, false); //=> false
 * RA.nor(false, false); //=> true
 * RA.nor(1, 1); //=> true
 * RA.nor(1, 0); //=> false
 * RA.nor(0, 1); //=> false
 * RA.nor(0, 0); //=> true
 */
const xnor = complement(xor);

export default xnor;
