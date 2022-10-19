import * as RA from 'ramda-adjunct';

RA.isSafeInteger(3); // $ExpectType boolean
RA.isSafeInteger(2 ** 53); // $ExpectType boolean
RA.isSafeInteger(2 ** 53 - 1); // $ExpectType boolean
RA.isSafeInteger(NaN); // $ExpectType boolean
RA.isSafeInteger(Infinity); // $ExpectType boolean
RA.isSafeInteger('3'); // $ExpectType boolean
RA.isSafeInteger(3.1); // $ExpectType boolean
RA.isSafeInteger(3.0); // $ExpectType boolean
RA.isSafeInteger('string'); // $ExpectType boolean
RA.isSafeInteger(null); // $ExpectType boolean
RA.isSafeInteger(undefined); // $ExpectType boolean
RA.isSafeInteger({}); // $ExpectType boolean
RA.isSafeInteger(() => {}); // $ExpectType boolean
RA.isSafeInteger(true); // $ExpectType boolean
