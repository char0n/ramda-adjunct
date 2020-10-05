import { both, complement, hasIn, either } from 'ramda';

import isObj from '../isObj';
import isSymbol from '../isSymbol';

const hasToString = both(isObj, hasIn('toString'));
const hasValueOf = both(isObj, hasIn('valueOf'));
const isNotSymbol = complement(isSymbol);

const isCoercible = both(isNotSymbol, either(hasToString, hasValueOf));

export default isCoercible;
