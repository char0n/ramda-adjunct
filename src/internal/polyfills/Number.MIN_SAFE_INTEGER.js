import { or } from 'ramda';

const MIN_SAFE_INTEGER = or(Number.MIN_SAFE_INTEGER, -(2 ** 53) - 1);

export default MIN_SAFE_INTEGER;
