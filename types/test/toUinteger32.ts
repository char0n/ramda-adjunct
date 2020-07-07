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

RA.toUinteger32({}); // $ExpectError
RA.toUinteger32([]); // $ExpectError
RA.toUinteger32('a'); // $ExpectError

RA.toUint32({}); // $ExpectError
RA.toUint32([]); // $ExpectError
RA.toUint32('a'); // $ExpectError
