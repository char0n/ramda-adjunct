import { and, complement } from 'ramda';

/**
 * Returns `true` if both arguments are falsy, otherwise `false`.
 *
 * @func nand
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.19.0|v2.19.0}
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {Boolean} a
 * @param {Boolean} b
 * @return {Boolean} True if both arguments are false.
 * @example
 *
 * RA.nand(True, True); //=> False
 * RA.nand(False, True); //=> True
 * RA.nand(True, False); //=> True
 * RA.nand(False, False); //=> True
 * RA.nand(1.0, 1.0); //=> False
 * RA.nand(1.0, 0); //=> True
 * RA.nand(0, 1.0); //=> True
 * RA.nand(0, 0); //=> True
 */

const nand = complement(and);

export default nand;
