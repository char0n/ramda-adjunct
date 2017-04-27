import { invoker } from 'ramda';

/**
 * The catamorphism for either. If the either is right than the right function will be executed with
 * the right value and the value of the function returned. Otherwise the left function
 * will be called with the left value.
 *
 * @func cata
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.4.0|v1.4.0}
 * @category Function
 * @sig (a -> b) -> (a -> c) -> Either a -> b | c
 * @param {*} val The value to test
 * @return {*}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * const eitherR = Either.Right(1);
 * const eitherL = Either.Left(2);
 *
 * RA.cata(identity, identity, eitherR); //=> 1
 * RA.cata(identity, identity, eitherL); //=> 2
 */
const cata = invoker(2, 'cata');

export default cata;
