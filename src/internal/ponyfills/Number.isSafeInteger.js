import { both } from 'ramda';

import isInteger from '../../isInteger.js';
import MAX_SAFE_INTEGER from './Number.MAX_SAFE_INTEGER.js';

const isSafeIntegerPonyfill = both(
  isInteger,
  (value) => Math.abs(value) <= MAX_SAFE_INTEGER
);

export default isSafeIntegerPonyfill;
