import * as RA from 'ramda-adjunct';

RA.isUinteger32(0); // $ExpectType boolean
RA.isUinteger32(null); // $ExpectType boolean
RA.isUinteger32(true); // $ExpectType boolean
RA.isUinteger32(NaN); // $ExpectType boolean
RA.isUinteger32({}); // $ExpectType boolean
RA.isUinteger32([]); // $ExpectType boolean
RA.isUinteger32(() => {}); // $ExpectType boolean
RA.isUinteger32('string'); // $ExpectType boolean
RA.isUinteger32(1); // $ExpectType boolean
RA.isUinteger32(0.1); // $ExpectType boolean
RA.isUinteger32(Object(0.1)); // $ExpectType boolean
RA.isUinteger32(Infinity); // $ExpectType boolean
RA.isUinteger32(Number.MAX_VALUE); // $ExpectType boolean
RA.isUinteger32(Number.MIN_VALUE); // $ExpectType boolean
