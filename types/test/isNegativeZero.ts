import * as RA from 'ramda-adjunct';

RA.isNegativeZero(-0); // $ExpectType boolean
RA.isNegativeZero(+0); // $ExpectType boolean
RA.isNegativeZero(null); // $ExpectType boolean
RA.isNegativeZero(true); // $ExpectType boolean
RA.isNegativeZero(NaN); // $ExpectType boolean
RA.isNegativeZero({}); // $ExpectType boolean
RA.isNegativeZero([]); // $ExpectType boolean
RA.isNegativeZero(() => {}); // $ExpectType boolean
RA.isNegativeZero('string'); // $ExpectType boolean
RA.isNegativeZero(1); // $ExpectType boolean
RA.isNegativeZero(0.1); // $ExpectType boolean
RA.isNegativeZero(Object(0.1)); // $ExpectType boolean
RA.isNegativeZero(NaN); // $ExpectType boolean
RA.isNegativeZero(Infinity); // $ExpectType boolean
RA.isNegativeZero(Number.MAX_VALUE); // $ExpectType boolean
RA.isNegativeZero(Number.MIN_VALUE); // $ExpectType boolean
