import { both } from 'ramda';

import isNumber from '../../isNumber';

const isNaNPolyfill = both(isNumber, isNaN);

export default isNaNPolyfill;
