import { both, complement, either, hasIn } from 'ramda';

import { isObj, isSymbol, neither } from '..';

const isCoercible = neither(
  isSymbol,
  both(isObj, complement(either(hasIn('toString'), hasIn('valueOf'))))
);

export default isCoercible;
