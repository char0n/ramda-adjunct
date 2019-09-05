import { and, complement } from 'ramda';

/**
 * Returns false if both arguments are truthy; true otherwise.
 *
 * @func nand
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean} false if both arguments are truesy
 * @example
 *
 * RA.nand(true, true); //=> false
 * RA.nand(false, true); //=> true
 * RA.nand(true, false); //=> true
 * RA.nand(false, false); //=> true
 * RA.nand(1.0, 1.0); //=> false
 * RA.nand(1.0, 0); //=> true
 * RA.nand(0, 1.0); //=> true
 * RA.nand(0, 0); //=> true
 */
const nand = complement(and); // eslint-disable-line ramda/complement-simplification

export default nand;
