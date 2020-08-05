import * as RA from 'ramda-adjunct';

RA.isSentinelValue(1); // $ExpectType boolean
RA.isSentinelValue(-1); // $ExpectType boolean
RA.isSentinelValue(null); // $ExpectType boolean
RA.isSentinelValue(undefined); // $ExpectType boolean
RA.isSentinelValue({}); // $ExpectType boolean
RA.isSentinelValue([]); // $ExpectType boolean
RA.isSentinelValue(() => {}); // $ExpectType boolean
RA.isSentinelValue(true); // $ExpectType boolean
RA.isSentinelValue(false); // $ExpectType boolean
RA.isSentinelValue(2); // $ExpectType boolean
RA.isSentinelValue('-1'); // $ExpectType boolean
RA.isSentinelValue('2'); // $ExpectType boolean

RA.isSentinelValue(); // $ExpectError
