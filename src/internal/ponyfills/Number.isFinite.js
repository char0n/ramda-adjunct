import { both } from 'ramda';

import isNumber from '../../isNumber';

// eslint-disable-next-line no-restricted-globals
const isFinitePonyfill = both(isNumber, isFinite);

export default isFinitePonyfill;
