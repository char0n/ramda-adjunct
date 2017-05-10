import { toPairs, over, lensIndex, replace, pipe, map } from 'ramda';


// aliases :: Prototype -> NewPrototypePairs
//     Prototype = Object
//     NewPrototypePairs = Array
export const aliases = pipe( // eslint-disable-line import/prefer-default-export
  toPairs,
  map(over(lensIndex(0), replace('fantasy-land/', '')))
);
