import isIterable from '../../isIterable';
import isUndefined from '../../isUndefined';

const copyArray = (items, mapFn, thisArg) => {
  if (isUndefined(mapFn)) return [...items];
  if (isUndefined(thisArg)) return [...items].map(mapFn);
  return [...items].map(mapFn).bind(thisArg);
};

const fromArray = (items, mapFn = undefined, thisArg = undefined) => {
  if (items == null) {
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
