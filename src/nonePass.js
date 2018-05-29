import { complement, compose, anyPass } from 'ramda';

/**
 * Takes a list of predicates and returns a predicate that returns true for a given list of
 * arguments if none of the provided predicates are satisfied by those arguments. It is the
 * complement of Ramda's anyPass.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func nonePass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see {@link http://ramdajs.com/docs/#anyPass|R.anyPass}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.nonePass([gt10, even]);
 *
 * f(12); //=> false
 * f(8); //=> false
 * f(11); //=> false
 * f(9); //=> true
 */
const nonePass = compose(
  complement,
  anyPass
);

export default nonePass;
