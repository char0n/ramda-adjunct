import * as RA from 'ramda-adjunct';

RA.isInteger32(0); // $ExpectType boolean
RA.isInteger32(null); // $ExpectType boolean
RA.isInteger32(true); // $ExpectType boolean
RA.isInteger32(NaN); // $ExpectType boolean
RA.isInteger32({}); // $ExpectType boolean
RA.isInteger32([]); // $ExpectType boolean
RA.isInteger32(() => {}); // $ExpectType boolean
RA.isInteger32('string'); // $ExpectType boolean
RA.isInteger32(1); // $ExpectType boolean
RA.isInteger32(0.1); // $ExpectType boolean
RA.isInteger32(Object(0.1)); // $ExpectType boolean
RA.isInteger32(Infinity); // $ExpectType boolean
RA.isInteger32(Number.MAX_VALUE); // $ExpectType boolean
RA.isInteger32(Number.MIN_VALUE); // $ExpectType boolean
