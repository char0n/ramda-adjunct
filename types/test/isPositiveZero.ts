import * as RA from 'ramda-adjunct';

RA.isPositiveZero(+0); // $ExpectType boolean
RA.isPositiveZero(-0); // $ExpectType boolean
RA.isPositiveZero(null); // $ExpectType boolean
RA.isPositiveZero(true); // $ExpectType boolean
RA.isPositiveZero(NaN); // $ExpectType boolean
RA.isPositiveZero({}); // $ExpectType boolean
RA.isPositiveZero([]); // $ExpectType boolean
RA.isPositiveZero(() => {}); // $ExpectType boolean
RA.isPositiveZero('string'); // $ExpectType boolean
RA.isPositiveZero(1); // $ExpectType boolean
RA.isPositiveZero(0.1); // $ExpectType boolean
RA.isPositiveZero(Object(0.1)); // $ExpectType boolean
RA.isPositiveZero(NaN); // $ExpectType boolean
RA.isPositiveZero(Infinity); // $ExpectType boolean
RA.isPositiveZero(Number.MAX_VALUE); // $ExpectType boolean
RA.isPositiveZero(Number.MIN_VALUE); // $ExpectType boolean