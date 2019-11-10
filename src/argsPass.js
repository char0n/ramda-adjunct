import { useWith, curry, compose } from 'ramda';

import list from './list';
import isTruthy from './isTruthy';

/**
 * Takes a combining predicate and a list of functions and returns a function which will map the
 * arguments it receives to the list of functions and returns the result of passing the values
 * returned from each function to the combining predicate. A combining predicate is a function that
 * combines a list of Boolean values into a single Boolean value, such as `R.any` or `R.all`. It
 * will test each value using `RA.isTruthy`, meaning the functions don't necessarily have to be
 * predicates.
 *
 * The function returned is curried to the number of functions supplied, and if called with more
 * arguments than functions, any remaining arguments are passed in to the combining predicate
 * untouched.
 *
 * @func argsPass
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category Logic
 * @sig ((* -> Boolean) -> [*] -> Boolean) -> [(* -> Boolean), ...] -> (*...) -> Boolean
 * @param {Function} combiningPredicate The predicate used to combine the values returned from the
 * list of functions
 * @param {Array} functions List of functions
 * @return {boolean} Returns the combined result of mapping arguments to functions
 * @example
 *
 * RA.argsPass(R.all, [RA.isArray, RA.isBoolean, RA.isString])([], false, 'abc') //=> true
 * RA.argsPass(R.all, [RA.isArray, RA.isBoolean, RA.isString])([], false, 1) //=> false
 * RA.argsPass(R.any, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, 'abc') //=> true
 * RA.argsPass(R.any, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, false) //=> false
 * RA.argsPass(R.none, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, false) //=> true
 * RA.argsPass(R.none, [RA.isArray, RA.isBoolean, RA.isString])({}, 1, 'abc') //=> false
 */
const argsPass = curry((combiningPredicate, predicates) =>
  useWith(compose(combiningPredicate(isTruthy), list), predicates)
);

export default argsPass;
