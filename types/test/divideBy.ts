import * as RA from 'ramda-adjunct';

RA.divideBy(2, 1); // $ExpectType number
RA.divideBy(2.0, 1.0); // $ExpectType number
RA.divideBy(0, 2.0); // $ExpectType number
RA.divideBy(0.0, 2.0); // $ExpectType number
RA.divideBy(-0.0, 2.0); // $ExpectType number

RA.divideBy(2)(1); // $ExpectType number
RA.divideBy(2.0)(1.0); // $ExpectType number
RA.divideBy(0)(2.0); // $ExpectType number
RA.divideBy(0.0)(2.0); // $ExpectType number
RA.divideBy(-0.0)(2.0); // $ExpectType number
