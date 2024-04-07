import { bind } from 'ramda';

import isIterable from '../../isIterable.js';
import isNotUndefined from '../../isNotUndefined.js';
import isNotNil from '../../isNotNil.js';
import isNotFunction from '../../isNotFunction.js';

const copyArray = (items, mapFn, thisArg) => {
  const boundMapFn = isNotUndefined(thisArg) ? bind(mapFn, thisArg) : mapFn;

  return isNotUndefined(mapFn) ? [...items].map(boundMapFn) : [...items];
};

const fromArray = (items, mapFn, thisArg) => {
  if (items == null) {
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined'
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
