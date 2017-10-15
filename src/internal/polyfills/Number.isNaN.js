import { both } from 'ramda';

import isNumber from '../../isNumber';

// eslint-disable-next-line no-restricted-globals
const isNaNPolyfill = both(isNumber, isNaN);

export default isNaNPolyfill;
