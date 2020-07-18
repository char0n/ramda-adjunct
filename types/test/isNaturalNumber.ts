import * as RA from 'ramda-adjunct';

RA.isNaturalNumber(5); // $ExpectType boolean
RA.isNaturalNumber(Number.MAX_VALUE); // $ExpectType boolean
RA.isNaturalNumber(0); // $ExpectType boolean
RA.isNaturalNumber(-1); // $ExpectType boolean
RA.isNaturalNumber(0.9); // $ExpectType boolean
RA.isNaturalNumber(+0); // $ExpectType boolean
RA.isNaturalNumber(null); // $ExpectType boolean
RA.isNaturalNumber(true); // $ExpectType boolean
RA.isNaturalNumber(NaN); // $ExpectType boolean
RA.isNaturalNumber({}); // $ExpectType boolean
RA.isNaturalNumber([]); // $ExpectType boolean
RA.isNaturalNumber(() => {}); // $ExpectType boolean
RA.isNaturalNumber('string'); // $ExpectType boolean
RA.isNaturalNumber(1); // $ExpectType boolean
RA.isNaturalNumber(Object()); // $ExpectType boolean
RA.isNaturalNumber(Object(5)); // $ExpectType boolean
RA.isNaturalNumber(new Map()); // $ExpectType boolean
RA.isNaturalNumber(new Set()); // $ExpectType boolean
