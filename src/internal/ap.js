import { ap as apR, curryN, pathSatisfies, both, either } from 'ramda';

import isFunction from '../isFunction';
import fl from '../fantasy-land/mapping';

const isFunctor = either(
  pathSatisfies(isFunction, ['map']),
  pathSatisfies(isFunction, [fl.map])
);
const isApply = both(
  isFunctor,
  either(pathSatisfies(isFunction, ['ap']), pathSatisfies(isFunction, [fl.ap]))
);

const ap = curryN(2, (applyF, applyX) => {
  // return original ramda `ap` if not Apply spec
  if (!isApply(applyF) || !isApply(applyX)) {
    return apR(applyF, applyX);
  }

  try {
    // new version of `ap` starting from ramda version > 0.23.0
    return applyF.ap(applyX);
  } catch (e) {
    // old version of `ap` till ramda version <= 0.23.0
    return applyX.ap(applyF);
  }
});

export default ap;
