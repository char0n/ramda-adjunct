import { both } from 'ramda';

import isNumber from '../../isNumber.js';

const isFinitePonyfill = both(isNumber, isFinite);

export default isFinitePonyfill;
