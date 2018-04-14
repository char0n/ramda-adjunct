import { traverse, curry, pipe, prop } from 'ramda';

import Identity from './fantasy-land/Identity';

const lensTraverse = curry((applicativeFn, toFunctorFn, target) =>
  Identity.of(traverse(applicativeFn, pipe(toFunctorFn, prop('value')), target))
);

export default lensTraverse;
