import * as RA from 'ramda-adjunct';

RA.toInteger32(1); // $ExpectType number
RA.toInteger32(Infinity); // $ExpectType number
RA.toInteger32(-Infinity); // $ExpectType number
RA.toInteger32(+Infinity); // $ExpectType number
RA.toInteger32(NaN); // $ExpectType number
RA.toInteger32({}); // $ExpectError
RA.toInteger32('s'); // $ExpectError
RA.toInteger32([]); // $ExpectError

RA.toInt32(1); // $ExpectType number
RA.toInt32('s'); // $ExpectError
