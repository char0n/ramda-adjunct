import { both } from 'ramda';

import isNumber from '../../isNumber';

// eslint-disable-next-line no-restricted-globals
const isFinitePolyfill = both(isNumber, isFinite);

export default isFinitePolyfill;
