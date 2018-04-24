import { unapply, reduce, when, isNil } from 'ramda';

/**
 * Loops through a list of predecates until a non-nil value is returned
 *
 * @func whileNil
 * category Function
 * @sig ((a) -> b)... -> (a) -> b
 * @param {(a -> b)...} pred predecates to test
 * @param {*} val The value to test against
 * @return {*}

 * @example
 *
 * RA.whileNil(
 *  R.prop('a'),
 *  R.prop('b'),
 *  R.prop('c'),
 * )({ b: 'foo', c: 'bah' }); //=> 'foo'
 */

const whileNil = unapply(predicates => arg =>
  reduce((result, f) => when(isNil, () => f(arg))(result), null, predicates)
);

export default whileNil;
