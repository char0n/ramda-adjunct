import { invoker, curry } from 'ramda';

import isFunction from './isFunction';


const cata = invoker(2, 'cata');
const either = invoker(2, 'either');

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
 * @param {Function} leftFn The left function that consumes the left value
 * @param {Function} rightFn The right function that consumes the right value
 * @param {Either} either Either monad with catamorphic capabilities (`cata` or `either` method)
 * @return {*}
 * @see {@link https://cwmyers.github.io/monet.js/#cata|cata explained}
 * @example
 *
 * const eitherR = Either.Right(1);
 * const eitherL = Either.Left(2);
 *
 * RA.cata(identity, identity, eitherR); //=> 1
 * RA.cata(identity, identity, eitherL); //=> 2
 */
const catamorphism = curry((leftFn, rightFn, catamorphicObj) => {
  if (isFunction(catamorphicObj.either)) {
    return either(leftFn, rightFn, catamorphicObj);
  }
  return cata(leftFn, rightFn, catamorphicObj);
});

export default catamorphism;
