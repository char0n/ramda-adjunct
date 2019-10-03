import { flip, subtract } from 'ramda';

/**
 * Subtracts its first argument from its second argument.
 *
 * @func subtractNum
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Math
 * @sig Number -> Number -> Number
 * @param {number} subtrahend the number to subtract
 * @param {number} minuend the number to subtract from
 * @return {number} A number representing the difference of subtracting the subtrahend from the minuend
 * @example
 *
 * RA.subtractNum(3, 5); //=> 2
 */
const subtractNum = flip(subtract);

export default subtractNum;
