import * as RA from 'ramda-adjunct';

RA.xnor(0, 0); // $ExpectType Boolean
RA.xnor(1, 0); // $ExpectType Boolean
RA.xnor(1, 1); // $ExpectType Boolean
RA.xnor(0, 1); // $ExpectType Boolean
RA.xnor(false, false); // $ExpectType Boolean
RA.xnor(true, false); // $ExpectType Boolean
RA.xnor(true, true); // $ExpectType Boolean
RA.xnor(false, true); // $ExpectType Boolean

RA.xnor(true)(true); // $ExpectType Boolean
RA.xnor(false)(false); // $ExpectType Boolean
RA.xnor(false)(true); // $ExpectType Boolean
RA.xnor(true)(false); // $ExpectType Boolean

RA.xnor()(); // $ExpectError
RA.xnor(); // $ExpectError
