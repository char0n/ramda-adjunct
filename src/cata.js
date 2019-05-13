import { curry } from 'ramda';

import isFunction from './isFunction';

/**
 * The catamorphism is a way of folding a type into a value.
 *
 * **Either**
 *
 * If the either is right then the right function will be executed with
 * the `right` value and the value of the function returned. Otherwise the left function
 * will be called with the `left` value.
 *
 * **Maybe**
 *
 * If the maybe is Some than the right function will be executed with the `some` value and the value of the function
 * returned. Otherwise the left function with be called without an argument.
 *
 * **Result**
 *
 * If the result is Ok than the right function will be executed with the `Ok` value and the value of the function
 * returned. Otherwise the left function will be called with the `Error` value.
 *
 * **Validation**
 *
 * If the validation is Success than the right function will be executed with the `Success` value and the value of the function
 * returned. Otherwise the left function will be called with the `Failure` value.
 *
 * Supported monadic libraries: {@link https://monet.github.io/monet.js/|monet.js}, {@link https://folktale.origamitower.com/|folktale}, {@link https://github.com/ramda/ramda-fantasy|ramda-fantasy}
 *
 * @func cata
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.4.0|v1.4.0}
 * @category Function
 * @sig (a -> b) -> (a -> c) -> Cata a -> b | c
 * @param {Function} leftFn The left function that consumes the left value
 * @param {Function} rightFn The right function that consumes the right value
 * @param {Cata} catamorphicObj Either, Maybe or any other type with catamorphic capabilities (`cata` or `either` method)
 * @return {*}
 * @see {@link https://monet.github.io/monet.js/#cata|cata explained}
 * @example
 *
 * // Either
 * const eitherR = Either.Right(1);
 * const eitherL = Either.Left(2);
 *
 * RA.cata(identity, identity, eitherR); //=> 1
 * RA.cata(identity, identity, eitherL); //=> 2
 *
 * // Maybe
 * const maybeSome = Maybe.Some(1);
 * const maybeNothing = Maybe.Nothing();
 *
 * RA.cata(identity, identity, maybeSome); //=> 1
 * RA.cata(identity, identity, maybeNothing); //=> undefined
 */
const catamorphism = curry((leftFn, rightFn, catamorphicObj) => {
  // folktale support
  if (isFunction(catamorphicObj.matchWith)) {
    return catamorphicObj.matchWith({
      // Result type
      Ok: ({ value }) => rightFn(value),
      Error: ({ value }) => leftFn(value),
      // Maybe type
      Just: ({ value }) => rightFn(value),
      Nothing: () => leftFn(undefined),
      // Validation type
      Success: ({ value }) => rightFn(value),
      Failure: ({ value }) => leftFn(value),
    });
  }

  if (isFunction(catamorphicObj.cata)) {
    return catamorphicObj.cata(leftFn, rightFn);
  }

  if (isFunction(catamorphicObj.getOrElse)) {
    const elseValue = `RA.cata${Math.random()}`;
    const value = catamorphicObj.getOrElse(elseValue);
    return value === elseValue ? leftFn() : rightFn(value);
  }

  return catamorphicObj.either(leftFn, rightFn);
});

export default catamorphism;
