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
  F as stubFalse,
} from 'ramda';

import isTruthy from './isTruthy';
import isEmptyArray from './isEmptyArray';

const dispatch = functions => {
  if (isEmptyArray(functions)) {
    return undefined;
  }

  const byArity = descend(prop('length'));
  const arity = pipe(
    sort(byArity),
    head,
    defaultTo({ length: 1 }),
    prop('length')
  )(functions);

  return curryN(arity, (...args) =>
    reduce(
      (accumulator, fn) => {
        const result = tryCatch(fn, stubFalse)(...args);

        return isTruthy(result) ? reduced(result) : accumulator.concat(result);
      },
      [],
      functions
    )
  );
};

export default dispatch;
