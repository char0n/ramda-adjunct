import { both } from 'ramda';

import isNumber from '../../isNumber.js';

const isNaNPonyfill = both(isNumber, isNaN);

export default isNaNPonyfill;
