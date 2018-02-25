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

import isNotNil from './isNotNil';
import isNonEmptyArray from './isNonEmptyArray';
import stubUndefined from './stubUndefined';

const byArity = comparator((a, b) => a.length > b.length);

const getMaxArity = pipe(sort(byArity), head, prop('length'));

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
