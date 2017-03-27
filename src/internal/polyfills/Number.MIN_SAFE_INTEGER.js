import { or } from 'ramda';

export default or(Number.MIN_SAFE_INTEGER, -(2 ** 53) - 1);
