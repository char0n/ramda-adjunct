import { complement, compose, allPass } from 'ramda';

/**
 * Takes a list of predicates and returns a predicate that returns true for a given list of
 * arguments if one or more of the provided predicates is not satisfied by those arguments. It is
 * the complement of Ramda's allPass.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func notAllPass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see {@link http://ramdajs.com/docs/#allPass|R.allPass}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.notAllPass([gt10, even]);
 *
 * f(12); //=> false
 * f(8); //=> true
 * f(11); //=> true
 * f(9); //=> true
 */
const notAllPass = compose(
  complement,
  allPass
);

export default notAllPass;
