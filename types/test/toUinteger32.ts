import * as RA from 'ramda-adjunct';

RA.toUinteger32(1); // $ExpectType number
RA.toUinteger32(-1); // $ExpectType number
RA.toUinteger32(Infinity); // $ExpectType number
RA.toUinteger32(+Infinity); // $ExpectType number
RA.toUinteger32(-Infinity); // $ExpectType number
RA.toUinteger32(Number.MAX_VALUE); // $ExpectType number
RA.toUinteger32(Number.MIN_VALUE); // $ExpectType number
RA.toUinteger32(NaN); // $ExpectType number

RA.toUint32(1); // $ExpectType number
RA.toUint32(Infinity); // $ExpectType number
RA.toUint32(+Infinity); // $ExpectType number
RA.toUint32(-Infinity); // $ExpectType number
RA.toUint32(Number.MAX_VALUE); // $ExpectType number
RA.toUint32(Number.MIN_VALUE); // $ExpectType number
RA.toUint32(NaN); // $ExpectType number

// @ts-expect-error
RA.toUinteger32({});
// @ts-expect-error
RA.toUinteger32([]);
// @ts-expect-error
RA.toUinteger32('a');

// @ts-expect-error
RA.toUint32({});
// @ts-expect-error
RA.toUint32([]);
// @ts-expect-error
RA.toUint32('a');
