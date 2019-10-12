import * as RA from 'ramda-adjunct';

RA.isSafeInteger(3); // $ExpectType boolean
RA.isSafeInteger(Math.pow(2, 53)); // $ExpectType boolean
RA.isSafeInteger(Math.pow(2, 53) - 1); // $ExpectType boolean
RA.isSafeInteger(NaN); // $ExpectType boolean
RA.isSafeInteger(Infinity); // $ExpectType boolean
RA.isSafeInteger('3'); // $ExpectType boolean
RA.isSafeInteger(3.1); // $ExpectType boolean
RA.isSafeInteger(3.0); // $ExpectType boolean
