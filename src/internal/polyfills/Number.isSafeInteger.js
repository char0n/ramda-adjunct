import { both } from 'ramda';

import isInteger from '../../isInteger';
import MAX_SAFE_INTEGER from './Number.MAX_SAFE_INTEGER';

const isSafeIntegerPolyfill = both(
  isInteger,
  value => Math.abs(value) <= MAX_SAFE_INTEGER
);

export default isSafeIntegerPolyfill;
