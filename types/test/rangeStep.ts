import * as RA from 'ramda-adjunct';

RA.rangeStep(1, 0, 4); // $ExpectType number[]
RA.rangeStep(-1, -4, 0); // $ExpectType number[]
RA.rangeStep(1, 1, 5); // $ExpectType number[]
RA.rangeStep(5, 0, 20); // $ExpectType number[]
RA.rangeStep(-1, 0, -4); // $ExpectType number[]
RA.rangeStep(0, 1, 4); // $ExpectType number[]
RA.rangeStep(1, 0, 0); // $ExpectType number[]

RA.rangeStep(1, 0)(4); // $ExpectType number[]
RA.rangeStep(1)(0, 4); // $ExpectType number[]
RA.rangeStep(1)(0)(4); // $ExpectType number[]
