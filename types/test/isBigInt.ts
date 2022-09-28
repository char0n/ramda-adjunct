import * as RA from 'ramda-adjunct';

RA.isBigInt(3); // $ExpectType boolean
RA.isBigInt(2 ** 53); // $ExpectType boolean
RA.isBigInt(2 ** 53 - 1); // $ExpectType boolean
RA.isBigInt(NaN); // $ExpectType boolean
RA.isBigInt(Infinity); // $ExpectType boolean
RA.isBigInt('3'); // $ExpectType boolean
RA.isBigInt(3.1); // $ExpectType boolean
RA.isBigInt(3.0); // $ExpectType boolean
RA.isBigInt('string'); // $ExpectType boolean
RA.isBigInt(null); // $ExpectType boolean
RA.isBigInt(undefined); // $ExpectType boolean
RA.isBigInt({}); // $ExpectType boolean
RA.isBigInt(() => {}); // $ExpectType boolean
RA.isBigInt(true); // $ExpectType boolean
