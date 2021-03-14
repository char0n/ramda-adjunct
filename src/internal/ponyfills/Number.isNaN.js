import { both } from 'ramda';

import isNumber from '../../isNumber';

// eslint-disable-next-line no-restricted-globals
const isNaNPonyfill = both(isNumber, isNaN);

export default isNaNPonyfill;
