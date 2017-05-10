import { toPairs, fromPairs, over, lensIndex, replace, pipe, map } from 'ramda';


// aliases :: Prototype -> NewPrototype
//     Prototype = Object
//     newPrototype = Object
export const aliases = pipe( // eslint-disable-line import/prefer-default-export
  toPairs,
  map(over(lensIndex(0), replace('fantasy-land/', ''))),
  fromPairs
);
