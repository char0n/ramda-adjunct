import * as RA from 'ramda-adjunct';

RA.isSentinelValue(-1); // $ExpectType boolean
RA.isSentinelValue(null); // $ExpectType boolean
RA.isSentinelValue(true); // $ExpectType boolean
RA.isSentinelValue(NaN); // $ExpectType boolean
RA.isSentinelValue({}); // $ExpectType boolean
RA.isSentinelValue([]); // $ExpectType boolean
RA.isSentinelValue(() => {}); // $ExpectType boolean
RA.isSentinelValue('-1'); // $ExpectType boolean
RA.isSentinelValue(0.1); // $ExpectType boolean
RA.isSentinelValue(Object(-1)); // $ExpectType boolean
RA.isSentinelValue(Number(-1)); // $ExpectType boolean
RA.isSentinelValue(Infinity); // $ExpectType boolean
RA.isSentinelValue(Number.MAX_VALUE); // $ExpectType boolean
