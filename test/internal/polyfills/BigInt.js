import BigInt from 'big-integer';

const BigIntPolyfill = (val) => BigInt(val).value;

export default BigIntPolyfill;
