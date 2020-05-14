import * as RA from 'ramda-adjunct';

RA.rangeStep(0, 4, 1); // $ExpectType number[]
RA.rangeStep(0, 0, 1); // $ExpectType number[]
RA.rangeStep(0, -4, 1); // $ExpectType number[]
RA.rangeStep(0, 4, 0.5); // $ExpectType number[]
RA.rangeStep(1000, 4, -1); // $ExpectType number[]
