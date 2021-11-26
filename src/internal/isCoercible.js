import { both, complement, either, hasIn, __ } from 'ramda';

import { isObj, isSymbol, neither } from '..';

const isCoercible = neither(
  isSymbol,
  both(isObj, complement(either(hasIn('toString', __), hasIn('valueOf', __))))
);

export default isCoercible;
