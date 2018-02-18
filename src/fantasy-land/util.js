import {
  useWith,
  curry,
  curryN,
  toPairs,
  equals,
  over,
  lensIndex,
  replace,
  pipe,
  map,
  path,
  either,
  complement,
} from 'ramda';

// type :: Monad a => a -> String
export const type = either(path(['@@type']), path(['constructor', '@@type']));

// typeEquals :: Monad a => String -> a -> Boolean
export const typeEquals = curry(
  (typeIdent, monad) => type(monad) === typeIdent
);

// isSameType :: (Monad a, Monad b) => a -> b -> Boolean
export const isSameType = curryN(2, useWith(equals, [type, type]));

// isNotSameType :: (Monad a, Monad b) => a -> b -> Boolean
export const isNotSameType = complement(isSameType);

// aliases :: Prototype -> NewPrototypePairs
//     Prototype = Object
//     NewPrototypePairs = Array
export const aliases = pipe(
  toPairs,
  map(over(lensIndex(0), replace('fantasy-land/', '')))
);
