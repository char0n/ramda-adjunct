import { curryN } from 'ramda';

/**
 * Y-combinator
 *
 * The Y combinator is an interesting function which only works with functional languages,
 * showing how recursion can still be done even without any variable or function declarations,
 * only functions and parameters
 *
 * @func Y
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig (a, ... -> b -> b) -> (a, ... -> b)
 * @param {Function} le Recursive function maker
 * @return {Function}
 * @see {@link http://kestas.kuliukas.com/YCombinatorExplained/|Y combinator explained}
 * @example
 *
 * const makeFact = givenFact => (n) => {
 *   if (n < 2) { return 1 }
 *   return n * givenFact(n - 1);
 * };
 *
 * const factorial = RA.Y(makeFact);
 *
 * factorial(5); //=> 120
 */

const Y = curryN(1, (le) => ((f) => f(f))((g) => le((x) => g(g)(x))));

export default Y;
