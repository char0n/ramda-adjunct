import * as RA from 'ramda-adjunct';

RA.toInteger32(1); // $ExpectType number
RA.toInteger32(Infinity); // $ExpectType number
RA.toInteger32(-Infinity); // $ExpectType number
RA.toInteger32(+Infinity); // $ExpectType number
RA.toInteger32(NaN); // $ExpectType number
// @ts-expect-error
RA.toInteger32({});
// @ts-expect-error
RA.toInteger32('s');
// @ts-expect-error
RA.toInteger32([]);

RA.toInt32(1); // $ExpectType number
// @ts-expect-error
RA.toInt32('s');
