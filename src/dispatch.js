import {
  sort,
  comparator,
  prop,
  pipe,
  head,
  curryN,
  reduce,
  reduced,
  curry,
  ifElse,
} from 'ramda';

/**
 * Can be used as a way to compose multiple invokers together to form polymorphic functions,
 * or functions that exhibit different behaviors based on their argument(s).
 * Consumes dispatching functions and keep trying to invoke each in turn, until a non-nil value is returned.
 *
 * Accepts a list of dispatching functions and returns a new function.
 * When invoked, this new function is applied to some arguments,
 * each dispatching function is applied to those same arguments until one of the
 * dispatching functions returns a non-nil value.
 *
 * @func dispatch
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Function
 * @sig [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> x1 | x2 | ...
 * @param {!Array} functions A list of functions
 * @return {*|undefined} Returns the first not-nil value, or undefined if either an empty list is provided or none of the dispatching functions returns a non-nil value
 * @see {@link RA.isNotNil}
 * @example
 *
 * // returns first non-nil value
 * const stubNil = () => null;
 * const stubUndefined = () => undefined;
 * const addOne = v => v + 1;
 * const addTwo = v => v + 2;
 *
 * RA.dispatch([stubNil, stubUndefined, addOne, addTwo])(1); //=> 2
 *
 * // acts as a switch
 * const fnSwitch = RA.dispatch([
 *   R.ifElse(RA.isString, s => `${s}-join`, RA.stubUndefined),
 *   R.ifElse(RA.isNumber, n => n + 1, RA.stubUndefined),
 *   R.ifElse(RA.isDate, R.T, RA.stubUndefined),
 * ]);
 * fnSwitch(1); //=> 2
 */
import isNotNil from './isNotNil';
import isNonEmptyArray from './isNonEmptyArray';
import stubUndefined from './stubUndefined';

const byArity = comparator((a, b) => a.length > b.length);

const getMaxArity = pipe(
  sort(byArity),
  head,
  prop('length')
);

const iteratorFn = curry((args, accumulator, fn) => {
  const result = fn(...args);

  return isNotNil(result) ? reduced(result) : accumulator;
});

const dispatch = functions => {
  const arity = getMaxArity(functions);

  return curryN(arity, (...args) =>
    reduce(iteratorFn(args), undefined, functions)
  );
};

export default ifElse(isNonEmptyArray, dispatch, stubUndefined);
