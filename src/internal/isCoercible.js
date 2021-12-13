import { both, hasIn } from 'ramda';

import isObj from '../isObj';
import isSymbol from '../isSymbol';
import neither from '../neither';

const isCoercible = neither(
  isSymbol,
  both(isObj, neither(hasIn('toString'), hasIn('valueOf')))
);

export default isCoercible;
