import { useWith, curry, compose } from 'ramda';

import list from './list';
import isTruthy from './isTruthy';

/**
 * Takes a combining predicate–predicate that combines a list of Boolean values (such as `any` or
 * `all`)–and a list of predicates and returns a function which will map the arguments it receives
 * to the list of predicates and returns the result of passing the boolean values returned from each
 * predicate to the combining predicate.
 *
 * The function returned is curried to the number of
 * predicates supplied, and if called with more arguments than predicates, any remaining arguments
 * are passed in to the combining predicate untouched.
 *
 * @func compact
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Logic
 * @sig ([*] -> Boolean) -> [(* -> Boolean), …] -> (*…) -> Boolean
 * @param {Function} combiningPredicate The predicate used to combine the Boolean values returned
 * from the other predicates
 * @param {Array} predicates List of predicates
 * @return {Boolean} Returns the result of the combined result of mapping arguments to predicates
 * @example
 *
 * RA.argsPass(R.all, RA.isArray, RA.isBoolean, RA.isString)([], false, 'abc') //=> true
 * RA.argsPass(R.all, RA.isArray, RA.isBoolean, RA.isString)([], false, 1) //=> false
 */
export default curry((combiningPredicate, predicates) =>
  useWith(compose(combiningPredicate(isTruthy), list), predicates)
);
