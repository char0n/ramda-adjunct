import { or } from 'ramda';


const MAX_SAFE_INTEGER = or(Number.MAX_SAFE_INTEGER, (2 ** 53) - 1);

export default MAX_SAFE_INTEGER;
