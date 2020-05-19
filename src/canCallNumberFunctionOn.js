import { both, complement, hasIn, either, __ } from 'ramda';

import neither from './neither';
import isSymbol from './isSymbol';
import isObj from './isObj';

const canCallNumberFunctionOn = neither(
  isSymbol,
  both(isObj, complement(either(hasIn('toString', __), hasIn('valueOf', __))))
);

export default canCallNumberFunctionOn;
