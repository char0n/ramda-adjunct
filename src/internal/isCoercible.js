import { both, hasIn } from 'ramda';

import isObj from '../isObj.js';
import isSymbol from '../isSymbol.js';
import neither from '../neither.js';

const isCoercible = neither(
  isSymbol,
  both(isObj, neither(hasIn('toString'), hasIn('valueOf')))
);

export default isCoercible;
