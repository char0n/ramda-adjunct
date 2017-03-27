import { or } from 'ramda';

export default or(Number.MAX_SAFE_INTEGER, (2 ** 53) - 1);
