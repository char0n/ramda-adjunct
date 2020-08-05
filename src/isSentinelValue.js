import { curry } from 'ramda';

// eslint-disable-next-line no-bitwise
const isSentinelValue = curry((val) => ~val === 0);

export default isSentinelValue;
