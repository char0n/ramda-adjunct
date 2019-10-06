import { bind } from 'ramda';

import isIterable from '../../isIterable';
import isNotUndefined from '../../isNotUndefined';
import isNotNil from '../../isNotNil';
import isNotFunction from '../../isNotFunction';

const copyArray = (items, mapFn, thisArg) => {
  const boundMapFn = isNotUndefined(thisArg) ? bind(mapFn, thisArg) : mapFn;

  return isNotUndefined(mapFn) ? [...items].map(boundMapFn) : [...items];
};

const fromArray = (items, mapFn = undefined, thisArg = undefined) => {
  if (items == null) {
    throw new TypeError(
      'Array.from: when provided, the second argument must be a function'
    );
  }

  if (isNotNil(mapFn) && isNotFunction(mapFn)) {
    throw new TypeError(
      'Array.from: when provided, the second argument must be a function'
    );
  }

  if (isIterable(items)) {
    return copyArray(items, mapFn, thisArg);
  }

  return [];
};

export default fromArray;
