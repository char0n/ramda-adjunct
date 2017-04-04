import { both } from 'ramda';

import isNumber from '../../isNumber';

const isFinitePolyfill = both(isNumber, isFinite);

export default isFinitePolyfill;
