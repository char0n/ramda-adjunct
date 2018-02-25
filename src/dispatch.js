import {
  sort,
  descend,
  prop,
  pipe,
  head,
  curryN,
  defaultTo,
  reduce,
  reduced,
  tryCatch,
  curry,
  ifElse,
  F as stubFalse,
} from 'ramda';

import isTruthy from './isTruthy';
import isNonEmptyArray from './isNonEmptyArray';
import stubUndefined from './stubUndefined';

const byArity = descend(prop('length'));

const getMaxArity = pipe(
  sort(byArity),
  head,
  defaultTo({ length: 1 }),
  prop('length'),
  defaultTo(1)
);

const iteratorFn = curry((args, accumulator, fn) => {
  const result = tryCatch(fn, stubFalse)(...args);

  return isTruthy(result) ? reduced(result) : accumulator;
});

const dispatch = functions => {
  const arity = getMaxArity(functions);

  return curryN(arity, (...args) =>
    reduce(iteratorFn(args), undefined, functions)
  );
};

export default ifElse(isNonEmptyArray, dispatch, stubUndefined);
